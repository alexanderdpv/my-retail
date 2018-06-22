import React from 'react';
import { shallow } from 'enzyme';
import Quantity from '../Quantity/quantity';

describe('Quantity component', () => {
  const quantityComponent = shallow(<Quantity/>);

  it('Quantity component renders without crashing', () => {
    expect(quantityComponent.find('.quantity').length).toEqual(1);
  });

  it('Quantity renders starting value of 1', () => {
    expect(quantityComponent.find('.quantity-value').text()).toEqual("1");
  });
})
