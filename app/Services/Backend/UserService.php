<?php

namespace App\Services\Backend;

use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use RuntimeException;
use Throwable;

class UserService
{
    /**
     * @param  array{name: string, email: string, password: string, role: string, status: string, image?: UploadedFile|null}  $data
     */
    public function create(array $data): User
    {
        $image = $data['image'] ?? null;
        unset($data['image']);

        $avatarPath = null;

        try {
            return DB::transaction(function () use ($data, $image, &$avatarPath): User {
                if ($image instanceof UploadedFile) {
                    $storedPath = Storage::disk('public')->putFile('users', $image);

                    if ($storedPath === false) {
                        throw new RuntimeException('Unable to store the uploaded user image.');
                    }

                    $avatarPath = "/storage/{$storedPath}";
                }

                return User::create([
                    ...$data,
                    'avatar' => $avatarPath,
                ]);
            });
        } catch (Throwable $exception) {
            if ($avatarPath !== null) {
                Storage::disk('public')->delete(substr($avatarPath, strlen('/storage/')));
            }

            throw $exception;
        }
    }

    /**
     * @param  array{name: string, email: string, password?: string|null, role: string, status: string, image?: UploadedFile|null, remove_image: bool}  $data
     */
    public function update(User $user, array $data): User
    {
        $image = $data['image'] ?? null;
        $removeImage = $data['remove_image'];
        unset($data['image'], $data['remove_image']);

        if (empty($data['password'])) {
            unset($data['password']);
        }

        $oldAvatar = $user->avatar;
        $newAvatar = null;

        try {
            $updatedUser = DB::transaction(function () use ($user, $data, $image, $removeImage, &$newAvatar): User {
                if ($image instanceof UploadedFile) {
                    $storedPath = Storage::disk('public')->putFile('users', $image);

                    if ($storedPath === false) {
                        throw new RuntimeException('Unable to store the uploaded user image.');
                    }

                    $newAvatar = "/storage/{$storedPath}";
                    $data['avatar'] = $newAvatar;
                } elseif ($removeImage) {
                    $data['avatar'] = null;
                }

                $user->update($data);

                return $user->refresh();
            });
        } catch (Throwable $exception) {
            if ($newAvatar !== null) {
                Storage::disk('public')->delete(substr($newAvatar, strlen('/storage/')));
            }

            throw $exception;
        }

        if ($oldAvatar !== null && ($newAvatar !== null || $removeImage)) {
            Storage::disk('public')->delete(
                str_starts_with($oldAvatar, '/storage/')
                    ? substr($oldAvatar, strlen('/storage/'))
                    : $oldAvatar,
            );
        }

        return $updatedUser;
    }

    public function delete(User $user): void
    {
        $avatar = $user->avatar;

        DB::transaction(fn () => $user->delete());

        if ($avatar !== null && str_starts_with($avatar, '/storage/')) {
            $path = substr($avatar, strlen('/storage/'));

            if (! Storage::disk('public')->delete($path)) {
                throw new RuntimeException("Unable to delete the user's avatar.");
            }
        }
    }
}
