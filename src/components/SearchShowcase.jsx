/* eslint-disable react/prop-types */
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { FaSearch } from "react-icons/fa";
const SearchShowcase = ({ className }) => {
  const searchInput = [
    {
      name: "keywords",
      placeholder: "Keywords",
    },
    {
      name: "location",
      placeholder: "Location",
    },
  ];
  return (
    <form
      className={`items-center  justify-center  md:flex block md:space-y-0 space-y-2 px-4 ${className}`}
    >
      {searchInput.map(({ name, placeholder }) => (
        <CustomInput
          key={name}
          type="text"
          name={name}
          placeholder={placeholder}
          className="w-full md:w-auto  px-4 py-2 focus:outline-none"
        />
      ))}

      <CustomButton className=" md:w-auto  px-4 py-2 flex items-center gap-2 justify-center">
        <FaSearch /> Search
      </CustomButton>
    </form>
  );
};

export default SearchShowcase;
