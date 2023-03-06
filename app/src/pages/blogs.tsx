import {graphql, useStaticQuery} from 'gatsby'
import React,{ ReactElement } from 'react'
import { MDXProvider, } from '@mdx-js/react'

import Index from '../../src/blogcontent/3-1-2023/index.mdx'

export const blogsQuery = graphql`
  query blogs {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        body
        frontmatter {
          title
          date
        }
      }
    }
  }
`

const Blog = () => {
  return(
    <div>

    </div>
  )
}

const Blogs = () => {
  const { nodes } = useStaticQuery<Queries.blogsQuery>(blogsQuery).allMdx
  console.log(nodes)
  return(
    <div>
      {nodes.map((blog)=><div key={blog.id}><p>{blog?.frontmatter?.title}</p><MDXProvider>{blog.body}</MDXProvider></div>)}
      
    </div>
  )
}

export default Blogs