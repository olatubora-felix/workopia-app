<x-layout>
  <x-slot name="title">Edit Job Listing</x-slot>
  <div class="bg-white mx-auto p-8 rounded-lg shadow-md w-full md:max-w-3xl">
    <h2 class="text-4xl text-center font-bold mb-4">
      Edit Job Listing
    </h2>
    <form method="POST" action="{{ route('jobs.update', $job->id) }}" enctype="multipart/form-data">
      @csrf
      @method('PUT')
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-500">
        Job Info
      </h2>

      <x-inputs.text :value="old('title', $job->title)" label="Job Title" id="title" type="text" name="title"
        placeholder="Software Engineer" />

      <x-inputs.text-area :value="old('description', $job->description)" label="Job Description" cols="30" rows="7" id="description"
        name="description"
        placeholder="We are seeking a skilled and motivated Software Developer to join our growing development team..." />
      <x-inputs.text label="Annual Salary" id="salary" type="number" name="salary" placeholder="90000"
        :value="old('salary', $job->salary)" />
      <x-inputs.text-area label="Requirements" id="requirements" name="requirements"
        placeholder="Bachelor's degree in Computer Science" cols="20" rows="4" :value="old('requirements', $job->requirements)" />
      <x-inputs.text-area label="Benefits" id="benefits" name="benefits"
        placeholder="Health insurance, 401k, paid time off" cols="20" rows="4" :value="old('benefits', $job->benefits)" />
      <x-inputs.text label="Tags (comma-separated)" id="tags" type="text" name="tags"
        placeholder="development,coding,java,python" :value="old('tags', $job->tags)" />
      <x-inputs.select id="job_type" name="job_type" label="Job Type" :value="old('job_type', $job->job_type)" :options="[
          'Full-Time' => 'Full-Time',
          'Part-Time' => 'Part-Time',
          'Contract' => 'Contract',
          'Temporary' => 'Temporary',
          'Internship' => 'Internship',
          'Volunteer' => 'Volunteer',
          'On-Call' => 'On-Call',
      ]" />

      <x-inputs.select id="remote" name="remote" label="Remote" :options="[0 => 'No', 1 => 'Yes']" :value="old('remote', $job->Remote)" />

      <x-inputs.text id="address" name="address" label="Address" placeholder="123 Main St" :value="old('address', $job->address)" />

      <x-inputs.text id="city" name="city" label="City" placeholder="Albany" :value="old('city', $job->city)" />

      <x-inputs.text id="state" name="state" label="State" placeholder="NY" :value="old('state', $job->state)" />

      <x-inputs.text id="zipcode" name="zipcode" label="Zipcode" placeholder="02214" :value="old('zipcode', $job->zipcode)" />

      <h2 class="text-2xl font-bold mb-6 text-center text-gray-500">
        Company Info
      </h2>

      <x-inputs.text id="company_name" name="company_name" label="Company Name" placeholder="Enter Company Name"
        :value="old('company_name', $job->company_name)" />

      <x-inputs.text-area id="company_description" name="company_description" label="Company Description"
        placeholder="Enter Company Description" :value="old('company_description', $job->company_description)" />

      <x-inputs.text id="company_website" name="company_website" label="Company Website" type="url"
        placeholder="Enter Company Website" :value="old('company_website', $job->company_website)" />

      <x-inputs.text id="contact_phone" :value="old('contact_phone', $job->contact_phone)" name="contact_phone" label="Contact Phone"
        placeholder="Enter Contact Phone" />

      <x-inputs.text id="contact_email" name="contact_email" label="Contact Email" placeholder="Enter Contact Email"
        type="email" :value="old('contact_email', $job->contact_email)" />

      <x-inputs.file id="company_logo" name="company_logo" label="Company Logo" />
      <button type="submit"
        class="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 my-3 rounded focus:outline-none">
        Save
      </button>
    </form>
  </div>
</x-layout>
