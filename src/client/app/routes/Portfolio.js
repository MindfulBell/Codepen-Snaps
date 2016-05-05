import React, { Component } from 'react';
import { Link } from 'react-router';
import portfoliodata from '../portfoliodata'
import PortfolioPiece from './Portfolio-Piece'

import NavLink from './NavLink';
import ContinueLink from '../continue-link'


export default class Portfolio extends Component {
  
  //ANIMATE RESIZING THE FLEXBOX?
  
  constructor(props){
    super(props);
    this.state={
      scrollPos: 0,
      isMounted: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentDidMount(){
    this.setState({isMounted: true})
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount(){
    this.setState({isMounted: false})
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll(){
    let y = window.pageYOffset;
    if (this.state.isMounted) {
      this.setState({scrollPos: y});
    }
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
        <ContinueLink to='Contact' y={this.state.scrollPos}/>
      </div>
    );
  }
  
}