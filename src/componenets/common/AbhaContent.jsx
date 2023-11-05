import React from 'react';

const AbhaContent = (props) => {
  // console.log(props.data)
  return (

    <div>
      <div className=' flex justify-center items-center flex-col w-[75%] mx-auto py-24'>
        <h4 className=' text-green-700 font-extrabold text-xs bg-green-200 py-2 px-4 rounded-md'>{props.data.greenhead}</h4>
        {/* <h1 className=' fo-nunito text-5xl py-6 font-extrabold text-center w-[90%]'>Unlock India's Digital Health Ecosystem with Seamless Access</h1> */}
        <h1 className=' fo-nunito text-4xl opacity-80 py-6 font-extrabold text-center '>{props.data.h} </h1>
        <p className='fo-nunito text-2xl w-[90%] '>{props.data.para}</p>
        {/* <p className='fo-nunito text-2xl '>Create your ABHA ID on the YORE Care app and manage your health anytime, anywhere in India.</p> */}
        <div className=" flex gap-4 my-16">
            <button className=' bg-blue-700 text-white py-2 px-5 font-bold rounded-md uppercase'>{props.data.btn1}</button>
            <button className=' bg-blue-50 text-black border py-2 px-5 font-bold rounded-md'>Know More</button>
        </div>
      </div>
    </div>
  );
}

export default AbhaContent;
