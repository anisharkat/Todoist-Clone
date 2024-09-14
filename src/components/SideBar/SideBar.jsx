import { useState } from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiSquareSplitHorizontal } from "react-icons/pi";
import ProfilePic from '../../../public/assets/my-avatar.jpg';
import { RiArrowDownSLine } from "react-icons/ri";
import { FaPlus, FaMagnifyingGlass } from "react-icons/fa6";
import { FaDotCircle } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';



const SideBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const navigate = useNavigate();


  const handleLogout  = async ()=>{
    try {
      await signOut(auth);
      Cookies.remove('user');
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="w-1/4 mx-8 my-8">
      <div className="flex justify-between items-center mb-6">
        <div className="relative flex items-center gap-4 cursor-pointer" onClick={toggleDropdown}>
          <img className="w-10 h-10 rounded-full" src={ProfilePic} alt="Profile" />
          <h4 className="font-semibold">Anis Harkat</h4>
          <RiArrowDownSLine />
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
              <a href="#profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                <div className="flex items-center gap-3">
                <IoPersonOutline /> Profile
                </div>
                </a>
              <a href="#settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              <div className="flex items-center gap-3">
                <LuSettings /> Settings
                </div>
              </a>
              <a href="#logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              <div onClick={handleLogout} className="flex items-center gap-3">
                <IoIosLogOut /> Logout
                </div>
              </a>
            </div>
          )}
        </div>
        <div className="flex gap-3 text-2xl mr-4">
          <IoIosNotificationsOutline />
          <PiSquareSplitHorizontal />
        </div>
      </div>
      <div className="flex mt-10 items-center gap-4 font-semibold cursor-pointer">
        <div className="rounded-full bg-red-50 p-2 justify-center items-center">
          <FaPlus />
        </div>
        <h4>Add Task</h4>
      </div>
      <div className="flex mt-6 items-center gap-4 font-semibold cursor-pointer">
        <div className="rounded-full bg-red-50 p-2 justify-center items-center">
          <FaMagnifyingGlass />
        </div>
        <h4>Search</h4>
      </div>
      <div className="flex-row mt-8">
        <h1 className="font-semibold text-gray-500">Last Tasks</h1>
        <div className="flex mt-5 w-60 px-2 py-2 bg-red-50 items-center gap-3 rounded-lg cursor-pointer">
          <FaDotCircle />
          <h4>Last task 1</h4>
        </div>
        <div className="flex mt-5 w-60 px-2 py-2 bg-red-50 items-center gap-3 rounded-lg cursor-pointer">
          <FaDotCircle />
          <h4>Last task 1</h4>
        </div>
        <div className="flex mt-5 w-60 px-2 py-2 bg-red-50 items-center gap-3 rounded-lg cursor-pointer">
          <FaDotCircle />
          <h4>Last task 1</h4>
        </div>
       
      </div>
    </div>
  );
};

export default SideBar;
