import axios from "axios";

export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "oeuda2bp"); // Required for unsigned uploads

  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/mobinet/image/upload",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    console.log("Uploaded Image URL:", response.data.secure_url);
    return response.data.secure_url; // Use this URL to display the image
  } catch (error) {
    console.error("Upload failed:", error);
  }
};
