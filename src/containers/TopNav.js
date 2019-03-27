import React, {Component} from 'react';
import '../css/topNav.css';
import {connect} from 'react-redux';
// import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Redirect, withRouter} from 'react-router-dom';
import Cart from './Cart';

class TopNav extends Component {

	state = {
		loggedIn: !!localStorage.token,
		logInClicked: '',
		searchActivate: false
	}

	logIn = () => {
		this.setState({
			logInClicked: "log me in"
		})
	}

	logOut = () => {
		localStorage.clear();
		this.setState({
			loggedIn: !!localStorage.token,
			logInClicked: ''
		})
	}

	searchRedirect = () => {
		this.setState({
			searchActivate: !this.state.searchActivate
		})
	}


	render() {

		if(this.state.logInClicked === "log me in" && !localStorage.token) {
			return <Redirect to="/login"/>
		}

		if(this.state.searchActivate === true) {
			console.log("Search!!!");
		}

		const images = require.context('../images', true);
		return (
			<div className="top-nav">

				<Link to={`/`}>
					<div className="site-logo">
						<h2>Sneakaz</h2>
					</div>
				</Link>

				<div className="categoryWrapper">
					<h3 className="category">MENS</h3>
					<h3 className="category">WOMENS</h3>
				</div>


				<div className="right-nav">
					<div className="search">
						<span className="fa fa-search"></span>
						<input onSelect={() => this.searchRedirect()} type="text" />
					</div>

					<div className="dropdown-shopbag">
						<div className="dropbtn-shopbag rt-nav-icons">
							<img src={images(`./shopping-bag.png`)} alt="" />
						</div>
						<div className="dropdown-content">
							{this.props.currentOrder.length === 0 ?
								<h2 className="empty-cart">Your Cart is Empty.</h2>
								: <div><Cart /></div>
							}


						</div>
					</div>

					<h3 className="rt-nav-icons">Welcome {this.props.currentShopper.username ? this.props.currentShopper.username : null}!</h3>

					<div className="dropdown-user">
						<div className="dropbtn-user rt-nav-icons">
							<img src={images(`./user.png`)}/>
						</div>
						<div className="dropdown-content">
							<div>View Profile</div>
			    		<div>Order History</div>
							{this.props.currentShopper.username ? <a href="" onClick={() => this.logOut()}>Log Out</a>
							: <a href="" onClick={() => this.logIn()}>Log In</a>}
  					</div>
					</div>

				</div>
			</div>

		)
	}
}

const mapStateToProps = (state) => ({
	currentShopper: state.shopper.shopper,
	currentOrder: state.shopper.currentOrder
})
export default connect(mapStateToProps)(withRouter(TopNav))

// {this.props.currentShopper.username ? <div onClick={() => this.logOut()}>Check Out</div>
// : <div onClick={() => this.logIn()}>Log In</div>}
