import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {connect} from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        margin: 0,
        padding: '15px 0',
    },
  container: {
    display: "flex",
    margin: "auto",
    width: 380,
    flexDirection: "column"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing(1)
  }
}));

function UserAddForm(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    id: Math.random(),
    name: "",
    email: "",
    phone: "",
    username: "",
    website: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = e => {
      e.preventDefault();
      props.submitUser(values);
      
  }

  return (
    <Paper className={classes.root}>
      <form className={classes.container} noValidate autoComplete="off">
        <Typography variant="h5" component="h3">
          Add User Form
        </Typography>
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={values.name}
          onChange={handleChange("name")}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Email"
          className={classes.textField}
          value={values.email}
          onChange={handleChange("email")}
          margin="normal"
          type="email"
        />
        <TextField
          id="standard-name"
          label="Phone"
          className={classes.textField}
          value={values.phone}
          onChange={handleChange("phone")}
          margin="normal"
          type="number"
        />
        <TextField
          id="standard-name"
          label="Username"
          className={classes.textField}
          value={values.username}
          onChange={handleChange("username")}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Website"
          className={classes.textField}
          value={values.website}
          onChange={handleChange("website")}
          margin="normal"
        />
        <Button variant="outlined" color="primary" onClick={handleSubmit} className={classes.button}>
          Submit
        </Button>
      </form>
    </Paper>
  );
};

const mapStateToProps = state => {
    return {
        users: state.users,
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        submitUser: (userData) => dispatch({type: 'ADD_USER_START', user: userData})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAddForm);