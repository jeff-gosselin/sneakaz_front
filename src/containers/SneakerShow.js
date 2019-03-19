import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectedSneaker} from '../Redux/actions/action-sneakers'
import '../css/sneakers.css';

class SneakerShow extends Component {

	render() {
		console.log("Props?", this.props);
		const {name, category, price, brand, image, id} = this.props.sneakerReactProp
		const images = require.context('../images/sneakers', true);

		return (
			<div  className="sneaker-show">
				<img className="sneaker-image-large" src={images(`./${brand}/${image}`)} alt=""/>
				<div className="sneaker-ui">
					<div><img className="brand-logo" src={images(`./logos/${brand}_logo.png`)} alt={brand}/></div>
					<h2 className="float-me-left sneaker-name">{name}</h2>
					<h2 className="float-me-right">{price}</h2>
					<button className="float-me-right">Add to Cart</button>
				</div>
			</div>
		)
	}
}

// const mapStateToProps = (state) => ({
// 	selectedSneaker: state.selectedSneaker
// })




export default connect()(SneakerShow);

// <p>{name}</p>
// <p>{category}</p>
// <p>{price}</p>
// <img className="sneaker-image-large" src={images(`./${brand}/${image}`)} alt=""/>




// console.log(this.props);
// //if(clicked {dont do this} else if not clicked do as normal)
// const theSneaker = this.props.allSneakers.filter(sneaker => sneaker.id === this.props.sneaker_id);
// const {name, category, price, brand, image, id} = theSneaker[0];
// console.log("theSneaker[0]",theSneaker[0]);
