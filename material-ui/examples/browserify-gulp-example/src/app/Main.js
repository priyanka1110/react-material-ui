/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import Radium, { Style } from 'radium'
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
import ClearFix from 'material-ui/internal/ClearFix';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';

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
  SelectField,
  TimePicker,
 } from 'material-ui';

import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';


var ReactCSS = require('reactcss');

const items = [
  <MenuItem key={1} value={1} primaryText="Never" />,
  <MenuItem key={2} value={2} primaryText="Every Night" />,
  <MenuItem key={3} value={3} primaryText="Weeknights" />,
  <MenuItem key={4} value={4} primaryText="Weekends" />,
  <MenuItem key={5} value={5} primaryText="Weekly" />,
];
export default class SelectFieldExampleFloatingLabel extends React.Component {

  // constructor(props) {
  //   super(props);
  //   // this.state = {value: null};
  }

const styles = {
  container: {
    // textAlign: 'center',
    paddingTop: 0,
  },
   subContainer: {
    // textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop:85,
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
   paper: {
    width: 500,
    margin: 'auto',
  },
  header: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
  },
  actionButton: {
    marginRight: 8,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const tilesData = [
  {
    img: 'images/kerem-128.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/kerem-128.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/kerem-128.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/kerem-128.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/kerem-128.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/kerem-128.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/kerem-128.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];


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
      value: null,

      /* Table javascript */

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
          <AppBar className="appFixed"
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
           <Style
          rules={{
              mediaQueries: {
                '(max-width: 600px)': {
                  body: {
                    background: 'gray'
                  },
                  '.sq':{
                    background: 'red !important',
                    width: '50% !important',
                  },
                },
                '(max-width: 500px)': {
                  body: {
                    background: 'aqua'
                  },
                  '.member':{
                    display:'block',
                  },
                  '.memberDiv1' :{
                    width: '100%',
                    background: 'green'
                  },
                  '.memberDiv2' :{
                    width: '100%',
                    background: 'red'
                  },

                  'i': {
                    color:'red'
                  },
                  '.memberDiv1 div :first-child span':{
                    background: 'yellow'
                  },
                  '.tabBg': {
                    background: 'pink !important'
                  },
                  'p, h1': {
                    color: 'white !important',
                  }
                }
              }
          }}
        />

    <FloatingActionButton mini={true}>
      <ContentAdd />
    </FloatingActionButton>

          <Drawer openSecondary={false} docked={false} width={240} open={this.state.open} onRequestChange={(open) => this.setState({open})} >

            <MenuItem onTouchTap={this.handleClose} href="#member">
              <i className="fa fa-users"></i> Members
            </MenuItem>

            <MenuItem onTouchTap={this.handleClose} href="#webhook">
              <i className="fa fa-globe" aria-hidden="true"></i> Webhooks
            </MenuItem>

            <MenuItem onTouchTap={this.handleClose} href="#tags">
              <i className="fa fa-tags" aria-hidden="true"></i> Tags, Events logs and Runs
            </MenuItem>

            <MenuItem onTouchTap={this.handleClose} href="#analysis">
              <i className="fa fa-line-chart" aria-hidden="true"></i> Analysis
            </MenuItem>

            <MenuItem onTouchTap={this.handleClose} href="#report">
              <i className="fa fa-file-text" aria-hidden="true"></i> Reports
            </MenuItem>

            <MenuItem onTouchTap={this.handleClose} href="#oraganization">
              <i className="fa fa-briefcase" aria-hidden="true"></i> Oraganization
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
                  leftAvatar={<Avatar className="fa fa-user" />}
                  rightIcon={<FlatButton label="Remove" primary={true} />} 
                />

                <ListItem 
                  primaryText="Memmber2"  
                  secondaryText="member2@example.com" 
                  leftAvatar={<Avatar className="fa fa-ban fa-stack-2x text-danger" src="images/kerem-128.jpg" />}
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
            <div style={styles.block}>
              <Toggle
                label="Active"
                style={styles.toggle}
              />
            </div>

          <h1 style={styles.h1} id="tags">Tags, Events logs and Runs</h1>
             <ListItem
                primaryText="epc:67589003489380384-0480384-34083848"
                leftIcon={<FontIcon className="material-icons">add</FontIcon>}
                initiallyOpen={false}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    
                    primaryText="Tag table"
                    leftIcon={<ContentSend />}
                    disabled={false}
                    initiallyOpen={true}
                    nestedItems={[

                       <Table
                        height={this.state.height}
                        selectable={this.state.selectable}
                        multiSelectable={this.state.multiSelectable}
                      >
                        <TableHeader
                          displaySelectAll={this.state.showCheckboxes}
                          adjustForCheckbox={this.state.showCheckboxes}
                          enableSelectAll={this.state.enableSelectAll}
                        >
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
                        </TableFooter>
                      </Table>
                    ]}
                  />,
                ]}
              />

          <h1 style={styles.h1} id="analysis">Analysis</h1>

          <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          floatingLabelText="Floating Label Text"
          >
            {items}
          </SelectField>

          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            floatingLabelText="Styled Floating Label Text"
            floatingLabelStyle={{color: 'red'}}
          >
            {items}
          </SelectField>

           <TimePicker
              hintText="12hr Format"
            />
            <TimePicker
              format="24hr"
              hintText="24hr Format"
            />
             <RaisedButton
              onTouchTap={this.handleTouchTap}
              label="Add to my calendar"
            />
            <Snackbar
              open={this.state.open}
              message="Event added to your calendar"
              autoHideDuration={4000}
              onRequestClose={this.handleRequestClose}
            />

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
           <div style={styles.root}>
            <GridList
              cellHeight={200}
              style={styles.gridList}
            >
              <Subheader>December</Subheader>
              {tilesData.map((tile) => (
                <GridTile
                  key={tile.img}
                  title={tile.title}
                  subtitle={<span>by <b>{tile.author}</b></span>}
                  actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                  <img src={tile.img} />
                </GridTile>
              ))}
            </GridList>
          </div>
          <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Click me"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
  
        >
          <div style={styles.popover}>
            <RaisedButton primary={true} label="Here is a button"/>
          </div>
        </Popover>
          <h1 style={styles.h1} id="oraganization">Oraganization</h1>

            <Tabs 
              value={this.state.value}
              onChange={this.handleChange}
            >
              <Tab label="Tab A" value="a" className="tabBg" >
                <div>
                  <h2 style={styles.headline}>Controllable Tab A</h2>
                  <div style={styles.block}>
                    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                      <RadioButton
                        value="light"
                        label="Simple"
                        style={styles.radioButton}
                      />
                      <RadioButton
                        value="not_light"
                        label="Selected by default"
                        style={styles.radioButton}
                      />
                      <RadioButton
                        value="ludicrous"
                        label="Custom icon"
                        checkedIcon={<ActionFavorite />}
                        uncheckedIcon={<ActionFavoriteBorder />}
                        style={styles.radioButton}
                      />
                    </RadioButtonGroup>
                    <RadioButtonGroup name="shipName" defaultSelected="community">
                      <RadioButton
                        value="enterprise"
                        label="Disabled unchecked"
                        disabled={true}
                        style={styles.radioButton}
                      />
                      <RadioButton
                        value="community"
                        label="Disabled checked"
                        disabled={true}
                        style={styles.radioButton}
                      />
                    </RadioButtonGroup>
                    <RadioButtonGroup name="notRight" labelPosition="left" style={styles.block}>
                      <RadioButton
                        value="reverse"
                        label="Label on the left"
                        style={styles.radioButton}
                      />
                    </RadioButtonGroup>
                  </div>
                </div>
                  <Paper zDepth={2}>
                    <TextField hintText="First name"  underlineShow={false} />
                    <Divider />
                    <TextField hintText="Middle name"  underlineShow={false} />
                    <Divider />
                    <TextField hintText="Last name"  underlineShow={false} />
                    <Divider />
                    <TextField hintText="Email address"  underlineShow={false} />
                    <Divider />
                  </Paper>
              </Tab>
              <Tab label="Tab B" value="b" className="tabBg">
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
