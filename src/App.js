import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { ageDown, ageUp, getUsers } from "./store/actions";
// import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Users from "./components/users/Users";
import UserAddForm from "./components/users/UserAddForm";
import PropTypes from "prop-types";

const classes = {
  root: {
    padding: 20
  }
};

class App extends Component {
  ageUp = () => {
    this.props.onAgeUp();
  };
  handleText(text) {
    this.props.addTodo(text);
  }
  componentDidMount() {
    this.props.getUsersList();
  }
  render() {
    // console.log(this.props);
    // const classes = useStyles();
    return (
      <div className="App">
        <Paper style={classes.root}>
          <Typography variant="h5" component="h3">
            Welcome to React
          </Typography>
          <div className="Age-label">
            your age: <span>{this.props.age}</span>
          </div>
          <button onClick={this.ageUp}>Age UP</button>
          <button onClick={this.props.onAgeDown}>Age Down</button>
          {/* <button onClick={this.handleText}>Save Text</button> */}
        </Paper>
        <Users userData={this.props.users} />
        <UserAddForm />
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

App.propTypes = {
  onAgeDown: PropTypes.func,
  onAgeUp: PropTypes.func,
  addTodo: PropTypes.func,
  getUsersList: PropTypes.func,
  users: PropTypes.array,
  age: PropTypes.number
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
