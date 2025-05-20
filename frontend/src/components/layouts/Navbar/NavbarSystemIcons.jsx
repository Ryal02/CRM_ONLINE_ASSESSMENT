import { Box } from '@mui/material';
import { icons } from '@components/icons/Icons';
import { IconButtonItem } from './ProjectIcons/IconButtonItem';
import { handleNavigate } from './utils';

export const NavbarSystemIcons = ({ activeType, navigate, setActiveType }) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <IconButtonItem
        title="Main Application"
        active={activeType === 'Main'}
        icon={<icons.Home />}
        onClick={() => handleNavigate(navigate, setActiveType, 'Main')}
      />
      <IconButtonItem
        title="E-Commerce System"
        active={activeType === 'E-Commerce'}
        icon={<icons.ShoppingCart />}
        onClick={() => handleNavigate(navigate, setActiveType, 'E-Commerce')}
      />
      <IconButtonItem
        title="Payroll System"
        active={activeType === 'Payroll'}
        icon={<icons.Paid />}
        onClick={() => handleNavigate(navigate, setActiveType, 'Payroll')}
      />
      <IconButtonItem
        title="Cashiering System"
        active={activeType === 'Cashiering'}
        icon={<icons.Store />}
        onClick={() => handleNavigate(navigate, setActiveType, 'Cashiering')}
      />
      <IconButtonItem
        title="Inventory System"
        active={activeType === 'Inventory'}
        icon={<icons.Work />}
        onClick={() => handleNavigate(navigate, setActiveType, 'Inventory')}
      />
      <IconButtonItem
        title="Trucking System"
        active={activeType === 'Trucking'}
        icon={<icons.LocalShippingIcon />}
        onClick={() => handleNavigate(navigate, setActiveType, 'Trucking')}
      />
    </Box>
  );
};
