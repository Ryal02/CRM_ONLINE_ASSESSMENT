import { TextField } from '@mui/material';

export const EmailField = ({ value, onChange }) => (
  <TextField
    fullWidth
    label="Email"
    variant="outlined"
    value={value}
    onChange={onChange}
    required
  />
);

