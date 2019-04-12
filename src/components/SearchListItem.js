import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const images = require.context('../images/sneakers', true);

class SearchListItem extends Component {
    
  render() {
    console.log("WTF?!!!", this.props.item.name);
    const {brand, image, name, id} = this.props.item; 
      
    return (
      <Link to={`/sneakers/${id}`}>
        <div className="search-item">
          <img className="search-img" alt="" src={images(`./${brand}/${image}`)}/><span>{name}</span>
        </div>
      </Link>
    )
  }
}
export default SearchListItem;