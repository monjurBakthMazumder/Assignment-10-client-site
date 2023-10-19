import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../../Component/ProductCard/ProductCard";
import { useEffect } from "react";
import { useState } from "react";

const BrandDetails = () => {
    const [data, setData] = useState([])
    const [banner, setBanner] = useState([])
    const loadedProducts = useLoaderData()
    const brand = useParams()
    // console.log(brand.brand)
    
    useEffect(()=> {
        fetch('https://server-site-45slczu5o-md-monjur-bakth-mazumders-projects.vercel.app/brand')
        .then(res=> res.json())
        .then(data=> setData(data))
        const filterBrand = data?.find(item=> item?.brand === brand?.brand)
        setBanner(filterBrand);
    },[brand?.brand,data])
    // console.log(banner);
    return (
        <>
            <div className="carousel w-full h-[75vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner?.banner1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner?.banner2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner?.banner3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner?.banner4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>




























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
        </>
    );
};

export default BrandDetails;