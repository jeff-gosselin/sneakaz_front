import React, { Component } from 'react'

class SearchListItem extends Component {
    
  render() {
    console.log("WTF?!!!", this.props.item.name);
    const {image, name} = this.props.item; 
      
    return (
      <div>
        {name}
      </div>
    )
  }
}
export default SearchListItem;