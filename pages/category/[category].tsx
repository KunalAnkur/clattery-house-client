import Head from "next/head"
import { Banner, CategoryBannerContent } from "../../components"
import { CategoryPageContainer } from "../../containers"
import { sanityClient } from "../../sanity"
import { groq } from "next-sanity"

type Props = {
    posts: [Post]
    category: Category
    params: {
        category: string
    }
}

function CategoryPage({posts, category}: Props) {
    return (
        <>
            <Head>
                <title>{category.title}</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <Banner mainImage={category.mainImage} bannerHeight="h-[400px]" adjustingHeight="h-[348px]">
                <CategoryBannerContent />
            </Banner>
            <CategoryPageContainer posts={posts} />
        </>
    )
}
export async function getStaticPaths() {
    const query = groq`
        *[_type=="category"]{
            title
        }
    `
    const categories: Category[] = await sanityClient.fetch(query);
    const categoriesRoutes = categories.map((category) => ({params: {category: category.title}}));
    return {
        paths: categoriesRoutes,
        fallback:false
    }
}
export const getStaticProps = async ({ params: {category} } : Props) => {
    const query = groq`{
    "category": *[_type == "category" && title == $category][0] {...},
    "posts": *[_type == "post" && *[_type == "category" && title == $category][0]._id in categories[]._ref]{
        ...,
        categories[] ->,
        author->
        }
    }`;
    const data = await sanityClient.fetch(query, {category});
    return {
        props: {
            posts: data.posts,
            category: data.category
        },
        revalidate: 60
    };
};


export default CategoryPage