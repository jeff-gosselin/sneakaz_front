import React, { Component } from 'react';
import {connect} from 'react-redux';
import CartItem from './CartItem';
import '../css/Checkout.css';
import {Link} from 'react-router-dom';
import {Redirect, withRouter} from 'react-router-dom';
import Order from './Order'

class OrderHistory extends Component {
	
	

	render() {
		
		const completedOrders = this.props.orders.filter(order => order.total !== 0);

		const orderList = completedOrders.map(order => <Order key={order.id} total={order.total} orderId={order.id} />).reverse();
		
		return (

			<div className="orders-wrapper">
				<div className="order-recent">
					<h3>Most Recent Order</h3>
					<span>Date</span>
					<span>Order #</span>
					<span>Total</span>
					<hr />
				</div>

				<div className="history">
					{orderList}		
				</div>

			</div>
			
		)
	}
}

const mapStateToProps = (state) => ({
	orders: state.shopper.orders
})

export default connect(mapStateToProps)(OrderHistory)
