import React from 'react';
import Auth from '../utils/auth';
import loading from './loading.svg';


class Callback extends React.Component {
  render() {
    const auth = new Auth();
    auth.handleAuthentication();
    const style = {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
    }
    return (
      <div style={style}>
        <img src={loading} alt="loading"/>
      </div>
    );
  }
}

export default Callback;