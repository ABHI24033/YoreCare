import React from 'react';

import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

import Logo from '../img/logoYORE.svg'
const Footer = () => {
    return (
        <div className='border-t border-slate-300 mt-8 py-8'>
            <div className='w-[80%] mx-auto '>
                <div className='  flex '>
                    <div className='w-[40%] h-[15rem]'>
                        <img src={Logo} alt="" className=' w-32 py-4' />
                        <p className=' text-slate-500'>YORE Care is a Health-tech SUPER APP to create an integrated Health Web to Digitize, Preserve records & Empower the Care Seeker.</p>
                        <div className='flex my-5'>
                            <FaFacebookSquare className=' text-2xl rounded-2xl text-slate-600 m-2'/>
                            <FaInstagramSquare className=' text-2xl rounded-2xl text-slate-600 m-2 '/>
                            <FaLinkedin className=' text-2xl rounded-2xl text-slate-600 m-2 '/>
                            <FaSquareXTwitter className=' text-2xl rounded-2xl text-slate-600 m-2 '/>
                        </div>
                    </div>

                    <div className=' w-[60%]'>
                        <table border={1} className=' w-[100%]' >
                            <thead className=' '>
                                <tr className=''>
                                    <th className=' text-left w-28 text-sm text-slate-600'>YORE CARE</th>
                                    <th className='  text-left w-28 text-sm text-slate-600'>LEGAL</th>
                                    <th className=' text-left w-28 text-sm text-slate-600'>CONTACT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="#">Partner</a>
                                    </td>
                                    <td>
                                        <a href="#">Term of Services</a>
                                    </td>
                                    <td>
                                        <a href="#">hello@yorecre.com</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">Blog</a>
                                    </td>
                                    <td>
                                        <a href="#">Privacy Policy</a>
                                    </td>
                                    <td>
                                        <a href="#">1234567890</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">Contact</a>
                                    </td>
                                    <td>
                                        <a href="#">Return & Refund Policy</a>
                                    </td>
                                    <td>
                                        <a href="#">B/106-107, Parmanand Ashok Nagar,Ambadi Rd. Vasai West, Maharashtra-401202</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* ============================================================ */}
                <div>
                    <p>© 2023. All rights reserved by <a href="">Advance Digital Solutions</a>. </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
