import React, {Component} from 'react';
import {postNewShopper} from '../Redux/actions/action-shoppers';
import {loginShopper} from '../Redux/actions/action-shoppers';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom'
import '../css/Login.css';

class Login extends Component {
	state = {
		username: '',
		password: '',
		email: '',
		newUser: false
	}

	onChangeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onClickChangeUserStatus = () => {
		this.setState({
			newUser: !this.state.newUser
		})
	}

	render() {
		if (localStorage.token) {
    	return <Redirect to="/"/>
		}

		const {username, password, email} = this.state;
		return (
			<div className="log-form">
				<div className="signup-form">
					<h2 className="log-header">Welcome! Please Log In.</h2>
					<p><input name="username" type="text" placeholder="Username" onChange={this.onChangeHandler} value={username} required/></p>

					<p><input name="password" type="password" placeholder="Password" onChange={this.onChangeHandler} value={password} required/></p>
				</div>

				{this.state.newUser ?
					<div>
						<p><input name="email" type="email" placeholder="Email" onChange={this.onChangeHandler} value={email} required /></p>

						<button className="btn" onClick={() => this.props.postNewShopper(username, password, email)}>Register</button>
						<p className="forgot"><button className="btn-su" onClick={this.onClickChangeUserStatus}>Log In</button></p>
					</div>
				:
					<div>
						<button onClick={() => this.props.loginShopper(username, password)}>Log In</button>
						<p><button className="btn-su" onClick={this.onClickChangeUserStatus}>Sign Up</button></p>
					</div>
				}
			</div>

		)
	}
}

const mapStateToProps = (state) => {
	return {
		shopper: state.shopper
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		postNewShopper: (username, password, email) => dispatch(postNewShopper(username, password, email)),
		loginShopper: (username, password) => dispatch(loginShopper(username, password))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));

// export default Login
