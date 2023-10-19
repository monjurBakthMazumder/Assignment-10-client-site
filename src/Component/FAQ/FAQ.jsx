
const FAQ = () => {
    return (
        <div className="my-20 px-[5%] sm:px-[10%]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">Frequently Asked Questions</h1>
            <div className='flex flex-col-reverse lg:flex-row gap-5'>
                <div className="flex-1">
                    <div className="collapse collapse-arrow border ">
                        <input type="radio" name="my-accordion-2" checked="checked" /> 
                        <div className="collapse-title text-xl font-medium">
                        What is the latest in technology news?
                        </div>
                        <div className="collapse-content"> 
                            <p>Keep up with the latest advancements and trends in the tech world by visiting our news section</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow border ">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                        How can I stay updated with your technology articles and updates?
                        </div>
                        <div className="collapse-content"> 
                            <p>You can subscribe to our newsletter or follow us on social media for regular updates.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow border ">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                        What is the purpose of your technology website?
                        </div>
                        <div className="collapse-content"> 
                            <p>Our website aims to provide information, insights, and guidance on various aspects of technology, from product reviews to tutorials.</p>
                        </div>
                    </div>
                        <div className="collapse collapse-arrow border ">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                        Do you offer tech product reviews and recommendations?
                        </div>
                        <div className="collapse-content"> 
                            <p>Yes, we provide in-depth reviews of various tech products and offer recommendations based on different needs and budgets.</p>
                        </div>
                    </div>
                        <div className="collapse collapse-arrow border ">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                        Can I submit my own tech-related content, such as articles or reviews?
                        </div>
                        <div className="collapse-content"> 
                            <p>We welcome guest contributions. Please check our submission guidelines for more information</p>
                        </div>
                    </div>
                        <div className="collapse collapse-arrow border ">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                        How do I troubleshoot common tech issues?
                        </div>
                        <div className="collapse-content"> 
                            <p>We have a dedicated section with tech tips and troubleshooting guides to help you with common problems.</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1  ">
                    <img src="https://th.bing.com/th/id/R.6b16070f8217a737fc23780bd4bef530?rik=OKsr%2fbfdAJ%2fdBg&pid=ImgRaw&r=0" alt="" className="w-full"/>
                </div>
            </div>
        </div>
    );
};

export default FAQ;