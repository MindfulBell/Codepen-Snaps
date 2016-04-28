import React, { Component } from 'react';


export default class PortfolioPiece extends Component {

  render() {
    return (
      <div>
        <img src='' style={{ height: '300px', width: '400px'}}></img><br></br>
        {this.props.params.projectName}
      </div>
    );
  }
  
}