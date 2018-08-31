import React from 'react';
import { Prompt } from 'react-router';

const style = {
  'marginLeft' : '200px' //sidebar + 20px
}

class NameForm extends React.Component {
  constructor(props) {
    super(props) ;
      this.state = {
        firstName: '',
        lastName: '',
        valid: false
      };
    }

  handleChange (e) {
    this.setState({
      ...this.state,
      [e.target.name] : e.target.value
    }) 
  }

  pseudoValidate () {
    return (this.state.firstName === 'peter' && this.state.lastName === 'parker') ? this.setState({ ...this.state, valid: true}) : this.setState({ ...this.state, valid: false});
  }

  render () {

    console.log(this.state)
    return(
      <div style={style}>
        <Prompt
          when={!this.state.valid}
          message='Leavers gonna leave or grief, are you a real superhero?'
        />
        <h1>Prompt</h1>
        <form>
          <label htmlFor="firstName">first Name</label> <br />
          <input onChange={(e) => { this.handleChange(e)}} id="firstName" name="firstName" defaultValue={this.state.firstName}></input>
          <hr />
          <label htmlFor="lastName" defaultValue={this.state.lastName}>last Name</label> <br />
          <input onChange={(e) => { this.handleChange(e)}} id="lastName" name="lastName"></input>
          <button onClick={
            (e) => {e.preventDefault();
              this.pseudoValidate()}
            }>PSEUDO VALIDATe</button>
        </form>
        
        {/*consider this a user feedback */}

        { this.state.valid && (
          <h1>you are spiderman! so you are allowed to leave this page </h1>
        )}
        
      </div>
    )
  }
}

export default NameForm;