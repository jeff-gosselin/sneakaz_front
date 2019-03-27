import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchSneakers} from '../Redux/actions/action-sneakers';
import SneakerItem from '../components/SneakerItem';
import SneakerShow from './SneakerShow';
import {Redirect, withRouter} from 'react-router-dom'

import '../css/sneakers.css';

class Sneakers extends Component {
	componentDidMount() {
	    this.props.dispatch(fetchSneakers());
	 }
	render() {

		const {error, loading, sneakers} = this.props;
		const sneakerMens = sneakers.filter(sneaker => sneaker.category === "mens");
		const sneakerWomens = sneakers.filter(sneaker => sneaker.category === "womens");

		const sneakerItems = sneakerWomens.map(sneaker => {
		 return <SneakerItem key={sneaker.id} itemSize="small" sneaker_id={sneaker.id} theSelectedSneaker={sneaker} />});






		if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
			<div>
			<Switch>
				<Route path='/sneakers/:id' render={(routerProps) => {
					let id = routerProps.match.params.id;
					let sneaker = sneakers.find(sneaker => sneaker.id == id)
					return (sneaker ? <SneakerShow key={id} sneaker={sneaker} sneaker_id={id} /> : null)
				}} />

				<Route path='/womens' render={() => {return <div className="sneaker-wrapper">{sneakerItems}</div>}} />

				<Route exact path='/' render={() => {return <div className="sneaker-wrapper">{sneakerItems}</div>}} />
			</Switch>

			</div>
    );
	}
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     selectedSneaker: (sneaker) => dispatch(selectSneaker(sneaker))
//   }
// }


const mapStateToProps = state => ({
  sneakers: state.sneakers.sneakers,
  loading: state.sneakers.loading,
  error: state.sneakers.error
});

export default connect(mapStateToProps)(withRouter(Sneakers));
