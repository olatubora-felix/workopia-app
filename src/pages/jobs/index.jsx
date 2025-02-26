import JobListings from "../../components/jobs/JobListings";
import TopBanner from "../../components/TopBanner";

const AllJobPage = () => {
  return (
    <>
      <TopBanner />
      <JobListings title="All Jobs" showAllJobButton={false} />
    </>
  );
};

export default AllJobPage;
