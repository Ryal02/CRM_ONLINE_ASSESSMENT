import axios from "axios";
import { ApiUrl } from "@api";

export const loginUser = async ({ email, password }) => {
    await axios.get(`${import.meta.env.VITE_API_URL_WEB}sanctum/csrf-cookie`, {
        withCredentials: true
    });
    const response = await ApiUrl.post('/login', { email, password });
    return response.data;
};
