import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import BrandCard from "../../Component/BrandCard/BrandCard";
import Contact from "../../Component/Contact/Contact";

const Home = () => {
    const loadedBrand = useLoaderData()
    return (
        <div>
            <Banner/>
            <div className="my-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center px-[5%] sm:px-[10%]">Brand</h1>
                <p className="text-center my-5">Explore our extensive collection of brands by clicking the provided link to discover more about each brand&#39;s offerings and unique qualities.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-[5%] sm:px-[10%]">
                    {
                        loadedBrand?.map(brandData=> 
                            <BrandCard
                                key={brandData._id}
                                brandData={brandData}
                            />
                        )
                    }
                </div>
            </div>
            <Contact/>
        </div>
    );
};

export default Home;