/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Heading } from '@theme-ui/components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import SEO from './seo'

type PageProps = {
  data: {
    page: {
      title: string
      slug: string
      excerpt: string
      body: string
    }
  }
}

const Page = ({ data: { page } }: PageProps) => (
  <Layout>
    <SEO title={page.title} description={page.excerpt} />
    <Heading variant="h2" as="h2">
      {page.title}
    </Heading>
    <section sx={{ my: 5, h2: { margin: '50px 0', fontSize: '2rem' }, h3: { margin: '40px 0', fontSize: '1.5rem' }, h4: { margin: '30px 0', fontSize: '1.3rem' } }}>
      <MDXRenderer>{page.body}</MDXRenderer>
    </section>
  </Layout>
)

export default Page