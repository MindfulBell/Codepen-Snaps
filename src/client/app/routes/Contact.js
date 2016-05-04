import React, { Component } from 'react';

export default class Contact extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: '',
			clicked: false,
			style: {  width: '100%', height: '300px', boxShadow: '0px 0px 8px #5bc0de' },
			emailSent: false,
			header: 'Let\'s Connect!'
		}
	}

	handleChange(value){
		this.setState({value})
	}

	handleClick(){
		this.setState({clicked: !this.state.clicked})
	}

	handleSubmit(){

	}

  render() {
  	let anchor = `mailto:tim.bell02@gmail.com?&body=${this.state.value}`
    return (
    	<div className='container-fluid contact'>
    		<h1 className='heading'>Contact</h1>
	      <div className="container container-fluid btn-grp">
	      	<div className='link-wrapper'>
		        <a href="https://www.facebook.com/TheTimBell" 
		        className="btn btn-lg btn-primary" 
		        target="_blank">
			        <i className="fa fa-facebook-square fa-2x" >
			        </i>Facebook
		        </a>
		      </div>
		      <div className='link-wrapper'>
		        <a href="https://twitter.com/MindfulBell" 
		        className="btn btn-lg btn-primary"
		        target="_blank">
			        <i className="fa fa-twitter-square fa-2x">
			        </i>Twitter
		        </a>
		      </div>
		        <div className='link-wrapper'>
		        <a href="https://www.linkedin.com/in/timbell02" 
		        className="btn btn-lg btn-primary" 
		        target="_blank">
			        <i className="fa fa-linkedin-square fa-2x">
			        </i>LinkedIn
		        </a>
		      </div>
		      <div className='link-wrapper'>
		        <a href="https://github.com/MindfulBell" 
		        className="btn btn-lg btn-primary"
		        target="_blank">
			        <i className="fa fa-github-square fa-2x">
			        </i>GitHub
		        </a>
		      </div>
	    </div>
	    <div className='email-form-group'>
	    	<h3 className='heading'>
	    		{this.state.header}
	    	</h3>
	    	<button 
	    	className='btn btn-lg btn-info'
	    	onClick={this.handleClick.bind(this)}
	    	style={this.state.clicked ? {opacity: .2}:{opacity: 1}}>
	    	<i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
	    	</button>
	    	<div className='email'>
		    	<textarea className='email-message' 
		    	type="text" 
		    	placeholder='Write your email here...'
		    	value={this.state.value} 
		    	onChange={(e)=>{this.handleChange(e.target.value)}}
		    	style={this.state.clicked ? this.state.style : {}}/>
		    </div>

	    	<a href={anchor}
	    	id='send'
	    	className="btn btn-lg btn-info"
	    	style={this.state.clicked ? {opacity: 1} : {opacity: 0}}
	    	onClick={this.handleClick.bind(this)}>
	    		<i className="fa fa-paper-plane fa-2x"></i>
	    	</a>
	    </div>
    </div>
    );
  }
  
}


