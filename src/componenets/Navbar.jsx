import React from 'react';
// import { IoIosArrowDown } from 'react-icons/io';


// images
import logo from "../img/logo.png"

const Navbar = () => {
  return (
    <div>
        <nav className=' w-full h-16 flex justify-between font-sans font-semibold text-base'>
            <img src={logo} alt="logo" className=' ml-24'/>
            <ul className=' mr-24 flex gap-10 items-center '>
                <li><a href="#" className=''>Home</a></li>
                <li><a href="#">App Features
                {/* <IoIosArrowDown/>  bg-primaryColor*/}
                </a></li>
                <li><a href="#">About Us</a></li>
                <li className=' py-2 px-4 rounded-xl bg-blue-700 text-white font-sans font-semibold text-sm cursor-pointer'>Download Now</li>
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;
