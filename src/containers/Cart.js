import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartItem from './CartItem';
import {Link} from 'react-router-dom';

class Cart extends Component {

	// goToCheckout = () => {
	// 	console.log("GO!!");
	// 	return <Redirect to="/checkout"/>
	// }

	render() {
		const itemPrices = this.props.currentOrder.map(item => item.total);
		let cartTotal = itemPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2);
		console.log("cart total:",cartTotal);
		const orderItems = this.props.currentOrder.map(item => <CartItem key={item.id} item={item} sneakers={this.props.sneakers}/>);

		return (
			<div>
				<div className="order-items">{orderItems}</div>
				<div>

						<Link className="checkout" to={`/checkout`}>Go to Checkout</Link>
					<span className="cart-total">Total: &nbsp; ${cartTotal}</span>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	currentOrder: state.shopper.currentOrder,
	sneakers: state.sneakers.sneakers
})

export default connect(mapStateToProps)(Cart)
