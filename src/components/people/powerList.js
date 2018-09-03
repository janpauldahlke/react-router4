import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";

class PowerList extends React.Component {
  constructor(props) {
    super(props)
  }

  powerListHelper(p) {
    return p.map((power) => {

      return (
        <p>{power}</p>
      );
    })
  }

  render() {
    return (
      <div>
       {this.powerListHelper(this.props.powers)}
      </div>
    );

  }
}

PowerList.propTypes = {
  powers: PropTypes.array.isRequired
}

export default withRouter(PowerList);