import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

type blogProps = {
	readonly blog: Queries.blogsQuery["allMdx"]["nodes"][0]
}

const MyLink = styled(Link)`
	padding: 15px;
	color: black;
	text-decoration: none;
	border-top: 1px solid;	
	display: flex;
	flex-direction: row;
	justify-content: left;
	width: 100%;
`

const TitleContainer = styled.div`
	width: 100px;
`

const Title = styled.h3`
	&:hover {
		color: indigo;
	}
`

const BlogLink = ({ blog }:blogProps) => {
	console.log(blog)
	return(
		<>
			<MyLink to={`/${blog.frontmatter?.date}`}>
				<TitleContainer>
					<Title>{blog?.frontmatter?.title}</Title>
					<p>({blog?.frontmatter?.date})</p>
				</TitleContainer>
				<GatsbyImage
					image={blog?.frontmatter?.image?.childImageSharp?.gatsbyImageData!}
					alt="test" 
					style={{width:"30%",marginLeft: "50px"}}
				/>
			</MyLink>
		</>
	)
}

export default BlogLink
