import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSneakers} from '../Redux/actions/action-sneakers';
import CartItem from './CartItem';
import '../css/Checkout.css';
import {Link} from 'react-router-dom';
import {Redirect, withRouter} from 'react-router-dom';
import Order from './Order';


class OrderHistory extends Component {
	state = {
		orderHistory: [],
		orderedItems: []
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
			
			console.log("data: ", data);
			console.log("this.props.shopper.order_items: ", this.props.shopper.order_items);


			if(localStorage.token) {
				const thisShoppersOrders = data.filter(order =>  order.shopper_id === this.props.shopper.id );
				const orderHistory = thisShoppersOrders.filter(order => order.total !== 0).reverse();
				const orderedItems = this.props.shopper.order_items;
				const shopperItems = orderHistory.map(order => order.order_items);
				
			
				
				
				return this.setState({ 
					orderHistory, 
					orderedItems: shopperItems.flat()
				
				})
			}
				
		})
		
	}

	render() {
		if (!localStorage.token) {
			return <Redirect to="/"/>
		}


		const orderList = this.state.orderHistory.map(order => <Order key={order.id} date={order.date} total={order.total} orderId={order.id} orderedItems={this.state.orderedItems} />);
		
		
		return (
			<div className="order-page-wrapper">
				<div className="orders-wrapper">
					<div className="order-header">
						<h3>Most Recent Order</h3>
						<span>Order #</span>
						<span>Date</span>
						<span>Total</span>
						<hr />
					</div>

					<div className="history">
						{orderList[0]}		
					</div>

				</div>

				<div className="orders-wrapper">
					<div className="order-header">
						<h3>Previous Orders</h3>
						<span>Order #</span>
						<span>Date</span>
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
