import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import '../css/App.css';
import Login from '../containers/Login';
import Sneakers from '../containers/Sneakers';
import TopNav from '../containers/TopNav'
import MainBanner from './MainBanner'

class App extends Component {

  render() {
		console.log(this.props.store);
    return (
			<div>
				<TopNav />
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/sneakers' component={Sneakers} />
					<Route path='/sneakers/mens' component={Sneakers} />
					<Route path='/sneakers/womens' component={Sneakers} />
					<Route exact path='/' render={() => {
						return <div><MainBanner /><Sneakers /></div>
					}} />
				</Switch>
			</div>
    );
  }
}

export default App;
