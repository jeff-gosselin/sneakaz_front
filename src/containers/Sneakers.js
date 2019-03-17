import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getSneakers} from '../Redux/actions/action-sneakers';
import SneakerItem from '../components/SneakerItem';

class Sneakers extends Component {
	render() {
		console.log("Sneaker Props",this.props);
		const sneakerItems = this.props.sneakers.map(sneaker => <SneakerItem sneaker={sneaker} />);
		console.log("array of sneakers?",sneakerItems);

		return (

			<ul>{sneakerItems}</ul>

		)
	}
}

const mapStateToProps = (state) => {
	return {
		sneakers: state.sneakers
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({sneakers: getSneakers}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Sneakers)
