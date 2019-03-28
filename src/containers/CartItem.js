import React, {Component} from 'react';
import '../css/cart.css';
import {connect} from 'react-redux';
import {deleteFromCart} from '../Redux/actions/action-shoppers';
const images = require.context('../images/sneakers', true);



class CartItem extends Component {
	render() {
		const {qty, image, total, item_id, id} = this.props.item;
		let sneakerImageTag = null;
		let sneakerName = null;
		if(this.props.sneakers.length > 0) {
			const sneaker = this.props.sneakers.find( sneaker => sneaker.id === item_id);
			sneakerImageTag = <img className="cart-img" alt="" src={images(`./${sneaker.brand}/${sneaker.image}`)}/>;
			sneakerName = <span className="cart-item-name">{sneaker.name}</span>;

		}

		return (
			<div className="cart-item-wrapper">
				<div className="cart-item">
					<span className="cart-qty">{qty} x </span>
					{sneakerImageTag}
					{sneakerName}
					<span className="cart-price">${total.toFixed(2)}</span>
					<button className="cart-btn" onClick={() => this.props.deleteFromCart(id)}>x</button>
				</div>

			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	deleteFromCart: itemId => dispatch(deleteFromCart(itemId))
})

export default connect(null, mapDispatchToProps)(CartItem)

// onClick={() => deleteFromCart(id)}
