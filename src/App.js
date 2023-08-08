import React, { useEffect, useRef, useState } from 'react'
import './App.css';
import Vdeo from '../src/Capsule.mp4'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Navbar from './components/Navbar';
import CapsuleSection from './components/CapSection';
import VideoSection from './components/secVideo';
import SliderSection from './components/SliderPage';

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
