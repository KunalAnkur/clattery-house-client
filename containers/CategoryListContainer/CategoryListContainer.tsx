import { CategoryContainer } from "../CategoryContainer/CategoryContainer";

export function CategoryListContainer() {
    return (
        <section className="md:max-w-screen-xl md:mx-auto p-5">
            <h2 id="category" className="font-bold text-xl">Categories</h2>
            <div className="overflow-x-scroll flex gap-5 mt-5">
                <CategoryContainer isImagetype category="Bugg" />
                <CategoryContainer isImagetype category="Bugg" />
                <CategoryContainer isImagetype category="Bugg" />
                <CategoryContainer isImagetype category="Bugg" />
                <CategoryContainer isImagetype category="Bugg" />
                <CategoryContainer isImagetype category="Bugg" />
                <CategoryContainer isImagetype category="Bugg" />
                <CategoryContainer isImagetype category="Bugg" />
            </div>
        </section>
    );
}
