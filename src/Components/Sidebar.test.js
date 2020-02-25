import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('App component', () => {
  const component = shallow(<Sidebar />);
  it('should render as expected', () => {
    expect(component.contains(<div className="menu-btn"></div>)).toBe(true);
  });
});
