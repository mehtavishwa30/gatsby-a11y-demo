import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import MoodTracker from '../components/mood-tracker/mood-tracker';
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (() => {
  const data = useStaticQuery(graphql`
    query {
      landingImage: file(relativePath: { eq: "breathe.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Homepage" />
      <MoodTracker />
      <div style={{
        boxShadow: `1px 1px 2px rgba(0,0,0,0.3)`,
        border: `1px solid black`,
        margin: `2em auto`
      }}>
        <Img fluid={data.landingImage.childImageSharp.fluid} alt="" />
      </div>
    </Layout>
  )
})

export default IndexPage

