import React from 'react';
// data
import {AccordianData1,AccordianData2,AccordianData3} from '../data/accordianData'

// components
import Navbar from './Navbar';
import Banner from './Banner';
import ContactCard from './scrollable/ContactCard';
import AbhaContent from './common/AbhaContent';
import Accordian from './common/Accordian';
import Slider from './Slider';
import FAQ from './FAQ';
import SmallCardSection from './common/SmallCardSection';
import YourCare from './YourCare';
import LabBooking from './LabBooking';
import Authority from './Authority';
import Tesimonial from './Tesimonial';
import Footer from './Footer';
// import { Footer } from 'flowbite-react';
// import slider from './slider';
const FullHome = () => {
  console.log(AccordianData2);
  const craeteAbha={
    para:"Create your ABHA ID on the YORE Care app and manage your health anytime, anywhere in India.",
    h:"Unlock India's Digital Health Ecosystem with Seamless Access",
    greenhead:"ABHA ID YOUR UNIQUE & TRUSTABLE HEALTH ID",
    btn1:"create abha",
  }
  const HealthRecoard={
    para:"Experience a cutting-edge solution for effortless management of your health records. Gain secure and convenient digital access.",
    h:"NOW Link Your Health Records with ABHA ID",
    greenhead:"STREAMLINED HEALTH RECORD MANAGEMENT MADE EFFORTLESS",
    btn1:"Upload now",
  }

  const LinkAbha={
    para:"Sync your healthcare devices, elevate consistency, and be on the path of a transformational journey like never before!",
    h:"Connect to the fitness galaxy and embark on an adventure",
    greenhead:"SYNC, TRANSFORM, GET FIT WITH SMART HEALTH",
    btn1:"Download app",
  }

  // =================================
  return (
    <div>
      <Navbar/>
      
      <Banner/>
      <div className="fullHome bg-white" >
        <ContactCard/>
        <AbhaContent data={craeteAbha}/>
        <Accordian data={AccordianData1}/>
        {/* <slider/> */}
        <Slider/>
        <AbhaContent data={HealthRecoard}/>
        <Accordian data={AccordianData2}/>
        <SmallCardSection/>
        <AbhaContent data={LinkAbha}/>
        <Accordian data={AccordianData3}/>
        <YourCare/>
        <LabBooking/>
        <Authority/>
        <Tesimonial/>
        <FAQ/>
        {/* <Footer/> */}
        <Footer/>
      </div>
    </div>
  );
}

export default FullHome;
