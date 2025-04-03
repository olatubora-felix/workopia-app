/* eslint-disable react/prop-types */

import { FaCamera } from "react-icons/fa";

const FileInputAndPreview = ({ handleFileChange, previewImage }) => {
  return (
    <div className="space-y-4">
      <span> Upload Company Logo</span>
      <label
        htmlFor="company_logo"
        className="border border-gray-500 w-[200px] flex justify-center items-center flex-col p-3 rounded-lg gap-4"
      >
        <input
          type="file"
          name="comapny_logo"
          id="company_logo"
          onChange={handleFileChange}
          hidden
        />
        {previewImage.length > 0 ? (
          <img src={previewImage} alt="Logo" className="" />
        ) : (
          <FaCamera fontSize={30} />
        )}
      </label>
    </div>
  );
};

export default FileInputAndPreview;
