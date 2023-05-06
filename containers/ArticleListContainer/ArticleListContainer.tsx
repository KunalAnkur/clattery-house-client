import { ArticleContainer } from "../ArticleContainer/ArticleContainer";
interface Props {
    posts: [Post]
}
export function ArticleListContainer({ posts }: Props) {
    
    return (
        <section className="p-5 md:max-w-screen-xl md:mx-auto">
            <h2 className="font-bold text-xl">All blog posts</h2>
            <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                {posts.map(post => 
                    <ArticleContainer key={post._id} post={post} className="flex flex-col " imageWith="w-full" headingText="text-2xl" buttonGroup="flex-col-reverse gap-5" />
                )}
            </div>
        </section>
    )
}
