import React from 'react';
import { Link } from 'react-router';


export default (props) => {
    let innerHeight = window.innerHeight;
    let bodyHeight = document.body.offsetHeight;
  		return (

		<div className='continue' style={ props.y + innerHeight >= bodyHeight-100 ? {opacity: '1'}:{opacity: '0'}}>
      <h4> Continue to {props.to}... </h4>
      <Link to={props.to}><i className="fa fa-3x fa-arrow-right" aria-hidden="true"></i></Link>
    </div>
    )
}