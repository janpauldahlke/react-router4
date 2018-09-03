import React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import authService from '../../services/authService';

const style = {
  marginLeft: '200px',
  width: '200px'
}

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn :  authService.isAuthenticated()
    }
  }

  // functions
  handleInputChange (e) {
    this.setState({
      ...this.state,
      [e.target.name] : e.target.value
    })
  }
  //
  login = () => {
    authService.signIn(() => {
      this.setState({
        loggedIn : authService.isAuthenticated(),
      })
    });
  }

  render() {
    const { target } = this.props.location.state || {target: {pathname: '/private'}};

    if(this.state.loggedIn) {

      return <Redirect to={target}/>
    }

    console.log('login', this.state.loggedIn);

    return (
      <div style={style}>
          <h1>Sign In</h1>

          <Form horizontal={true}>
              <FormGroup>

                  <ControlLabel>Email Address</ControlLabel>
                  <FormControl
                      type="string"
                      placeholder="Email"
                      size={{length: 40}}
                      onChange={this.onHandleLastNameChange}
                  />

                  <ControlLabel>Password</ControlLabel>
                  <FormControl
                      type="password"
                      placeholder="Password"
                      length={'40px'}
                      onChange={this.onHandleLastNameChange}
                  />

                  <Button className='btn btn-primary' onClick={(e) => { 
                    e.preventDefault();
                    this.login();
                  }}>Sign in</Button>
              </FormGroup>
          </Form>
      </div>
  );
  };
}

export default Login;