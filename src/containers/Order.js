import React, { Component } from 'react';
import '../css/Checkout.css';
import {connect} from 'react-redux';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {fetchSneakers} from '../Redux/actions/action-sneakers';
import {getShopperWithToken} from '../Redux/actions/action-shoppers';
import Item from './Item';

class Order extends Component {
	state = {
		// orderedItems: [],
		expand: false
	}

	componentDidMount = () => {
		
		this.props.dispatch(fetchSneakers());
		

		// this.setState({
		// 	orderedItems: this.props.orderedItems.filter( item => item.order_id === this.props.orderId)
		// })
	}
	
	clickHandler = () => {

		this.setState({
			expand: !this.state.expand,
		})
	}

	render() {
		console.log("Clicked: ", this.state.expand);
		
		
		console.log("All of the items: ", this.props.allItems);
		const itemsInOrder = this.props.orderedItems.filter( item => item.order_id === this.props.orderId)
		console.log("itemsInOrder", itemsInOrder);
		
		console.log("Ordered Items: ", this.props.orderedItems);
		console.log("this.props.orderId", this.props.orderId);
		
		const items = itemsInOrder.map(item => <Item key={item.id} item={item} allItems={this.props.allItems} />);
		
		return (
			
				<div className="order">

                    <p className="order-number">{this.props.orderId}</p>
					<p className="order-date">{this.props.date}</p>
                    <h3 className="order-total">${this.props.total}</h3>
					<span onClick={this.clickHandler} className="order-dropdown-arrow">{this.state.expand ? < FaChevronUp /> : < FaChevronDown />}</span>
					{this.state.expand ? <div className="order-history-items">{items}</div> : null}

				</div>
			
		)
	}
}

const mapStateToProps = (state) => ({
	orderItems: state.shopper.shopper.order_items,
	allItems: state.sneakers.sneakers,
	shopper: state.shopper.shopper
})


export default connect(mapStateToProps)(Order)

{/* <div className="log-form">
            <h3>{this.props.total}</h3>
				<div className="signup-form">
						
				</div>
			</div> */}