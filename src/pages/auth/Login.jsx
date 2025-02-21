import AuthLayout from "../../components/layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout
      title={"Login"}
      text={" Don't have an account?"}
      subText={"Register"}
      textLink={"/auth/register"}
    >
      <form>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
        >
          Login
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;
