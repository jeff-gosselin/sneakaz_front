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
			<div class="log-form">
				<div className="signup-form">
					<h1>Welcome! Please Log In.</h1>
					<p><input className="login-inputs" name="username" type="text" placeholder="Username" onChange={this.onChangeHandler} value={username}/></p>

					<p><input name="password" type="password" placeholder="Password" onChange={this.onChangeHandler} value={password}/></p>
				</div>

				{this.state.newUser ?
					<div>
						<p><input name="email" type="text" placeholder="Email" onChange={this.onChangeHandler} value={email}/></p>

						<button className="btn" onClick={() => this.props.postNewShopper(username, password, email)}>Register</button> (POST Request)
						<p class="forgot">Have an account? <button onClick={this.onClickChangeUserStatus}>Log In</button></p>
					</div>
				:
					<div>
						<button onClick={() => this.props.loginShopper(username, password)}>Log In</button> (GET Request)
						<p>Don't have an account? <button onClick={this.onClickChangeUserStatus}>Sign Up</button></p>
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
