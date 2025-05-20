import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  Drawer,
  Divider,
  Tooltip,
  ListItemIcon,
} from '@mui/material';
import { menuItems } from './items';

const drawerWidth = 300;

export const SidebarPanel = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open] = useState(true);

  const activeType = localStorage.getItem('activeType') || 'Main';
  const filteredMenuItems = menuItems.filter(item => item.type === activeType);

  const handleNavigate = (item) => {
    localStorage.setItem('activeTab', item.label);
    navigate(item.path);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          marginTop: '10px',
          boxSizing: 'border-box',
          border: 'none',
          backgroundColor: '#f4f4f4',
          top: '64px', // Push down below the AppBar
          height: 'calc(100% - 64px)', // Occupy remaining space
          position: 'fixed',
          zIndex: '1000',
        },
      }}
    >
  
      <List sx={{ p: 1 }}>
        {filteredMenuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem
              key={item.label}
              button
              onClick={() => handleNavigate(item)}
              sx={{
                backgroundColor: isActive ? '#05d6cd' : 'inherit',
                borderRadius: 2,
                color: isActive ? '#fff' : 'inherit',
                '&:hover': {
                  backgroundColor: '#d5d5d5',
                },
                cursor: 'pointer',
              }}
            >
              <Tooltip title={item.label} placement="right" disableHoverListener={open}>
                <ListItemIcon sx={{ color: isActive ? '#fff' : 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
              </Tooltip>

              {open && (
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 'bold',
                    textDecoration: isActive ? 'underline' : 'none',
                  }}
                />
              )}
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </Drawer>
  );
};
