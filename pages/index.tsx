import { groq } from "next-sanity";
import Head from "next/head";
import { Banner, IntroBanner } from "../components";
import {
  ArticleListContainer,
  CategoryListContainer,
  GridContainer,
} from "../containers";
import { sanityClient } from "../sanity";

type Props = {
  posts: [Post]
  categories: [Category]
  trending: [Post, Post, Post]
}

export default function Home({categories, posts, trending}: Props) {
  return (
    <div className="">
      <Head>
        <title>Clattery House</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Banner
        bannerHeight="h-[550px] xl:h-[600px]"
        adjustingHeight="h-[498px] xl:h-[548px]"
        mainImage={trending[0].mainImage}
      >
        <IntroBanner post = {trending[0]} />
      </Banner>
      <GridContainer trending={[trending[0],trending[1],trending[2]]} />
      <CategoryListContainer categories={categories} />
      <ArticleListContainer posts={posts} />
    </div>
  );
}

export const getStaticProps = async () => {
  const query = groq`{
  "posts": *[_type == "post"]{
    ...,
    mainImage,
    author -> ,
    categories[]->,
    products[] -> 
  },
  "categories": *[_type == "category"]{...},
  "trending": *[_type == "post"] | order(_createdAt desc) [0..2] {
    ...,
    mainImage,
    author ->,
    categories[]->,
    products[] -> 
  }
}`;
  const data = await sanityClient.fetch(query);
  return {
    props: {
      posts: data.posts,
      categories: data.categories,
      trending: data.trending
    },
    revalidate: 60
  };
};
