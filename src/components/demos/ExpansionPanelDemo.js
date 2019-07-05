import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import Search from "@material-ui/icons/Search";
import PropTypes from 'prop-types';
import "./expansion.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const userApi = [
    {
        userId: "1",
        userInfo: {
          userName: "user1",
          orgName: "SamsHomeOffice",
          email: "user@samshomeoffice.com"
        },
        isSuper: true,
        compartments: [
          {
            name: "bf127443-7e80-4cbf-a33f-d69d1c785829",
            compartmentId: "bf127443-7e80-4cbf-a33f-d69d1c785829",
            access: "R/W",
            approvalLevel: "5"
          },
          {
            name: "bf127443-7e80-4cbf-a33f-d69d1c785825",
            compartmentId: "bf127443-7e80-4cbf-a33f-d69d1c785825",
            access: "R/W/A",
            approvalLevel: "5"
          }
        ]
      },
      {
        userId: "2",
        userInfo: {
          userName: "user2",
          orgName: "SamsHomeOffice",
          email: "user@samshomeoffice.com"
        },
        isSuper: true,
        compartments: [
          {
            name: "bf127443-7e80-4cbf-a33f-d69d1c785829",
            compartmentId: "bf127443-7e80-4cbf-a33f-d69d1c785830",
            access: "R/W/A",
            approvalLevel: "5"
          }
        ]
      }
];

