import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import '../../components/think-tank.css'
import ThinktankContent from '../../components/ThinktankContent'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
      <ThinktankContent />
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
