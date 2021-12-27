/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Box } from '@theme-ui/components'
import { Link } from 'gatsby'
import ItemTags from '@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags'

type BlogListItemProps = {
  post: {
    slug: string
    title: string
    date: string
    description: string
    excerpt: string
    tags?: {
      name: string
      slug: string
    }[]
  }
  showTags?: boolean
}

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
  <Box mb={4}>
    <Styled.a as={Link} to={post.slug} sx={{ fontSize: [1, 2, 3], color: `primary` }}>
      {post.title}
    </Styled.a>
    <time sx={{ fontSize: '1rem', fontColor: 'secondary', display: 'block', color: `text` }}>{post.date}</time>
    <p>{post.excerpt}</p>
    <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
      {post.tags && showTags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
    </p>
  </Box>
)

export default BlogListItem