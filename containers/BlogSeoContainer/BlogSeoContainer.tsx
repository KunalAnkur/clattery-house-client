import React from 'react'
import {NextSeo, ArticleJsonLd} from 'next-seo'
import { urlFor } from '../../sanity'

type Props = {
    post: Post
}

export function BlogSeoContainer({ post }: Props) {
    return (
        <>
            <NextSeo 
                title={post.title}
                description={post.titleDescription}
                openGraph={{
                    title: post.title,
                    description: post.titleDescription,
                    type: 'article',
                    article:{
                        publishedTime: post.publishedAt,
                        modifiedTime: post._updatedAt,
                        authors: [post.author.name],
                        tags: post.categories.map(tag => tag.title)
                    },
                    images: [
                        {
                            url: urlFor(post.mainImage).url(),
                            width: 850,
                            height: 650,
                            alt: post.title
                        }
                    ]
                }}
            />
            <ArticleJsonLd
                useAppDir={false}
                url={`/${post.slug.current}`}
                title={post.title}
                description={post.titleDescription}
                images={[urlFor(post.mainImage).url()]}
                datePublished={post.publishedAt}
                dateModified={post._updatedAt}
                authorName={[
                    {
                        name: post.author.name,
                        url: urlFor(post.author.image).url()
                    }
                ]}
                publisherName={post.author.name}
                isAccessibleForFree={true}
                publisherLogo={urlFor(post.author.image).url()}
            />
        </>
    )
}
