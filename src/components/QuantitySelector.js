import React, {Component} from 'react';

class QuantitySelector extends Component {

	state = {
		qty: 1
	}

	decreaseQty = () => {
		console.log("-");
		this.setState({
			qty: this.state.qty > 1 ? this.state.qty - 1 : 1
		})
	}

	increaseQty = () => {
		console.log("+");
		this.setState({
			qty: this.state.qty + 1
		})
	}

	render() {
		return (
			<div>
				<button className="qty-btn" onClick={() => this.decreaseQty()}>-</button>
				<p className="qty-num">{this.state.qty}</p>
				<button className="qty-btn" onClick={() => this.increaseQty()}>+</button>
			</div>
		)
	}
}

export default QuantitySelector
