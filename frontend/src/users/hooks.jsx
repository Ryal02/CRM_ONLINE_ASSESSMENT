import { useQuery } from "@tanstack/react-query";
import { fetchUserInfo } from "./api";
import { userQueryKeys } from "./data";
import { authError } from "./utils/error";
import Cookies from 'js-cookie';

export const useUserInfo = () => {
    const token = Cookies.get('token');
    const { data: userInfo, isLoading, isError } = useQuery({
        queryKey: userQueryKeys.getUserInfo,
        queryFn: fetchUserInfo,
        enabled: !!token,
    });

    if(!userInfo && !isLoading && !isError)
    throw authError();

    return {
        userInfo,
        isLoading,
        isError
    };
};