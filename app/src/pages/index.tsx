import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { useStaticQuery,graphql } from "gatsby"
import BlogLink from "../components/BlogLink"
import styled from "styled-components"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

export const blogsQuery = graphql`
  query blogs {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
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
    }
  }
`

const Main = styled.main`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 80vw;
`

const Header = styled.h1`
  text-align: center
`

const MainImage = styled(StaticImage)`
  margin-left: auto;
  margin-right: auto;
	height: 100%;
`

const IndexPage: React.FC<PageProps> = () => {
	const query = useStaticQuery<Queries.blogsQuery>(blogsQuery)
	return (
    <Main > 
      <Header>Welcome to my blog</Header>
        <StaticImage 
          src="../images/shrekd.png" 
          alt="shrek"
					style={{height:"100%",marginLeft:"auto",marginRight: "auto", marginBottom: "50px" }}
        />
			{query.allMdx.nodes.map((bl)=><BlogLink blog={bl} key={bl.id}/>)}
    </Main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
