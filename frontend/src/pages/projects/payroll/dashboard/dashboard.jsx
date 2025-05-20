import { Box } from '@mui/material';
import { MainLayout } from '@components/layouts';

export const PayrollDashboard = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          flex: 1,
          height: '100vh',
          backgroundColor: '#f4f4f4',
        }}
      >
        <h2>PAYROLL Dashboard</h2>
      </Box>
    </MainLayout>
  );
};
