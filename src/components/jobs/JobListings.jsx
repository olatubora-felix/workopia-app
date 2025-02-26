/* eslint-disable react/prop-types */
import JobTitle from "./JobTitle";
import { jobListings } from "../../constant/jobs";
import Job from "./Job";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router";
const JobListings = ({ title = "Recent Jobs", showAllJobButton = true }) => {
  return (
    <section>
      <div className="container mx-auto p-4 mt-4">
        <JobTitle>{title}</JobTitle>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mb-6">
          {jobListings.map((job) => (
            <Job key={job.id} {...job} />
          ))}
        </div>
        {showAllJobButton && (
          <div className="flex justify-center items-center">
            <Link
              to="/jobs"
              className="flex items-center gap-1 text-xl text-center"
            >
              <FaArrowAltCircleRight />
              Show All Jobs
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
