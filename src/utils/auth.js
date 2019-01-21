<<<<<<< HEAD
import Auth0Lock from 'auth0-lock';
import { AUTH_CONFIG } from './auth0-variables';
import { navigate } from 'gatsby';

const isBrowser = typeof window !== 'undefined';

let profile = false;

const lock = isBrowser
  ? new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, {
    autoclose: true,
    auth: {
      redirectUrl: AUTH_CONFIG.callbackUrl,
      responseType: 'token id_token',
      params: {
        scope: 'openid profile email user_metadata picture'
      }
    },
    additionalSignUpFields: [{
      type: "select",
      name: "position",
      placeholder: "choose your title",
      options: [{
          value: "pub",
          label: "Nutrition fan"
        },
        {
          value: "mstu",
          label: "Medical Student"
        },
        {
          value: "stu",
          label: "Uni/College Student"
        },
        {
          value: "diet",
          label: "Dietitian"
        },
        {
          value: "nut",
          label: "Registered Nutritionist"
        },
        {
          value: "oth",
          label: "Other Healthcare Professional"
        }
      ]
      // The following properties are optional

      //icon: "https://example.com/assests/location_icon.png",
      //prefill: "nut"
    }],
    theme: {
      logo: 'https://i.ibb.co/wMZTfgV/bulb-trans.png',
      primaryColor: '#Ff8e00'
    },
    languageDictionary: {
      title: "Nutritank"
    }
  })
  : {};
=======
import auth0 from 'auth0-js';
import { navigateTo } from "gatsby-link";

const AUTH0_DOMAIN = 'nutritank.auth0.com';
const AUTH0_CLIENT_ID = 'eOJ5WLYQLvUaxWR6PLOvGA0WOz8GF67_';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    redirectUri: 'https://mystifying-ramanujan-fd2cb2.netlify.com/callback',
    audience: `https://${AUTH0_DOMAIN}/api/v2/`,
    responseType: 'id_token token',
    scope: 'openid profile email user_metadata picture'
  });

  userProfile;

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }
>>>>>>> parent of 87d365f... Beazer attempt auth0

  login() {
    this.auth0.authorize();
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user');
  }

  handleAuthentication() {
    if (typeof window !== 'undefined') {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
        } else if (err) {
          console.log(err);
        }

        // Return to the homepage after authentication.
        navigateTo('/');
      });
    }
  }

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  setSession(authResult) {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    this.auth0.client.userInfo(authResult.accessToken, (err, user) => {
      localStorage.setItem('user', JSON.stringify(user));
    })
  }

  getUser() {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user'));
    }
  }

  getUserName() {
    if (this.getUser()) {
      return this.getUser().name;
    }
  }
}
