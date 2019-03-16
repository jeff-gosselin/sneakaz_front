import React, {Component} from 'react';
import {postNewUser} from '../Redux/actions';
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
		console.log(this.state.newUser);
	}

	// onClickRegisterUser = (event) => {
	// 	event.preventDefault();
	// 	this.props.postNewUser(this.state);
	// }



	render() {
		const {username, password, email} = this.state
		return (
			<div>
				<h1>Welcome! Please Log In.</h1>
				<p><input name="username" type="text" placeholder="Username" onChange={this.onChangeHandler} value={this.state.username}/></p>

				<p><input name="password" type="password" placeholder="Password" onChange={this.onChangeHandler} value={this.state.password}/></p>

				{this.state.newUser ?
					<div>
						<p><input name="email" type="text" placeholder="Email" onChange={this.onChangeHandler} value={this.state.email}/></p>

						<button onClick={() => postNewUser(username, password, email)}>Register</button> (POST Request)
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

const mapDispatchToProps = (dispatch) => {
	return {
		postNewUser: (shopperObj) => dispatch(postNewUser(shopperObj))
	}
}

export default connect(null, mapDispatchToProps)(Login);
