import React, { Component } from 'react';
import {connect} from 'react-redux';
import CartItem from './CartItem';
import '../css/Checkout.css';
import {Link} from 'react-router-dom';
import {Redirect, withRouter} from 'react-router-dom';

class Address extends Component {
	
	storeAddress = (e) => {
		e.preventDefault();
		console.log("Hello...", e.target.shipStreet.value);
		
		localStorage.setItem('shippingAddress', `${e.target.shipStreet.value}, ${e.target.shipTown.value}`)
		this.props.history.push('/payment');
	}

	render() {
		// const itemPrices = this.props.currentOrder.map(item => item.total);
		// let cartTotal = itemPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		// const orderItems = this.props.currentOrder.map(item => <CartItem key={item.id} item={item} sneakers={this.props.sneakers}/>);

		return (
			<div className="log-form">
				<form onSubmit={this.storeAddress} className="signup-form">
					<h3 className="log-header">Enter Shipping Address:</h3>
					<p><input name="shipStreet" type="text" placeholder="Street Address" required/></p>
					<p><input name="shipTown" type="text" placeholder="Town, State, and Zipcode" required/></p>
					<p><input id="chkbx" type="checkbox" /><span>Use shipping address as billing address</span></p>
					<br />
					<h3 className="log-header">Enter Billing Address:</h3>
					<p><input name="billStreet" type="text" placeholder="Street Address" required/></p>
					<p><input name="Town" type="text" placeholder="Town, State, and Zipcode" required/></p>
					<p><button className="btn-su" >Choose Payment Method</button></p>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	currentOrder: state.shopper.currentOrder,
	sneakers: state.sneakers.sneakers
})

export default connect(mapStateToProps)(Address)
