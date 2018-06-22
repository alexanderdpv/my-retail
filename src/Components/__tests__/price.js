import React from 'react';
import { shallow } from 'enzyme';
import Price from '../Price/price';

const offersData = [
   {
    "OfferPrice": [
     {
      "formattedPriceValue": "$139.99",
      "priceQualifier": "Online Price"
     }
    ]
   }
 ];

describe('Price component', () => {
  it('Price component renders without crashing', () => {
    const priceComponent = shallow(<Price offers={offersData}/>);
    expect(priceComponent.find('.price').length).toEqual(1);
  });

  it('Price renders pricing data', () => {
    const priceComponent = shallow(<Price offers={offersData}/>);
    expect(priceComponent.find('.price-value').text()).toEqual("$139.99");
    expect(priceComponent.find('.price-qualifier').text()).toEqual("Online Price");
  });
})
