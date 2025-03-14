import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import AuthLayout from "../../components/layouts/AuthLayout";
import { registerInputs } from "../../constant/auth";
import { registerSchema } from "../../schemas/authSchema";
import useFormValidate from "../../hooks/useFormValidate";
import { useNavigate } from "react-router";
import { useState } from "react";
import { axiosInstance } from "../../services/axiosInstance";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";
const Register = () => {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const initialState = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormValidate(initialState, registerSchema);

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const payload = {
      username: data.name,
      email: data.email,
      password: data.password,
    };
    setLoading(true);
    try {
      const { data } = await axiosInstance.post(
        "/auth/local/register",
        payload
      );

      setUser({ ...data.user, jwt: data.jwt });
      toast.success("User Register Successfully");
      return navigate("/dashboard");
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title={"Register"}
      text={" Already have an account?"}
      subText={"Login"}
      textLink={"/auth/login"}
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {registerInputs.map(({ name, placeholder, type }) => (
          <CustomInput
            name={name}
            placeholder={placeholder}
            type={type}
            key={name}
            register={register}
            error={errors[name]?.message}
          />
        ))}
        <CustomButton>{loading ? "Loading..." : "Register"}</CustomButton>
      </form>
    </AuthLayout>
  );
};

export default Register;
