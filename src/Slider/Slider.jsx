import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

 
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
 
const Slider = () => {
    return (
        <div className='mt-12'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
        <div className="bg-[url('/Slider1.jpg')] space-y-4 w-full pl-4 md:pl-16 h-[600px] bg-cover flex flex-col justify-center bg-center rounded-md">
        <h1 className="font-work font-bold text-4xl md:text-7xl text-[#9253ff]">Sweet Home</h1>
        <p className="text-white text-base ">
          Your key to finding the perfect nest. We specialize in sales and
          <br /> rentals of residential properties, making your dream home a
          sweet reality
        </p>
        <p></p>
        <div className="space-x-2">
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Buy
            </span>
          </a>
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Rent
            </span>
          </a>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="bg-[url('/Slider2.jpg')] space-y-4 w-full pl-4 md:pl-16 h-[600px] bg-cover flex flex-col justify-center bg-center rounded-md">
        <h1 className="font-work font-bold text-4xl md:text-7xl text-[#9253ff]">Sweet Home</h1>
        <p className="text-white text-base ">
          Your key to finding the perfect nest. We specialize in sales and
          <br /> rentals of residential properties, making your dream home a
          sweet reality
        </p>
        <p></p>
        <div className="space-x-2">
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Buy
            </span>
          </a>
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Rent
            </span>
          </a>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="bg-[url('/Slider3.jpg')] space-y-4 w-full pl-4 md:pl-16 h-[600px] bg-cover flex flex-col justify-center bg-center rounded-md">
        <h1 className="font-work font-bold text-4xl md:text-7xl text-[#9253ff]">Sweet Home</h1>
        <p className="text-white text-base ">
          Your key to finding the perfect nest. We specialize in sales and
          <br /> rentals of residential properties, making your dream home a
          sweet reality
        </p>
        <p></p>
        <div className="space-x-2">
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Buy
            </span>
          </a>
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Rent
            </span>
          </a>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="bg-[url('/slider4.jpg')] space-y-4 w-full pl-4 md:pl-16 h-[600px] bg-cover flex flex-col justify-center bg-center rounded-md">
        <h1 className="font-work font-bold text-4xl md:text-7xl text-[#9253ff]">Sweet Home</h1>
        <p className="text-white text-base ">
          Your key to finding the perfect nest. We specialize in sales and
          <br /> rentals of residential properties, making your dream home a
          sweet reality
        </p>
        <p></p>
        <div className="space-x-2">
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Buy
            </span>
          </a>
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Rent
            </span>
          </a>
        </div>
      </div>
        </SwiperSlide>
 
      </Swiper>
        </div>
    );
};

export default Slider;