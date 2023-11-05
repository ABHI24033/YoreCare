import React from 'react';

// images
import frame from "../img/home/frame-abha.png";
import abhahome from "../img/home/Home-abha.png";
const Banner = () => {
  return (
    // <div>
      <div className='fixed top-16 -z-50'>
        <div className=" flex mx-auto w-[95%] h-full flex-col md:flex-row  md:w-[80%]">
          <div className=" my-16 mx-2 px-2 md:mx-24 w-[100%] md:w-[60%]">
            <h1 className=' heading text-4xl md:text-6xl mb-10'>Digitize, Preserve & Empower <span className=' text-blue-700'>Healthcare</span></h1>
            <p className=' text-2xl md:text-3xl leading-relaxed'>Your comprehensive online healthcare solution, we provide 24x7 access to personalized healthcare services, seamless integration of health devices, and daily health updates, all within a unified and empowering ecosystem.</p>
          </div>
          <div className="img my-20 relative w-[30%]">
            <img src={frame} alt="frame" className=' h-[35rem]' />
            <img src={abhahome} alt="frame" className=' w-[20rem] absolute top-36 left-[-5rem] animate-shake animate-infinite  animate-duration-[4s] ' />
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Banner;
