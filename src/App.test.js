import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';

require('@babel/register');

configure({ adapter: new Adapter() });
describe('App component testing', function() {
  it('renders welcome message', function() {
    const wrapper = shallow(<App />);
    const welcome = <div className="App" />;
    expect(wrapper.contains(welcome)).to.equal(true);
  });
});
