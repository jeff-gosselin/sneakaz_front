import React, { Component } from 'react'
const images = require.context('../images/sneakers', true);

class SearchListItem extends Component {
    
  render() {
    console.log("WTF?!!!", this.props.item.name);
    const {brand, image, name} = this.props.item; 
      
    return (
      <div className="search-item">
        <img className="search-img" alt="" src={images(`./${brand}/${image}`)}/><span>{name}</span>
      </div>
    )
  }
}
export default SearchListItem;