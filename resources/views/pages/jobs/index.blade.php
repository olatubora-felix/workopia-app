<x-layout>
  <x-slot name="title">Job Listings Home Page</x-slot>
  <h2>All Jobs</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    @forelse ($jobs as $job)
      <x-job-card :job="$job" />
    @empty
      <p>No Avalible job</p>
    @endforelse
  </div>
  {{ $jobs->links() }}
</x-layout>
