import React, { Component } from 'react';

class Form extends Component {
	render () {
		return(
			<form onSubmit={this.props.getWeather}>
				<input className="textbox" type="text" name="city" placeholder="City..." />
				<input className="textbox" type="text" name="country" placeholder="Country..." />
				<button className="submit-btn">Get Weather</button>
			</form>
		);
	}
};

export default Form;