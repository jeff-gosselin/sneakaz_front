import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/sneakers.css';

class SneakerItem extends Component {
	render() {
		const {name, brand, category, price, image, id} = this.props.sneaker;
		const images = require.context('../images/sneakers', true);
		return (
			<div className="sneaker-card">
				<h2>{name}</h2>
				<p>{category}</p>
				<p>{price}</p>
				<Link to={`/sneakers/${id}`}>
					<img className={`sneaker-image-${this.props.itemSize}`} src={images(`./${brand}/${image}`)} alt="" />
				</Link>

			</div>
		)
	}
}

export default SneakerItem

// change img tag to <img src={require(`..${this.props.sneaker.image}`)} alt="" />
