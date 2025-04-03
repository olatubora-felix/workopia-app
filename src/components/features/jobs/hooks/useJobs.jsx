import { useQuery } from "@tanstack/react-query";
import supabase from "../../../../libs/suspabase";
import { useParams } from "react-router";

const useJobs = () => {
  const { jobId } = useParams();
  const query = useQuery({
    queryKey: ["jobs", jobId ?? ""],
    queryFn: async () => {
      if (jobId) {
        const { data, error } = await supabase
          .from("jobs")
          .select("*")
          .eq("id", jobId)
          .single();
        if (error) {
          throw error;
        }
        return data;
      }
      const { data, error } = await supabase.from("jobs").select("*");
      if (error) {
        throw error;
      }
      return data;
    },
    staleTime: 60 * 1000,
  });
  return query;
};

export default useJobs;
