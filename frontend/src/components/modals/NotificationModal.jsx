import { Box, Modal, Typography } from '@mui/material';

export const NotificationModal = ({open, onClose}) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '64px',
                    right: '80px',
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
                <Typography variant='h6' gutterBottom>
                    Notifications
                </Typography>
                <Typography variant='body2'>
                    You have no new notifications.
                </Typography>
            </Box>  
        </Modal>
    )
}