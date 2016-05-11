import React, { Component } from 'react';
import { Link } from 'react-router';
import portfoliodata from '../portfoliodata'
import PortfolioPiece from './Portfolio-Piece'
import Checkbox from '../Checkbox'

import NavLink from './NavLink';
import ContinueLink from '../continue-link'


export default class Portfolio extends Component {
  
  constructor(props){
    super(props);
    this.state={
      scrollPos: 0,
      isMounted: false,
      show: []
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount(){
    this.setState({isMounted: true})
    window.addEventListener('scroll', this.handleScroll);
    this.handleChange();
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

  handleChange(){
    let inputs = document.getElementsByClassName('checkbox')
    let show = [];
    for (let i=0; i<inputs.length; i++) {
      if (inputs[i].checked) {
        show.push(inputs[i].nextSibling.textContent)
      }
    }
    this.setState({show})
  }


  render() {

    let works = portfoliodata.filter((piece)=>{
      //for each element in piece.skills, Change if that is present in state.show
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
                skills={piece.skills.split(',').join(', ')} 
                time={piece.time} 
                code={piece.github}
                link={piece.active} />       
        )
    })

    let labels = ['JavaScript', 'jQuery', 'React', 'Redux', 'Bootstrap', 'AJAX', 'SASS']
    let Checkboxes = labels.map((label, ind)=>{
      return(
        <Checkbox
        id={label} 
        key={ind}
        label={label}
        />
      )
    })

    return (
      <div className='portfolioPage container-fluid'>
        <h1 className='heading'>PORTFOLIO</h1>
        <form id='myForm' 
        style={{textAlign: 'center'}}
        onChange={this.handleChange}>
          {Checkboxes}
        </form>
        <div className='portfolio'>
        	{works}
        </div>
        <ContinueLink to='Contact' y={this.state.scrollPos}/>
      </div>
    );
  }
  
}