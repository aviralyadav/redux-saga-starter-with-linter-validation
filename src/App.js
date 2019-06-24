import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import {addTodo, ageDown, ageUp, getUsers} from './store/actions';

class App extends Component {
  ageUp = () => {
    this.props.onAgeUp();
  }
  handleText(text){
    this.props.addTodo(text);
  }
  componentDidMount() {
    this.props.getUsersList();
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
      <h1 className='App-title'>Welcome to React</h1>
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.ageUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        {/* <button onClick={this.handleText}>Save Text</button> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    users: state.users
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch(ageUp()),
    onAgeDown: () => dispatch(ageDown()),
    getUsersList: () => dispatch(getUsers())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
