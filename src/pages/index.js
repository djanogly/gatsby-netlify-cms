import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import '../components/home/home.css'
import InnerContent from '../components/home/InnerContent'

export default class IndexPage extends React.Component {
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
    <div>
      {authenticated && (
              <Logout/>
          )}
          {!authenticated && (
              <Login />
          )}
    </div>
>>>>>>> parent of cfa17f4... fix links and add auth0-lock
=======
  render() {
    return (
>>>>>>> parent of 87d365f... Beazer attempt auth0
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
