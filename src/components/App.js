import React, { Component } from 'react';
import '../css/App.css';
import Login from '../containers/Login'
import Sneakers from '../containers/Sneakers'

class App extends Component {
  render() {
    return (
			<div>
				<Login />
				<Sneakers />
			</div>
    );
  }
}

export default App;
