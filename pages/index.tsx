import type { NextPage } from 'next'
import Head from 'next/head'
import { Banner, IntroBanner } from '../components'
import { ArticleListContainer, CategoryListContainer, GridContainer } from '../containers'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Banner bannerHeight="h-[550px] xl:h-[600px]" adjustingHeight='h-[498px] xl:h-[548px]'>
        <IntroBanner />
      </Banner>
      <GridContainer />
      <CategoryListContainer />
      <ArticleListContainer />
    </div>
  )
}

export default Home
