import { ProductCard } from "../../components";

export function ProductContainer() {
    return (
        <div className="flex flex-col gap-5 xl:w-1/3 xl:h-fit xl:sticky xl:top-4">
            <h2 className="font-bold text-lg ">Product you should have</h2>
            <div className="flex overflow-auto gap-5 xl:flex-col xl:max-h-96">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}
