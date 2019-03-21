import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import '../css/App.css';
import Login from '../containers/Login';
import Sneakers from '../containers/Sneakers';
import TopNav from '../containers/TopNav';
import MainBanner from './MainBanner';
import {connect} from 'react-redux';
import {getShopperWithToken} from '../Redux/actions/action-shoppers'

class App extends Component {
	componentDidMount() {
		if(localStorage.token) {this.props.getShopperWithToken()}
	 }


  render() {
		console.log(this.props.store);
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

const mapDispatchToProps = (dispatch) => {
	return {
		getShopperWithToken: () => dispatch(getShopperWithToken())
	}
}

export default connect(null, mapDispatchToProps)(App);
