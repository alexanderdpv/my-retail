import React, { Component } from 'react';
import Price from '../Price/price';
import Promotion from '../Promotion/promotion';
import Quantity from '../Quantity/quantity';
import PurchaseActions from '../PurchaseActions/purchaseActions';

class ItemDetails extends Component {
  render () {
    const { item } = this.props;

    return (
      <div className="item-details col-6">
        <Price offers={item.Offers}/>
        <Promotion promotions={item.Promotions}/>
        <Quantity/>
        <PurchaseActions channelCode={item.purchasingChannelCode} returnPolicy={item.ReturnPolicy}/>
      </div>
    )
  }
}

export default ItemDetails
