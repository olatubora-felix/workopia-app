import JobListings from "../components/jobs/JobListings";
import Showcase from "../components/Showcase";
import TopBanner from "../components/TopBanner";

const Home = () => {
  return (
    <>
      <Showcase />
      <TopBanner />
      <JobListings />
    </>
  );
};

export default Home;
