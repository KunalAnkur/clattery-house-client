import { groq } from 'next-sanity'
import Head from 'next/head'
import React from 'react'
import { Banner } from '../../components'
import { BlogContainer, BlogPostHeaderContainer } from '../../containers'
import { sanityClient } from '../../sanity'

type Props = {
    post: Post
    params: {
        blog: string
    }
}

function BlogPost({post} :Props) {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <Banner mainImage={post.mainImage} bannerHeight="h-[550px] xl:h-[400px]" adjustingHeight='h-[498px] xl:h-[348px]'>
                <BlogPostHeaderContainer post={post} />
            </Banner>
            <BlogContainer body={post.body} />

        </>
    )
}
export async function getStaticPaths() {
    const query = groq`
        *[_type=="post"]{
            slug
        }
    `
    const posts: Post[] = await sanityClient.fetch(query);
    const postRoutes = posts.map((post) => ({ params: { blog: post.slug.current } }));
    return {
        paths: postRoutes,
        fallback: false
    }
}
export const getStaticProps = async ({ params: { blog } }: Props) => {
    const query = groq`*[_type == "post" && slug.current == $blog][0]{
        ...,
        categories[] ->,
        author->
    }
    `;
    const data = await sanityClient.fetch(query, { blog });
    return {
        props: {
            post: data,
        },
    };
};

export default BlogPost