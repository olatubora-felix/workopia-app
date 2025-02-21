/* eslint-disable react/prop-types */

import { Link } from "react-router";

const AuthLayout = ({ children, title, text, subText, textLink }) => {
  return (
    <div className="flex justify-center items-center mt-20 ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-500 mx-6">
        <h2 className="text-4xl text-center font-bold mb-4">{title}</h2>
        {children}
        <p className="mt-4 text-gray-500">
          {text}
          <Link to={textLink} className="text-blue-900 mx-1" href={textLink}>
            {subText}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
