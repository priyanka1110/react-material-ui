/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import FontIcon from 'material-ui/FontIcon';
import Color from 'material-ui/styles/colors';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {fullWhite} from 'material-ui/styles/colors';
import {blue500, yellow600} from 'material-ui/styles/colors';


import Radium, { Style } from 'radium'


// import Title from 'react-title-component';
// import MarkdownElement from '../../MarkdownElement';
// import muiThemeable from 'material-ui/styles/muiThemeable';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import styleResizable from 'material-ui/utils/styleResizable';
// import typography from 'material-ui/styles/typography';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import themesText from './themes.md';
// import ClearFix from 'material-ui/internal/ClearFix';

import {
  Checkbox,
  DatePicker,
  Dialog,
  DropDownMenu,
  FlatButton,
  FloatingActionButton,
  Drawer,
  MenuItem,
  Paper,
  RadioButton,
  RadioButtonGroup,
  RaisedButton,
  Snackbar,
  Slider,
  Tabs,
  Tab,
  TextField,
  Toggle,
  List,
  ListItem,
  Table,
  TableBody, 
  TableFooter, 
  TableHeader, 
  TableHeaderColumn, 
  TableRow, 
  TableRowColumn,
  Avatar,
  ActionAssignment,

 } from 'material-ui';


const styles = {
  container: {
    // textAlign: 'center',
    paddingTop: 0,
  },
   subContainer: {
    // textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  h1:{
    textAlign: 'left',
    color:'orange',
    fontSize: 20,
  },
   block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
   propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
  '@media (min-width: 320px)': {
    container: {
      background: 'red'
    }
  }
};

