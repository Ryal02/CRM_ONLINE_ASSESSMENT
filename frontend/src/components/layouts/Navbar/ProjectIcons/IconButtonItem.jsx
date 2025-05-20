import { IconButton, Box, Tooltip } from '@mui/material';

export const IconButtonItem = ({ title, active, icon, onClick }) => (
  <IconButton onClick={onClick}>
    <Box
      sx={{
        p: 0.5,
        px: 1,
        borderRadius: '20%',
        backgroundColor: active ? '#1976d2' : 'transparent', 
        color: active ? '#fff' : 'inherit',
      }}
    >
      <Tooltip title={title} placement="bottom" arrow>
        {icon}
      </Tooltip>
    </Box>
  </IconButton>
);

