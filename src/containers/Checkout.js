import React, { Component } from 'react';
import {connect} from 'react-redux';
import CartItem from './CartItem';
import '../css/Checkout.css'

class Checkout extends Component {
	render() {
		const itemPrices = this.props.currentOrder.map(item => item.total);
		let cartTotal = itemPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		console.log("cart total:",cartTotal);
		const orderItems = this.props.currentOrder.map(item => <CartItem key={item.id} item={item} sneakers={this.props.sneakers}/>);

		return (
			<div className="order-page">
				<h1>This is when you would submit payment</h1>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	currentOrder: state.shopper.currentOrder,
	sneakers: state.sneakers.sneakers
})

export default connect(mapStateToProps)(Checkout)

// <div className="order">
// 		<div className="order-page-item">{orderItems}</div>
// 			<div>
//
// 					<button className="checkout">Purchase</button>
//
// 				<span>Total: &nbsp; ${cartTotal}</span>
// 			</div>
// </div>
