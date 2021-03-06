import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import '../../components/community/community.css'
import CommunityContent from '../../components/community/CommunityContent'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
      <CommunityContent />
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
