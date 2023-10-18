import Swal from "sweetalert2";

const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset()
        Swal.fire(
            'Thanks!',
            'Thanks for your feedback',
            'success'
        )
    }
    return (
        <div className="px-[5%] sm:px-[10%] my-20">
            <form className="bg-gray-50 p-5 sm:p-10 rounded" onSubmit={handleSubmit}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5">Feedback</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <label htmlFor="name">Name:
                        <input type="text" required placeholder="Your name" className="input input-bordered input-secondary w-full mt-3" />
                    </label>
                    <label htmlFor="name">Email:
                        <input type="email" required placeholder="Email" className="input input-bordered input-secondary w-full mt-3" />
                    </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <label htmlFor="name">Number:
                        <input type="number" required placeholder="Number" className="input input-bordered input-secondary w-full mt-3" />
                    </label>
                    <label htmlFor="name">Subject:
                        <input type="text" required placeholder="Subject" className="input input-bordered input-secondary w-full mt-3" />
                    </label>
                </div>
                <div className="grid grid-cols-1 mb-5">
                    <label htmlFor="name">Message:
                        <textarea className="textarea textarea-secondary w-full mt-3 resize-none" required placeholder="Message" cols="30" rows="5" ></textarea>
                    </label>
                </div>
                <div className="text-center">
                    <button className="btn btn-secondary btn-outline" type="submit">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;