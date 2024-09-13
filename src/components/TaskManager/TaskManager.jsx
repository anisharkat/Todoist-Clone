import section_image1 from '../../../public/assets/hero_image.png';
import section_image2 from '../../../public/assets/hero_image.png';
import section_image3 from '../../../public/assets/hero_image.png';
import { FaBookSkull } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const TaskManager = () => {
  return (
    <section className="mt-24 mb-12 w-full flex flex-col md:flex-row items-center">
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-6 md:p-14 flex flex-col items-center md:items-start text-center md:text-left">
        <span className='mb-3 font-bold text-red-500'>In it for the long haul</span>
        <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl'>
          <span className='block mb-4 md:mb-6'>A task manager you can</span>
          <span className='block mb-4 md:mb-6'>trust for life</span>
        </h1>
        <p className='text-gray-500 text-base md:text-lg mb-3'>
          We’ve been building Todoist for 17 years and 223 days. Rest assured that we’ll never sell out to the highest bidder.
        </p>

        <button className='rounded px-4 py-2 md:px-6 md:py-3 bg-transparent text-blue-500 hover:bg-blue-100'>
          <div className="flex justify-center items-center gap-4">
            <FaBookSkull /> Read about our long-term missions
          </div>
        </button>
      </div>

      {/* Image Carousel Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}  // تعطيل الأسهم
          className="w-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <img src={section_image1} alt="Hero 1" className="w-full h-auto object-contain" />
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <img src={section_image2} alt="Hero 2" className="w-full h-auto object-contain" />
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide>
            <img src={section_image3} alt="Hero 3" className="w-full h-auto object-contain" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
