import React, {Component} from 'react';
import '../css/topNav.css';
import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom'
import {Redirect, withRouter} from 'react-router-dom'

class TopNav extends Component {

	state = {
		loggedIn: !!localStorage.token,
		logInClicked: ''
	}

	logIn = () => {
		console.log("poop");
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
		console.log(this.state.loggedIn);
		if(this.state.logInClicked === "log me in" && !localStorage.token) {
			return <Redirect to="/login"/>
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
					<input type="text" placeholder="Search"/>
				</div>

				<div className="right-nav">



				<div className="rt-nav-icons">
					<img className="fix-icon-placement" src={images(`./shopping-bag.png`)}/>
				</div>

					<h3 className="rt-nav-icons">Welcome Jeff!</h3>
					
					<div class="dropdown">
						<div className="dropbtn rt-nav-icons"><img src={images(`./user.png`)}/></div>
						<div class="dropdown-content">
							<a href="#">View Profile</a>
			    		<a href="#">Order History</a>
							{this.state.loggedIn ? <a href="" onClick={() => this.logOut()}>Log Out</a>
							: <a href="" onClick={() => this.logIn()}>Log In</a>}

  					</div>
					</div>





				</div>
			</div>

		)
	}
}
export default withRouter(TopNav)

// <div>
// 	<h3 className="rt-nav-icons">Welcome Jeff! {this.state.loggedIn ? <a className="log-out" href="#" onClick={() => this.logOut()}>(Log Out)</a> : null}</h3>
// </div>


// <div className="rt-nav-icons">
// 	<img className="fix-icon-placement" src={images(`./shopping-bag.png`)}/>
// </div>
