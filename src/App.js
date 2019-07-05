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
import ExpansionPanelDemo from "./components/demos/ExpansionPanelDemo";

const classes = {
  root: {
    padding: 20
  }
};

const dataArr = [
  {
    id: "8d57368d-a416-4377-be5d-57aeac70ace5",
    compartmentId: "bf127443-7e80-4cbf-a33f-d69d1c785829",
    name: "Manage Campaign",
    customName: "metadata",
    description: "create, view & edit campaign",
    image: "",
    isRoot: true,
    type: "card",
    docType: "create",
    approvalLevel: 5,
    children: [
      {
        id: "8d57368d-a416-4377-be5d-57aeac70ace5",
        compartmentId: "bf127443-7e80-4cbf-a33f-d69d1c781229",
        name: "Manage Campaign Child",
        customName: "metadata",
        description: "create, view & edit campaign",
        image: "",
        isRoot: true,
        type: "card",
        docType: "create",
        approvalLevel: 5,
        children: [],
        _rid: "iDEoANp+UAsBAAAAAAAAAA==",
        _self: "dbs/iDEoAA==/colls/iDEoANp+UAs=/docs/iDEoANp+UAsBAAAAAAAAAA==/",
        _etag: '"0d00627f-0000-0100-0000-5d16292c0000"',
        _attachments: "attachments/",
        _ts: 1561733420
      }
    ],
    _rid: "iDEoANp+UAsBAAAAAAAAAA==",
    _self: "dbs/iDEoAA==/colls/iDEoANp+UAs=/docs/iDEoANp+UAsBAAAAAAAAAA==/",
    _etag: '"0d00627f-0000-0100-0000-5d16292c0000"',
    _attachments: "attachments/",
    _ts: 1561733420
  },
  {
    id: "8d57368d-a416-4377-be5d-57aeac70ace6",
    compartmentId: "bf127443-7e80-4cbf-a33f-d69d1c785828",
    name: "Manage Promotion",
    customName: "tnc",
    description: "create, view & edit promotion",
    image: "",
    isRoot: true,
    type: "card",
    docType: "create",
    approvalLevel: 5,
    children: [
      {
        id: "8d57368d-a416-4377-be5d-57aeac70ace6",
        compartmentId: "bf127443-7e80-4cbf-a33f-d69d1c7858782",
        name: "Manage Promotion Child",
        customName: "tnc",
        description: "create, view & edit promotion",
        image: "",
        isRoot: true,
        type: "card",
        docType: "create",
        approvalLevel: 5,
        children: [],
        _rid: "iDEoANp+UAsBAAAAAAAAAA==",
        _self: "dbs/iDEoAA==/colls/iDEoANp+UAs=/docs/iDEoANp+UAsBAAAAAAAAAA==/",
        _etag: '"0d00627f-0000-0100-0000-5d16292c0000"',
        _attachments: "attachments/",
        _ts: 1561733420
      }
    ],
    _rid: "iDEoANp+UAsBAAAAAAAAAA==",
    _self: "dbs/iDEoAA==/colls/iDEoANp+UAs=/docs/iDEoANp+UAsBAAAAAAAAAA==/",
    _etag: '"0d00627f-0000-0100-0000-5d16292c0000"',
    _attachments: "attachments/",
    _ts: 1561733420
  },
  {
    id: "8d57368d-a416-4377-be5d-57aeac70ace6",
    compartmentId: "bf127443-7e80-4cbf-a33f-d69d1c785827",
    name: "Manage Coupon",
    customName: "coupon",
    description: "create, view & edit coupon",
    image: "",
    isRoot: true,
    type: "card",
    docType: "create",
    approvalLevel: 5,
    children: [
      {
        id: "8d57368d-a416-4377-be5d-57aeac70ace5",
        compartmentId: "bf127443-7e80-4cbf-a33f-d69d1c785825",
        name: "Manage Coupon Child",
        customName: "metadata",
        description: "create, view & edit campaign",
        image: "",
        isRoot: true,
        type: "card",
        docType: "create",
        approvalLevel: 5,
        children: ["8d57368d-a416-4377-be5d-57aeac70ace6"],
        _rid: "iDEoANp+UAsBAAAAAAAAAA==",
        _self: "dbs/iDEoAA==/colls/iDEoANp+UAs=/docs/iDEoANp+UAsBAAAAAAAAAA==/",
        _etag: '"0d00627f-0000-0100-0000-5d16292c0000"',
        _attachments: "attachments/",
        _ts: 1561733420
      }
    ],
    _rid: "iDEoANp+UAsBAAAAAAAAAA==",
    _self: "dbs/iDEoAA==/colls/iDEoANp+UAs=/docs/iDEoANp+UAsBAAAAAAAAAA==/",
    _etag: '"0d00627f-0000-0100-0000-5d16292c0000"',
    _attachments: "attachments/",
    _ts: 1561733420
  },
  {
    id: "8d57368d-a416-4377-be5d-57aeac70ace6",
    compartmentId: "bf127443-7e80-4cbf-a33f-d69d1c785825",
    name: "Bulk Upload",
    customName: "tnc",
    description: "bulk upload",
    image: "",
    isRoot: true,
    type: "card",
    docType: "create",
    approvalLevel: 5,
    children: [
      {
        id: "8d57368d-a416-4377-be5d-57aeac70ace5",
        compartmentId: "bf127443-7e80-4cbf-a33f-d69d1c785829",
        name: "Bulk Upload Campaign Child",
        customName: "metadata",
        description: "create, view & edit campaign",
        image: "",
        isRoot: true,
        type: "card",
        docType: "create",
        approvalLevel: 5,
        children: ["8d57368d-a416-4377-be5d-57aeac70ace6"],
        _rid: "iDEoANp+UAsBAAAAAAAAAA==",
        _self: "dbs/iDEoAA==/colls/iDEoANp+UAs=/docs/iDEoANp+UAsBAAAAAAAAAA==/",
        _etag: '"0d00627f-0000-0100-0000-5d16292c0000"',
        _attachments: "attachments/",
        _ts: 1561733420
      }
    ],
    _rid: "iDEoANp+UAsBAAAAAAAAAA==",
    _self: "dbs/iDEoAA==/colls/iDEoANp+UAs=/docs/iDEoANp+UAsBAAAAAAAAAA==/",
    _etag: '"0d00627f-0000-0100-0000-5d16292c0000"',
    _attachments: "attachments/",
    _ts: 1561733420
  },
  {
    id: "8d57368d-a416-4377-be5d-57aeac70ace6",
    compartmentId: "bf127443-7e80-4cbf-a33f-d69d1c785830",
    name: "Trigger offers",
    customName: "tnc",
    description: "triggering offers",
    image: "",
    isRoot: true,
    type: "card",
    docType: "create",
    approvalLevel: 5,
    children: [
      {
        id: "8d57368d-a416-4377-be5d-57aeac70ace5",
        compartmentId: "bf127443-7e80-4cbf-a33f-d69d1c785829",
        name: "Trigger offers Child",
        customName: "metadata",
        description: "create, view & edit campaign",
        image: "",
        isRoot: true,
        type: "card",
        docType: "create",
        approvalLevel: 5,
        children: ["8d57368d-a416-4377-be5d-57aeac70ace6"],
        _rid: "iDEoANp+UAsBAAAAAAAAAA==",
        _self: "dbs/iDEoAA==/colls/iDEoANp+UAs=/docs/iDEoANp+UAsBAAAAAAAAAA==/",
        _etag: '"0d00627f-0000-0100-0000-5d16292c0000"',
        _attachments: "attachments/",
        _ts: 1561733420
      }
    ],
    _rid: "iDEoANp+UAsBAAAAAAAAAA==",
    _self: "dbs/iDEoAA==/colls/iDEoANp+UAs=/docs/iDEoANp+UAsBAAAAAAAAAA==/",
    _etag: '"0d00627f-0000-0100-0000-5d16292c0000"',
    _attachments: "attachments/",
    _ts: 1561733420
  }
];


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
        <ExpansionPanelDemo apiData={dataArr} />
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
