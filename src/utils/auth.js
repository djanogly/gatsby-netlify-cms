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
  }):

  constructor() {
    this.handleAuthentication();
    // binds functions to keep this context
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  export const login() {
    // Call the show method to display the widget.
    if (!isBrowser) {
      return;
    }
    this.lock.show();
  };

  export const handleAuthentication() {
    if (!isBrowser) {
      return;
    }

    // Add a callback for Lock's `authenticated` event
    this.lock.on('authenticated', this.setSession.bind(this));
    // Add a callback for Lock's `authorization_error` event
    this.lock.on('authorization_error', (err) => {
      console.log(err);
      alert(`Error: ${err.error}. Check the console for further details.`);
    });
  }

  const setSession = (authResult) => {
    if (!isBrowser) {
      return;
    }

    if (authResult && authResult.accessToken && authResult.idToken) {
      // Set the time that the access token will expire at
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
    }
  }

  export const Logout = () => {
    if (isBrowser) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      localStorage.removeItem('user');
  }

  export const isAuthenticated = () => {
    if (!isBrowser) {
      // For SSR, we’re never authenticated.
      return false;
    }

    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  };

export const getAccessToken = () => {
  if (!isBrowser) {
    return '';
  }

  return localStorage.getItem('access_token');
};

export const getUserInfo = () => new Promise((resolve, reject) => {
  // If the user has already logged in, don’t bother fetching again.
  if (profile) {
    resolve(profile.email);
  }

  const accessToken = getAccessToken();

  if (!isAuthenticated()) {
    resolve({});
    return;
  }

  auth0.client.userInfo(accessToken, (err, userProfile) => {
    if (err) {
      reject(err);
      return;
    }

    profile = userProfile;
    resolve(profile.email);
  });
});
}
