<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Mockery\Matcher\Any;

class TestUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $user =  User::create([
            'name' => "Test User",
            'email' => 'olamide@gmail.com',
            'email_verified_at' => Carbon::now(),
            'password' => Hash::make('olamide')
        ]);

        return $user;
    }
}