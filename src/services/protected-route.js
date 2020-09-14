import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';

export const ProtectedRoute = ({ component: Component, ...rest}) => {
  return(
    <Route {...rest} render={
      (props) => {
        if (isAuthenticated()) {
          console.log(isAuthenticated());
          return <Component {...props} />
        } else {
          return <Redirect to="/" />
        }
      }
    } />
  )
};