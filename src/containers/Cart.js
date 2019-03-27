import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartItem from './CartItem';


class Cart extends Component {
	render() {
		const itemPrices = this.props.currentOrder.map(item => item.total);
		let cartTotal = itemPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		console.log("cart total:",cartTotal);
		const orderItems = this.props.currentOrder.map(item => <CartItem key={item.id} item={item} sneakers={this.props.sneakers}/>);


		return (
			<div>
				<div>{orderItems}</div>
				<div><button>Checkout</button> <span className="cart-total">${cartTotal}</span></div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	currentOrder: state.shopper.currentOrder,
	sneakers: state.sneakers.sneakers
})

export default connect(mapStateToProps)(Cart)
