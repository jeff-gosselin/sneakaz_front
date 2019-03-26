import React, {Component} from 'react';
import '../css/cart.css'
// import {connect} from 'react-redux';
const images = require.context('../images/sneakers', true);



class CartItem extends Component {
	render() {
		const {qty, image, total, item_id } = this.props.item;
		let sneakerImageTag = null;
		let sneakerName = null;
		if(this.props.sneakers.length > 0) {
			const sneaker = this.props.sneakers.find( sneaker => sneaker.id === item_id);
			sneakerImageTag = <img className="cart-img" alt="" src={images(`./${sneaker.brand}/${sneaker.image}`)}/>;
			sneakerName = <span className="cart-item-name">{sneaker.name}</span>;

		}

		return (
			<div>
				<div className="cart-item">
					<span className="cart-qty">{qty} x </span>
					{sneakerImageTag}
					{sneakerName}
					<span className="cart-price">${total}</span>
				</div>

			</div>
		)
	}
}



export default CartItem

// {sneaker !== null ? <img alt="" src={images(`./${sneaker.brand}/${sneaker.image}`)}/> : null
//  }
