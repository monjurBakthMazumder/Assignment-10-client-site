
const DealOfTheDay = () => {
    return (
        <div className="border-2 text-center py-10 sm:py-20 px-[5%] sm:px-[10%]">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">DEALS OF THE DAY</h1>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-center my-5">30% Discount</p>
            <div className="flex justify-center items-center">
            <div className="flex gap-5 font-bold text-2xl">
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{"--value":10}}></span>
                    </span>
                    hours
                </div> 
                <div>
                    <span className="countdown font-mono text-4xl">
                    <span style={{"--value":24}}></span>
                    </span>
                    min
                </div> 
                <div>
                    <span className="countdown font-mono text-4xl">
                    <span style={{"--value":51}}></span>
                    </span>
                    sec
                </div>
                </div>
            </div>
        </div>
    );
};

export default DealOfTheDay;