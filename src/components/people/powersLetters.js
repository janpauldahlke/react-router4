import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';


const spanStyle = {
  marginRight: 10,
  fontWeight: 'bold',
  fontSize: 20
};

class PowersList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPowersFirstLetterList(powers) {

    let letters = [];

    return powers.map((pow, index) => {
      let letter = pow.substring(0,1).toUpperCase();
      if(!letters.includes(letter)) {
        letters.push(letter);
        const linkURL = `${this.props.match.url}/powers/${letter}?name=${this.props.name}&occupation=${this.props.occupation}`;

        return (
          <span style={spanStyle} key={index}>
            <Link to={linkURL}>{ letter }</Link>
          </span>
        )
      }
    })
  }

  render(){
    const {powers} = this.props;
    return(
      <div>
        {this.renderPowersFirstLetterList(powers)}
      </div>
    );
  }
}

PowersList.propTypes = {
  powers: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
}

export default withRouter(PowersList);