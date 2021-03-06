import React, { Component } from 'react';

class ItemDescription extends Component {
  render () {
    const { itemDescriptions } = this.props;

    return (
      <div className="item-description col-6">
        <h1 className="item-description-title">Product Highlights</h1>

        <ul className="item-description-list">
          {itemDescriptions.map((description) => (
            description.features.map((feature) => (
              <li key={feature} className="item-description-feature" dangerouslySetInnerHTML={{__html: feature}}></li>
            ))
          ))}
        </ul>
      </div>
    )
  }
}

export default ItemDescription
