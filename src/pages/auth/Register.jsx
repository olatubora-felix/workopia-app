import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import AuthLayout from "../../components/layouts/AuthLayout";
import { registerInputs } from "../../constant/auth";

const Register = () => {
  return (
    <AuthLayout
      title={"Register"}
      text={" Already have an account?"}
      subText={"Login"}
      textLink={"/auth/login"}
    >
      <form className="space-y-4">
        {registerInputs.map(({ name, placeholder, type }) => (
          <CustomInput
            name={name}
            placeholder={placeholder}
            type={type}
            key={name}
          />
        ))}
        <CustomButton>Register</CustomButton>
      </form>
    </AuthLayout>
  );
};

export default Register;
