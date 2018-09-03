import React from 'react';
import { withRouter, Link, Route} from 'react-router-dom';

const RecursiveColor = ({...rest}) => { // get stuff via ...rest
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

      <Link to={`${match.url}/ecece/Child`} >Add child</Link>
      {'  ||  '}
      <Link to={`${match.url}`} >close child</Link> 

      <Route path={`${match.url}/:color/:text`} component={RecursiveColor}/>

    </div>
  );
}

export default withRouter(RecursiveColor);