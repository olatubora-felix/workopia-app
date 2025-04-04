import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../hooks/useAuth";
import supabase from "../../../libs/suspabase";
import { Link } from "react-router";
import CustomButton from "../../CustomButton";
import useDeleteJob from "../jobs/hooks/useDeleteJob";

const UserJobs = () => {
  const { user } = useAuth();
  const { isPending, mutate } = useDeleteJob();
  const {
    data: jobs,
    status,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userJobs", user?.id ?? ""],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("user_id", user?.id);

      if (error) {
        throw error;
      }

      return data;
    },
    enabled: !!user?.id, // Prevent fetching if user is not ready
    staleTime: 60 * 1000,
  });

  return (
    <section className="bg-white shadow-md p-4 space-y-5 h-[500px] rounded-md shadow-blue-900">
      <h2 className="text-blue-900 text-2xl font-semibold">My Job Listings</h2>

      {isLoading && <p>Loading...</p>}
      {isError && <p className="text-red-600">Error fetching jobs.</p>}

      {status === "success" && (
        <div className="space-y-4">
          {jobs?.length === 0 ? (
            <p className="text-gray-500 italic">
              No job listings for this user.
            </p>
          ) : (
            jobs.map((job) => (
              <div
                key={job.id}
                className="border p-4 rounded-md shadow-sm bg-gray-50 flex justify-between items-center"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    <img
                      src={job?.company_logo}
                      alt={job?.title}
                      className="size-10"
                    />
                    <h2 className="text-xs font-bold">{job?.company}</h2>
                  </div>

                  <h3 className="font-semibold text-base">{job?.title}</h3>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    className="bg-blue-500 py-1 px-2 rounded-md text-white"
                    to={`/jobs/edit/${job?.id}`}
                  >
                    Edit
                  </Link>
                  <CustomButton
                    className="w-[70px] !py-1 !px-2 bg-red-500"
                    onClick={() => mutate(job?.id)}
                  >
                    {isPending ? "Deleting..." : "Delete"}
                  </CustomButton>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
};

export default UserJobs;
