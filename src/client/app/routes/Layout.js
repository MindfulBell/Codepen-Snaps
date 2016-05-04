import React, {Component} from 'react';
import NavLink from './NavLink';
import NavBar from './NavBar'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Layout extends Component {

  render() {
    return (
      <div>
        <NavBar />
				<div>
          <ReactCSSTransitionGroup transitionName='pageShift' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
		        {React.cloneElement(this.props.children, 
              {key: this.props.location.pathname})}
          </ReactCSSTransitionGroup>
		    </div>
      </div>

    );
  }  
}