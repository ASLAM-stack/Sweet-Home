

const Banner = () => {
    return (
        // <div className="relative">
        //     <img className="max-h-[250px] w-full relative opacity-70" src="https://i.ibb.co/m97XNYj/slider-img.webp" alt="" />
        //     <h2 className="absolute text-3xl text-white font-semibold top-24 left-96">Property Details</h2>
        // </div>
        <div className="relative">
            <img className="max-h-[250px] w-full relative opacity-70" src="https://i.ibb.co/m97XNYj/slider-img.webp" alt="" />
            <div className="absolute inset-0 flex items-center justify-center  bg-black bg-opacity-50">
                <h2 className="text-3xl text-white font-semibold">Property Details</h2>
            </div>
        </div>

    );
};

export default Banner;