import React, {Component} from 'react';


class QuantitySelector extends Component {



	render() {
		return (
			<div>
				<button className="qty-btn" onClick={() => this.props.decreaseQty()}>-</button>
				<p className="qty-num">{this.props.qty}</p>
				<button className="qty-btn" onClick={() => this.props.increaseQty()}>+</button>
			</div>
		)
	}
}

export default QuantitySelector
