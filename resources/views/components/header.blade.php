@php
  $routes = [
      [
          'name' => 'Home',
          'path' => '/',
          'icon' => '',
      ],
      [
          'name' => 'All Jobs',
          'path' => 'jobs',
          'icon' => '',
      ],
      [
          'name' => 'Saved Jobss',
          'path' => 'saved-jobs',
          'icon' => '',
      ],
      [
          'name' => 'Login',
          'path' => 'login',
          'icon' => '',
      ],
      [
          'name' => 'Register',
          'path' => 'register',
          'icon' => '',
      ],
      [
          'name' => 'Dashboard',
          'path' => 'dashboard',
          'icon' => 'gauge',
      ],
  ];

@endphp

<!-- Header -->
<header class="bg-blue-900 text-white p-4" x-data="{ open: false }">
  <div class="container mx-auto flex justify-between items-center">
    <h1 class="text-3xl font-semibold">
      <a href="{{ url('/') }}">Workopia</a>
    </h1>
    <nav class="hidden md:flex items-center space-x-4">
      @foreach ($routes as $route)
        <x-nav-link url="{{ $route['path'] }}" :active="request()->is($route['path'])" icon="{{ $route['icon'] }}">
          {{ $route['name'] }}
        </x-nav-link>
      @endforeach
      <x-button-link url="/jobs/create" icon="edit">
        Create Job
      </x-button-link>
    </nav>
    <button id="hamburger" class="text-white md:hidden flex items-center" @click="open = ! open">
      <i class="fa fa-bars text-2xl"></i>
    </button>
  </div>
  <!-- Mobile Menu -->
  <nav id="mobile-menu" x-show="open" @click.away="open = false"
    class=" md:hidden bg-blue-900 text-white mt-5 pb-4 space-y-2">
    @foreach ($routes as $route)
      <x-nav-link url="{{ $route['path'] }}" :active="request()->is($route['path'])" icon="{{ $route['icon'] }}" :mobile="true">
        {{ $route['name'] }}
      </x-nav-link>
    @endforeach
    <x-button-link url="/jobs/create" icon="edit" :block="true">
      Create Job
    </x-button-link>
  </nav>
</header>
