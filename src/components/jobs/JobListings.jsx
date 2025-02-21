import JobTitle from "./JobTitle";
import { jobListings } from "../../constant/jobs";
import Job from "./Job";
import { FaArrowAltCircleRight } from "react-icons/fa";
const JobListings = () => {
  return (
    <section>
      <div className="container mx-auto p-4 mt-4">
        <JobTitle>Recent Jobs</JobTitle>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mb-6">
          {jobListings.map((job) => (
            <Job key={job.id} {...job} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <a
            href="listings.html"
            className="flex items-center gap-1 text-xl text-center"
          >
            <FaArrowAltCircleRight />
            Show All Jobs
          </a>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
