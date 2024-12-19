<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class DashboardController extends Controller
{
    //Get All User Job Listings
    public function index(): View
    {
        // Get Loggedin User
        $user = Auth::user();

        // Get All job listing using user_id
        $jobs = Job::where("user_id", $user->id)->get();
        return view('pages.dashboard.index', compact('user', 'jobs'));
    }
}
