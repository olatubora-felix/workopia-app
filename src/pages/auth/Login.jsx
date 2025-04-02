import { useNavigate } from "react-router";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import AuthLayout from "../../components/layouts/AuthLayout";
import { loginInputs } from "../../constant/auth";
import useFormValidate from "../../hooks/useFormValidate";
import { loginSchema } from "../../schemas/authSchema";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { signInApi } from "../../services/auth";

const Login = () => {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const initialState = {
    email: "",
    password: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormValidate(initialState, loginSchema);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await signInApi(data);
      setUser(result);
      toast.success("User Login Successfully");
      return navigate("/dashboard");
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthLayout
      title={"Login"}
      text={" Don't have an account?"}
      subText={"Register"}
      textLink={"/auth/register"}
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {loginInputs.map(({ name, placeholder, type, label }) => (
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
        <CustomButton>{loading ? "Loading..." : "Login"}</CustomButton>
      </form>
    </AuthLayout>
  );
};

export default Login;
