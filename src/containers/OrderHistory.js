import React, { Component } from 'react';
import {connect} from 'react-redux';
import CartItem from './CartItem';
import '../css/Checkout.css';
import {Link} from 'react-router-dom';
import {Redirect, withRouter} from 'react-router-dom';
import Order from './Order'

class OrderHistory extends Component {
	state = {
		orderHistory: []
	}
	
	componentDidMount = () => {
		fetch('http://localhost:3000/api/v1/orders',{
			method: 'GET',
			headers: {
			  'Content-Type': 'application/json',
			  Accept: 'application/json',
			  Authorization: `Bearer ${localStorage.token}`
			}
		  })
		.then(res => res.json())
		.then(data => {
			
			console.log("this.props.shopper.id", this.props.shopper.id);

			if(localStorage.token) {
				const thisShoppersOrders = data.filter(order =>  order.shopper_id === this.props.shopper.id );
				const orderHistory = thisShoppersOrders.filter(order => order.total !== 0).reverse();

				return this.setState({ orderHistory })
			}
			
			
			
		})
		
	}

	render() {
		if (!localStorage.token) {
			return <Redirect to="/"/>
		}

		console.log("Shopper Order History: ", this.state.orderHistory);

		// const completedOrders = this.props.orders.filter(order => order.total !== 0);
		
		// const orderList = completedOrders.map(order => <Order key={order.id} total={order.total} orderId={order.id} />).reverse();
		const orderList = this.state.orderHistory.map(order => <Order key={order.id} total={order.total} orderId={order.id} />);
		console.log("BigBang!!!");
		
		return (
			<div className="order-page-wrapper">
				<div className="orders-wrapper">
					<div className="order-header">
						<h3>Most Recent Order</h3>
						<span>Date</span>
						<span>Order #</span>
						<span>Total</span>
						<span className="order-refresh" onClick={() => window.location.reload(true)}>Refresh</span>
						<hr />
					</div>

					<div className="history">
						{orderList[0]}		
					</div>

				</div>
				<div className="orders-wrapper">
				<div className="order-header">
					<h3>Previous Orders</h3>
					<span>Date</span>
					<span>Order #</span>
					<span>Total</span>
					<hr />
				</div>

				<div className="history">
					{orderList.slice(1)}		
				</div>

			</div>
		</div>

			
		)
	}
}

const mapStateToProps = (state) => ({
	orders: state.shopper.orders,
	currentOrder: state.shopper.currentOrder,
	shopper: state.shopper.shopper
})

export default connect(mapStateToProps)(OrderHistory)
