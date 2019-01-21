<<<<<<< HEAD
import React, { Component } from 'react';
import { Login } from '../utils/auth';

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    Login();
  }
=======
import React from "react";
import './main.css'
>>>>>>> parent of 87d365f... Beazer attempt auth0

class Login extends React.Component {
  render() {
    return (
      <div className="sign-in navbar-right">
        <button
          id="user-profile"
          className="btn-link btn btn-lg"
          data-loading-text="Getting info"
        >
          <img id="profilepicture" />
          <span id="profilename" />
        </button>
        <button id="auth0-login" className="btn btn-lg btn-link auth0-login">
          Sign in
        </button>
        <button id="auth0-logout" className="btn-link btn-lg btn btn-success">
          Sign Out
        </button>
      </div>
    );
  }
}

export default Login;
