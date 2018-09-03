
import React from 'react';
import {Route} from 'react-router-dom';

//create a logging route

const LoggingRoute = ( {component: ComponentToRender, ...rest} ) => {

  return(
    
    <Route {...rest}
      render={(props) => {
        alert('route is loggin' + props.match.params.eid);
        return <ComponentToRender {...props} />
      }}
      >
    </Route>
  );
}


export default LoggingRoute;