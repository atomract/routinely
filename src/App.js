import React, { useEffect, useRef } from 'react'
import './App.css';
import Vdeo from '../src/Capsule.mp4'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Navbar from './components/Navbar';
import CapsuleSection from './components/CapSection';
import VideoSection from './components/secVideo';

function App() {

 

  return (
    <>
        <Navbar/>
      <div className='App'>
        <CapsuleSection/>
      </div>
        {/* <VideoSection/> */}
    </>
   
  );
}

export default App;
