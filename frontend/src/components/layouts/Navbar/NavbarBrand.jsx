import { Box, Typography } from '@mui/material';

export const NavbarBrand = ({ activeType, activeTab }) => {
  return (
    <Box display="flex" alignItems="center">
      <img
        src="/logo-2.png"
        alt="Logo"
        style={{
          height: '180px',
          width: 'auto',
          marginLeft: '-26px',
          marginRight: '-12px',
        }}
      />
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000', marginTop: '7px' }}>
        {`⫸`} &nbsp;
        {activeType === 'Main' ? 'Main' : `${activeType} System`} &nbsp;
        {`⪢`}
        <Typography
          component="span"
          variant="body2"
          sx={{ fontSize: '1rem', fontWeight: '500', paddingLeft: '8px' }}
        >
          {activeTab}
        </Typography>
      </Typography>
    </Box>
  );
};
