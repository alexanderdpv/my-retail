import React, { Component } from 'react';

class Promotion extends Component {
  render () {
    const { promotions } = this.props;

    return (
      <div className="promotion">
        {promotions.map((promotion) => (
          promotion.Description.map((promoDescription) => (
            <div>
              <i className="promotion-tag-icon fa fa-tag"></i>
              <span className="promotion-short-description">{promoDescription.shortDescription}</span>
            </div>
          ))
        ))}
      </div>
    )
  }
}

export default Promotion
