import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 


class LoggingLink extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    let urlParts = this.props.to.split('/');
    const eid = urlParts[urlParts.length-1]
    alert('Clicking the link ' + eid);
  }

  render () {

    const { staticContext, ...rest} = this.props; // remove staticContext form props, it would lead into an error -> see https://stackoverflow.com/questions/49358560/react-wrapper-react-does-not-recognize-the-staticcontext-prop-on-a-dom-elemen
    return(
      <Link
        {...rest}
        onClick={(e) => {
          console.log('for sakes of curioisty', e);
          this.handleClick();
        }}
      >
        {this.props.children}
      </Link>
    );
  }
}

LoggingLink.propTypes = {
  to: PropTypes.string.isRequired
}
export default withRouter(LoggingLink)