<?php

namespace App\Http\Controllers\Web\Backend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('backend/dashboard/index', [
            'title' => 'Dashboard',
        ]);
    }
}
