import React from 'react';
// import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

import configureStore from 'redux-mock-store';
const mockStore = configureStore();
//const dispatch = sinon.spy();

configure({ adapter: new Adapter() });
describe('App component testing', function() {
  it('renders welcome message', function() {
    const wrapper = mount(<App store={mockStore({ runtime: {} })} />); 
    const welcome = <h1 className='App-title'>Welcome to React</h1>;
    // console.log(wrapper);
    expect(wrapper.contains(welcome)).to.equal(true);
  });
  it('renders button', function() {
    const wrapper = mount(<App store={mockStore({ runtime: {} })} />); 
    // const welcome = <h1 className='App-title'>Welcome to React</h1>;
    console.log(wrapper);
    expect(wrapper.find('button').length).to.equal(2);
  });
});