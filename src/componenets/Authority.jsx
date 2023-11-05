import React from 'react';

// images
import nhaimg from '../img/Authority/national-health-authority6597.jpg';
import abdmimg from '../img/Authority/ABDM+1+1.png';
// import digitalIndia from '../img/Authority/627bae3d8d659819b1108506.png';
import digitalIndia from '../img/Authority/digital india.png';
import makeInIndia from '../img/Authority/make-in-india-logo.png';
const Authority = () => {
  return (
    <div className=' my-16'>
      <div className=' flex flex-col md:flex-row justify-center items-center gap-8 w-[70%] my-10 mx-auto'>
        <div className=' w-[100%] md:w-[25%] flex items-center flex-col '>
            <img src={nhaimg} alt="NHA icon" className=' w-[11rem]' />
            <h2 className='text-center text-lg font-medium'>NHA APPROVED</h2>
        </div>
        <div className='  w-[100%] md:w-[25%] flex items-center flex-col '>
            <img src={abdmimg} alt="NHA icon" className=' w-[11rem]' />
            <h2 className='text-center text-lg font-medium'>ABDM COMPLIANT</h2>
        </div>
        <div className='  w-[100%] md:w-[25%] flex items-center flex-col '>
            <img src={digitalIndia} alt="NHA icon" className=' w-[11rem]' />
            <h2 className='text-center text-lg font-medium'>DIGITAL INDIA</h2>
        </div>
        <div className='  w-[100%] md:w-[25%] flex items-center flex-col '>
            <img src={makeInIndia} alt="NHA icon" className=' w-[11rem]' />
            <h2 className='text-center text-lg font-medium'>MAKE IN INDIA</h2>
        </div>
        
      </div>
    </div>
  );
}

export default Authority;
