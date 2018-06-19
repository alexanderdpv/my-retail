import React, { Component } from 'react';

class ItemImages extends Component {
  render () {
    const { images, title } = this.props;

    return (
      <div className="item-images">
        <h2 className="item-images-title">{title}</h2>

        {images.map((itemImage) => (
          itemImage.PrimaryImage.map((primaryImage) => (
            <img className="item-images-primary" src={primaryImage.image}/>
          ))
        ))}

        <div className="item-images-thumbnails">
        {images.map((itemImage) => (
          itemImage.AlternateImages.map((alternateImage) => (
            <img className="item-images-thumbnail" src={alternateImage.image}/>
          ))
        ))}
        </div>
      </div>
    )
  }
}

export default ItemImages
