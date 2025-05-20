import { Box } from '@mui/material';
import { MainLayout } from '@components/layouts';

export const InventoryDashboard = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          flex: 1,
          height: '100vh',
          backgroundColor: '#f4f4f4',
        }}
      >
        <h2>INVENTORY Dashboard</h2>
      </Box>
    </MainLayout>
  );
};
