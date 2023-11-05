import React from 'react';

// images
import Labbooking from '../img/Labsection/Lab+booking.png';
import Teleconsultation from '../img/Labsection/Online+Teleconsultation.png'
import PharmaHealthStore from '../img/Labsection/_Pharma+&+health+store.png'
const LabBooking = () => {
  return (
    <div className=' my-8'>
      <div className=' flex gap-4 w-[80%] mx-auto'>
        <div className=' flex flex-col w-[35%] border border-slate-200 rounded-2xl h-[18rem] justify-center items-center p-5 
        shadow-sm
        hover:shadow-lg hover:shadow-slate-500 '>
            <img src={Labbooking} alt="" className=' w-20' />
            <h3 className=' text-xl font-semibold mb-6'>Lab Booking</h3>
            <p className=' px-5'>Find Labs, Book Home Services, And Get Reports On The YORE Care App!</p>
        </div>

        <div className=' flex flex-col w-[35%] border rounded-2xl h-[18rem] border-slate-200 justify-center items-center p-5 
        shadow-sm
        hover:shadow-lg hover:shadow-slate-500 '>
            <img src={Teleconsultation} alt="" className=' w-20' />
            <h3 className=' text-xl font-semibold mb-6'>Online Teleconsultation</h3>
            <p className=' px-5'>Find Doctors, Clinics, And Book Appointments With The YORE Care App!</p>
        </div>

        <div className=' flex flex-col w-[35%] border rounded-2xl h-[18rem] border-slate-200 justify-center items-center p-5 
        shadow-sm
        hover:shadow-lg hover:shadow-slate-500 '>
            <img src={PharmaHealthStore} alt="" className=' w-20' />
            <h3 className=' text-xl font-semibold mb-6'>Pharmacy and Health Store</h3>
            <p className=' px-5'>Buy Medicines, Health, And Wellness Products From The YORE Care App!</p>
        </div>
       
      </div>
    </div>
  );
}

export default LabBooking;
