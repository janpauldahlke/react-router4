import React from 'react';
import PropTypes from 'prop-types'
import { withRouter} from 'react-router-dom';
import querystring from 'query-string';

const style = {
  marginLeft: '200px',
}

const PersonProfile = (props) => {
  const query = querystring.parse(props.location.search);
  const name = query.name;
  const occupation = query.occupation;

  console.log('innerPerson',props);

  return (
    <div style={style}>
      <h1>{name}</h1>
      <h3>{occupation}</h3>

      <section>
        <h3>Powers:</h3>
        <div>{ props.powers[Math.floor(Math.random() * props.powers.length-1)]}</div>
      </section>
    </div>
  );
}

PersonProfile.propTypes = {
  powers: PropTypes.array.isRequired
}

export default withRouter(PersonProfile);