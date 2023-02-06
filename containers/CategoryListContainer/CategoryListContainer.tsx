
import { sanityClient } from "../../sanity";
import { CategoryContainer } from "../CategoryContainer/CategoryContainer";

interface Props {
    categories : [Category]
}
export function CategoryListContainer({categories}: Props) {
    return (
        <section className="md:max-w-screen-xl md:mx-auto p-5">
            <h2 id="category" className="font-bold text-xl">Categories</h2>
            <div className="overflow-x-scroll flex gap-5 mt-5">
                {categories.map(category =>
                    <CategoryContainer key={category._id} mainImage={category.mainImage} isImagetype category={category.title} /> 
                )}
            </div>
        </section>
    );
}
export const getServerSideProps = async () => {
    const query = `*[_type == "category"]{
      _id
      title,
      description,
      mainImage
    }`;
    const categories = await sanityClient.fetch(query);
    return {
        props: {
            categories,
        },
    };
};
