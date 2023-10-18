
const Service = () => {
    return (
        <div className="my-20 px-[5%] sm:px-[10%]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">Our Service</h1>
            <div className='flex flex-col lg:flex-row gap-5'>
                <div className="flex-1  ">
                    <img src="https://www.technologyvista.in/wp-content/uploads/2015/07/our-service.jpg" alt="" className="w-full"/>
                </div>
                <div className="flex-1">
                    <div className="collapse collapse-arrow border bg-gray-50">
                        <input type="radio" name="my-accordion-3" checked="checked" /> 
                        <div className="collapse-title text-xl font-medium">
                        Apple - The Genius Bar Experience
                        </div>
                        <div className="collapse-content"> 
                            <p>When it comes to tech services, Apple is synonymous with excellence. Their Genius Bar is a haven for Apple product users, where you can seek expert advice and troubleshooting for your Apple devices. Whether it&#39;s iPhone, iPad, Mac, or any other Apple product, their skilled technicians are on hand to diagnose and resolve any issues, ensuring you make the most of your Apple experience.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow border bg-gray-50">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                        LG - Life&#39;s Good with LG Support
                        </div>
                        <div className="collapse-content"> 
                            <p>LG&#39;s tech support is as reliable as their cutting-edge electronics. LG offers a comprehensive range of services, from troubleshooting assistance to repairs and warranties. Their dedication to customer satisfaction ensures that you can trust your LG products to perform optimally throughout their lifespan.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow border bg-gray-50">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                        Dell - Elevating Customer Support
                        </div>
                        <div className="collapse-content"> 
                            <p>Dell&#39;s reputation as a leader in the computing industry extends to their exceptional customer support. With a wide range of products and solutions, Dell&#39;s tech services cover everything from laptops and desktops to servers and data storage. They offer timely assistance for troubleshooting, warranties, and solutions for both personal and business users.</p>
                        </div>
                    </div>
                        <div className="collapse collapse-arrow border bg-gray-50">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                        Samsung - Elevate Your Galaxy Experience
                        </div>
                        <div className="collapse-content"> 
                            <p>Samsung&apos;s tech services are designed to enhance the Galaxy user experience. From smartphones and tablets to home appliances and wearables, Samsung&apos;s experts provide top-tier support. Whether it&apos;s phone repairs, SmartThings setup, or troubleshooting, Samsung&apos;s service is there to keep your tech world running smoothly.</p>
                        </div>
                    </div>
                        <div className="collapse collapse-arrow border bg-gray-50">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                        Sony - Mastering Sony Electronics
                        </div>
                        <div className="collapse-content"> 
                            <p>Sony is renowned for its innovative electronics, and they extend this innovation to their customer services. Sony offers support for their wide range of products, from Bravia TVs and PlayStation consoles to cameras and audio equipment. Their customer support team is equipped to assist with setup, troubleshooting, and repairs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;