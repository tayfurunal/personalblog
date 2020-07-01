import { graphql } from 'gatsby'
import BlogComponent from '@lekoarts/gatsby-theme-minimal-blog-core/src/components/blog'

export default BlogComponent

export const query = graphql`
  query {
    allPost(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        description
        excerpt(pruneLength: 300)
        date(formatString: "DD.MM.YYYY")
        tags {
          name
          slug
        }
      }
    }
  }
`