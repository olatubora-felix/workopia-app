/* eslint-disable react/prop-types */
const JobTitle = ({
  children,
  className = "text-center text-3xl mb-4 font-bold border border-gray-300 p-3",
}) => {
  return <h2 className={className}>{children}</h2>;
};

export default JobTitle;
