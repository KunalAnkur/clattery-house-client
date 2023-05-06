import Link from "next/link";
import { ClatteryImage } from "../../components";

const categoryDesign = {
    Travel: "text-[#04c700] bg-[#cbffca] shadow-lg shadow-[#cbffca]",
    Programming: "text-[#c75f00] bg-[#fff7ca] shadow-lg shadow-[#fff7ca]",
    Bug: "text-[#00afc7] bg-[#cafcff] shadow-lg shadow-[#cafcff]",
};
interface Props {
    category: "Travel" | "Programming" | "Bug";
    isImagetype: boolean;
    mainImage: MainImage
}
export function CategoryContainer({ category, isImagetype, mainImage }: Props) {
    return (
        <>
            {isImagetype ? (
                <Link href={`/category/${category}`}><div className="flex-shrink-0 flex-nowrap relative cursor-pointer">
                    <ClatteryImage
                        className="w-32 h-32 md:w-52 md:h-52 object-cover md:hover:hue-rotate-30"
                        src={mainImage}
                        alt=""
                    />
                    <div className="absolute hover:bg-black/60 bottom-0 w-full text-white p-2">
                        <p>{category}</p>
                    </div>
                </div></Link>
                
            ) : (
                <span className={`shadow-lg py-2 px-5 ${categoryDesign[category]}`}>
                    {category}
                </span>
            )}
        </>
    );
}
