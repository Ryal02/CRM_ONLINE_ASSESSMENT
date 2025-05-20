import { IconButton, Avatar } from '@mui/material';
import { NotificationModal, SettingsModal } from '@components/modals';
import { icons } from '@components/icons/Icons';

export const NavbarUserControls = ({
  userInfo,
  firstLetter,
  notificationOpen,
  setNotificationOpen,
  userMenuOpen,
  setUserMenuOpen,
  handleLogout,
  navigate,
}) => {
  return (
    <>
      <IconButton onClick={() => setNotificationOpen(true)}>
        <icons.Notifications color="action" />
      </IconButton>
      <Avatar
        sx={{ bgcolor: '#1976d2', cursor: 'pointer' }}
        onClick={() => setUserMenuOpen(true)}
        title={userInfo?.user?.name}
      >
        {firstLetter}
      </Avatar>

      <NotificationModal open={notificationOpen} onClose={() => setNotificationOpen(false)} />
      <SettingsModal
        open={userMenuOpen}
        onClose={() => setUserMenuOpen(false)}
        userName={userInfo?.user?.name}
        onLogout={() => handleLogout(navigate)}
      />
    </>
  );
};
