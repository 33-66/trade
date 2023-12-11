import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './Authorisation';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />}
    ></Route>
  );
};

export default PrivateRoute;
