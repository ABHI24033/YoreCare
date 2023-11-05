import React from 'react';

// images
import slider1 from '../img/slider/Website-Banner-1.jpg'
import slider2 from '../img/slider/Website-Banner-2.jpg'
import slider3 from '../img/slider/Website-Banner-3.jpg'
import slider4 from '../img/slider/Website-Banner-4.jpg'
import { Carousel } from 'flowbite-react';
const slider = () => {
    return (
        
        <div className='w-[80%] mx-auto'>
            <div className="h-[30rem] ">
                <Carousel indicators={false} leftControl=" " rightControl=" ">
                    <div className="flex h-full items-center justify-center">
                        <img src={slider1} className=' rounded-md'/>
                    </div>
                    <div className="flex h-full items-center justify-center">
                        <img src={slider2} alt="" className=' rounded-md'/>
                    </div>
                    <div className="flex h-full items-center justify-center">
                        <img src={slider3} alt="" className=' rounded-md' />
                    </div>
                    <div className="flex h-full items-center justify-center">
                        <img src={slider4} alt="" className=' rounded-md'/>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default slider;
