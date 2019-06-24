import React from 'react';
// import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import {addTodo} from './store/actions';
import thunk from 'redux-thunk';
import {mapDispatchToProps} from './App';

import configureStore from 'redux-mock-store';
const mockStore = configureStore();

//const dispatch = sinon.spy();

function setup() {
  const props = {
    onAgeUp: jest.fn(),
    addTodo: jest.fn(),
    store:mockStore({ runtime: {} })
  }

  const enzymeWrapper = mount(<App {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  }
  const next = jest.fn()

  const invoke = action => thunk(store)(next)(action)

  return { store, next, invoke }
}

configure({ adapter: new Adapter() });



describe('App component testing', function() {
  let wrapper, store;
  beforeEach(() => {
    const initialState = {
      age: 20,
      text:''
    }
    //creates the store with any initial state or middleware needed  
    store = mockStore(initialState)
    wrapper = shallow(<App store={store} />)
   })

  it('renders welcome message', function() {
    // const wrapper = mount(<App store={mockStore({ runtime: {} })} />); 
    const welcome = <h1 className='App-title'>Welcome to React</h1>;
    // console.log(wrapper);
    expect(wrapper.props().age).to.equal(20);
  });
  it('renders button', function() {
    const wrapper = mount(<App store={mockStore({ runtime: {} })} />); 
    // const welcome = <h1 className='App-title'>Welcome to React</h1>;
    // console.log(wrapper);
    expect(wrapper.find('button').length).to.equal(3);
  });
  it('should have props', function() {
    const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('h1').hasClass('App-title')).to.equal(true)
  });
  it('should have props age', function() {
    // const { enzymeWrapper, props } = setup()
    //   const input = enzymeWrapper.find('button').first();
    //   input.simulate('click')
    //   // console.log(enzymeWrapper.instance().props);
    //   expect(props.onAgeUp.mock.calls.length).to.equal(0)
    //   input.props().onClick()

    const dispatch = jest.fn();
    
    // For the `mapDispatchToProps`, call it directly but pass in
    // a mock function and check the arguments passed in are as expected
    mapDispatchToProps(dispatch).addTodo();
    expect(dispatch.mock.calls[0][0]).deep.equal({ type: 'ADD_TODO'});
    console.log(wrapper.props());
      // expect(input.props().children.props.age).to.equal(21)
      // console.log(enzymeWrapper.instance())
      // console.log(enzymeWrapper.instance().props())
   
  });
  // it('should have props incremented age', function() {
  //   const { enzymeWrapper, props } = setup()
  //     const input = enzymeWrapper.find('button').first();
  //     input.props().onClick()
  //     expect(props.onAgeUp.mock.calls.length).to.equal(0)
  //     input.props().onClick()
  //     expect(input.props().children).to.equal('Age UP')
  //     // console.log(enzymeWrapper.instance())
  //     // console.log(enzymeWrapper.instance().props())
   
  // });
  // it('should have props changes text', function() {
  //   const { enzymeWrapper, props } = setup()
  //     const input = enzymeWrapper.find('button').last();
  //     input.props().onClick()
  //     expect(props.addTodo.mock.calls.length).to.equal(0)
  //     input.props().onClick('hello')
  //     // expect(input.props().children).to.equal('Age UP')
  //     // console.log(enzymeWrapper.instance())
  //     expect(props.addTodo.mock.calls.length).to.equal(1)
   
  // });
  it('passes through non-function action', () => {
    const { next, invoke } = create()
    const { enzymeWrapper, props } = setup()
    const action = { type: 'AGE_UP' }
    invoke(action)
    // console.log(enzymeWrapper.instance())
    // expect(next).to.have.been.called.with(action)
  })
  
  it('calls the function', () => {
    const { invoke } = create()
    const fn = jest.fn()
    invoke(fn)
    // expect(fn).to.have.been.called()
  })
});