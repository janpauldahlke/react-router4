import React from 'react';

const style = {
  'marginLeft' : '200px'
}

const PropViewer = ({match, location}) => { // get match out of props using decomposition!! else one need to const { match } == this.props inside the function
  return (
    <div style={style}>
      <h1>Path: { match.path }</h1>
      <h2>location: {location.key }</h2>
    </div>
    
  );
}
export default PropViewer;