import axiosConfig from "./axiosConfig";
import { baseUrl } from "./baseURL";

export const createEvent = async (reqBody) => {
  return await axiosConfig("post", `${baseUrl}/events`, reqBody);
};
export const getEvent = async () => {
  return await axiosConfig("get", baseUrl + "/events", "");
};
export const deleteEvent = async (id) => {
  return await axiosConfig("delete", `${baseUrl}/events/${id}`, {});
};
export const editEvent = async (id, reqBody) => {
  return await axiosConfig("put", `${baseUrl}/events/${id}`, reqBody);
};
