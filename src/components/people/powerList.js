import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";

class PowerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      letter: props.match.params.letter
    }
  }

  // not this nice and a little durch die brust durchs auge, aber immerin läuft
  componentWillReceiveProps = (nextProps) => {
    this.setState({
      letter: nextProps.match.params.letter
    }) 
  }

  //functions helpers
  powerListHelper(p) {
    return p.map((power, index) => {

      return (
        <p key={index}>{power}</p>
      );
    })
  }

  getPowers =  () => {
    const letter = this.state.letter;
    const powers = this.props.powers;

    let knownPowers = [];

    for(let i= 0;i<powers.length;i++){
      if(powers[i].toUpperCase().startsWith(letter)){
        knownPowers.push(powers[i])
      }
    }
    return knownPowers
  }

  //---------renderers

  render() {
    
    let knownPowers = this.getPowers();
    return (
      <div>
       {this.powerListHelper(knownPowers)}
      </div>
    );

  }
}

PowerList.propTypes = {
  powers: PropTypes.array.isRequired
}

export default withRouter(PowerList);