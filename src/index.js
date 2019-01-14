import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Layout from '../components/Layout'
import '../components/layout.css'

render((
  <Layout>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Layout>
), document.getElementById('root'));
