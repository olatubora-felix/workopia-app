import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import AuthLayout from "../../components/layouts/AuthLayout";
import { registerInputs } from "../../constant/auth";
import { registerSchema } from "../../schemas/authSchema";
import useFormValidate from "../../hooks/useFormValidate";
import { useNavigate } from "react-router";
const Register = () => {
  const initialState = {
    name: "",
    email: "",
    city: "",
    password: "",
    passwordConfirmation: "",
    state: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormValidate(initialState, registerSchema);

  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (data) return navigate("/dashboard");
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
        <CustomButton>Register</CustomButton>
      </form>
    </AuthLayout>
  );
};

export default Register;
