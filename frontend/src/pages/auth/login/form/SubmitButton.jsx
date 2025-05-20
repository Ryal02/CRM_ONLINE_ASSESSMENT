import { Button, CircularProgress } from '@mui/material';

export const SubmitButton = ({ loading }) => (
  <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    disabled={loading}
    sx={{ padding: '10px' }}
  >
    {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Login'}
  </Button>
);
