import React, {Component} from 'react';
import '../css/topNav.css';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Redirect, withRouter} from 'react-router-dom';

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

		console.log('the shopper:', this.props.shopper);
		if(this.state.logInClicked === "log me in" && !localStorage.token) {
			return <Redirect to="/login"/>
		}

		if(this.state.searchActivate === true) {
			console.log("Search!!!");
		}

		const images = require.context('../images', true);
		return (
			<div className="top-nav">
				<div className="site-logo">
				<Link to={`/`}>
					<h2>Sneakaz</h2>
				</Link>
				</div>
				<div className="categoryWrapper">
					<h3 className="category">MENS</h3>
					<h3 className="category">WOMENS</h3>
				</div>
				<div className="search">
					<input onSelect={() => this.searchRedirect()} type="text" placeholder="Search"/>
				</div>

				<div className="right-nav">



				<div className="rt-nav-icons">
					<img className="fix-icon-placement" src={images(`./shopping-bag.png`)}/>
				</div>

					<h3 className="rt-nav-icons">Welcome {this.props.currentShopper.username ? this.props.currentShopper.username : null}!</h3>

					<div class="dropdown">
						<div className="dropbtn rt-nav-icons"><img src={images(`./user.png`)}/></div>
						<div class="dropdown-content">
							<a href="#">View Profile</a>
			    		<a href="#">Order History</a>
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
	orders: state.shopper.shopper.orders
})
export default connect(mapStateToProps)(withRouter(TopNav))

// <div>
// 	<h3 className="rt-nav-icons">Welcome Jeff! {this.state.loggedIn ? <a className="log-out" href="#" onClick={() => this.logOut()}>(Log Out)</a> : null}</h3>
// </div>


// <div className="rt-nav-icons">
// 	<img className="fix-icon-placement" src={images(`./shopping-bag.png`)}/>
// </div>
