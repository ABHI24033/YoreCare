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
            <div className=" w-[75%] z-10 mt-[100vh] flex mx-auto py-10 gap-5 items-center justify-center">
                <div className=' w-[45%] relative'>
                    <img src={Delivery} alt="Delivery image" />
                    <div className='flex bg-green-500 w-[45%] text-center py-2 px-5 rounded-3xl gap-2 absolute bottom-11 left-7
                    animate-jump animate-infinite animate-duration-[3s] cursor-default
                    '>
                        <img src={whatsapp} alt="" className=' w-6 h-6' />
                        <p className='text-white text-md font-bold' >WhatsAPP Now</p>
                    </div>
                </div>

                <div className='w-[45%] relative'>
                    <img src={Labtest} alt="Lab Test image" />
                    <div className='flex bg-blue-700 w-[30%] text-center py-2 px-5 rounded-3xl gap-2 absolute bottom-11 left-7
                    animate-jump animate-infinite animate-duration-[3s] cursor-default
                    '>
                        <p className='text-white text-md text-center font-bold' >Book Now</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;
