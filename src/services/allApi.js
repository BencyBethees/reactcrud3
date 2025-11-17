import axiosConfig from "./axiosConfig";

export const createEvent = async (reqBody) => {
  return await axiosConfig("post", "http://localhost:3000/events", reqBody);
};
export const getEvent = async () => {
  return await axiosConfig("get", "http://localhost:3000/events", "");
};
export const deleteEvent = async (id) => {
  return await axiosConfig("delete", `http://localhost:3000/events/${id}`, {});
};
export const editEvent =async(id,reqBody)=>{
    return await axiosConfig("put",`http://localhost:3000/events/${id}`,reqBody)
}