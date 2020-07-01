/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import Listing from './listing'
import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata'
import replaceSlashes from '@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes'

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

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath, tagsPath } = useSiteMetadata()
  return (
    <Layout>
      <Listing posts={posts} showTags={false} />
      <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
        Read all posts
      </Link>
      {` `}
      ·
      {` `}
      <Link to={replaceSlashes(`/${basePath}/${tagsPath}`)}>
        View all tags
      </Link>
    </Layout>
  )
}

export default Homepage