 import React, { Component } from 'react';
import {connect} from 'react-redux';
import CartItem from './CartItem';
import '../css/Checkout.css';
import {Link} from 'react-router-dom';
import {completeOrder} from '../Redux/actions/action-shoppers';
import {Redirect, withRouter} from 'react-router-dom'


class Payment extends Component {
	state = {
		card: null
	}

	cardtype = (e,cardName) => {
		this.setState({
			card: cardName
		})
	}

	submitOrder = (e, cartTotal) => {
		e.preventDefault();
		console.log("Your order has been submitted: ", this.props.orders[this.props.orders.length - 1].id);
		let orderId = this.props.orders[this.props.orders.length - 1].id;
		return this.props.makePurchase(orderId, cartTotal)
	}
	render() {
		console.log("card: ", this.state.card);
		if(this.props.newOrderCreated) {
			return <Redirect to="/orders"/>
		}
		
		const itemPrices = this.props.currentOrder.map(item => item.total);
		let cartTotal = itemPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2);
		console.log("cart total:",cartTotal);
		const orderItems = this.props.currentOrder.map(item => <CartItem key={item.id} item={item} sneakers={this.props.sneakers}/>);

		return (
			<div className="log-form">
				<form className="signup-form" onSubmit={(e) => this.submitOrder(e, cartTotal)}>
					<h3 className="log-header">Select Payment Method</h3>
					<div className="creditcards">
						<div className={this.state.card === 'visa' ? "selected" : "cc"} name="visa" onClick={(e) => this.cardtype(e, "visa")}>VISA</div>
						<div className={this.state.card === 'master' ? "selected" : "cc"} name="master" onClick={(e) => this.cardtype(e, "master")}>MASTER</div>
						<div className={this.state.card === 'amex' ? "selected" : "cc"} name="amex" onClick={(e) => this.cardtype(e, "amex")}>AMEX</div>
					</div>
					<br />
					<p><input name="street" type="text" placeholder="Credit Card Number" required/></p>
					<p><input name="Town" type="text" placeholder="Expiry Date MM/YY" required/></p>
				
					<p><button type="submit" className="btn-su">Make Purchase</button></p>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	currentOrder: state.shopper.currentOrder,
	sneakers: state.sneakers.sneakers,
	orders: state.shopper.orders
})

const mapDispatchToProps = (dispatch) => ({
	makePurchase: (orderId, cartTotal) => dispatch(completeOrder(orderId, cartTotal))
})

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
