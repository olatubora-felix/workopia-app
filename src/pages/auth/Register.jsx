import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import AuthLayout from "../../components/layouts/AuthLayout";
import { registerInputs } from "../../constant/auth";
import { registerSchema } from "../../schemas/authSchema";
import useFormValidate from "../../hooks/useFormValidate";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { signUpApi } from "../../services/auth";
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
    reset,
  } = useFormValidate(initialState, registerSchema);

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const payload = {
      fullName: data.name,
      email: data.email,
      password: data.password,
    };
    setLoading(true);
    try {
      const result = await signUpApi(payload);
      console.log(result);
      setUser(result);
      reset();
      navigate("/dashboard");
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
