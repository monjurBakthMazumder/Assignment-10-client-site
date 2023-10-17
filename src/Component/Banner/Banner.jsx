
const Banner = () => {
    return (
        <div className="relative">
            <img src="https://i.ibb.co/dLSHfg6/R.jpg" alt="" className="w-full"/>
                <div className="absolute flex justify-center items-center w-full h-full top-0 bg-black bg-opacity-70">
                    <div className="text-center text-white">
                        <h1 className="mb-5 text-4xl md:text-6xl lg:text-8xl font-bold">Mazumder</h1>
                        <p className="mb-5">Pioneering the Search for Cutting-Edge Technology and Electronics – Stay Connected with Us.</p>
                    </div>
                </div>
        </div>
    );
};

export default Banner;