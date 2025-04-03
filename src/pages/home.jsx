import useJobs from "../components/features/jobs/hooks/useJobs";
import JobListings from "../components/features/jobs/JobListings";
import Showcase from "../components/Showcase";
import TopBanner from "../components/TopBanner";

const Home = () => {
  const query = useJobs();
  return (
    <>
      <Showcase />
      <TopBanner />
      <JobListings
        status={query?.status}
        jobs={query?.data}
        error={query?.error}
      />
    </>
  );
};

export default Home;
