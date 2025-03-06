/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const CustomInput = ({
  type,
  name,
  placeholder,
  className,
  label,
  register = () => {},
  error,
}) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    return setShow((currentState) => !currentState);
  };
  return (
    <div className=" space-y-2">
      {label && <label htmlFor={name}>{label}</label>}
      <div className=" relative">
        <input
          type={show && type === "password" ? "text" : type}
          name={name}
          placeholder={placeholder}
          className={`w-full px-4 py-2 border rounded focus:outline-none ${className}`}
          {...register(name, {
            required: true,
          })}
        />
        {type === "password" && (
          <div className=" absolute top-1/2 right-2 -translate-y-1/2">
            {show ? (
              <FaRegEye onClick={toggleShow} className=" cursor-pointer" />
            ) : (
              <FaRegEyeSlash onClick={toggleShow} className=" cursor-pointer" />
            )}
          </div>
        )}
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  );
};

export default CustomInput;
