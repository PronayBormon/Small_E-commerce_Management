<?php

namespace App\Http\Controllers\Web\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\StoreUserRequest;
use App\Http\Requests\Backend\UpdateUserRequest;
use App\Models\User;
use App\Services\Backend\UserService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminUsersController extends Controller
{
    public function index(Request $request): Response
    {
        $search = trim((string) $request->query('search', ''));

        $users = User::query()
            ->when($search !== '', function ($query) use ($search) {
                $query->where(function ($query) use ($search) {
                    $query->where('name', 'like', "%{$search}%")
                        ->orWhere('email', 'like', "%{$search}%");
                });
            })
            ->orderByDesc('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('backend/users/index', [
            'users' => $users,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }
    public function create(): Response
    {
        return Inertia::render('backend/users/create');
    }

    public function store(StoreUserRequest $request, UserService $userService): RedirectResponse
    {
        $userService->create($request->validated());

        return redirect()
            ->route('admin.users.index')
            ->with('success', 'User created successfully.');
    }

    public function edit(User $user): Response
    {
        return Inertia::render('backend/users/edit', [
            'user' => $user->only(['id', 'name', 'email', 'role', 'status', 'avatar']),
        ]);
    }

    public function update(UpdateUserRequest $request, User $user, UserService $userService): RedirectResponse
    {
        $userService->update($user, $request->validated());

        return redirect()
            ->route('admin.users.index')
            ->with('success', 'User updated successfully.');
    }
}
