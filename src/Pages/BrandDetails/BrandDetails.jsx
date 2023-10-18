import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Component/ProductCard/ProductCard";

const BrandDetails = () => {
    const loadedProducts = useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 px-[5%] sm:px-[10%]">
            {
                loadedProducts.map(products=> 
                    <ProductCard
                        key={products._id}
                        products={products}
                    />
                )
            }
        </div>
    );
};

export default BrandDetails;