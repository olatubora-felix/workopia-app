import { Link } from "react-router";
import Title from "../../Title";
import JobDetail from "./JobDetail";
import JobTitle from "./JobTitle";

/* eslint-disable react/prop-types */
const Job = (props) => {
  const {
    title,
    description,
    salary,
    city,
    state,
    tags,
    id,
    company_logo,
    company,
  } = props;
  console.log(props);
  return (
    <div className="rounded-lg shadow-md bg-white">
      <div className="px-3">
        {company_logo && (
          <img src={company_logo} alt="" className="size-[50px]" />
        )}
        <JobTitle className="text-xl text-blue-500 capitalize">
          {company}
        </JobTitle>
      </div>
      <div className="p-4">
        <Title>{title}</Title>
        <p className="text-gray-700 text-lg mt-2">
          {description.substring(0, 100)} ...
        </p>
        <JobDetail salary={salary} tags={tags} state={state} city={city} />
        <Link
          to={`/jobs/${id}`}
          className="block w-full text-center px-5 py-2.5 shadow-sm rounded border text-base font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Job;
