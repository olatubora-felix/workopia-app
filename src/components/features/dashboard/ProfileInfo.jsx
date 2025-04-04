import { useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import useFormValidate from "../../../hooks/useFormValidate";
import { profileSchema } from "../../../schemas/authSchema";
import CustomButton from "../../CustomButton";
import CustomInput from "../../CustomInput";
import FileInputAndPreview from "../../CustomInput/FileInputAndPreview";

const ProfileInfo = () => {
  const { user } = useAuth();
  const initialState = {
    email: "",
    name: "",
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useFormValidate(initialState, profileSchema);

  useEffect(() => {
    if (user) {
      setValue("email", user?.email);
      setValue("name", user?.fullName);
    }
  }, [user, setValue]);
  return (
    <section className="bg-white shadow-md p-4 space-y-5 h-[500px] rounded-md shadow-blue-900">
      <h2 className="text-blue-900 text-2xl font-semibold">Profile Info</h2>

      <form className="space-y-4 ">
        <CustomInput
          label={"Full Name"}
          name={"name"}
          placeholder={"Enter Full Name"}
          type={"text"}
          register={register}
          error={errors[name]?.message}
        />
        <CustomInput
          label={"Email"}
          name={"email"}
          placeholder={"Enter Email"}
          type={"text"}
          register={register}
          error={errors[name]?.message}
        />
        <FileInputAndPreview
          handleFileChange={() => {}}
          previewImage={""}
          heading={"Upload Profile Picture"}
        />
        <CustomButton>Update</CustomButton>
      </form>
    </section>
  );
};

export default ProfileInfo;
