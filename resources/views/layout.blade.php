<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
  @vite('resources/css/app.css')
  <link rel="stylesheet" href="{{ asset('css/style.css') }}">
  <title>
    {{ $title ?? 'Welcome to workopia | Home Page' }}
  </title>
</head>

<body class="bg-gray-100">
  <x-header />
  @if (request()->is('/'))
    <x-hero />
    <x-top-banner />
  @endif

  <main class="container mx-auto p-4 mt-4">
    {{-- Show alert --}}
    @if (session('success'))
      <x-alert type="success" message="{{ session('success') }}" />
    @endif
    @if (session('error'))
      <x-alert type="error" message="{{ session('error') }}" />
    @endif
    {{ $slot }}
  </main>
  <x-bottom-banner />
  <script src="{{ asset('js/script.js') }}"></script>
</body>

</html>
