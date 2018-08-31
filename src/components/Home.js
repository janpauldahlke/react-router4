import React from 'react';

const style = {
  "textAlign" : "center",
}

export default class Home extends React.Component {
  
  render() {
    return (
      <div style={style}>
        <h1>welcome home</h1>
        <img src="http://i.imgur.com/GBJTF2K.png" />
      </div>
    );
  }
}