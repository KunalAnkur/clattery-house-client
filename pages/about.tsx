import { groq } from "next-sanity";
import Head from "next/head"
import { useState } from "react";
import { Banner } from "../components"
import { AboutMeContainer } from "../containers"
import { sanityClient } from "../sanity";
type Props = {
    post: Post
}
export default function about({post}: Props) {
    return (
        <>
            <Head>
                <title>About</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <Banner mainImage={post.mainImage} bannerHeight="h-[300px]" adjustingHeight="h-[248px]">
                <div className="text-4xl font-bold h-full text-white flex justify-center items-center p-5">
                    <h1 className="">About</h1>
                </div>
            </Banner>
            <AboutMeContainer />
        </>
    )
}

export const getStaticProps = async () => {
    const query = groq`
   *[_type == "post"][0]{
  _id,
  mainImage
  }
`;
    const data = await sanityClient.fetch(query);
    // if (!data) return { props: null, notFound: true }
    return {
        props: {
            post: data
        },
    };
};