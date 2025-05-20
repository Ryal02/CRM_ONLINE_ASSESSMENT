import React from 'react';
import { Box, Container } from '@mui/material';
import { NavbarPanel, SidebarPanel } from '.';

const drawerWidth = -10;
const appBarHeight = 90;

export const MainLayout = ({ children, maxWidth = "xl" }) => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#f4f4f4' }}>
      <SidebarPanel />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: `${drawerWidth}px`,
          pt: `${appBarHeight}px`,
          px: 2,
        }}
      >
        <NavbarPanel />
        <Container maxWidth={maxWidth}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};
