import React, { Component } from 'react';
import { Link } from 'react-router';

import NavLink from './NavLink';


export default class Portfolio extends Component {

  render() {
    return (
      <div>
        <h1>PORTFOLIO</h1>
        <ul>
        	<li><NavLink to='/portfolio/project1'>Project 1</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
  
}