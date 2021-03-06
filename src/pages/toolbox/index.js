import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import '../../components/toolbox/toolbox.css'
import ToolboxContent from '../../components/toolbox/ToolboxContent'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
      <ToolboxContent />
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
