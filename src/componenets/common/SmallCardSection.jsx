import React from 'react';

// images
import Convenience from '../../img/smallSection/Convenience.png'
import Accessibility from '../../img/smallSection/Accessibility.png'
import Security from '../../img/smallSection/Security.png'
const SmallCardSection = () => {
    return (
        <div>
            <div className=' flex w-[80%] mx-auto flex-wrap gap-4 justify-around items-center py-9 my-10'>
                <div className=' flex border border-blue-700 w-[20rem] h-32 rounded-2xl justify-between items-center '>
                    <h1 className=' text-3xl px-4 py-3 font-sans font-semibold'>Convenience</h1>
                    <img src={Convenience} alt="img" className=' w-20 h-20 my-3 mx-2' />
                </div>

                <div className=' flex border border-blue-500 w-[20rem] h-32 rounded-2xl justify-between items-center '>
                    <h1 className=' text-3xl px-4 py-3 font-sans font-semibold'>Accessibility</h1>
                    <img src={Accessibility} alt="img" className=' w-20 h-20 my-3 mx-2' />
                </div>

                <div className=' flex border border-blue-500 w-[20rem] h-32 rounded-2xl justify-between items-center '>
                    <h1 className=' text-3xl px-4 py-3 font-sans font-semibold'>Security</h1>
                    <img src={Security} alt="img" className=' w-20 h-20 my-3 mx-2' />
                </div>

                {/* <div>
                    <h1>Accessibility</h1>
                    <img src={Accessibility} alt="img" className=' w-8' />
                </div> */}

                {/* <div>
                    <h1>Security</h1>
                    <img src={Security} alt="img" className=' w-8'/>
                </div> */}
            </div>
        </div>
    );
}

export default SmallCardSection;
