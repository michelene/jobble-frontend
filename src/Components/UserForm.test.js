import React from 'react';
import { shallow } from 'enzyme';
import UserForm from './UserForm';

describe('App component', () => {
  const component = shallow(<UserForm />);
  it('should contain a submit button', () => {
    expect(
      component.contains(
        <button className="userButton" type="submit">
          Submit
        </button>
      )
    ).toBe(true);
  });
});
