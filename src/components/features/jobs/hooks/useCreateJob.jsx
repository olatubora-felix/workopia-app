import { useNavigate } from "react-router";
import { useAuth } from "../../../../hooks/useAuth";
import useFormValidate from "../../../../hooks/useFormValidate";
import { jobSchema } from "../../../../schemas/jobSchema";
import { useMutation } from "@tanstack/react-query";
import { createJobApi } from "../../../../services/jobApi";
import toast from "react-hot-toast";

const useCreateJob = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  console.log(user);
  const initialState = {
    title: "",
    description: "",
    salary: "",
    requirements: "",
    benefits: "",
    company: "",
    address: "",
    city: "",
    state: "",
    phone: "",
    email: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormValidate(initialState, jobSchema);

  const { isPending, mutate } = useMutation({
    mutationFn: createJobApi,
    onSuccess: (data) => {
      if (data?.id) {
        toast.success("Job Created Successfully");
        navigate("/");
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const onSubmit = (data) => {
    mutate({
      ...data,
      user_id: user?.id,
    });
  };
  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
    isPending,
  };
};

export default useCreateJob;
