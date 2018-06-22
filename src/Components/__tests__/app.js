import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';

describe('App component', () => {
  it('should render without crashing', () => {
    const appComponent = shallow(<App/>);
    expect(appComponent.find('.App').length).toEqual(1);
  })
})
