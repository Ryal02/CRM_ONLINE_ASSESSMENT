// AppRoutes.jsx
import { BrowserRouter, Routes } from 'react-router-dom';
import { AppRoutesConfig } from '@services/routes';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {AppRoutesConfig}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
