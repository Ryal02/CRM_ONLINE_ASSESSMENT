import { AppBar, Box, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from '@users';
import { useEffect, useState } from 'react';
import { 
  NavbarBrand, 
  NavbarUserControls, 
  NavbarSystemIcons, 
  NavbarSearch, 
  setupStorageListener, 
  handleLogout 
} from '..';

export const NavbarPanel = () => {
  const { userInfo } = useUserInfo();
  const navigate = useNavigate();
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activeType, setActiveType] = useState(localStorage.getItem('activeType') || 'Main');
  const [activeTab, _] = useState(localStorage.getItem('activeTab') || 'Dashboard');
  const firstLetter = userInfo?.user?.name?.charAt(0).toUpperCase() || '?';
  useEffect(() => setupStorageListener(setActiveType), []);

  const userControlProps = {
    userInfo,
    firstLetter,
    notificationOpen,
    setNotificationOpen,
    userMenuOpen,
    setUserMenuOpen,
    handleLogout,
    navigate,
  };

  return (
    <>
      <AppBar position="fixed"
        sx={{ backgroundColor: '#fbf9f9', boxShadow: 2,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          height: '64px',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <NavbarBrand activeType={activeType} activeTab={activeTab} />
          <Box display="flex" alignItems="center" gap={1}>
            <NavbarSystemIcons activeType={activeType} navigate={navigate} setActiveType={setActiveType} />
            <NavbarSearch />
           <NavbarUserControls {...userControlProps} />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
