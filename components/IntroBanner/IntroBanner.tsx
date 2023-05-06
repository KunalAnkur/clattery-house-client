import Link from "next/link"
import { dataToString } from "../../helper"
import { ClatteryImage } from "../ClatteryImage/ClatteryImage"

type Props = {
    post: Post
}
export function IntroBanner({post} : Props) {
    const {title, author, titleDescription, mainImage, publishedAt, slug} = post
    return <div className="w-full font-ubuntu text-white xl:max-w-screen-xl xl:mx-auto xl:p-5 xl:mt-20">
        <div className="w-full flex xl:relative">
            <div className="flex items-center xl:h-[26rem]">
                <ClatteryImage className="w-0 xl:w-[22rem] shadow rounded-lg z-10 xl:visible xl:h-fit object-cover" src={mainImage} alt="" />
            </div>
            <div className="p-5 mt-20 z-0 flex flex-col gap-4 xl:mt-0 xl:bg-black/10 xl:backdrop-blur-sm xl:rounded-3xl xl:p-16 xl:absolute xl:justify-end xl:right-0 xl:w-4/5 xl:pl-36">
                <h2 className="text-3xl font-bold">{title}</h2>
                <span className="text-purple-200 font-bold">{author.name} • {dataToString(publishedAt)}</span>
                <p>{titleDescription}</p>
                <Link href={`/blog/${slug.current}`}>   
                    <button className="bg-gray-100/25 w-fit py-2 px-5 mt-5 cursor-pointer">see more</button>
                </Link>
             </div>
        </div>
    </div>
}