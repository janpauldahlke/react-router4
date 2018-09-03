import React from 'react';
import PropTypes from 'prop-types'
import { withRouter, Route} from 'react-router-dom';

import PowersLetters from './powersLetters';
import PowerList from './powerList';

import querystring from 'query-string';

const style = {
  marginLeft: '200px',
}

const PersonProfile = (props) => {
  const query = querystring.parse(props.location.search);
  const name = query.name;
  const occupation = query.occupation;

  return (
    <div style={style}>
      <button className="btn btn-success" onClick={() => {
        props.history.goBack(); // this is how to browserback stuff
      }}>GO BACK</button>
      <h1>{name}</h1>
      <h3>{occupation}</h3>

      <section>
        <h3>Powers:</h3>
        <PowersLetters powers={props.powers} name={name} occupation={occupation} />

        <Route
          path={`${props.match.url}/powers/:letter`}
          render={() => {
            return (
              <PowerList powers={props.powers} />
            )
          }}
        />
      </section>
    </div>
  );
}

PersonProfile.propTypes = {
  powers: PropTypes.array.isRequired
}

export default withRouter(PersonProfile);