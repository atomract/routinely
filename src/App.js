import React, { useEffect, useRef } from 'react'
import './App.css';
import Vdeo from '../src/Capsule.mp4'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Navbar from './components/Navbar';
import CapsuleSection from './components/CapSection';

function App() {

 

  return (
    <div className='App'>
      <Navbar/>
      <CapsuleSection/>
    </div>
   
  );
}

export default App;
