import { graphql } from 'gatsby'
import HomepageComponent from '@lekoarts/gatsby-theme-minimal-blog-core/src/components/homepage'

export default HomepageComponent

export const query = graphql`
  query {
    allPost(sort: { fields: date, order: DESC }, limit: 3) {
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