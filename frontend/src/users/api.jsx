    import ApiUrl from '@api/axios';
    import Cookies from 'js-cookie';

    export const fetchUserInfo = async () => {
        const token = Cookies.get('token');
        if(!token) throw new Error('No Token Found');
        const response = await ApiUrl.get('/get-user-info')
        return response.data;
    }