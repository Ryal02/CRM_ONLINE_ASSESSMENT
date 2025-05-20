import { Typography } from '@mui/material';

export const Error = ({ message }) => {
  if (!message) return null;

  return (
    <Typography color="error" variant="body2" align="center" marginBottom={2}>
      {message}
    </Typography>
  );
};

