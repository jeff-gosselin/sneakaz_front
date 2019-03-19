import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectSneaker} from '../Redux/actions/action-sneakers'
import '../css/sneakers.css';

class SneakerItem extends Component {

	handleClick = () => {
		"CLICKED!!!!!!!!!!!!!!!!!"
		this.props.selectedSneaker(this.props.theSelectedSneaker);
	}

	render() {
		console.log("SneakerItem Props:",this.props.selectedSneaker);
		const theSneaker = this.props.allSneakers.filter(sneaker => sneaker.id === this.props.sneaker_id);
		const {name, category, price, brand, image, id} = theSneaker[0];

		const images = require.context('../images/sneakers', true);

		return (

				<div className="sneaker-card">

					<Link to={`/sneakers/${id}`}>
							<img className="sneaker-image-small" src={images(`./${brand}/${image}`)} alt="" data-id={id}/>

							<h2 className="index-sneaker-name">{name}</h2>
					</Link>
					<p>{category}</p>
					<p>{price}</p>

				</div>

		)
	}
}

const mapStateToProps = state => ({
  allSneakers: state.sneakers.sneakers
});

const mapDispatchToProps = (dispatch) => {
  return {
    selectedSneaker: (sneaker) => {
			console.log("MDTP:",sneaker);
			dispatch({type: "SELECT_SNEAKER", payload: sneaker})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SneakerItem)
