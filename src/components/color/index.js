import React from 'react';
import PropTypes from 'prop-types'; // we dont need this in the TS world
import { withRouter } from 'react-router';

const Color = (props) => {

  let style = {
    backgroundColor: props.color,
    textAlign: 'center',
    padding: 20,
    borderColor: '#00000',
    borderStyle: 'solid',
    marginLeft: '200px', // sidebar :-)
  };

  return (
    <div style={style}>
      <h2>{props.text}</h2>
      <h3>{props.match.path}</h3>
      <h4>{props.color}</h4>
    </div>
  );
};

Color.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default withRouter(Color);