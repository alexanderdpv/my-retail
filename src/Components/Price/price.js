import React, { Component } from 'react';

class Price extends Component {
  render () {
    const { offers } = this.props;

    return (
      <div className="price">
        {offers.map((offer) => (
          offer.OfferPrice.map((offerPrice) => (
            <div key={offerPrice} className="price-offer">
              <h3 className="price-value">{offerPrice.formattedPriceValue}</h3>
              <span className="price-qualifier">{offerPrice.priceQualifier}</span>
            </div>
          ))
        ))}
      </div>
    )
  }
}

export default Price
