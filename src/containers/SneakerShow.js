import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addToOrder} from '../Redux/actions/action-shoppers';
// import {selectedSneaker} from '../Redux/actions/action-sneakers'
import '../css/sneakers.css';
// import {Route, Switch} from 'react-router-dom';
import {Redirect, withRouter} from 'react-router-dom';
import QuantitySelector from '../components/QuantitySelector';
import SizeSelector from '../components/SizeSelector';


class SneakerShow extends Component {

	state = {
		qty: 1,
		size: 0
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

	changeSize = (e) => {
		console.log("Size!!!!!!!!!!!!!!!!!!",e.target.value);
		this.setState({
			size: e.target.value
		})
	}

	render() {
		console.log("Props?", this.props);
		const {name, category, price, brand, image, id} = this.props.sneaker
		const images = require.context('../images/sneakers', true);

		return (
			<div  className="sneaker-show">
				<img className="sneaker-image-large" src={images(`./${brand}/${image}`)} alt=""/>
				<div className="sneaker-ui">
					<div className="brand-corner"><img className="brand-logo" src={images(`./logos/${brand}_logo.png`)} alt={brand}/></div>
					<h2 className="float-me-left sneaker-name">{name}</h2>
					<QuantitySelector increaseQty={this.increaseQty} decreaseQty={this.decreaseQty} qty={this.state.qty}/>
					<SizeSelector changeSize={this.changeSize}/>
					<h2 className="float-me-right">{price}</h2>
					{localStorage.token ? <button onClick={() => this.props.addToOrder({quantity: this.state.qty, size: this.state.size, sneaker: this.props.sneaker})} className="float-me-right">Add to Cart</button> : <Link to="/login">Log In To Buy</Link>}




				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addToOrder: itemObj => dispatch(addToOrder(itemObj)),
		removeFromCart: (itemObj) => {
			dispatch({ type: 'REMOVE_FROM_CART', payload: itemObj })
		}
	}
}


export default connect(null, mapDispatchToProps)(withRouter(SneakerShow));
