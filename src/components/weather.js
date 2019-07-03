import React from 'react';

// class Weather extends Component {
// 	render () {
// 		return(
// 			<div>
// 				{ this.props.city && this.props.country && <p>Location : { this.props.city }, { this.props.country }</p> }
// 				{ this.props.temperature && <p>Temperature : { this.props.temperature }</p> }
// 				{ this.props.humidity && <p>Humidity : { this.props.humidity }</p> }
// 				{ this.props.description && <p>Conditions : { this.props.description }</p> }
// 				{ this.props.error && <p>Warning : { this.props.error }</p> }
				
// 			</div>
// 		);
// 	}
// }

//Stateless function

const Weather = props => (
	<div className="weather-info">
		{ props.city && props.country && 
			<p className="info-title">Location : 
			<span className="info-dtl">{ props.city }, { props.country }</span></p> 
		}
		{ props.temperature && 
			<p className="info-title">Temperature :
			<span className="info-dtl"> { props.temperature }</span></p> 
		}
		{ props.humidity && 
			<p className="info-title">Humidity : 
			<span className="info-dtl">{ props.humidity }</span></p> 
		}
		{ props.description && 
			<p className="info-title">Conditions :
			<span className="info-dtl">{ props.description }</span></p> 
		}
		{ props.error && 
			<p className="info-title">Warning : 
			<span className="info-dtl">{ props.error }</span></p> 
		}
				
	</div>
)

export default Weather;