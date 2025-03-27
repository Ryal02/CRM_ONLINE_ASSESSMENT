import API from "./api";

export const loginUser = async (credentials) => {
  const response = await API.post("/login", credentials);
  return response.data;
};
