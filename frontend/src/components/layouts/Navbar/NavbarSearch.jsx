import { TextField, InputAdornment } from '@mui/material';
import { icons } from '@components/icons/Icons';

export const NavbarSearch = () => {
  return (
    <TextField
      variant="outlined"
      size="small"
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <icons.Search color="action" />
          </InputAdornment>
        ),
      }}
      sx={{
        width: 300,
        '& .MuiOutlinedInput-root': {
          borderRadius: '999px',
          backgroundColor: '#fff',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          paddingLeft: '12px',
          paddingRight: '100px',
          '& fieldset': { border: 'none' },
          '&:hover fieldset': { border: 'none' },
          '&.Mui-focused fieldset': { border: 'none' },
        },
      }}
    />
  );
};
