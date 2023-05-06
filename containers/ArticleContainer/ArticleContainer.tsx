import Link from "next/link";
import { ClatteryImage } from "../../components";
import { dataToString } from "../../helper";
import { CategoryContainer } from "../CategoryContainer/CategoryContainer";
interface Props {
    className: string;
    imageWith: string;
    headingText: string;
    buttonGroup: string;
    post: Post
}
export function ArticleContainer({
    className,
    buttonGroup = "",
    headingText = "text-2xl",
    imageWith = "w-full",
    post
}: Props) {
    return (
        <div className={`font-ubuntu group cursor-pointer overflow-hidden ${className}`}>
            <ClatteryImage
                className={`h-80 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out ${imageWith}`}
                src={post.mainImage}
                alt=""
            />
            <div className="flex flex-col gap-2">
                <Link href={`/blog/${post.slug.current}`}>
                    <h2 className={`${headingText} font-bold mt-4`}>
                        {post.title}
                    </h2>
                </Link>
                
                <span className="text-purple-700 font-bold">
                    {post.author.name} • {dataToString(post.publishedAt)}
                </span>
                <p className="text-gray-600">
                    {post.titleDescription}
                </p>
                <div className={`flex justify-between mt-5 ${buttonGroup}`}>
                    <Link href={`/blog/${post.slug.current}`}>
                        <button className="text-purple-700 bg-gray-200 w-full md:w-fit py-2 px-5 cursor-pointer">
                            see more
                        </button>
                    </Link>
                    <div className="flex gap-3">
                        {post.categories.map(category => <CategoryContainer key={category._id} mainImage={category.mainImage} isImagetype={false} category={category.title} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
