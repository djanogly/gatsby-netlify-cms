import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import '../../components/feedback.css'
import FeedbackContent from '../../components/FeedbackContent'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
      <FeedbackContent />
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
