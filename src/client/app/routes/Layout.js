import React, {Component} from 'react';
import NavLink from './NavLink';
import NavBar from './NavBar'


export default class Layout extends Component {

  render() {
    return (
      <div>
        <NavBar />
				<div>
		        {this.props.children}
		    </div>
      </div>

    );
  }
  
}