import React, { Component } from 'react';


export default function PortfolioPiece(props) {
 
    //local URL: /Users/Tim/Programming/projects/portfolio-page/src/client/public/css/portpic.png
    //actual src lives in this.props.imgSrc
    
    //need responsiveness here.
    

    let temporarySrc = '/portfolio-page/src/client/public/css/portpic.png'
    return (
      <div className='portfolioPiece'>
        <img 
        className='img img-responsive'
        src={temporarySrc}>
        </img>
      </div>
    );
  
  
}