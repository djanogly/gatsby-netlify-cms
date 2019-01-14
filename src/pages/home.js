import React from 'react'
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import '../components/home/home.css'
import InnerContent from '../components/home/InnerContent'
import Header from '../components/Header';
import Top from '../components/Top';
import Private from '../components/Private';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/private" component={Private} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        }}/>
      </Switch>
    </main>
  </div>
)

export default class IndexPage extends React.Component {
  render() {
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
