import { useMutation } from '@tanstack/react-query';
import { loginUser } from './api';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

export const useLogin = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            Cookies.set("token", data.token, {
                expires: 7,
                secure: true, 
                sameSite: 'Strict', // protect against CSRF
              });
          navigate('/dashboard');
        },  
        onError: (error) => {
          console.error('Login failed!', error?.response?.data?.message || 'Unknown error');
        },
    });
};