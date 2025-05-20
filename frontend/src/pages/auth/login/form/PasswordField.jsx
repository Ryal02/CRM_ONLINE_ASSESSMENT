import { TextField } from '@mui/material';

export const PasswordField = ({ value, onChange }) => (
  <TextField
    fullWidth
    label="Password"
    type="password"
    variant="outlined"
    value={value}
    onChange={onChange}
    required
  />
);
