import React from 'react';
// icons
// import { IoLogoWhatsapp } from 'react-icons/io'
// images
import Delivery from "../../img/order/Order+Online+Medicine+1.png"
import Labtest from "../../img/order/Book+Lab+Test+1.png";
import whatsapp from '../../img/whatsapp-icon-removebg-preview.png'
const ContactCard = () => {
    return (
        <div className='bg-white z-10 mx-auto '>
            <div className=" w-[75%] z-10 mt-[100vh] flex-wrap flex mx-auto py-10 gap-5 items-center justify-center">
                <div className=' w-[25rem] relative'>
                    <img src={Delivery} alt="Delivery image" />
                    <div className='flex bg-green-500 w-[10rem] text-center py-2 px-5 rounded-3xl gap-2 absolute bottom-11 left-7
                    animate-jump animate-infinite animate-duration-[3s] cursor-default sm:bottom-0
                    '>
                        <img src={whatsapp} alt="" className=' w-6 h-6' />
                        <p className='text-white text-md font-bold' >WhatsAPP Now</p>
                    </div>
                </div>

                <div className='w-[25rem] relative'>
                    <img src={Labtest} alt="Lab Test image" />
                    <div className='flex bg-blue-700 w-[7rem] text-center py-2 px-5 rounded-3xl gap-2 absolute bottom-11 left-7
                    animate-jump animate-infinite animate-duration-[3s] cursor-default
                    '>
                        <p className='text-white text-md text-center font-bold md:text-sm sm:text-xs' >Book Now</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;
