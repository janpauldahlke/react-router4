import React from 'react';

import PersonProfile from './personProfile';

const pow = [
  'strike',
  'hit',
  'run',
  'web',
  'fly',
  'cook',
  'be nice'
]

class PersonProfileContainer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      powers : pow
    };
  }

  componentDidMount() {
    //some ajax here
  }

  render() {
    return(
      <div>
        <PersonProfile powers={this.state.powers} />
      </div>
    )
  }
}

export default PersonProfileContainer;