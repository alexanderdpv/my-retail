import React from 'react';
import { shallow } from 'enzyme';
import Promotion from '../Promotion/promotion';

const promotion = [
  {
   "Description": [
    {
     "shortDescription": "SPEND $50, GET FREE SHIPPING"
    }
   ]
  }
 ];

describe('Promotion component', () => {
  const promotionComponent = shallow(<Promotion promotions={promotion}/>);

  it('Promotion renders without crashing', () => {
    expect(promotionComponent.find('.promotion').length).toEqual(1);
  });

  it('Promotion renders promotion description', () => {
    expect(promotionComponent.find('i.promotion-tag-icon').length).toEqual(1);
    expect(promotionComponent.find('.promotion-short-description').text()).toEqual("SPEND $50, GET FREE SHIPPING");
  });
})
