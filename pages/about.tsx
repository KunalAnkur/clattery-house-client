import { groq } from "next-sanity";
import Head from "next/head"
import { Banner } from "../components"
import { AboutMeContainer } from "../containers"
import { sanityClient, urlFor } from "../sanity";
import { NextSeo } from "next-seo";
type Props = {
    post: Post
}
export default function about({post}: Props) {
    return (
        <>
        <NextSeo 
            openGraph={{
                title: "About Me",
                url:"/about",
                type: "profile",
                description: "Welcome to my blog! My name is Ankur Kunal and I am a passionate developer who loves to share my knowledge and experience with others. I have been working in the field of programming for several years and have a wealth of experience to share with my readers.My blog is dedicated to all things related to programming, including tips, tricks, and tutorials on various programming languages and frameworks. I also share my thoughts and experiences on various other topics, such as work- life balance, mental health, and staying motivated as a developer. I want to create a community where developers can come together to share their experiences, knowledge, and support each other.I believe that programming is not just about writing code but also about continuous learning, problem-solving, and personal growth. That's why in my blog, I will be sharing my journey as a developer, the challenges I have faced and the solutions I have found.So, whether you're a beginner looking to learn the basics of programming, or an experienced developer looking for inspiration and new ideas, I hope you'll find something of value here.            Thank you for visiting my blog and I hope to see you around! Feel free to reach out to me via contact form or social media links provided in the website, I will be happy to connect with you.</p >",
                profile: {
                    firstName: "Ankur",
                    lastName: "Kunal",
                    gender: 'male',
                    username: "_ankurkunal_"
                },
                images: [
                    {
                        url: "/ProfilePhoto.jpg",
                        width: 850,
                        height: 650,
                        alt: "Ankur Kunal"
                    }
                ]
            }}
        />
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