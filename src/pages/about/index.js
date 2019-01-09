import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import '../../components/about/about.css'
import AboutContent from '../../components/about/AboutContent'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
      <AboutContent />
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
