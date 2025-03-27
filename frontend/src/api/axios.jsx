import axios from "axios";

// Use the base URL from the VITE_API_URL environment variable
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Get URL from the .env file
  headers: {
    "Content-Type": "application/json",
  },
});

// Add auth token automatically for every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
