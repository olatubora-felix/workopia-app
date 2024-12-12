<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\View\View;
use Illuminate\Http\Request;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): View
    {
        $jobs = Job::latest()->limit(6)->get();
        return view('pages.jobs.index', compact('jobs'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('pages.jobs.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'salary' => 'required|integer',
            'tags' => 'nullable|string',
            'job_type' => 'required|string',
            'remote' => 'required|boolean',
            'requirements' => 'nullable|string',
            'benefits' => 'nullable|string',
            'address' => 'nullable|string',
            'city' => 'required|string',
            'state' => 'required|string',
            'zipcode' => 'nullable|string',
            'contact_email' => 'required|string',
            'contact_phone' => 'nullable|string',
            'company_name' => 'required|string',
            'company_description' => 'nullable|string',
            'company_logo' => 'nullable|image|mimes:jpeg,jpg,png,gif|max:2048',
            'company_website' => 'nullable|url'
        ]);

        // Hardcoded user ID
        $validatedData['user_id'] = 10;
        // Submit to database
        Job::create($validatedData);
        return redirect()->route('jobs.index')->with('success', 'Job listings created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Job $job): View
    {

        return view('pages.jobs.show')->with('job', $job);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}