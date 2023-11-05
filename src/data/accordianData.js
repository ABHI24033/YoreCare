import frameAbha from '../img/accirdian/ABHA+card+frame.png';
import qrcode from '../img/accirdian/ABHA+Card.png'
import craeteAbha2 from '../img/accirdian/Home+component+2.png'
import craeteAbha1 from '../img/accirdian/Home+component+1.png'
import craeteAbha3 from '../img/accirdian/Home+component+3.png'
import addhar from '../img/accirdian/addhar.png'

import acc1 from "../img/accirdian/acc1.png"
import acc2 from "../img/accirdian/acc2.png"
import acc3 from "../img/accirdian/acc3.png"

// =============Accordian2===========
import smartphone2 from '../img/accordian2/smart2.jpg'; 
import digitrack1 from '../img/accordian2/Digi+Track+1.png'; 
import medrack1 from '../img/accordian2/Med+Track+1.png'; 
import carerack1 from '../img/accordian2/Care+Track+1.png'; 

import medtrackimg from "../img/accordian2/Rectangle+2150.png";
import frameTrackimg from "../img/accordian2/Frame+9817.png";

import digitractimg1 from '../img/accordian2/Group+9399.png'
import digitractimg2 from '../img/accordian2/Group+9398.png'
import digitractimg3 from '../img/accordian2/Group+9400.png'

// =============Accordian-3=======================
import waterTrackerLogo from '../img/accordian3/Icon_Water+1.png';
import activityTrackerLogo from '../img/accordian3/Activity+tracker+1.png';
import sleepTrackerLogo from '../img/accordian3/Sleep+tracker+1+.png'

import waterTrackerImg from '../img/accordian3/water-tracker.png';
import activityTrackingImg1 from '../img/accordian3/activity-tracker-img1.png'
import activityTrackingImg2 from '../img/accordian3/activity-tracker-img2.png'
import activityTrackingImg3 from '../img/accordian3/activity-tracker-img3.png'
import SleepTrackerImg from '../img/accordian3/sleep-tracker-img.png'

const AccordianData1={
    content2:{
        h1:"Unique and Reliable Identity",
        p:'Health ID cards offer a highly secure and encrypted platform. User consent is mandatory for accessing their PHR every time.',
        img:acc1,
    },
    content1:{
        h1:"Consolidated Benefits Platform",
        p:'Effortlessly link diverse healthcare benefits, from public health programs to insurance schemes, with your ABHA number.',
        img:acc2,
    },
    content3:{
        h1:"Quick and Easy Registration",
        p:'Register swiftly by entering basic information and validating your Aadhaar or mobile number to generate your Health ID card.',
        img:acc3,
    },
    image:{
        img1:qrcode,
        img2:craeteAbha1,
        img3:craeteAbha2,
        img4:craeteAbha3,
        img5:addhar,
        mobile:frameAbha,
    }
}


// =====================================================================

// import smartphone2 from '../img/accordian2/smart2.jpg'; 
// import 
const AccordianData2={
    content1:{
        h1:"MedTrack",
        p:'Centralize medical documents, including diagnostic test reports and prescriptions, for easy future reference.',
        img:digitrack1,
    },
    content2:{
        h1:"Digitrack",
        p:'Effortlessly record and manage digital details of your medical treatments. the patients in one practice',
        img:medrack1,
    },
    content3:{
        h1:"CareTrack",
        p:'Enable doctors to access your comprehensive medical files, treatment history, and diagnostic reports through a single platform',
        img:carerack1,
    },
    image:{
        img1:medtrackimg,
        img2:digitractimg1,
        img3:digitractimg2,
        img4:digitractimg3,
        img5:frameTrackimg,
        mobile:smartphone2,
    }
}


// ==================================================

const AccordianData3={
    content1:{
        h1:"Water Tracker",
        p:'Measures and monitors heart rate during workouts or daily and activities.',
        img:waterTrackerLogo,
    },
    content2:{
        h1:"Activity Tracker",
        p:'Tracks steps, distance, calories burned, and other physical and activities.',
        img:activityTrackerLogo,
    },
    content3:{
        h1:"Sleep Tracker",
        p:'Monitors sleep patterns, providing insights into sleep quality and duration.',
        img:sleepTrackerLogo,
    },
    image:{
        img1:waterTrackerImg,
        img2:activityTrackingImg1,
        img3:activityTrackingImg2,
        img4:activityTrackingImg3,
        img5:SleepTrackerImg,
        mobile:smartphone2,
    }
}


export{
    AccordianData1,AccordianData2,AccordianData3
}