import React, {Component} from 'react';
import NavLink from './NavLink';


export default class Layout extends Component {

  render() {
    return (
      <div>
        <div className='navbar navbar-default navbar-fixed-top'>
  				<div className='container-fluid'>
  					<button className='navbar-toggle' data-toggle='collapse' data-target='.navHeaderCollapse'>
				      <span className='icon-bar'></span>
				      <span className='icon-bar'></span>
				      <span className='icon-bar'></span>
    				</button>    
    				<div className='collapse navbar-collapse navHeaderCollapse'>      
				      <ul className='nav navbar-nav navbar-right'>
				          <li><NavLink to='/Home-About'>Home-About <i className="fa fa-home fa-2x" aria-hidden="true"></i></NavLink></li>
				        	<li><NavLink to='/Portfolio'>Portfolio <i className="fa fa-paint-brush fa-2x" aria-hidden="true"></i></NavLink></li>
				        	<li><NavLink to='/Contact'>Contact <i className="fa fa-envelope fa-2x" aria-hidden="true"></i></NavLink></li>
				      </ul>
				    </div>
				  </div>
				</div>
				<div style={{marginTop: '100px'}}>
	        	{this.props.children}
	      </div>
      </div>

    );
  }
  
}