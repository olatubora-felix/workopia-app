import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import AuthLayout from "../../components/layouts/AuthLayout";
import { loginInputs } from "../../constant/auth";

const Login = () => {
  return (
    <AuthLayout
      title={"Login"}
      text={" Don't have an account?"}
      subText={"Register"}
      textLink={"/auth/register"}
    >
      <form className="space-y-4">
        {loginInputs.map(({ name, placeholder, type, label }) => (
          <CustomInput
            label={label}
            name={name}
            placeholder={placeholder}
            type={type}
            key={name}
          />
        ))}
        <CustomButton>Login</CustomButton>
      </form>
    </AuthLayout>
  );
};

export default Login;
