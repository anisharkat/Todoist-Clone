import section_image from '../../../public/assets/hero_image.png';
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";

export const MainSection = () => {
  return (
    <section className="mt-20 w-full flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 p-6 md:p-14 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl'>
          <span className='block mb-4 md:mb-6'>Organize your</span>
          <span className='block mb-4 md:mb-6'>work and</span>
          <span className='block mb-4 md:mb-6'>life, finally.</span>
        </h1>
        <p className='text-gray-500 text-base md:text-lg mb-3'>
          Simplify life for both you and your team with the world’s #1 task manager and to-do list app.
        </p>
        <span className='text-gray-500 text-base md:text-lg flex items-center justify-center md:justify-start mb-6'>
          <b>374K+</b> ★★★★★ reviews from 
          <FaApple className='ml-2' />
          <FaAndroid className='ml-2' />
        </span>
        <button className='rounded px-4 py-2 md:px-6 md:py-3 bg-red-600 text-white font-bold hover:bg-red-500'>
          Start For Free
        </button>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img src={section_image} alt="Hero" className="w-full md:w-[600px] lg:w-[800px] h-auto object-contain" />
      </div>
    </section>
  );
};
