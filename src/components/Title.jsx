/* eslint-disable react/prop-types */
const Title = ({ children, className }) => {
  return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>;
};

export default Title;
