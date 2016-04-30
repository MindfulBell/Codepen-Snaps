import React, { Component } from 'react';


export default class PortfolioPiece extends Component {

  render() {
    //actual src lives in this.props.imgSrc
    let temporarySrc = 'https://pixabay.com/get/e837b80b20fd013ed1584d05fb0938c9bd22ffd41db7104892f3c87baf/art-1294890_1280.png'
    return (
      <div className='portfolioPiece'>
        <img className='img img-responsive' 
        src={temporarySrc}></img>
        <br></br>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
  
}