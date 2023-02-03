const categoryDesign = {
    Travel: "text-[#04c700] bg-[#cbffca] shadow-lg shadow-[#cbffca]",
    Programming: "text-[#c75f00] bg-[#fff7ca] shadow-lg shadow-[#fff7ca]",
    Bugg: "text-[#00afc7] bg-[#cafcff] shadow-lg shadow-[#cafcff]",
};
interface Props {
    category: "Travel" | "Programming" | "Bugg";
    isImagetype: boolean;
}
export function CategoryContainer({ category, isImagetype }: Props) {
    return (
        <>
            {isImagetype ? (
                <div className="flex-shrink-0 flex-nowrap relative cursor-pointer">
                    <img
                        className="w-32 h-32 md:w-52 md:h-52 object-cover md:hover:hue-rotate-30"
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&dl=kalen-emsley-Bkci_8qcdvQ-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
                        alt=""
                    />
                    <div className="absolute hover:bg-black/60 bottom-0 w-full text-white p-2">
                        <p>{category}</p>
                    </div>
                </div>
            ) : (
                <span className={`shadow-lg py-2 px-5 ${categoryDesign[category]}`}>
                    {category}
                </span>
            )}
        </>
    );
}
