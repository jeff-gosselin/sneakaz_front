import React, { Component } from 'react';
import '../css/Checkout.css';


class Order extends Component {
	
	

	render() {
		
        console.log("Order Component:", this.props.updated_at);
        
		return (
			
				<div className="order">
                    <p className="order-number">{this.props.orderId}</p>
                    <h3 className="order-total">{this.props.total}</h3>
                    <span className="order-dropdown-arrow">v</span>
				</div>
			
		)
	}
}



export default Order

{/* <div className="log-form">
            <h3>{this.props.total}</h3>
				<div className="signup-form">
						
				</div>
			</div> */}