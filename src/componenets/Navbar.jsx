import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';


// images
import logo from "../img/logo.png"

const Navbar = () => {
  const [isSticky, setIssticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function ToggleMenu() {
    setMenuOpen(!menuOpen);
    console.log("callesd")

  }
  console.log(menuOpen)
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY >= 1) {
        setIssticky(true);
        // console.log("activated");
      } else {
        setIssticky(false)
      }
    }

    window.addEventListener("scroll", handelScroll)
  }, [])
  return (
    <div className='relative' >
      <nav className={`${isSticky == true ? ` fixed top-0 h-18 z-20 shadow-md shadow-black` : ``}
      
       bg-white w-full h-16 flex justify-between font-sans font-semibold text-base`}>
        <img src={logo} alt="logo" className=' ml-2 md:ml-24' />
        {/* <AiOutlineBars/> */}
        {/*  */}

        <ul className={` mr-24 md:flex gap-10 items-center hidden ${menuOpen == true ? `flex flex-row` : ``}`}>
          <li><a href="#" className=''>Home</a></li>
          <li><a href="#">App Features
            {/* <IoIosArrowDown/>  bg-primaryColor*/}
          </a></li>
          <li><a href="#">About Us</a></li>
          <li className=' py-2 px-4 rounded-xl bg-blue-700 text-white font-sans font-semibold text-sm cursor-pointer'>Download Now</li>
        </ul>
        {/* =====================Responsive for Mobile============= */}
        <div className=' md:hidden'>
          <div onClick={() => ToggleMenu()}>
            {menuOpen ? (<FaXmark className=' my-3 text-xl mr-5 ' />) : (<FaBars className=' my-3 text-xl mr-5 ' />)}
          </div>
          <div className=' '>
            <ul className={`flex flex-col z-50 bg-white absolute top-0 py-14 h-screen gap-8 left-0 w-[15rem] px-10 ${menuOpen ? 'left-0' : ' -left-[20rem] '} duration-1000`} >
              <li><a href="#" className=''>Home</a></li>
              <li><a href="#">App Features
                {/* <IoIosArrowDown/>  bg-primaryColor*/}
              </a></li>
              <li><a href="#">About Us</a></li>
              <li className=' py-2 px-4 rounded-xl bg-blue-700 text-white font-sans font-semibold text-sm cursor-pointer'>Download Now</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
