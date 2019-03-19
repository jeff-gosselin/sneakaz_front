import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectSneaker} from '../Redux/actions/action-sneakers'
import '../css/sneakers.css';

class SneakerItem extends Component {

	// handleClick = () => {
	// 	this.props.selectedSneaker(theSneaker[0]);
	// }

	render() {
		const theSneaker = this.props.allSneakers.filter(sneaker => sneaker.id === this.props.sneaker_id);
		const {name, category, price, brand, image, id} = theSneaker[0];
  	console.log("theSneaker[0]",theSneaker[0]);
		const images = require.context('../images/sneakers', true);

		return (
			<div className="sneaker-card" onClick={this.handleClick}>

				<Link to={`/sneakers/${id}`}>
					<img className="sneaker-image-small" src={images(`./${brand}/${image}`)} alt="" data-id={id}/>
				</Link>
				<h2>{name}</h2>
				<p>{category}</p>
				<p>{price}</p>

			</div>
		)
	}
}

const mapStateToProps = state => ({
  allSneakers: state.sneakers.sneakers
});

export default connect(mapStateToProps)(SneakerItem)
