import React, { Component } from 'react';

export default class Checkbox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			checked: true
		}
	}

	render() {
		return (
			<div style={{display: 'inline-block', margin: '3px'}}>			
				<input className='checkbox'
					id={this.props.id}
	        type="checkbox"
	        checked={this.state.checked}
	        onChange={(e) => {this.setState({checked: !this.state.checked})}}
	      />
	      <label htmlFor={this.props.id} className='checkboxLabels'>{this.props.label}
	      </label> 
      </div>
		)
	}
}