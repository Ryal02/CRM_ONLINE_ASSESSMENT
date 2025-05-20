import { LoginForm } from '@pages/auth/login/loginForm';
import { Customer } from '@pages/user/Customer';
import { DynamicDashboard } from '@services/routes/DynamicDashboard';
import PrivateRoute from '@components/PrivateRoute';

import { Route } from 'react-router-dom';

export const AppRoutesConfig = (
  <>
    <Route path="/" element={<LoginForm />} />
      <Route element={<PrivateRoute />}>
      <Route path="/dashboard" element={<DynamicDashboard />} />
      <Route path="/customers" element={<Customer />} />
    </Route>
  </>
);
