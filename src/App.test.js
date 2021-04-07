import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    shallow(<App />);
  });

  it('2 + 2 should equal 4', () => {
    const two = 2;
    expect(two + 2).toEqual(4);
  });

  it('2 + 2 should not equal 5', () => {
    const two = 2;
    expect(two + 2).not.toEqual(5);
  });
});
