import React, { Component } from 'react'
import '../css/topNav.css';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import SearchListItem from '../components/SearchListItem';

class Search extends Component {

    state = {
        searchActivate: false,
        search: ''
    }
    
    activate = (e) => {
        console.log("onChange:","Activated");
        this.setState({
            searchActivate: true,
            search: e.target.value
        })    
             
    }
    
    deactivate = () => {
        console.log("Deactivated");  
        this.setState({
            searchActivate: false
        })    
    }

    render() {
        let searchWindow = null;
        // console.log("searchWindow:", this.props.items);
		const listItems = this.props.items.map(item => <SearchListItem key={item.id} item={item} />);

        if(this.state.searchActivate){
            console.log("Search: TRUE", this.state.search);
            searchWindow = <div className="searchWindow">{listItems}</div>;
        } else {
            console.log("Search: FALSE");
        
        }
        
        
        

        return (
            <div className="search">
                <span className="fa fa-search"></span>
                <input name="search" onChange={this.activate} onBlur={this.deactivate} type="text" />
                {searchWindow}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.sneakers.sneakers
})

export default connect(mapStateToProps)(Search)