import React from 'react';
//import { Route } from 'react-router-dom';

import Message from './message';
import LogginLink from './link';
import LoggingRoute from './loggingRoute';

const style = {
  marginLeft: '200px',
}

const Logging = ({ match }) => {
  return (
    <div style={style}>
      <h1>loggin home</h1>
      <h5>
        <LogginLink to={`${match.url}/lorem/1234-4567`}>Link1</LogginLink>
        {'   ||   '}
        <LogginLink to={`${match.url}/lorem/abcd-1234`}>Link2</LogginLink>
      </h5>

      <LoggingRoute path={`${match.url}/lorem/:eid`} component={Message} exact></LoggingRoute>
     {/*  <Route path={`${match.url}`} component={Message} exact /> */}
    </div>
  );
}

export default Logging;