import React, { Component } from 'react';

class SneakerItem extends Component {
	render() {
		console.log("sneaker item:",this.props);
		return (
			<div>
				<h2>{this.props.sneaker}</h2>
				<img src={require('../images/sneakers/adidas/test01.jpg')} alt="" />

			</div>
		)
	}
}

export default SneakerItem

// change img tag to <img src={require(`..${this.props.sneaker.image}`)} alt="" />
