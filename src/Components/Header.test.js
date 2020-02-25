import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('App component', () => {
  const component = shallow(<Header />);
  it('should render as expected', () => {
    expect(component.contains(<h1 className="title">Jobble</h1>)).toBe(true);
  });
});
