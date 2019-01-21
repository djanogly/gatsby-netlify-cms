import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import '../components/home/home.css'
import InnerContent from '../components/home/InnerContent'

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
