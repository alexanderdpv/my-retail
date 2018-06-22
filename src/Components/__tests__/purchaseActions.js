import React from 'react';
import { shallow } from 'enzyme';
import PurchaseActions from '../PurchaseActions/purchaseActions';

const returnPolicy = [
  {
   "legalCopy": "refund\/exchange policy<br\/><br\/><p style=\"font-size:13px;\">Most unopened items in new condition returned within 90 days will receive a refund or exchange. Some items have a modified return policy that is less than 90 days.&nbsp;Those items will either show a \"return by\" date or \"return within\" day range under the item on your receipt or packing slip and in the \"Item details, shipping\" tab if purchased on Target.com. Items that are opened or damaged or do not have a packing slip or receipt may be denied a refund or exchange. All bundled items must be returned with all components for a full refund. Bundle components may not all have the same return policy; please check your packing slip for details.&nbsp; Some items, such as gift cards, digital items&nbsp;are never returnable.&nbsp;<br \/><br \/>See the <a href=\"http:\/\/www.target.com\/HelpContent?help=\/sites\/html\/TargetOnline\/help\/returns_and_refunds\/returns_and_refunds.html\"\/>Target return policy<\/a> for complete information.<\/p><br\/>"
  }
 ];

const purchasingChannelCode = 0;

describe('PurchaseActions component', () => {
  it('PurchaseActions renders without crashing', () => {
    const purchaseActions = shallow(<PurchaseActions channelCode={purchasingChannelCode} returnPolicy={returnPolicy}/>);
    expect(purchaseActions.find('.purchase-actions').length).toEqual(1);
  });

  it('PurchaseActions renders both Add to Cart button and Pick up', () => {
    const purchasingChannelCode = 0;
    const purchaseActions = shallow(<PurchaseActions channelCode={purchasingChannelCode} returnPolicy={returnPolicy}/>);
    expect(purchaseActions.find('.add-cart').length).toEqual(1);
    expect(purchaseActions.find('.pick-up').length).toEqual(1);
  });

  it('PurchaseActions renders Add to Cart button only if item is available online', () => {
    const purchasingChannelCode = 1;
    const purchaseActions = shallow(<PurchaseActions channelCode={purchasingChannelCode} returnPolicy={returnPolicy}/>);
    expect(purchaseActions.find('.add-cart').length).toEqual(1);
    expect(purchaseActions.find('.pick-up').length).toEqual(0);
  });

  it('PurchaseActions renders Pick up in Store button only if item is available instore', () => {
    const purchasingChannelCode = 2;
    const purchaseActions = shallow(<PurchaseActions channelCode={purchasingChannelCode} returnPolicy={returnPolicy}/>);
    expect(purchaseActions.find('.add-cart').length).toEqual(0);
    expect(purchaseActions.find('.pick-up').length).toEqual(1);
  });

  it('PurchaseActions renders return policy', () => {
    const purchaseActions = shallow(<PurchaseActions channelCode={purchasingChannelCode} returnPolicy={returnPolicy}/>);
    expect(purchaseActions.find('.purchase-returns').length).toEqual(1);
    expect(purchaseActions.find('.purchase-return-label').text()).toEqual("returns");
    expect(purchaseActions.find('.purchase-return-policy').length).toEqual(1);
  });
})
