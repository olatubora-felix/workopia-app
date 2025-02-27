/* eslint-disable react/prop-types */
const CustomButton = ({ children, type, className, ...res }) => {
  return (
    <button
      type={type || "submit"}
      className={`w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none ${className}`}
      {...res}
    >
      {children}
    </button>
  );
};

export default CustomButton;
