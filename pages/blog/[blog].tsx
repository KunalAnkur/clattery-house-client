import Head from 'next/head'
import React from 'react'
import { Banner } from '../../components'
import { BlogContainer, BlogPostHeaderContainer } from '../../containers'

function BlogPost() {
    return (
        <>
            <Head>
                <title>Blog</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <Banner bannerHeight="h-[550px] xl:h-[400px]" adjustingHeight='h-[498px] xl:h-[348px]'>
                <BlogPostHeaderContainer />
            </Banner>
            <BlogContainer />

        </>
    )
}

export default BlogPost