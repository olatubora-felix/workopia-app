/* eslint-disable react/prop-types */
import JobTitle from "./JobTitle";
import Job from "./Job";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import supabase from "../../../libs/suspabase";
const JobListings = ({ title = "Recent Jobs", showAllJobButton = true }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getJobs = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from("jobs").select("*");
        if (error) {
          throw error;
        }
        setData(data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    getJobs();
  }, []);

  console.log(data, loading);
  return (
    <section>
      <div className="container mx-auto p-4 mt-4">
        <JobTitle>{title}</JobTitle>

        {loading && (
          <div className="h-[400px] flex justify-center items-center">
            <h4 className="lg:text-4xl text-3xl font-bold text-blue-500">
              Loading...
            </h4>
          </div>
        )}
        {data?.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mb-6">
            {data?.map((job) => (
              <Job key={job.id} {...job} />
            ))}
          </div>
        )}

        {showAllJobButton && data?.length > 0 && (
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
