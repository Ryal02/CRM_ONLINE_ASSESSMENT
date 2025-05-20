import { icons } from '../../../components/icons/Icons';

export const menuItems = [
  // 🌐 Main System
  { type: 'Main', label: 'Dashboard', icon: <icons.Dashboard />, path: '/dashboard' },
  { type: 'Main', label: 'Planning', icon: <icons.Assignment />, path: '/plans' },
  { type: 'Main', label: 'Events', icon: <icons.Event />, path: '/events' },
  { type: 'Main', label: 'Event History', icon: <icons.History />, path: '/event-record' },
  { type: 'Main', label: 'Customers Records', icon: <icons.Group />, path: '/customers' },

  // 💼 Payroll Management System
  { type: 'Payroll', label: 'Dashboard', icon: <icons.Dashboard />, path: '/dashboard' },
  { type: 'Payroll', label: 'Employee List', icon: <icons.Group />, path: '/employee' },
  { type: 'Payroll', label: 'Payroll Processing', icon: <icons.CreditScore />, path: '/payroll' },
  { type: 'Payroll', label: 'Payslips', icon: <icons.Receipt />, path: '/payslips' },
  { type: 'Payroll', label: 'Deductions & Benefits', icon: <icons.AttachMoney />, path: '/adjustments' },
  { type: 'Payroll', label: 'Reports', icon: <icons.Assessment />, path: '/payroll-reports' },

  // 📦 Inventory Management System
  { type: 'Inventory', label: 'Dashboard', icon: <icons.Dashboard />, path: '/dashboard' },
  { type: 'Inventory', label: 'Items', icon: <icons.Inventory2 />, path: '/items' },
  { type: 'Inventory', label: 'Categories', icon: <icons.Category />, path: '/categories' },
  { type: 'Inventory', label: 'Suppliers', icon: <icons.LocalShipping />, path: '/suppliers' },
  { type: 'Inventory', label: 'Stock In/Out', icon: <icons.SwapHoriz />, path: '/stock' },
  { type: 'Inventory', label: 'Reports', icon: <icons.Assessment />, path: '/inventory-reports' },

  // 📦 Cashiering System
  { type: 'Cashiering', label: 'Dashboard', icon: <icons.Dashboard />, path: '/dashboard' },
  { type: 'Cashiering', label: 'Transactions', icon: <icons.ReceiptLong />, path: '/transactions' },
  { type: 'Cashiering', label: 'Payments', icon: <icons.CreditCard />, path: '/payments' },
  { type: 'Cashiering', label: 'Cash Register', icon: <icons.AccountBalanceWallet />, path: '/cash-register' },
  { type: 'Cashiering', label: 'Reports', icon: <icons.Assessment />, path: '/cashiering-reports' },

  // 📦 E-Commerce System
  { type: 'E-Commerce', label: 'Dashboard', icon: <icons.Dashboard />, path: '/dashboard' },
  { type: 'E-Commerce', label: 'Products', icon: <icons.ShoppingBag />, path: '/products' },
  { type: 'E-Commerce', label: 'Orders', icon: <icons.ShoppingCart />, path: '/orders' },
  { type: 'E-Commerce', label: 'Customers', icon: <icons.PeopleAlt />, path: '/customers' },
  { type: 'E-Commerce', label: 'Payments', icon: <icons.Payment />, path: '/ecommerce-payments' },
  { type: 'E-Commerce', label: 'Reports', icon: <icons.BarChart />, path: '/ecommerce-reports' },

  // 🚚 Trucking Module (New Entry)
  { type: 'Trucking', label: 'Truck Dashboard', icon: <icons.LocalShipping />, path: '/trucking-dashboard' },
  { type: 'Trucking', label: 'Fleet Management', icon: <icons.LocalShipping />, path: '/fleet-management' },
  { type: 'Trucking', label: 'Delivery Routes', icon: <icons.LocalShipping />, path: '/delivery-routes' },
  { type: 'Trucking', label: 'Cargo Tracking', icon: <icons.LocalShipping />, path: '/cargo-tracking' },
];
