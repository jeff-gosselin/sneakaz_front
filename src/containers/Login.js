import React, {Component} from 'react';
import {postNewShopper} from '../Redux/actions/action-shoppers';
import {connect} from 'react-redux';

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
		const {username, password, email} = this.state;
		console.log("This is the user:",username);
		return (
			<div>
				<h1>Welcome! Please Log In.</h1>
				<p><input name="username" type="text" placeholder="Username" onChange={this.onChangeHandler} value={username}/></p>

				<p><input name="password" type="password" placeholder="Password" onChange={this.onChangeHandler} value={password}/></p>

				{this.state.newUser ?
					<div>
						<p><input name="email" type="text" placeholder="Email" onChange={this.onChangeHandler} value={email}/></p>

						<button onClick={() => postNewShopper(username, password, email)}>Register</button> (POST Request)
						<p>Have an account? <button onClick={this.onClickChangeUserStatus}>Log In</button></p>
					</div>
				:
					<div>
						<button>Log In</button> (GET Request)
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
		postNewShopper: (username, password, email) => dispatch(postNewShopper(username, password, email))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default Login
