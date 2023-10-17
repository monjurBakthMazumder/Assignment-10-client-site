import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 h-screen w-full">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold">404</h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">Page not found</p>
            <Link to={'/'} className="btn btn-primary">Go Home</Link>
        </div>
    );
};

export default ErrorPage;