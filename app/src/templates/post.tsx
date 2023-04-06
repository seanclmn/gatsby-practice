import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"


const shortcodes = { Link } // Provide common components here
// tewst

const BlogHeader = styled.div`
  text-align: center;
`
const BlogBody = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`
export default function PageTemplate({ data: { mdx } }:any) {
  console.log(mdx)
  return (
    <>
      <BlogHeader>
        <h1>{mdx.frontmatter.title}</h1>
        <h4>{mdx.frontmatter.date}</h4>
      </BlogHeader>
      <BlogBody>
        <GatsbyImage 
          image={mdx.frontmatter.image?.childImageSharp?.gatsbyImageData}
          alt="test" 
          style={{width:"50%",marginLeft:"auto",marginRight: "auto" }}
          />
        <div dangerouslySetInnerHTML={{ __html: mdx.body }}/>
      </BlogBody>
      
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date
        image {
          childImageSharp {
            fixed {
              srcWebp
            }
            gatsbyImageData(layout: CONSTRAINED, formats: [WEBP])
          }
        }
      }
    }
  }`