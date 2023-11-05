import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// images
// import image from '../../img/home/Home-abha.png';
import frameAbha from '../../img/accirdian/ABHA+card+frame.png';
import qrcode from '../../img/accirdian/ABHA+Card.png'
import craeteAbha2 from '../../img/accirdian/Home+component+2.png'
import craeteAbha1 from '../../img/accirdian/Home+component+1.png'
import craeteAbha3 from '../../img/accirdian/Home+component+3.png'
import addhar from '../../img/accirdian/addhar.png'

// import acc1 from "../../img/accirdian/acc1.png"
// import acc2 from "../../img/accirdian/acc2.png"
// import acc3 from "../../img/accirdian/acc3.png"

const Accordian = (props) => {
    // console.log(props.data);
    const [accordianNumber, setAccordianNumber] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            setAccordianNumber((count) =>count==3?1:count + 1);
        }, 6000);
      },[accordianNumber]);
    return (
        <div className=' my-[15rem] md:my-0'>
            
            <div className='flex gap-8 flex-col md:flex-row items-center justify-center h-screen  '>
                <div className=' flex-[2] flex flex-col items-center justify-center gap-8 w-[100%]'>
                    {/* ====================================== */}
                    <div
                     className={accordianNumber==1?" border border-black flex gap-4 p-4 w-[90%] md:w-[500px] rounded-md shadow-md": 
                     `flex gap-4 p-4 max-w-[500px] rounded-md shadow-md  w-[90%] md:w-[500px] `} onClick={()=>setAccordianNumber(1)}>
                        <div className=' h-[50px] aspect-square w-fit '>
                            <img src={props.data.content1.img} alt="" className=' h-full w-full ' />

                        </div>
                        <div className='flex flex-col gap-4 w-[50ch]'>
                            <h1 className=' text-2xl font-semibold '>{props.data.content1.h1}</h1>
                            <p className={ accordianNumber==1?"w-[25ch] md:[40ch]": "hidden"}>{props.data.content1.p}</p>

                        </div>
                    </div>
                    {/* ========================================================= */}
                    <div className={accordianNumber==2?" border border-black flex gap-4 p-4  w-[90%] md:w-[500px] rounded-md shadow-md": 
                     `flex gap-4 p-4 max-w-[500px] rounded-md shadow-md  w-[90%] md:w-[500px] `} onClick={()=>setAccordianNumber(2)}>
                        <div className=' h-[50px] aspect-square w-fit '>
                            <img src={props.data.content2.img} alt="" className=' h-full w-full ' />

                        </div>
                        <div className='flex flex-col gap-4 w-[45ch]'>
                            <h1 className=' text-2xl font-semibold '>{props.data.content2.h1}</h1>
                            <p className={ accordianNumber==2?"w-[25ch] md:[40ch]": "hidden"}>{props.data.content2.p}</p>

                        </div>
                    </div>
                    {/* ===================================================================== */}
                    <div className={accordianNumber==3?" border border-black flex gap-4 p-4  w-[90%] md:w-[500px] rounded-md shadow-md": 
                     `flex gap-4 p-4 max-w-[500px] rounded-md shadow-md  w-[90%] md:w-[500px] `} onClick={()=>setAccordianNumber(3)}>
                        <div className=' h-[50px] aspect-square w-fit '>
                            <img src={props.data.content3.img} alt="" className=' h-full w-full ' />

                        </div>
                        <div className='flex flex-col gap-4 w-[45ch]'>
                            <h1 className=' text-2xl font-semibold '>{props.data.content3.h1}</h1>
                            <p className={ accordianNumber==3?"w-[25ch] md:w-[40ch]": "hidden"}>{props.data.content3.p}</p>

                        </div>
                    </div>

                </div>
                {/* ------------------------------------------------------------------------ */}
                <div className=' flex flex-[1] items-center justify-center py-8 h-full relative'>
                    <img src={props.data.image.mobile} alt="" className=' h-full w-auto' />
                    {
                        accordianNumber == 1 ?
                            <div>
                                <motion.img src={props.data.image.img1} alt="" className=' w-[13rem] absolute left-5 top-1/4' animate={
                                    {
                                        x: "50px"
                                    }
                                }
                                    transition={{
                                        duration: 2,
                                        delay:2,
                                        repeatType: "mirror",
                                        repeat: Infinity
                                    }}
                                />
                            </div> : accordianNumber == 2 ? <div>
                                <motion.img src={props.data.image.img2} alt="" className=' absolute left-5 top-20' 
                                animate={
                                    {x: "50px"}}
                                    transition={{
                                        duration: 2,
                                        delay:2,
                                        repeatType: "mirror",
                                        repeat: Infinity
                                    }}
                                />
                                <motion.img src={props.data.image.img3} alt="" className=' absolute right-5 bottom-52' 
                                animate={
                                    {x: "50px"}}
                                    transition={{
                                        duration: 2,
                                        delay:2,
                                        repeatType: "mirror",
                                        repeat: Infinity
                                    }}
                                />
                                <motion.img src={props.data.image.img4} alt="" className=' absolute left-5 bottom-20' 
                                animate={
                                    {x: "50px"}}
                                    transition={{
                                        duration: 2,
                                        delay:2,
                                        repeatType: "mirror",
                                        repeat: Infinity
                                    }}
                                />

                            </div> : accordianNumber == 3 ? <div>
                                <motion.img src={props.data.image.img5} alt="" className='w-[15rem] absolute left-5 top-32' animate={
                                    {
                                        x: "50px"
                                    }
                                }
                                    transition={{
                                        duration: 2,
                                        delay:2,
                                        repeatType: "mirror",
                                        repeat: Infinity
                                    }}
                                />
                            </div> : null
                    }
                </div>
            </div>
        </div>
    );
}

export default Accordian;
