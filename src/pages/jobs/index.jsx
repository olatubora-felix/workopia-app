import JobListings from "../../components/features/jobs/JobListings";
import SearchShowcase from "../../components/SearchShowcase";
import TopBanner from "../../components/TopBanner";

const AllJobPage = () => {
  return (
    <>
      <TopBanner />
      <SearchShowcase className="py-6 bg-blue-900" />
      <JobListings title="All Jobs" showAllJobButton={false} />
    </>
  );
};

export default AllJobPage;
