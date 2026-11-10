<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class AdminUsersTest extends TestCase
{
    use RefreshDatabase;

    public function test_users_are_paginated(): void
    {
        User::factory()->count(12)->create();

        $this->get(route('admin.users.index'))
            ->assertInertia(fn (Assert $page) => $page
                ->component('backend/users/index')
                ->has('users.data', 10)
                ->where('users.current_page', 1)
                ->where('users.last_page', 2)
                ->where('users.total', 12),
            );

        $this->get(route('admin.users.index', ['page' => 2]))
            ->assertInertia(fn (Assert $page) => $page
                ->has('users.data', 2)
                ->where('users.current_page', 2),
            );
    }

    public function test_users_can_be_searched_by_name_or_email(): void
    {
        User::factory()->create([
            'name' => 'Searchable Person',
            'email' => 'person@example.com',
        ]);
        User::factory()->create([
            'name' => 'Another Person',
            'email' => 'searchable@example.com',
        ]);
        User::factory()->create([
            'name' => 'Unmatched Person',
            'email' => 'unmatched@example.com',
        ]);

        $this->get(route('admin.users.index', ['search' => 'searchable']))
            ->assertInertia(fn (Assert $page) => $page
                ->has('users.data', 2)
                ->where('users.total', 2)
                ->where('filters.search', 'searchable'),
            );
    }
}
