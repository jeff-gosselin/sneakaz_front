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
		incompleteLogin: false,
		newUser: false
	}

	onChangeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onClickChangeUserStatus = () => {
		this.props.clearLoginFail("");
		this.setState({
			newUser: !this.state.newUser,
			incompleteLogin: false
		})
	}

	userValidation = () => {
		const {username, password} = this.state;
		if (username.length >= 1 && password.length >= 1) { 
			this.setState({
				incompleteLogin: false
			});
			return this.props.loginShopper(username, password)
		} else {
			this.props.clearLoginFail("");
			this.setState({
				incompleteLogin: true
			})
		}
	}

	newUserValidation = () => {
		const {username, password, email} = this.state;

		const validateEmail = (email) => {
			const condition = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return condition.test(String(email).toLowerCase());
		}

		if (username.length >= 1 && password.length >= 1 && validateEmail(email)) { 
			this.setState({
				incompleteLogin: false
			});
			return this.props.postNewShopper(username, password, email)
		} else {
			this.props.clearLoginFail("");
			this.setState({
				incompleteLogin: true
			})
		}
	}

	render() {
		if (localStorage.token && localStorage.token !== "undefined") {
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
						{/*New User Sign Up*/}
						<p><input name="email" type="email" placeholder="Email" onChange={this.onChangeHandler} value={email} required /></p>

						<button className="btn" onClick={this.newUserValidation}>Register</button>
						<p className="forgot"><button className="btn-su" onClick={this.onClickChangeUserStatus}>Log In</button></p>
						{this.state.incompleteLogin ? <h3 className={this.props.login === "fail" ? "invisible" : "please"}>Please complete all fields.</h3> : null}
						{this.props.login === "fail" ? <h3 className="please">Invalid username or password.</h3> : null}
					</div>
				:
					<div>
						{/*User Log In*/}
						<button onClick={this.userValidation}>Log In</button>
						
						<p><button className="btn-su" onClick={this.onClickChangeUserStatus}>Sign Up</button></p>
						{this.state.incompleteLogin ? <h3 className={this.props.login === "fail" ? "invisible" : "please"}>Please complete all fields.</h3> : null}
						{this.props.login === "fail" ? <h3 className="please">Invalid username or password.</h3> : null}
					</div>
				}
			</div>

		)
	}
}

const mapStateToProps = (state) => {
	return {
		shopper: state.shopper,
		login: state.shopper.login
	}
}

const mapDispatchToProps = (dispatch) => ({
	
		postNewShopper: (username, password, email) => dispatch(postNewShopper(username, password, email)),
		loginShopper: (username, password) => dispatch(loginShopper(username, password)),
		clearLoginFail: status => dispatch({ type: 'LOG_IN_FAILED', payload: status})
	
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));

// export default Login
