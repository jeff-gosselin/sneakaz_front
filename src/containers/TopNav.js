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


				<div className="rt-nav-icons">
					<img className="fix-icon-placement" src={images(`./shopping-bag.png`)}/>
				</div>

					<h3 className="rt-nav-icons">Welcome {this.props.currentShopper.username ? this.props.currentShopper.username : null}!</h3>

					<div className="dropdown">
						<div className="dropbtn rt-nav-icons"><img src={images(`./user.png`)}/></div>
						<div className="dropdown-content">
							<a>View Profile</a>
			    		<a>Order History</a>
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
	currentShopper: state.shopper.shopper
})
export default connect(mapStateToProps)(withRouter(TopNav))
