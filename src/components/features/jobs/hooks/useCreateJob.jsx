import { useNavigate } from "react-router";
import { useAuth } from "../../../../hooks/useAuth";
import useFormValidate from "../../../../hooks/useFormValidate";
import { jobSchema } from "../../../../schemas/jobSchema";
import { useMutation } from "@tanstack/react-query";
import { createJobApi } from "../../../../services/jobApi";
import toast from "react-hot-toast";
import { useState } from "react";
import { uploadToCloudinary } from "../../../../services/cloudinary";

const useCreateJob = () => {
  const [image, setImage] = useState([]);
  const [previewImage, setPreviewImage] = useState([]);
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
    tags: "",
    company_website: "",
  };

  // Add Image and Preview

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file)); // Create a temporary preview URL
    }
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
  const onSubmit = async (data) => {
    const result = await uploadToCloudinary(image);
    console.log(result);
    mutate({
      ...data,
      user_id: user?.id,
      company_logo: result,
    });
  };
  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
    isPending,
    handleFileChange,
    image,
    previewImage,
  };
};

export default useCreateJob;
