import React from 'react';
import { withRouter} from 'react-router-dom';

const SmartColor = ({...rest}) => { // get stuff via ...rest
  let style = {
    backgroundColor: rest.location.hash,
    marginLeft: '200px',
    borderColor: '#000000',
    borderStyle: 'dashed'
  }
 const { match} = rest;
  return (
    <div style={style}>
      <h2>{match.params.text}</h2>
      <h3>{match.params.color}</h3>
      <h4>{rest.location.hash}</h4>
      <h4>{match.path}</h4>
    </div>
  );
}

export default withRouter(SmartColor);