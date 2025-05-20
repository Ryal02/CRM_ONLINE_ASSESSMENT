import { Box, Button, Modal, Typography } from '@mui/material';

export const SettingsModal = ({open, onClose, userName, onLogout}) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '64px',
                    right: '16px',
                    bgcolor: 'background.paper',
                    boxShadow: 6,
                    borderRadius: 2,
                    p: 2,
                    width: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                }}
            >
                <Typography variant="subtitle1" fontWeight={600}>
                    {userName}
                </Typography>
                <Button onClick={onLogout} variant="contained" color="error" fullWidth>
                    Logout
                </Button>
            </Box>  
        </Modal>
    )
}