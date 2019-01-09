import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import '../components/home.css'
import AmbassadorsContent from '../components/AmbassadorsContent'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
      <AmbassadorsContent />
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
