import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import '../../components/med-schools/med-schools.css'
import MedschoolsContent from '../../components/med-schools/MedschoolsContent'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
      <MedschoolsContent />
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
