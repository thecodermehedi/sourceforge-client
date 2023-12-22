import axios from "axios";

export const uploadPhoto = async (photo) => {
  const formData = new FormData();
  formData.append("file", photo);
  formData.append("upload_preset", "lifeflow_preset");
  const {data} = await axios.post(
    `https://api.cloudinary.com/v1_1/lifeflow-cloudinary/image/upload`,
    formData
  );
  return data;
};
