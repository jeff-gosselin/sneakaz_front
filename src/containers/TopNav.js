import React, {Component} from 'react';
import '../css/topNav.css'

class TopNav extends Component {
	render() {
		return (
			<div className="top-nav">
				<div className="site-logo">
					<h2>Sneakaz</h2>
				</div>
				<div className="categoryWrapper">
					<h3 className="category">MENS</h3>
					<h3 className="category">WOMENS</h3>
				</div>
				<div className="search">
					<input type="text" placeholder="Search"/>
				</div>
				<div className="right-nav">
					<div>
						<h3 className="rt-nav-icons">ICON</h3>
						<h3 className="rt-nav-icons">Welcome Jeff!</h3>
					</div>
				</div>
			</div>
		)
	}
}
export default TopNav
