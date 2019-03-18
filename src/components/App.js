import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import '../css/App.css';
import Login from '../containers/Login';
import Sneakers from '../containers/Sneakers';

class App extends Component {

  render() {
		console.log(this.props.store);
    return (
			<div>
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/sneakers' component={Sneakers} />
				</Switch>
			</div>
    );
  }
}

export default App;
