import React, { Component } from 'react';
import { Logout } from 'utils/auth';

class LogoutButton extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    Logout();
  }

  render() {
    return (
        <button onClick={this.logout}>
        	Log In
        </button>
    );
  }
}

export default LogoutButton;
