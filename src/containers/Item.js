import React, {Component} from 'react';

class Item extends Component {

    render() {

        const images = require.context('../images/sneakers', true);
        const specificItem = this.props.allItems.filter(item => item.id === this.props.item.item_id)

        
        const itemName = specificItem.map(item => item.name);
        const itemBrand = specificItem.map(item => item.brand);
        const itemImage = specificItem.map(item => item.image);
        console.log("Specific Item: ", itemImage[0]);
        console.log("Item Name: ", itemName[0]);


        let sneakerImage;
        if(itemImage !== undefined) {
            sneakerImage = <img className="sneaker-image-small" src={images(`./${itemBrand[0]}/${itemImage[0]}`)} alt=""/>
        }
            
        

        return (
            <div className="item-history">
                {sneakerImage}
                <div className="item-info-block">
                    <h3>{itemName[0]}</h3>
                    <p>Quantity: {this.props.item.qty}</p>
                    <p>Shoe Size: {this.props.item.size}</p>
                    <p>Cost: ${this.props.item.total}</p>
                </div>
                
                

            </div>
            
        )
    }


}

export default Item;