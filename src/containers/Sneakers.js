import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchSneakers} from '../Redux/actions/action-sneakers';
import SneakerItem from '../components/SneakerItem';
import '../css/sneakers.css';

class Sneakers extends Component {
	componentDidMount() {
	    this.props.dispatch(fetchSneakers());
	 }
	render() {
		const {error, loading, sneakers} = this.props;
		const sneakerItems = sneakers.map(sneaker => {
			return <SneakerItem key={sneaker.id} sneaker={sneaker} itemSize="small" />})

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


					console.log("state is", sneaker);
					return <SneakerItem key={sneaker.id} sneaker={sneaker} itemSize="large" />
				}} />
				<Route path='/sneakers' render={() => {return <div className="sneaker-wrapper">{sneakerItems}</div>}} />

			</Switch>

			</div>
    );
	}
}

const mapDispatchToProps = dispatch => {
	return {

	}
}

const mapStateToProps = state => ({
  sneakers: state.sneakers.sneakers,
  loading: state.sneakers.loading,
  error: state.sneakers.error
});

export default connect(mapStateToProps)(Sneakers);
