import React from 'react';
import { shallow } from 'enzyme';
import ItemDescription from '../ItemDescription/itemDescription';

const itemDescription = [
  {
   "features": [
    "<strong>Wattage Output:<\/strong> 1100 Watts",
    "<strong>Number of Speeds:<\/strong> 3 ",
    "<strong>Capacity (volume):<\/strong> 72.0 Oz.",
    "<strong>Appliance Capabilities:<\/strong> Blends",
    "<strong>Includes:<\/strong> Travel Lid",
    "<strong>Material:<\/strong> Plastic",
    "<strong>Finish:<\/strong> Painted",
    "<strong>Metal Finish:<\/strong> Chrome",
    "<strong>Safety and Security Features:<\/strong> Non-Slip Base",
    "<strong>Care and Cleaning:<\/strong> Easy-To-Clean, Dishwasher Safe Parts"
   ]
  }
 ];

describe('ItemDescription component', () => {
  const itemDescComponent = shallow(<ItemDescription itemDescriptions={itemDescription}/>);

  it('ItemDescription renders without crashing', () => {
    expect(itemDescComponent.find('.item-description').length).toEqual(1);
  });

  it('ItemDescription renders list of product highlights', () => {
    expect(itemDescComponent.find('ul.item-description-list').length).toEqual(1);
    expect(itemDescComponent.find('li.item-description-feature').length).toBeGreaterThan(1);
  });
})