const tableData = [
  {
    Details:'657657',
    Time: '10th march 2016',
    Time2: '11th march 2016',
    Life: '3',
    Temperature: '3',
    Total: '6',
    Checkpoint:'5',
    selected: true,
  },
  {
    Details:'657657',
    Life: '3',
    Temperature: '3',
    Total: '6',
    Checkpoint:'5',
  }, 
  {
    Details:'657657',
    Life: '3',
    Temperature: '3',
    Total: '6',
    Checkpoint:'5',
  }, 
  {
    Details:'657657',
    Life: '3',
    Temperature: '3',
    Total: '6',
    Checkpoint:'5',
  }, 
  {
    Details:'657657',
    Life: '3',
    Temperature: '3',
    Total: '6',
    Checkpoint:'5',
  }, 
  {
    Details:'657657',
    Life: '3',
    Temperature: '3',
    Total: '6',
    Checkpoint:'5',
  },
];


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        secondary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <AppBar
            title={<span style={styles.title}>Accounts</span>}
            onLeftIconButtonTouchTap={this.handleTouchTap}

            iconElementRight={
              <IconMenu
                iconButtonElement={
                  <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                <MenuItem primaryText="Profile Setting" />
                <MenuItem primaryText="Logout" />
              </IconMenu>
            }
          />

          <Drawer openSecondary={false} docked={false} width={240} open={this.state.open} onRequestChange={(open) => this.setState({open})} >

            <MenuItem onTouchTap={this.handleClose} href="#member">
              <FontIcon className="material-icons">home</FontIcon> Members
            </MenuItem>

            <MenuItem onTouchTap={this.handleClose} href="#webhook">
              <FontIcon className="material-icons">home</FontIcon> Webhooks
            </MenuItem>

            <MenuItem onTouchTap={this.handleClose} href="#tags">
              <FontIcon className="material-icons">home</FontIcon> Tags, Events logs and Runs
            </MenuItem>

            <MenuItem onTouchTap={this.handleClose} href="#analysis">
              <FontIcon className="material-icons">home</FontIcon> Analysis
            </MenuItem>

            <MenuItem onTouchTap={this.handleClose} href="#report">
              <FontIcon className="material-icons">home</FontIcon> Reports
            </MenuItem>

            <MenuItem onTouchTap={this.handleClose} href="#oraganization">
              <FontIcon className="material-icons">work</FontIcon> Oraganization
            </MenuItem>

          </Drawer>

          <div style={styles.subContainer}>

          <h1 style={styles.h1} id="member">Members</h1>
          <div className="member">
            <div className="memberDiv1">
              <List>

                <ListItem 
                  primaryText="Memmber1"  
                  secondaryText="member1@example.com" 
                  leftAvatar={<Avatar src="images/kerem-128.jpg" />}
                  rightIcon={<FlatButton label="Remove" primary={true} />} 
                />

                <ListItem 
                  primaryText="Memmber2"  
                  secondaryText="member2@example.com" 
                  leftAvatar={<Avatar src="images/kerem-128.jpg" />}
                  rightIcon={<FlatButton label="Remove" primary={true} />} 
                />

                <ListItem 
                  primaryText="Memmber3"  
                  secondaryText="member3@example.com" 
                  leftAvatar={<Avatar src="images/kerem-128.jpg" />}
                  rightIcon={<FlatButton label="Remove" primary={true} />} 
                />

                <ListItem 
                  primaryText="Memmber4"  
                  secondaryText="member3@example.com" 
                  leftAvatar={<Avatar src="images/kerem-128.jpg" />}
                  rightIcon={<FlatButton label="Remove" primary={true} />} 
                />
  
              </List>
            </div>
            <div className="memberDiv2">
              <List>

                <ListItem 
                  primaryText="Memmber1 (Owner)"  
                  secondaryText="member1@example.com" 
                  leftAvatar={<Avatar src="images/kerem-128.jpg" />}
                  rightIcon={<FlatButton label="Leave" primary={true} />} 
                />

                <ListItem 
                  primaryText="Memmber2"  
                  secondaryText="member2@example.com" 
                  leftAvatar={<Avatar src="images/kerem-128.jpg" />}
                  rightIcon={<FlatButton label="Remove" primary={true} />} 
                />

                <ListItem 
                  primaryText="Memmber3"  
                  secondaryText="member3@example.com" 
                  leftAvatar={<Avatar src="images/kerem-128.jpg" />}
                  rightIcon={<FlatButton label="Remove" primary={true} />} 
                />

                <ListItem
                  primaryText="Memmber4"  
                  secondaryText="member3@example.com" 
                  leftAvatar={<Avatar src="images/kerem-128.jpg" />}
                  rightIcon={<FlatButton label="Remove" primary={true} />} 
                />
  
              </List>
            </div>
          </div>

          <div className="webhookDiv">
            <h1 style={styles.h1} id="webhook">Webhooks</h1>
             <List>
              <ListItem primaryText="Testing Webhooks"  rightIcon={<FlatButton label="Delete" secondary={true} />} />
              <ListItem primaryText="Testing Webhooks2" rightIcon={<FlatButton label="Delete" secondary={true} />} />
              <ListItem primaryText="Testing Webhooks3" rightIcon={<FlatButton label="Delete" secondary={true} />} />
              <ListItem primaryText="Testing Webhooks4" rightIcon={<FlatButton label="Delete" secondary={true} />} />
            </List>
          </div>

            <TextField
              hintText="Enter webhook name"
              errorText="Name is required"
              floatingLabelText="Name"
            />
            <TextField
              hintText="http://example.com/"
              errorText="URL is required"
              floatingLabelText="Service Listener URL"
            />

          <h1 style={styles.h1} id="tags">Tags, Events logs and Runs</h1>
             <ListItem
                primaryText="epc:67589003489380384-0480384-34083848"
                leftIcon={<FontIcon className="material-icons">add</FontIcon>}
                initiallyOpen={false}
                primaryTogglesNestedList={true}
                nestedItems={[

                  <ListItem
                    key={1}
                    primaryText="Tags table"
                    leftIcon={<ActionGrade />}
                  />,
                  <ListItem
                    key={2}
                    primaryText="Sent Mail"
                    leftIcon={<ContentSend />}
                    disabled={true}
                    nestedItems={[
                      
                       <Table
                        height={this.state.height}
                        fixedHeader={this.state.fixedHeader}
                        fixedFooter={this.state.fixedFooter}
                        selectable={this.state.selectable}
                        multiSelectable={this.state.multiSelectable}
                      >
                        <TableHeader
                          displaySelectAll={this.state.showCheckboxes}
                          adjustForCheckbox={this.state.showCheckboxes}
                          enableSelectAll={this.state.enableSelectAll}
                        >
                          <TableRow>
                            <TableHeaderColumn colSpan="6" tooltip="Table Header" style={{textAlign: 'center'}}>
                              Table Header
                            </TableHeaderColumn>
                          </TableRow>
                          <TableRow >
                            <TableHeaderColumn tooltip="Tag ID" style={{textAlign: 'center'}}>Tag ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Run Deatils" style={{textAlign: 'center'}}>Run Deatils</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Life alert" style={{textAlign: 'center'}}>Life alert</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Temperature alert" style={{textAlign: 'center'}}>Temperature alert</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Total alert" style={{textAlign: 'center'}}>Total alert</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Total checkpoint" style={{textAlign: 'center'}}>Total checkpoint</TableHeaderColumn>
                          </TableRow>
                        </TableHeader>

                        <TableBody
                          displayRowCheckbox={this.state.showCheckboxes}
                          deselectOnClickaway={this.state.deselectOnClickaway}
                          showRowHover={this.state.showRowHover}
                          stripedRows={this.state.stripedRows}
                        >
                          {tableData.map( (row, index) => (
                            <TableRow key={index} selected={row.selected}>
                              <TableRowColumn style={{textAlign: 'center'}}>epc:80847478791817637894{index}</TableRowColumn>
                              <TableRowColumn style={{textAlign: 'center'}}><p>{row.Details}</p><p>{row.Time}</p><p>{row.Time2}</p></TableRowColumn>
                              <TableRowColumn style={{textAlign: 'center'}}>{row.Life}</TableRowColumn>
                              <TableRowColumn style={{textAlign: 'center'}}>{row.Temperature}</TableRowColumn>
                              <TableRowColumn style={{textAlign: 'center'}}>{row.Total}</TableRowColumn>
                              <TableRowColumn style={{textAlign: 'center'}}>{row.Checkpoint}</TableRowColumn>
                            </TableRow>
                            ))}
                        </TableBody>

                        <TableFooter
                          adjustForCheckbox={this.state.showCheckboxes}
                        >
                          <TableRow>
                            <TableHeaderColumn tooltip="Tag ID" style={{textAlign: 'center'}}>Tag ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Run Deatils" style={{textAlign: 'center'}}>Run Deatils</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Life alert" style={{textAlign: 'center'}}>Life alert</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Temperature alert" style={{textAlign: 'center'}}>Temperature alert</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Total alert" style={{textAlign: 'center'}}>Total alert</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Total checkpoint" style={{textAlign: 'center'}}>Total checkpoint</TableHeaderColumn>
                          </TableRow>

                          <TableRow>
                            <TableRowColumn colSpan="6" style={{textAlign: 'center'}}>
                              Table footer
                            </TableRowColumn>
                          </TableRow>

                        </TableFooter>
                      </Table>
                    ]}
                  />,
                ]}
              />

          <h1 style={styles.h1} id="analysis">Analysis</h1>

          <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="6" tooltip="Table Header" style={{textAlign: 'center'}}>
                Table Header
              </TableHeaderColumn>
            </TableRow>
            <TableRow >
              <TableHeaderColumn tooltip="Tag ID" style={{textAlign: 'center'}}>Tag ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="Run Deatils" style={{textAlign: 'center'}}>Run Deatils</TableHeaderColumn>
              <TableHeaderColumn tooltip="Life alert" style={{textAlign: 'center'}}>Life alert</TableHeaderColumn>
              <TableHeaderColumn tooltip="Temperature alert" style={{textAlign: 'center'}}>Temperature alert</TableHeaderColumn>
              <TableHeaderColumn tooltip="Total alert" style={{textAlign: 'center'}}>Total alert</TableHeaderColumn>
              <TableHeaderColumn tooltip="Total checkpoint" style={{textAlign: 'center'}}>Total checkpoint</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn style={{textAlign: 'center'}}>epc:80847478791817637894{index}</TableRowColumn>
                <TableRowColumn style={{textAlign: 'center'}}><p>{row.Details}</p><p>{row.Time}</p><p>{row.Time2}</p></TableRowColumn>
                <TableRowColumn style={{textAlign: 'center'}}>{row.Life}</TableRowColumn>
                <TableRowColumn style={{textAlign: 'center'}}>{row.Temperature}</TableRowColumn>
                <TableRowColumn style={{textAlign: 'center'}}>{row.Total}</TableRowColumn>
                <TableRowColumn style={{textAlign: 'center'}}>{row.Checkpoint}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>

          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableHeaderColumn tooltip="Tag ID" style={{textAlign: 'center'}}>Tag ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="Run Deatils" style={{textAlign: 'center'}}>Run Deatils</TableHeaderColumn>
              <TableHeaderColumn tooltip="Life alert" style={{textAlign: 'center'}}>Life alert</TableHeaderColumn>
              <TableHeaderColumn tooltip="Temperature alert" style={{textAlign: 'center'}}>Temperature alert</TableHeaderColumn>
              <TableHeaderColumn tooltip="Total alert" style={{textAlign: 'center'}}>Total alert</TableHeaderColumn>
              <TableHeaderColumn tooltip="Total checkpoint" style={{textAlign: 'center'}}>Total checkpoint</TableHeaderColumn>
            </TableRow>

            <TableRow>
              <TableRowColumn colSpan="6" style={{textAlign: 'center'}}>
                Table footer
              </TableRowColumn>
            </TableRow>

          </TableFooter>
        </Table>

          <h1 style={styles.h1} id="report">Reports</h1>

            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
            >
              <Tab label="Tab A" value="a" >
                <div>
                  <h2 style={styles.headline}>Controllable Tab A</h2>
                  <p>
                    Tabs are also controllable if you want to programmatically pass them their values.
                    This allows for more functionality in Tabs such as not
                    having any Tab selected or assigning them different values.
                  </p>
                </div>
              </Tab>
              <Tab label="Tab B" value="b">
                <div>
                  <h2 style={styles.headline}>Controllable Tab B</h2>
                   <div style={styles.block}>
                    <Checkbox
                      label="Simple"
                      style={styles.checkbox}
                    />
                    <Checkbox
                      label="Checked by default"
                      defaultChecked={true}
                      style={styles.checkbox}
                    />
                    <Checkbox
                      label="Disabled"
                      disabled={true}
                      style={styles.checkbox}
                    />
                    <Checkbox
                      checkedIcon={<ActionFavorite />}
                      unCheckedIcon={<ActionFavoriteBorder />}
                      label="Custom icon"
                      style={styles.checkbox}
                    />
                    <Checkbox
                      label="Label on the left"
                      labelPosition="left"
                      style={styles.checkbox}
                    />
                  </div>
                </div>
              </Tab>
            </Tabs>

          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
