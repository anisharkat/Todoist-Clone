import { useState } from 'react';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import red_logo from '../../../public/assets/large_logo_red.png';
import { FaPuzzlePiece , FaBoltLightning , FaDownload  } from "react-icons/fa6";
import { TbTemplate } from "react-icons/tb";
import { FcIdea } from "react-icons/fc";
import { FaQuestion } from "react-icons/fa";
import { IoIosHelpBuoy } from "react-icons/io";
import { Link } from 'react-router-dom';




export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen); 

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex items-center justify-between px-6 py-3 w-full">
      {/* Logo */}
      <div className="flex items-center w-full md:w-auto">
        <Link to={"/"}>
        <img className='h-8 md:h-9 w-auto' src={red_logo} alt="Logo" />
        </Link>
      </div>

      {/* Menu Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Menu Items for Desktop */}
      <div className="hidden md:flex gap-4 md:gap-6 items-center text-base">
        <a className='hover:bg-slate-100 p-2 rounded' href="">Features</a>
        <a className='hover:bg-slate-100 p-2 rounded' href="">For Teams</a>

        {/* Resources Dropdown */}
        <div className="relative">
          <button
            className="hover:bg-slate-100 p-2 rounded flex items-center"
            onClick={toggleDropdown}
          >
            Resources <FaChevronDown className="ml-1" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <a className='flex items-center gap-2 p-2 hover:bg-slate-100 rounded' href="">
                <FaPuzzlePiece /> Integrations
              </a>
              <a className='flex items-center gap-2 p-2 hover:bg-slate-100 rounded' href="">
                <TbTemplate /> Templates
              </a>
              <a className='flex items-center gap-2 p-2 hover:bg-slate-100 rounded' href="">
                <FaBoltLightning /> Getting Started
              </a>
              <a className='flex items-center gap-2 p-2 hover:bg-slate-100 rounded' href="">
                <IoIosHelpBuoy /> Help Center
              </a>
              <a className='flex items-center gap-2 p-2 hover:bg-slate-100 rounded' href="">
                <FaQuestion /> Productivity 
              </a>
              <a className='flex items-center gap-2 p-2 hover:bg-slate-100 rounded' href="">
                <FcIdea /> Inspiration Hub
              </a>
              <a className='flex items-center gap-2 p-2 hover:bg-slate-100 rounded' href="">
                <FaDownload  /> Downloads
              </a>
            </div>
          )}
        </div>

        <a className='hover:bg-slate-100 p-2 rounded' href="">Pricing</a>
        <Link to={"/login"}><a className='hover:bg-slate-100 p-2 rounded' href="">Login</a></Link>
        <Link to={"/login"}><a className='bg-red-600 p-2 rounded text-white font-bold hover:bg-red-700' href="">Start For Free</a></Link>
      </div>

      {/* Mobile Menu Items */}
      <div className={`fixed inset-0 bg-white top-14 right-0 z-50 p-6 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <a className='block text-base py-2 hover:bg-slate-100 rounded' href="">Features</a>
        <a className='block text-base py-2 hover:bg-slate-100 rounded' href="">For Teams</a>
        
        {/* Mobile Dropdown */}
        <div>
          <button
            className=" text-base py-2 hover:bg-slate-100 rounded flex items-center"
            onClick={toggleDropdown}
          >
            Resources <FaChevronDown className="ml-1" />
          </button>
          {isDropdownOpen && (
            <div className="pl-4 mt-2">
              <a className='flex items-center gap-2 p-2 hover:bg-slate-100 rounded' href="">
                <FaPuzzlePiece /> Integrations
              </a>
              <a className='flex items-center gap-2 p-2 hover:bg-slate-100 rounded' href="">
                <TbTemplate /> Templates
              </a>
              <a className='flex items-center gap-2 p-2 hover:bg-slate-100 rounded' href="">
                <FaBoltLightning /> Getting Started
              </a>
              <a className='flex items-center gap-2 p-2 hover:bg-slate-100 rounded' href="">
                <IoIosHelpBuoy /> Help Center
              </a>
              <a className='flex items-center gap-2 p-2 hover:bg-slate-100 rounded' href="">
                <FaQuestion /> Productivity 
              </a>
              <a className='flex items-center gap-2 p-2 hover:bg-slate-100 rounded' href="">
                <FcIdea /> Inspiration Hub
              </a>
              <a className='flex items-center gap-2 p-2 hover:bg-slate-100 rounded' href="">
                <FaDownload  /> Downloads
              </a>

            </div>
          )}
        </div>

        <a className='block text-base py-2 hover:bg-slate-100 rounded' href="">Pricing</a>
        <Link to={"/login"}><a className='block text-base py-2 hover:bg-slate-100 rounded' href="">Login</a></Link>
        <Link to={"/login"}><a className='block bg-red-600 py-2 rounded text-white font-bold hover:bg-red-700' href="">Start For Free</a></Link>
      </div>
    </nav>
  );
};
