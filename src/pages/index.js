import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { isAuthenticated } from 'utils/auth';
import Layout from '../components/Layout'
import Layout from '../components/Logout'
import Layout from '../components/Login'
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
