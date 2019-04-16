import React, {Component} from 'react';
import '../css/topNav.css';
import {connect} from 'react-redux';
// import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Redirect, withRouter} from 'react-router-dom';
import Cart from './Cart';
import Search from './Search'

class TopNav extends Component {

	state = {
		loggedIn: !!localStorage.token,
		logInClicked: ''	
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

	


	render() {

		if(this.state.logInClicked === "log me in" && !localStorage.token) {
			return <Redirect to="/login"/>
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
					<Link to={`/sneakers/mens`}>
						<h3 className="category">MENS</h3>
					</Link>

					<Link to={`/sneakers/womens`}>
						<h3 className="category">WOMENS</h3>
					</Link>
				</div>


				<div className="right-nav">
					
					<Search/>
					<div className="dropdown-shopbag">
						{this.props.currentOrder.length > 0 ? <div className="in-cart">{this.props.currentOrder.length}</div> : null }
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

					<h3 className="rt-nav-icons">{this.props.currentShopper.username ? `Hi, ${this.props.currentShopper.username}!` : null}</h3>

					<div className="dropdown-user">

						<div className="dropbtn-user rt-nav-icons">
							<img src={images(`./user.png`)}/>
						</div>
						<div className="dropdown-content">
							<Link to={`/profile`}>
								<div>View Profile</div>
							</Link>

							<Link to={`/orders`}>
			    				<div>Order History</div>
							</Link>

							{this.props.currentShopper.username ? <a id="logout" href="" onClick={() => this.logOut()}>Log Out</a>
							: 	<Link to="/login">
									<div>Log In</div>
								</Link>}
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

// {/* SEARCH BAR */}
// <div className="search">
// <span className="fa fa-search"></span>
// <input onChange={() => this.searchFilter()} onBlur={() => this.searchOff()} type="text" />
// </div>
// {/* END SEARCH BAR */}