import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import '../../components/prospective-partners/prospective-partners.css'
import ProspectivepartnersContent from '../../components/prospective-partners/ProspectivepartnersContent'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
      <ProspectivepartnersContent />
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
