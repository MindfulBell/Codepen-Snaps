import React, { Component } from 'react';
import { Link } from 'react-router'


export default class Portfolio extends Component {

  render() {
    return (
      <div>
        <h1>PORTFOLIO</h1>
        <ul>
        	<li><Link to='/portfolio/project1'>Project 1</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
  
}