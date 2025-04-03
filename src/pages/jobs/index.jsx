import useJobs from "../../components/features/jobs/hooks/useJobs";
import JobListings from "../../components/features/jobs/JobListings";
import SearchShowcase from "../../components/SearchShowcase";
import TopBanner from "../../components/TopBanner";

const AllJobPage = () => {
  const query = useJobs();
  return (
    <>
      <TopBanner />
      <SearchShowcase className="py-6 bg-blue-900" />
      <JobListings
        title="All Jobs"
        showAllJobButton={false}
        status={query?.status}
        jobs={query?.data}
        error={query?.error}
      />
    </>
  );
};

export default AllJobPage;