export default class ExpansionPanelDemo extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        // eslint-disable-next-line react/prop-types
        apiDataArr: this.props.apiData,
        search: "",
        userObj: ''
      };
  }

  componentDidMount() {
      this.state.apiDataArr.forEach(item => {
          item.access = [
              {name: "R", isSelected: false},
              {name: "W", isSelected: false},
              {name: "A", isSelected: false},
          ];
          item.children && item.children.forEach(childItem => {
              childItem.access = [
                {name: "R", isSelected: false},
                {name: "W", isSelected: false},
                {name: "A", isSelected: false},
            ];
          });
      });
  }

  handleChange = (event, { name }, ind, parentObj) => {
    event.stopPropagation();
    if (name.toLowerCase() == "a") {
        if(parentObj.access[2].isSelected){
            parentObj.access.forEach(access => {
                access.isSelected = false;
              });
              parentObj.children && parentObj.children.forEach(child => {
                child.access.forEach(childInner => {
                    childInner.isSelected = false;
                });
                console.log(child);
              });
              //this.state.apiDataArr[ind] = parentObj;
              const arr = this.state.apiDataArr;
              arr[ind] = parentObj;
              this.setState({
                apiDataArr: arr
              });
        } else {
            parentObj.access.forEach(access => {
                access.isSelected = true;
              });
              parentObj.children && parentObj.children.forEach(child => {
                child.access.forEach(childInner => {
                    childInner.isSelected = true;
                });
                console.log(child);
              });
              //this.state.apiDataArr[ind] = parentObj;
              const arr = this.state.apiDataArr;
              arr[ind] = parentObj;
              this.setState({
                apiDataArr: arr
              });
        }
     
    } else if(name.toLowerCase() == 'r') {
          parentObj.access[0].isSelected = !parentObj.access[0].isSelected;
          parentObj.children && parentObj.children.forEach(child => {
            child.access[0].isSelected = !child.access[0].isSelected;
          });
          const arr = this.state.apiDataArr;
          arr[ind] = parentObj;
          this.setState({
            apiDataArr: arr
          });
    } else if(name.toLowerCase() == 'w') {
          parentObj.access[1].isSelected = !parentObj.access[1].isSelected;
          if(parentObj.children)
          parentObj.children.forEach(child => {
            child.access[1].isSelected = !child.access[1].isSelected;
          });
          const arr = this.state.apiDataArr;
          arr[ind] = parentObj;
          this.setState({
            apiDataArr: arr
          });
    }
    console.log(parentObj);
  };

  handleChangeChild = (event, { name }, parentInd, childInd, parentObj) => {
      console.log(parentInd, childInd, parentObj);
    event.stopPropagation();
    if (name.toLowerCase() == "a") {
        if(parentObj.access[2].isSelected){
            parentObj.access.forEach(access => {
                access.isSelected = false;
              });
              const arr = this.state.apiDataArr;
              this.setState({
                apiDataArr: arr
              });
        } else {
            parentObj.access.forEach(access => {
                access.isSelected = true;
              });
              const arr = this.state.apiDataArr;
              this.setState({
                apiDataArr: arr
              });
        }
     
    } else if(name.toLowerCase() == 'r') {
          parentObj.access[0].isSelected = !parentObj.access[0].isSelected;
          const arr = this.state.apiDataArr;
          this.setState({
            apiDataArr: arr
          });
    } else if(name.toLowerCase() == 'w') {
          parentObj.access[1].isSelected = !parentObj.access[1].isSelected;
          
          const arr = this.state.apiDataArr;
          this.setState({
            apiDataArr: arr
          });
    }
    console.log(parentObj);
  };

  handleChangeSearch = event => {
    this.setState({ search: event.target.value });
  };

  searchItem = () => {
    const user = this.state.search;
    const searchUser = userApi.find(user_ => user_.userInfo.userName === user);
    this.setState({userObj: searchUser});
    const containerData = this.state.apiDataArr;
    if(searchUser) {
        containerData.forEach(container => {
            searchUser.compartments.forEach(userCompartment => {
                if(container.compartmentId === userCompartment.compartmentId) {
                    const r = userCompartment.access.includes('R'); //&& userCompartment.access.split('/')[0];
                    const w = userCompartment.access.includes('W'); //&& userCompartment.access.split('/')[1];
                    const a = userCompartment.access.includes('A'); //&& userCompartment.access.split('/')[2];
                    if(r)
                        container.access[0].isSelected = true;
                    if(w) container.access[1].isSelected = true;
                    if(a) {
                        container.access[0].isSelected = true;
                        container.access[1].isSelected = true;
                        container.access[2].isSelected = true;
                    }
                }
            });
        });
        this.setState({apiDataArr: containerData});
    }
    console.log(this.state.userObj);
  };

  render() {
      console.log(this.state.apiDataArr);
    return (
      <div style={{marginTop: 40}}>
        <Typography>Expansion Panel Demo</Typography>
        <div>
          <Input
            id="adornment-password"
            type="text"
            value={this.state.search}
            onChange={this.handleChangeSearch}
            placeholder="Search Here"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.searchItem}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <div>
            {this.state.userObj ? <div>{this.state.userObj.userInfo.userName}</div> : null}
        </div>
        {this.state.apiDataArr &&
          this.state.apiDataArr.map((parent, parentInd) => {
            return (
              <ExpansionPanel key={parentInd}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="boxContainer">
                    <Typography>{parent.name}</Typography>
                    <div>
                      {parent.access && parent.access.map((item, i) => {
                        return (
                          <Checkbox
                            key={i}
                            checked={item.isSelected}
                            onClick={e =>
                              this.handleChange(e, item, parentInd, parent)
                            }
                            value={item.name}
                            inputProps={{
                              "aria-label": "primary checkbox"
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {parent.children.map((child, childInd) => {
                    return (
                      <ExpansionPanel key={childInd}>
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <div className="boxContainer">
                            <Typography>{child.name}</Typography>
                            <div>
                              {child.access && child.access.map((item_, i) => {
                                return (
                                  <Checkbox
                                    key={i}
                                    checked={item_.isSelected}
                                    onClick={e =>
                                      this.handleChangeChild(
                                        e,
                                        item_,
                                        parentInd,
                                        childInd,
                                        child
                                      )
                                    }
                                    value={item_.name}
                                    inputProps={{
                                      "aria-label": "primary checkbox"
                                    }}
                                  />
                                );
                              })}
                            </div>
                          </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                          </Typography>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    );
                  })}
                </ExpansionPanelDetails>
              </ExpansionPanel>
            );
          })}

        {/* <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Expansion Panel 2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel> */}
        <ExpansionPanel disabled>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Disabled Expansion Panel</Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      </div>
    );
  }
}

ExpansionPanelDemo.propsTypes = {
    apiData: PropTypes.array
};