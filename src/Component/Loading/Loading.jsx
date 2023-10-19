import { CircleLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-[90vh] w-full">
            <CircleLoader
                color="#FC0FC0"
                size={100}
                />
        </div>
    );
};

export default Loading;