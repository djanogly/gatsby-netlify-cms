import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { isAuthenticated } from '../utils/auth';
import Layout from '../components/Layout'
import Logout from '../components/Logout'
import Login from '../components/Login'
import '../components/home/home.css'
import InnerContent from '../components/home/InnerContent'

export default class IndexPage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    authenticated: false,
  };
}

componentDidMount() {
  this.setState({ authenticated: isAuthenticated() });
}

render() {
  const { authenticated } = this.state;

  return (
      <Layout>
      <InnerContent />
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
