import { FaDownload } from "react-icons/fa";
import dark_logo from '../../../public/assets/large_logo_dark.png';

export const Footer = () => {
  return (
    <section className="bg-orange-50 flex flex-col items-center text-center py-8">
      {/* Top Section */}
      <div className="px-4 md:px-8 lg:px-16">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl mb-4">
          <span className='block mb-2 md:mb-4'>Gain calmness and clarity with the</span>
          <span className='block mb-4 md:mb-4'>world’s most beloved productivity app</span>
        </h1>
        <span className='text-gray-500 text-base md:text-lg'>
          <b>374K+</b> ★★★★★ reviews on Google Play and App Store
        </span>
      </div>
      <div className="mt-6 flex flex-col items-center gap-2">
        <button className="bg-red-500 px-4 py-2 rounded text-white font-semibold">
          Start For Free
        </button>
        <button className="bg-orange-50 px-4 py-2 rounded text-gray-500 text-sm">
          <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-200">
            <FaDownload /> Download Apps
          </div>  
        </button>
      </div>

      {/* Separator */}
      <hr className="my-12 border-gray-300 w-full md:w-3/4 mx-auto" />

      {/* Bottom Section */}
      <div className="w-full px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src={dark_logo} alt="logo" className="w-22 h-10 mb-4" />
            <p className="text-gray-500">Join millions of people who organize<br/> work and life with Todoist.</p>
          </div>

          {/* Features Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Features</h3>
            <ul className="space-y-2">
              <li><a href="#feature1" className="text-gray-600 hover:text-gray-800">How it works</a></li>
              <li><a href="#feature2" className="text-gray-600 hover:text-gray-800">For Teams</a></li>
              <li><a href="#feature3" className="text-gray-600 hover:text-gray-800">Pricing</a></li>
              <li><a href="#feature4" className="text-gray-600 hover:text-gray-800">Templates</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#resource1" className="text-gray-600 hover:text-gray-800">Download Apps</a></li>
              <li><a href="#resource2" className="text-gray-600 hover:text-gray-800">Help Center</a></li>
              <li><a href="#resource3" className="text-gray-600 hover:text-gray-800">Productivity Methods</a></li>
              <li><a href="#resource4" className="text-gray-600 hover:text-gray-800">Integrations</a></li>
              <li><a href="#resource5" className="text-gray-600 hover:text-gray-800">Channel Partners</a></li>
              <li><a href="#resource6" className="text-gray-600 hover:text-gray-800">Developer API</a></li>
              <li><a href="#resource7" className="text-gray-600 hover:text-gray-800">Status</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#company1" className="text-gray-600 hover:text-gray-800">About Us</a></li>
              <li><a href="#company2" className="text-gray-600 hover:text-gray-800">Careers</a></li>
              <li><a href="#company3" className="text-gray-600 hover:text-gray-800">Inspiration Hub</a></li>
              <li><a href="#company4" className="text-gray-600 hover:text-gray-800">Press</a></li>
              <li><a href="#company5" className="text-gray-600 hover:text-gray-800">Twist</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full bg-orange-50 py-4 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16">
          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start items-center space-x-4 font-semibold text-sm">
            <a href="#link1" className="text-gray-600 hover:text-gray-800">Security</a>
            <span className="text-gray-600">|</span>
            <a href="#link2" className="text-gray-600 hover:text-gray-800">Privacy</a>
            <span className="text-gray-600">|</span>
            <a href="#link3" className="text-gray-600 hover:text-gray-800">Terms</a>
            <p className="text-gray-600">© Doist Inc.</p>
          </div>

          {/* Language Selector */}
          <div className="relative mt-4 md:mt-0">
            <select className="border border-gray-300 rounded-md py-2 px-4 text-sm">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              {/* Add more language options as needed */}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};
