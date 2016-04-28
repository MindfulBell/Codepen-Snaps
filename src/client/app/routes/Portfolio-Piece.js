import React, { Component } from 'react';


export default class PortfolioPiece extends Component {

  render() {
    return (
      <div>
        <img src='https://ircimg.net/1385557450942.jpg' style={{ height: '300px', width: '400px'}}></img><br></br>
        {this.props.params.projectName}
      </div>
    );
  }
  
}