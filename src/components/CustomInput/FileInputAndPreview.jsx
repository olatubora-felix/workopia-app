/* eslint-disable react/prop-types */

import { FaCamera } from "react-icons/fa";

const FileInputAndPreview = ({
  handleFileChange,
  previewImage,
  heading = "Upload Company Logo",
}) => {
  return (
    <div className="space-y-4">
      <span> {heading}</span>
      <label
        htmlFor="company_logo"
        className="border-2 border-blue-900 w-[200px] h-[100px]  flex justify-center items-center flex-col p-3 rounded-lg gap-4"
      >
        <input
          type="file"
          name="comapny_logo"
          id="company_logo"
          onChange={handleFileChange}
          hidden
        />
        {previewImage.length > 0 ? (
          <img
            src={previewImage}
            alt="Logo"
            className="w-full object-contain h-full rounded-md"
          />
        ) : (
          <FaCamera fontSize={30} className="text-blue-900" />
        )}
      </label>
    </div>
  );
};

export default FileInputAndPreview;
