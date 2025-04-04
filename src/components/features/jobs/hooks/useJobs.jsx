import { useQuery } from "@tanstack/react-query";
import supabase from "../../../../libs/suspabase";

const useJobs = (filters) => {
  console.log(filters);
  return useQuery({
    queryKey: ["jobs", filters?.value ?? ""],
    queryFn: async () => {
      let query = supabase.from("jobs").select("*");

      if (filters) {
        query = query.eq(filters?.key, filters?.value).single();
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
    staleTime: 60 * 1000,
  });
};

export default useJobs;
