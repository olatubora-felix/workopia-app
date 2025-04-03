/* eslint-disable react/prop-types */
import JobTitle from "./JobTitle";
import Job from "./Job";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router";
import { JobSkeletonLoader } from "./JobSkeletonLoader";

const JobListings = ({
  title = "Recent Jobs",
  showAllJobButton = true,
  status,
  jobs,
  error,
}) => {
  return (
    <section>
      <div className="container mx-auto p-4 mt-4">
        <JobTitle>{title}</JobTitle>
        {status === "error" && (
          <h4 className="lg:text-4xl text-3xl font-bold text-red-500">
            {error?.message}
          </h4>
        )}
        {status === "pending" && <JobSkeletonLoader />}
        {jobs?.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mb-6">
            {jobs?.map((job) => (
              <Job key={job.id} {...job} />
            ))}
          </div>
        )}
        {showAllJobButton && jobs?.length > 0 && (
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
