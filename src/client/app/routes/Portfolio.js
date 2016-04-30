import React, { Component } from 'react';
import { Link } from 'react-router';
import portfoliodata from '../portfoliodata'
import PortfolioPiece from './Portfolio-Piece'

import NavLink from './NavLink';


export default class Portfolio extends Component {
  
  //ANIMATE RESIZING THE FLEXBOX?

  render() {
    let works = portfoliodata.map((piece, ind)=>{
      let navURL = `/portfolio/${piece.link}`;
      return(
          <li key={ind}>
            <NavLink to={navURL}>
              <PortfolioPiece 
                imgSrc={piece.url}
                name={piece.name} 
                skills={piece.skills} 
                time={piece.time} />
            </NavLink>
          </li>
        )
    })
    return (
      <div>
        <h1>PORTFOLIO</h1>
        <ul className='portfolio'>
        	{works}
        </ul>
      </div>
    );
  }
  
}