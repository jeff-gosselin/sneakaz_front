import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartItem from './CartItem';


class Cart extends Component {
	render() {
		// console.log("cart:",this.props);
		const orderItems = this.props.currentOrder.map(item => <CartItem key={item.id} item={item} sneakers={this.props.sneakers}/>)
		return (
			<div>{orderItems}</div>
		)
	}
}

const mapStateToProps = (state) => ({
	currentOrder: state.shopper.currentOrder,
	sneakers: state.sneakers.sneakers
})

export default connect(mapStateToProps)(Cart)
