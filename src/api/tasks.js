import axiosPublic from "./axiosPublic";
export const createTask = async (task) => {
  const { data } = await axiosPublic.post("tasks", task);
  return data;
}

export const getTasks = async (userMail) => {
  const { data } = await axiosPublic("tasks", userMail);
  return data;
}