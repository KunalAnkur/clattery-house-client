import { ArticleContainer } from "../ArticleContainer/ArticleContainer";
import { ProductContainer } from "../ProductContainer/ProductContainer";

type Props = {
    posts: [Post]
}

export function CategoryPageContainer({posts} :Props) {
    return (
        <main className="p-5 flex gap-6 flex-col xl:flex-row-reverse xl:max-w-screen-xl xl:mx-auto min-h-screen">
            <ProductContainer />
            <div className="flex gap-5 flex-col xl:w-2/3">
                <h2 className="font-bold text-lg">Recent Posts</h2>
                <div className="flex flex-col gap-5 ">
                    {posts.map(post =>   <ArticleContainer key={post._id} post={post} className="flex lg:flex-row flex-col lg:col-span-6 lg:gap-8" imageWith="lg:w-[350px] lg:h-full" buttonGroup="flex-col-reverse lg:flex-row gap-5 lg:items-start" headingText="text-lg lg:mt-0" />
                 ) }
                 </div>
            </div>
        </main>
    )
}
