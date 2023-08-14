import React, { useEffect, useRef, useState } from 'react'
import './App.css';
import Vdeo from '../src/Capsule.mp4'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Navbar from './components/Navbar';
import CapsuleSection from './components/CapSection';
import VideoSection from './components/secVideo';
import SliderSection from './components/SliderPage';
import HandPillPage from './components/HandPillPage';
import WellnessBowlPage from './components/WellnessBowl';
import ImageSlider from './Animation/AutoSlider';
import IconPage from './components/IconPage';
import GalleryPage from './components/Gallery';
import ReviewPage from './components/Reviews';

function App() {


  return (
    <div className='mainDiv'>
        <Navbar/>
      <div className='App'>
        <CapsuleSection/>
      </div>
      <div className='h-[72rem]'>

        <VideoSection/>
      </div>
      <div className='mt-5 place-conent-center'>
        <SliderSection/>
      </div>
      <HandPillPage/>
      <WellnessBowlPage/>
      <IconPage/>
      <div className='py-10'>
        <GalleryPage/>
      </div>
      <div className='py-20'>
        <ReviewPage/>
      </div>
    </div>
    // <>
    //   <Navbar/>
    //   <Routes>
    //     <Route path="/" element={<CapsuleSection />}>
    //       <Route index element={<CapsuleSection />} />
    //       <Route path="/about" element={<VideoSection />} />
          
    //     </Route>
    //   </Routes>
    // </>
   
  );
}

export default App;
