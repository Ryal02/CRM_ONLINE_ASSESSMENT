import Cookies from 'js-cookie';

export const handleNavigate = (navigate, setActiveType, type) => {
    localStorage.setItem('activeType', type);
    setActiveType(type);
    navigate('/dashboard');
};

export const handleLogout = (navigate) => {
    Cookies.remove('token');
    navigate('/');
};

export const setupStorageListener = (setActiveType) => {
    const handleStorageChange = () => {
        setActiveType(localStorage.getItem('activeType') || 'Main');
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
};
