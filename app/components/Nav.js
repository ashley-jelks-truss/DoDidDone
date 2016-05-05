import React from 'react';
import { Link } from 'react-router';
import DropDownMenu from './DropDownMenu';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      modalState: 'login'
    };
  }

  handleOpen(modalState) {
    return this.setState({ open: true, modalState });
  }

  handleClose() {
    return this.setState({ open: false });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={ true }
        onTouchTap={ () => this.handleClose() }
      />,
      <FlatButton
        label="Submit"
        primary={ true }
        keyboardFocused={ true }
        onTouchTap={ () => this.handleClose() }
      />
    ];

    const modalTitle = {
      signup: {
        title: 'DoDoneDid Signup'
      },
      login: {
        title: 'DoDoneDid Login'
      }
    };

    return (
      <div>
        <AppBar
          iconElementLeft={ <div /> }
          containerElement={ <Link to="/" /> }
          title="DoDoneDid"
        >
          <FlatButton label="Login" secondary={ true } onTouchTap={
              () => this.handleOpen('login')} />
          <FlatButton label="Signup" secondary={ true } onTouchTap={
              () => this.handleOpen('signup') } />
          <Dialog
            title={ modalTitle[this.state.modalState].title }
            actions={actions}
            modal={ true }
            open={ this.state.open }
            onRequestClose={ this.handleClose }
          >
            { this.state.modalState === 'login' ? (<LoginForm />) : (<SignupForm />) }
          </Dialog>
          <DropDownMenu />
        </AppBar>
      </div>
    );
  }
}

export default Nav;
