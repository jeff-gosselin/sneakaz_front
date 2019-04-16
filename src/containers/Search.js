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
        this.setState({
            searchActivate: true,
            search: e.target.value
        })    
             
    }
    
    deactivate = (e) => {
        e.target.value = "";
        setTimeout(() => this.setState({
            searchActivate: false,
            search: ""
        }), 150);  
        
        console.log("SEARCH:", this.state.search);    
            
    }

    render() {
        let searchWindow = null;
        
        
        const filteredItems = this.props.items.filter(item => item.name.toLowerCase().includes(this.state.search.toLowerCase()));    
        
		const listItems = filteredItems.map(item => <SearchListItem key={item.id} item={item} />);

        if(this.state.searchActivate){
            
            searchWindow = <div className="search-window">{listItems}</div>;
        } else {
            
        
        }
        
        
        

        return (
            <div className="search">
                <span className="fa fa-search"></span>
                <input name="search" onChange={this.activate} onBlur={this.deactivate} type="text" autocomplete="off" />
                {searchWindow}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.sneakers.sneakers
})

export default connect(mapStateToProps)(Search)


// onBlur={this.deactivate}