import React, { Component } from 'react';


export default class PortfolioPiece extends Component {

  render() {
    //actual src lives in this.props.imgSrc
    let temporarySrc = '/Users/Tim/Programming/projects/portfolio-page/src/client/public/css/portpic.png'
    return (
      <div className='portfolioPiece'>
        <img 
        className='img img-responsive' 
        src={temporarySrc}>
        </img>
      </div>
    );
  }
  
}