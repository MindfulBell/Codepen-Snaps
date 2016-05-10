import React, { Component } from 'react';
import { Link } from 'react-router';
import { Checkbox, FormGroup, FormControl } from 'react-bootstrap';
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
      show: ['React'],
      JavaScript: false,
      jQuery: false,
      React: false,
      Redux: false,
      SASS: false,
      AJAX: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
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

  handleCheck(value){
    let form = document.getElementById('myForm');
    if (form != null) {
      console.log(form.children[0])
    }
  }


  render() {
    let works = portfoliodata.filter((piece)=>{
      //for each element in piece.skills, check if that is present in state.show
      let found = false;
        piece.skills.split(',').forEach((skill)=>{
          found = this.state.show.indexOf(skill) > -1 ? true : found;
        })
        return found;
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
    // TURN THESE INTO A COMPONENT TO RENDER INDIVIDUALLY
    return (
      <div className='portfolioPage container-fluid'>
        <h1 className='heading'>PORTFOLIO</h1>
        <form id='myForm' style={{textAlign: 'center'}}>
          <label className='checkboxLabels'>
            <input className='checkbox'
            type="checkbox"
            checked={this.state.js}
            onClick={this.handleCheck('JavaScript')}
            /> JavaScript
          </label>                      
          <label className='checkboxLabels'>
            <input className='checkbox'
            type="checkbox"
            checked={this.state.jq}
            onChange={this.handleCheck('jQuery')}
            /> jQuery
          </label>
          <label className='checkboxLabels'>
            <input className='checkbox'
            type="checkbox"
            checked={this.state.jq}
            onChange={this.handleCheck('React')}/>            
            React
          </label>
          <label className='checkboxLabels'>
            <input className='checkbox'
            type="checkbox"
            checked={this.state.jq}
            onChange={this.handleCheck('Redux')}/>            
            Redux
          </label>
          <label className='checkboxLabels'>
            <input className='checkbox'
            type="checkbox"
            checked={this.state.jq}
            onChange={this.handleCheck('SASS')}/>            
            SASS
          </label>
          <label className='checkboxLabels'>
            <input className='checkbox'
            type="checkbox"
            checked={this.state.jq}
            onChange={this.handleCheck('AJAX')}/>            
            AJAX
          </label>
        </form>
        <div className='portfolio'>
        	{works}
        </div>
        <ContinueLink to='Contact' y={this.state.scrollPos}/>
      </div>
    );
  }
  
}