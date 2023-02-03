import { CategoryContainer } from "../CategoryContainer/CategoryContainer";
interface Props {
    className: string;
    imageWith: string;
    headingText: string;
    buttonGroup: string;
}
export function ArticleContainer({
    className,
    buttonGroup = "",
    headingText = "text-2xl",
    imageWith = "w-full",
}: Props) {
    return (
        <div className={`font-ubuntu ${className}`}>
            <img
                className={`h-80 object-cover ${imageWith}`}
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&dl=kalen-emsley-Bkci_8qcdvQ-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
            ></img>
            <div className="flex flex-col gap-2">
                <h2 className={`${headingText} font-bold mt-4`}>
                    What kind of website are in high demand?
                </h2>
                <span className="text-purple-700 font-bold">
                    Ankur Kunal • 2 Jan 2022
                </span>
                <p className="text-gray-600">
                    Building and launching a side project isn’t just a way to learn
                    something new — you can also turn it into a steady stream of revenue.
                    Whether you want to monetize cont
                </p>
                <div className={`flex justify-between mt-5 ${buttonGroup}`}>
                    <button className="text-purple-700 bg-gray-200 w-full md:w-fit py-2 px-5 cursor-pointer">
                        see more
                    </button>
                    <div className="flex gap-3">
                        <CategoryContainer isImagetype={false} category="Travel" />
                        <CategoryContainer isImagetype={false} category="Programming" />
                        <CategoryContainer isImagetype={false} category="Bugg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
