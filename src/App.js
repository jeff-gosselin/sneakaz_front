import React, { Component } from 'react';
import './css/App.css';
import SneakerContainer from './containers/SneakerContainer'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
			<div>
				<Login />
			</div>
    );
  }
}

export default App;
