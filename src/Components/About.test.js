import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe('App component', () => {
  const component = shallow(<About />);
  it('should render as expected', () => {
    expect(
      component.contains(<h1 className="aboutHeader">About Jobble</h1>)
    ).toBe(true);
  });
});
