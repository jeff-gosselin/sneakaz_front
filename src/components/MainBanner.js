import React, {Component} from 'react';
import '../css/MainBanner.css'

class MainBanner extends Component {

	render() {
		const images = require.context('../images', true);

		return (

				<img className="banner" src={images('./banner_14.jpg')} alt=""/>

		)
	}
}


export default MainBanner
