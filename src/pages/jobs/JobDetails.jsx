import { useNavigate, useParams } from "react-router";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { jobListings } from "../../constant/jobs";
const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const job = jobListings.find((job) => job?.id === jobId);
  return (
    <>
      <section className="container mx-auto p-4 mt-4">
        <div className="rounded-lg shadow-md bg-white p-3">
          <div className="flex justify-between items-center">
            <button
              className=" p-4 text-blue-700 flex items-center gap-2"
              onClick={() => navigate(-1)}
            >
              <FaArrowAltCircleLeft />
              Back
            </button>
            <div className="flex space-x-4 ml-4">
              <a
                href="/edit"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                Edit
              </a>
              {/* <!-- Delete Form --> */}
              <form method="POST">
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </form>
              {/* <!-- End Delete Form --> */}
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-700 text-lg mt-2">{job.description}</p>
            <ul className="my-4 bg-gray-100 p-4">
              <li className="mb-2">
                <strong>Salary:</strong> ${job.salary}
              </li>
              <li className="mb-2">
                <strong>Location:</strong> {`${job.city} ${job.state}`}
                <span className="text-xs bg-blue-500 text-white rounded-full px-2 py-1 ml-2">
                  Local
                </span>
              </li>
              <li className="mb-2 capitalize">
                <strong>Tags:</strong> <span>{job.tags.join(" , ")}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Job Details</h2>
        <div className="rounded-lg shadow-md bg-white p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-500">
            Job Requirements
          </h3>
          <p>{job.requirements}</p>
          <h3 className="text-lg font-semibold mt-4 mb-2 text-blue-500">
            Benefits
          </h3>
          <p>{job.benefits}</p>
        </div>
        <p className="my-5">
          Put &quot;Job Application&quot; as the subject of your email and
          attach your resume.
        </p>
        <button className="block w-full text-center px-5 py-2.5 shadow-sm rounded border text-base font-medium cursor-pointer text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
          Apply Now
        </button>
      </section>
    </>
  );
};

export default JobDetails;
