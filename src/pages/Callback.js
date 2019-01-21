import React from 'react';
import Auth from '../utils/auth';
import { navigate } from 'gatsby';
import { handleAuthentication } from '../utils/auth';
import loading from './loading.svg';


class Callback extends Component {
  componentDidMount() {
    handleAuthentication();
    setTimeout(() => {
      navigate('/search')
    }, 1500);
  }

  render() {
    return (
      <div style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        height: '98vh',
        width: '98vw',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
      }}
      >
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

export default Callback;
