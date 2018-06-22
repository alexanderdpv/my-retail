import React, { Component } from 'react';
import Price from '../Price/price';
import Promotion from '../Promotion/promotion';
import Quantity from '../Quantity/quantity';
import PurchaseActions from '../PurchaseActions/purchaseActions';

class ItemDetails extends Component {
  render () {
    const { offers, promotions, channelCode, returnPolicy } = this.props;

    return (
      <div className="item-details col-6">
        <Price offers={offers}/>
        <Promotion promotions={promotions}/>
        <Quantity/>
        <PurchaseActions channelCode={channelCode} returnPolicy={returnPolicy}/>
      </div>
    )
  }
}

export default ItemDetails
