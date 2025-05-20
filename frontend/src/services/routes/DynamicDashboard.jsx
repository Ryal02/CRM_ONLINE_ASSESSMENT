import { useEffect, useState } from 'react';
import { Dashboard } from "@pages/main/dashboard";
import { PayrollDashboard } from "@pages/projects/payroll/dashboard";
import { InventoryDashboard } from "@pages/projects/inventory/dashboard";

export const DynamicDashboard = () => {
  const [activeType, setActiveType] = useState(localStorage.getItem('activeType') || 'Main');
  useEffect(() => {
    const handleStorageChange = () => {
      setActiveType(localStorage.getItem('activeType') || 'Main');
    };
    window.addEventListener('storage', handleStorageChange);
    const observer = setInterval(() => {
      const current = localStorage.getItem('activeType') || 'Main';
      setActiveType(prev => (prev !== current ? current : prev));
    }, 200); 
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(observer);
    };
  }, []);

  switch (activeType) {
    case 'Payroll':
      return <PayrollDashboard />;
    case 'Inventory':
      return <InventoryDashboard />;
    case 'Main':
    default:
      return <Dashboard />;
  }
};
