import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from 'js-cookie';

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const isAuthenticated = Cookies.get('token');

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoutes;
