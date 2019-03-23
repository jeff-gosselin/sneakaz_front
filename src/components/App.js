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

class App extends Component {
	componentDidMount() {
		if(localStorage.token) {this.props.getShopperWithToken()}
	 }


  render() {
		console.log("-> ->",this.props);
		// if(this.props.currentShopper.orders == undefined) {
		// 	return null
		// } else {
		// 	let orders = this.props.currentShopper.orders;
		// 	if(orders.length === 0 || orders[orders.length - 1].complete === true) {
		// 		console.log("Inside");
		// 		this.props.createNewOrder()};
		// }

    return (
			<div>
				<TopNav />
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/sneakers' component={Sneakers} />
					<Route path='/sneakers/mens' component={Sneakers} />
					<Route path='/sneakers/womens' component={Sneakers} />
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
	order_num: state.order_num
})


const mapDispatchToProps = (dispatch) => {
	return {
		getShopperWithToken: () => dispatch(getShopperWithToken())
		// createNewOrder: () => dispatch(createNewOrder())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
