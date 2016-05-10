import React, { Component } from 'react';
import { Link } from 'react-router';
import portfoliodata from '../portfoliodata'
import PortfolioPiece from './Portfolio-Piece'

import NavLink from './NavLink';
import ContinueLink from '../continue-link'


export default class Portfolio extends Component {
  
  //ANIMATE RESIZING THE FLEXBOX?
  // 'HTML/CSS', 'JavaScript', 'jQuery', 'React', 'Redux', 'Bootstrap', 'AJAX' 
  
  //WHY IS THE LANDING IMAGE NOT WORKING AGAIN?!
  constructor(props){
    super(props);
    this.state={
      scrollPos: 0,
      isMounted: false,
      show: ['React']
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
    let works = portfoliodata.filter((piece)=>{
      //for each element in piece.skills, check if that is present in state.show
      let found = false;
        piece.skills.split(',').forEach((skill)=>{
          console.log(this.state.show.indexOf(skill))
        })

    }).map((piece, ind)=>{
      let navURL = `/portfolio/${piece.link}`;
      return(            
              <PortfolioPiece 
                key={ind}
                imgSrc={piece.img}
                name={piece.name} 
                skills={piece.skills} 
                time={piece.time} 
                code={piece.github}
                link={piece.active} />       
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