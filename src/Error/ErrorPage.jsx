import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
      <div>
            <div className="cont-404 flex flex-col items-center justify-center h-2/3">
                
                    <img className="w-8/12" src="/404.svg" alt="" />
                
                
                <Link to='/' className="px-2 py-2 md:px-3 md:py-3 border-none rounded-lg cursor-pointer text-white bg-[#9253ff] hover:bg-[#7e57c2] font-medium ">Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;