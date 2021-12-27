/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import Listing from './listing'
import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata'
import replaceSlashes from '@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes'
import SEO from './seo'

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Blog = ({ posts }: PostsProps) => {
  const { tagsPath, basePath } = useSiteMetadata()
  return (
    <Layout>
      <SEO title="Blog" />
      <Listing posts={posts} sx={{ mt: [4, 5] }} showTags={false} />
      <Link to={replaceSlashes(`/${basePath}/${tagsPath}`)}>
        View all tags
      </Link>
    </Layout>
  )
}

export default Blog