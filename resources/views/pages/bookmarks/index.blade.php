<x-layout>
  <x-slot name="title">Saved Jobs Page</x-slot>
  <!-- Saved Job Listings -->
  <main class="container mx-auto p-4 mt-4">
    <h2 class="text-center text-3xl mb-4 font-bold border border-gray-300 p-3">
      Saved Jobs
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      @forelse ($bookmarks as  $bookmark)
        <x-job-card :job="$bookmark" />
      @empty
        <p>No Avalible job</p>
      @endforelse
    </div>
  </main>
</x-layout>
