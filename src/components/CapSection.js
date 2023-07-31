import React, { useEffect, useRef, useState } from 'react'
import Levs from '../assets/pngwing2.png'
import Cap1 from '../assets/capsule1.png'
import Cap2 from '../assets/capsule2.png'
import Time1 from '../assets/time1.png'
import Levs1 from '../assets/leaves1.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useScroll, animated } from '@react-spring/web'

const CapsuleSection = () => {

    const vidRef = useRef(null);
    const setHeightRef = useRef(null);
    const timeline = useRef(gsap.timeline({paused: true}))
    const [bgX, setBgX] = useState(0)
    const { scrollYProgress } = useScroll()
  
    gsap.registerPlugin(ScrollTrigger);

    const handleMouseMove = (e) => {
      setBgX(-e.nativeEvent.offsetX);
    };
  
  
    useEffect(() => {
      const rows = 11;
      const columns = 11;
      const missingImages = 3; // The number of missing images in the last row
      const frame_count = rows * columns - 1;
      const imageWidth = 6380;
      const imageHeight = 6380;
      const horizDiff = imageWidth / columns;
      const vertDiff = imageHeight / rows;
      var offset_v = 100
      timeline.current.from(vidRef.current, {
        opacity: 1,
        x: '10%',
        scrollTrigger: { 
          trigger: vidRef.current,
          id: 'project-pin-1',
          start: "top 20%",
          end: "bottom -50%",
          scrub: 1.5,
          pin: true,
        //   markers: true,
          toggleActions: 'play none none reverse'
        }
      })
    .to(vidRef.current, {
      opacity: 1,
    }, ">")

      // const vidRef = document.querySelectorAll(".anim_item");


      gsap.set(".viewer", { width: horizDiff, height: vertDiff });
      
      const setPos = gsap.quickSetter(".viewer", 'background-position');
  
      const obj = { num: 0 };
      gsap.to(obj, {
        num: frame_count,
        ease: "steps(" + frame_count + ")",
        scrollTrigger: {
          trigger: "#scene",
          frames: frame_count * 600,
          snap: 'frame',
          // start: 'bottom center',
          // end: "top 500px",
          // end: imageHeight,
          // markers: true,
          pin: true,
          // anticipatePin: 1,
          scrub: true
        },
        onUpdate: () =>{
          setPos(`
            ${-Math.round((obj.num % columns) * horizDiff)}px
            ${-Math.round(Math.floor(obj.num / columns) * vertDiff)}px
          `)
        }
      });
      // gsap.to(".viewer", {
      //   backgroundPosition: (-offset_v * frame_count * 2) + "px",
      //   ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
      //   scrollTrigger: {
      //     trigger: ".scene",
      //     start: "top top",
      //     end: "+=" + (frame_count * offset_v),
      //     pin: true,
      //     scrub: true
      //   }
      // });
      
  
  
    },[])

    // useEffect(() => {
    //   gsap.set('#crvTrigger-element', {opacity: 0});
    //     gsap.to("#crvTrigger-element", {
    //     scrollTrigger: {
    //       trigger: "#crvTrigger",
    //       start: "center center",
    //       // end: "bot",
    //       pin: true,
    //       // markers: true,
    //       scrub: true
    //     },
    //     opacity: 1
    //   });
    // },[])
  
    //   window.requestAnimationFrame(scrollPlay);
  
    //   return () => {
    //     window.cancelAnimationFrame(scrollPlay);
    //   };
    // }, []);
  
    // useEffect(() => {
    //   let playbackConst = 500
  
    //   const setHeight = setHeightRef.current;
    //   const vid = vidRef.current;
  
    //   const handleLoadedMetadata = () => {
    //     setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    //   };
  
    //   vid.addEventListener('loadedmetadata', handleLoadedMetadata);
  
    //   return () => {
    //     vid.removeEventListener('loadedmetadata', handleLoadedMetadata);
    //   };
    // }, []);
  

    return (
      <div className=''>
          <div className='place-content-center'>
            <div className='contentBox'>
            <img className='eclip' />
            {/* <div onMouseMove={handleMouseMove} style={{
                backgroundPositionX: bgX
              }}> */}

              <img src={Levs}  id='levsAnim' width={'90%'} className='lves ml-10'/>
            {/* </div> */}
            <div className='-z-5 ' ref={vidRef}>
              <span className='anim_item'>
                <p className='strk-3 text-7xl font-bold tracking-wider mt-20'>Elevate Your Wellness <span className='font-extrabold strk-0'>Journey</span></p>
              </span>
            </div>
              <div id='scene'>

                <div className='viewer'>
                    
                </div>
              {/* <div ref={setHeightRef} id="set-height">
              </div> */}
                  {/* <video ref={vidRef} id="v0" >
                  <source type='video/mp4' src={Vdeo}></source>
                </video> */}
              </div>
              <div className='lves2'>
              <svg xmlns="http://www.w3.org/2000/svg" className='natEssen' width="193" height="90.5" viewBox="0 0 382 177" fill="none">
                <path d="M0 29.9957V147.037C0 163.606 13.4314 177 30 177H282.545C299.114 177 312.545 163.569 312.545 147V142.462C312.545 125.894 325.977 112.462 342.545 112.462H352C368.569 112.462 382 99.0306 382 82.4621V30C382 13.4315 368.569 0 352 0H30C13.4315 0 0 13.4271 0 29.9957Z" fill="white"/>
              </svg>
                <div className='natText'>
                  <span className='ml-5'>
                    <span className='flex flex-row ml-80'>

                      <img src={Levs1} className='h-10' width={'60%'}/>
                      <p className='font-bold text-tintFont whitespace-nowrap mt-1.5 ml-2'>{"Nature’s Essence"}</p>
                    </span>
                  </span>
                </div>
              <div className='absolute z-2 mt-9 ml-7 w-18'> 
                <p className='z-2 ml-80 text-[10px] font-normal text-tintFont whitespace-nowrap mt-0'>Plant based</p>
                <p className='z-2 ml-80 text-[10px] font-normal text-tintFont whitespace-nowrap mt-0'>Mint Enhanced</p>
                <p className='z-2 ml-80 text-[10px] font-normal text-tintFont whitespace-nowrap mt-0'>Liquid Fill 2-  in -1 Technology</p>

              </div>
              </div>
                

            </div>
      </div>
      <div className='h-max'>
      <animated.div style={{ opacity: scrollYProgress }}>
        <div className='flex flex-row place-content-end' id='crvTrigger'>
          <div className='eclip1 w-80 mt-4 mx-5'  id='crvTrigger-element'>
            <span className='flex flex-row'>
              <img src={Cap1} width={'10%'} className='h-7 mt-3'/>
              <p className='text-tintFont text-xl font-semibold'>Unique Capsule in Capsule, 2-IN-1 Technology</p>
            </span>
              <p className='text-tintFont text-[10px] font-normal mt-1'>Our trademarked technology combines oily and dry ingredients in a single capsule, including incompatible ingredients like Fat and Water soluble Vitamins and Minerals. Intake all key nutrients with just 1 pill a day.</p>
          </div>
        </div>
        </animated.div>
        <animated.div style={{ opacity: scrollYProgress }}>

        <div className='flex flex-row' id='crvTrigger'>
          <div className='eclip1 w-80 mt-40 mx-5' id='crvTrigger-element'>
            <span className='flex flex-row'>
              <img src={Time1} width={'10%'} className='h-6 mx-3'/>
              <p className='text-tintFont text-xl font-semibold'>Delayed Release Technology</p>
            </span>
              <p className='text-tintFont text-[10px] font-normal mt-1 mx-2'>Our delayed-release capsules dissolve in the small intestine, where nutrient absorption is most effective.</p>
          </div>
        </div>
        </animated.div>
        <animated.div style={{ opacity: scrollYProgress }}>
        <div className='flex flex-row place-content-end mb-20' id='crvTrigger'>
          <div className='eclip1 w-80 mt-72 mx-5' id='crvTrigger-element'>
            <span className='flex flex-row' id=''>
              <img src={Cap2} width={'15%'} className='h-6 mx-1'/>
              <p className='text-tintFont text-xl font-semibold'>Liquid Fill Encapsulation with VFILL™ Technology</p>
            </span>
              <p className='text-tintFont text-[10px] font-normal mt-1 mx-2'>Our delayed-release capsules dissolve in the small intestine, where nutrient absorption is most effective.</p>
          </div>
        </div>
        </animated.div>
        
      </div>
    </div>
    )
}

export default CapsuleSection;