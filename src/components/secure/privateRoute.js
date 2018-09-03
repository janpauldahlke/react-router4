import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import auth from '../../services/authService';


const PrivateRoute = ( {component: Component, ...rest} ) => (
  <Route
    {...rest}
      render={(props) => { return ( // DO NOT FUCKING FORGET THIS RETURN HERE, ITS WORTH 20MINUTES!!
        auth.isAuthenticated() ?    //calling the auth service like this
        <Component {...props} /> :
        <Redirect to={{
          pathname: '/login',
          state : { target: props.location} // this allows to redirect to deeper nested page from bookmark or copied link
        }} />
      );
    }}
  />
  );

export default PrivateRoute;