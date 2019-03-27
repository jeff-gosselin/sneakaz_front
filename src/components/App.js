import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import '../css/App.css';
import Login from '../containers/Login';
import Sneakers from '../containers/Sneakers';
import TopNav from '../containers/TopNav';
import MainBanner from './MainBanner';
import {connect} from 'react-redux';
import {getShopperWithToken} from '../Redux/actions/action-shoppers';
import {createNewOrder} from '../Redux/actions/action-shoppers';
import Checkout from '../containers/Checkout';
// import {createANewOrder} from '../Redux/actions/action-shoppers';

class App extends Component {
	componentDidMount() {
		if(localStorage.token) {this.props.getShopperWithToken();}
	 }

	checkOrderStatus = () => {
		let orders = this.props.orders;
		console.log("My orders:", orders);

		if (orders.length < 1 || orders[orders.length - 1].complete === true) {
			console.log("Starting new order");
			return this.props.createNewOrder();
		}

	}





  render() {
		let shopper = this.props.currentShopper;

		if (localStorage.token && Object.keys(shopper).length > 0) {
			this.checkOrderStatus();
		}

    return (
			<div>
				<TopNav />
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/sneakers' component={Sneakers} />
					<Route path='/sneakers/mens' component={Sneakers} />
					<Route path='/sneakers/womens' component={Sneakers} />
					<Route path='/checkout' component={Checkout} />
					<Route exact path='/' render={() => {
						return <div><MainBanner /><Sneakers /></div>
					}} />
				</Switch>
			</div>
    );
  }
}


const mapStateToProps = state => ({
	currentShopper: state.shopper.shopper,
	orders: state.shopper.orders
})


const mapDispatchToProps = (dispatch) => {
	// console.log("STORE", store.getState);
	return {
		getShopperWithToken: () => dispatch(getShopperWithToken()),
		createNewOrder: () => dispatch(createNewOrder())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
