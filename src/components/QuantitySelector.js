import React, {Component} from 'react';


class QuantitySelector extends Component {



	render() {
		return (
			<div className="qty-comp">
				<button className="qty-btnL" onClick={() => this.props.decreaseQty()}>-</button>
				<p className="qty-num">{this.props.qty}</p>
				{this.props.qty > 1 ? <p className="qty shift">PAIRS</p> : <p className="qty">PAIR</p> }
				<button className="qty-btnR" onClick={() => this.props.increaseQty()}>+</button>
			</div>
		)
	}
}

export default QuantitySelector
