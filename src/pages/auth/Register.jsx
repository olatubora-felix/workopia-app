import AuthLayout from "../../components/layouts/AuthLayout";

const Register = () => {
  return (
    <AuthLayout
      title={"Register"}
      text={" Already have an account?"}
      subText={"Login"}
      textLink={"/auth/login"}
    >
      <form>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded focus:outline-none"
          />
        </div>
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
            type="text"
            name="city"
            placeholder="City"
            className="w-full px-4 py-2 border rounded focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="state"
            placeholder="State"
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
        <div className="mb-4">
          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
        >
          Register
        </button>
      </form>
    </AuthLayout>
  );
};

export default Register;
