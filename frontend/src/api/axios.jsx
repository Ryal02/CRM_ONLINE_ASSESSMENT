import axios from "axios";
import Cookies from 'js-cookie';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL_WEB;
await axios.get("/sanctum/csrf-cookie");

export const ApiUrl = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

ApiUrl.interceptors.request.use((config) => {
  const token = Cookies.get('token'); // 👈 moved here
  const crfToken = Cookies.get("XSRF-TOKEN");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (crfToken) {
    config.headers['X-XSRF-TOKEN'] = crfToken; // Add CSRF token to headers
  }
  return config;
});


export default ApiUrl;
