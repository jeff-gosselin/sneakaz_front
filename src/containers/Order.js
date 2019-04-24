import React, { Component } from 'react';
import '../css/Checkout.css';
import {connect} from 'react-redux';
import { FaChevronDown } from 'react-icons/fa';

class Order extends Component {
	state = {
		myOrders: []
	}
	componentDidMount = () => {
		this.setState({
			myOrders: this.props.orders
		})
	  }
	

	render() {
		
		console.log("BANG!", this.props);
        
		return (
			
				<div className="order">

                    <p className="order-number">{this.props.orderId}</p>
					<p className="order-date">{this.props.date}</p>
                    <h3 className="order-total">{this.props.total}</h3>
                    <span className="order-dropdown-arrow">< FaChevronDown /></span>
				</div>
			
		)
	}
}

const mapStateToProps = (state) => ({
	orders: state.shopper.orders
})

export default connect(mapStateToProps)(Order)

{/* <div className="log-form">
            <h3>{this.props.total}</h3>
				<div className="signup-form">
						
				</div>
			</div> */}