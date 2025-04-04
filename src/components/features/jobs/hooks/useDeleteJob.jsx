import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../../../../libs/suspabase";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const useDeleteJob = () => {
  // Access the client
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: async (jobId) => {
      const { error } = await supabase.from("jobs").delete().eq("id", jobId);
      if (error) {
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Job Deleted Successfully");
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return {
    isPending,
    mutate,
  };
};

export default useDeleteJob;
