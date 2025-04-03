import { Link } from "react-router";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import useCreateJob from "../../components/features/jobs/hooks/useCreateJob";
import JobTitle from "../../components/features/jobs/JobTitle";
import { companyFields, jobFields } from "../../constant/createJobInput";

import FileInputAndPreview from "../../components/CustomInput/FileInputAndPreview";

const CreateJobPage = () => {
  const {
    onSubmit,
    handleSubmit,
    register,
    errors,
    isPending,
    previewImage,
    handleFileChange,
  } = useCreateJob();

  return (
    <section className="flex justify-center items-center mt-20">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-600 mx-6">
        <JobTitle className="text-4xl text-center font-bold mb-4">
          Create Job Listing
        </JobTitle>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <JobTitle className="text-2xl font-bold mb-6 text-center text-gray-500">
            Job Info
          </JobTitle>
          {jobFields?.map(({ label, name, placeholder, type }) => (
            <CustomInput
              label={label}
              name={name}
              placeholder={placeholder}
              type={type}
              key={name}
              register={register}
              error={errors[name]?.message}
            />
          ))}
          <JobTitle className="text-2xl font-bold mb-6 text-center text-gray-500">
            Company Info & Location
          </JobTitle>
          {companyFields?.map(({ label, name, placeholder, type }) => (
            <CustomInput
              label={label}
              name={name}
              placeholder={placeholder}
              type={type}
              key={name}
              register={register}
              error={errors[name]?.message}
            />
          ))}
          <FileInputAndPreview
            handleFileChange={handleFileChange}
            previewImage={previewImage}
          />

          <CustomButton
            disabled={isPending}
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 my-3 rounded focus:outline-none"
          >
            {isPending ? "Loading..." : "Save"}
          </CustomButton>
          <Link
            to="/"
            className="block text-center w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none"
          >
            Cancel
          </Link>
        </form>
      </div>
    </section>
  );
};

export default CreateJobPage;
