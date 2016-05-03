import React, { Component } from 'react';
import { Link } from 'react-router';
import portfoliodata from '../portfoliodata'
import PortfolioPiece from './Portfolio-Piece'

import NavLink from './NavLink';


export default class Portfolio extends Component {
  
  //ANIMATE RESIZING THE FLEXBOX?
  
  constructor(props){
    super(props);
    this.state = {
      width: 0
    };
    this.handleResize = this.handleResize.bind(this)
  }
  
  componentDidMount(){
    this.setState({width: window.innerWidth})
    window.addEventListener('resize', this.handleResize)
  }
  
  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize)
  }
  
  handleResize(){
    this.setState({
      
    })
  }

  render() {
    let works = portfoliodata.map((piece, ind)=>{
      let navURL = `/portfolio/${piece.link}`;
      return(
            <NavLink to={navURL} key={ind}>
              <PortfolioPiece 
                imgSrc={piece.url}
                name={piece.name} 
                skills={piece.skills} 
                time={piece.time} />
            </NavLink>
        
        )
    })
    return (
      <div className='portfolioPage container-fluid'>
        <h1 className='heading'>PORTFOLIO</h1>
        <div className='portfolio'>
        	{works}
        </div>
      </div>
    );
  }
  
}