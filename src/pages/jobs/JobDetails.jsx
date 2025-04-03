import { useNavigate } from "react-router";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Title from "../../components/Title";
import JobDetail from "../../components/features/jobs/JobDetail";
import useJobs from "../../components/features/jobs/hooks/useJobs";
import { useAuth } from "../../hooks/useAuth";

const Skeleton = () => (
  <div className="animate-pulse p-4 bg-gray-200 rounded-lg shadow-md">
    <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
  </div>
);

const JobDetails = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { data, status, error } = useJobs();

  if (status === "pending") {
    return (
      <section className="container mx-auto p-4 mt-4">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </section>
    );
  }

  if (status === "error") {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <section className="container mx-auto p-4 mt-4">
        <div className="rounded-lg shadow-md bg-white p-3">
          <div className="flex justify-between items-center">
            <button
              className="p-4 text-blue-700 flex items-center gap-2"
              onClick={() => navigate(-1)}
            >
              <FaArrowAltCircleLeft /> Back
            </button>
            {user?.id === data?.user_id && (
              <div className="flex space-x-4 ml-4">
                <a
                  href="/edit"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                >
                  Edit
                </a>
                <form method="POST">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </form>
              </div>
            )}
          </div>
          <div className="p-4">
            <Title>{data?.title}</Title>
            <p className="text-gray-700 text-lg mt-2">{data?.description}</p>
            <JobDetail {...data} />
          </div>
        </div>
      </section>

      <section className="container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Job Details</h2>
        <div className="rounded-lg shadow-md bg-white p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-500">
            Job Requirements
          </h3>
          <p>{data?.requirements}</p>
          <h3 className="text-lg font-semibold mt-4 mb-2 text-blue-500">
            Benefits
          </h3>
          <p>{data?.benefits}</p>
        </div>
        <p className="my-5">
          Put &quot;Job Application&quot; as the subject of your email and
          attach your resume.
        </p>
        <button className="block w-full text-center px-5 py-2.5 shadow-sm rounded border text-base font-medium cursor-pointer text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default JobDetails;
