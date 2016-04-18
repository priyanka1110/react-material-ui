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
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
// import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';


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
};

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
            title={<span style={styles.title}>Title</span>}
            label="open left sidebar"
            onTouchTap={this.handleTouchTap}
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

            <MenuItem onTouchTap={this.handleClose}>
              <FontIcon className="material-icons">home</FontIcon> Members
            </MenuItem>

            <MenuItem onTouchTap={this.handleClose}>
              <FontIcon className="material-icons">home</FontIcon> Webhooks
            </MenuItem>

            <MenuItem onTouchTap={this.handleClose}>
              <FontIcon className="material-icons">home</FontIcon> Tags, Events logs and Runs
            </MenuItem>

            <MenuItem onTouchTap={this.handleClose}>
              <FontIcon className="material-icons">home</FontIcon> Analysis
            </MenuItem>

            <MenuItem onTouchTap={this.handleClose}>
              <FontIcon className="material-icons">home</FontIcon> Reports
            </MenuItem>

            <MenuItem onTouchTap={this.handleClose}>
              <FontIcon className="material-icons">work</FontIcon> Oraganization
            </MenuItem>

          </Drawer>

          <div style={styles.subContainer}>

          <h1 style={styles.h1}>Members</h1>
            <List>
              <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
              <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
              <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
              <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
            </List>

          <h1 style={styles.h1}>Webhooks</h1>
             <List>
              <ListItem primaryText="Testing Webhooks" left={<FlatButton label="Remove" primary={true} />} rightIcon={<FlatButton label="Remove" primary={true} />} />
              <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
              <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
              <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
            </List>

          <h1 style={styles.h1}>Tags, Events logs and Runs</h1>
          <h1 style={styles.h1}>Analysis</h1>
          <h1 style={styles.h1}>Reports</h1>

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
