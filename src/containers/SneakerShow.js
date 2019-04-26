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
		size: 0,
		message: false
	}

	decreaseQty = () => {
		this.setState({
			qty: this.state.qty > 1 ? this.state.qty - 1 : 1
		})
	}

	increaseQty = () => {
		this.setState({
			qty: this.state.qty + 1
		})
	}

	changeSize = (e) => {
		console.log("Sneaker Size: ", e.target.value);
		
		this.setState({
			size: e.target.value,
			message: false
		})
	}

	showMessage = () => {
		this.setState({
			message: true
		})
	}

	render() {
		const {name, category, price, brand, image, id} = this.props.sneaker
		const images = require.context('../images/sneakers', true);
		
		return (
			<div  className="sneaker-show">
				<img className="sneaker-image-large" src={images(`./${brand}/${image}`)} alt=""/>
				<div className="sneaker-ui">
				{ this.state.message ? <div className="message"><p>Please select a size.</p></div> : null }
					<img className="brand-logo" src={images(`./logos/${brand}_logo.png`)} alt={brand}/>
					<div className="brand-corner">
						<div className="price-section">
							<h2 className="price">${price}</h2>
						</div>
					</div>
					<h2 className="float-me-left sneaker-name">{name}</h2>
					<h3 className="ui-category">{category}</h3>
					<QuantitySelector increaseQty={this.increaseQty} decreaseQty={this.decreaseQty} qty={this.state.qty}/>
					<SizeSelector changeSize={this.changeSize} />

					{localStorage.token ? 
					<button onClick={() => {

						this.state.size !== 0 && this.state.size !== "SIZE" ? 
						this.props.addToOrder({quantity: this.state.qty, size: this.state.size, sneaker: this.props.sneaker})
						: this.showMessage()
						
					
					}}  

					className="float-me-right add-to-cart">Add to Cart</button> 
					: <Link className="login-to-buy" to="/login">Log In To Buy</Link>
					
					}




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
