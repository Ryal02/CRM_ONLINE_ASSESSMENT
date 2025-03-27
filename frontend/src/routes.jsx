import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/auth/Login";
import { Customer } from "./pages/user/Customer";
import PrivateRoute from "./components/PrivateRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route element={<PrivateRoute />}> */}
          <Route path="/dashboard" element={<Customer />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
