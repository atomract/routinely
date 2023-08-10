import React, { useEffect, useRef, useState } from 'react'
import Levs from '../assets/pngwing2.png'
import Cap1 from '../assets/capsule1.png'
import Cap2 from '../assets/capsule2.png'
import Time1 from '../assets/time1.png'
import Levs1 from '../assets/leaves1.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useScroll, animated, useSpring } from '@react-spring/web'
import useIntersectionObserver from '../functions/InteractionScroll'
import AirPodsAnimation from './AirPodsAnimation.js'
const CapsuleSection = () => {

    const vidRef = useRef(null);
    const timeline = useRef(gsap.timeline({paused: true}))
    const { scrollYProgress } = useScroll()
    const triggerRef = useRef();
    const [isVisible, setIsVisible] = useState(true);
    const [height, setHeight] = useState(0)
    const dataRef = useIntersectionObserver(triggerRef, {
      freezeOnceVisible: true
    });

  
  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])
  
  const listenToScroll = () => {
    let heightToHideFrom = 900;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {  
         isVisible && setIsVisible(false);
    } else {
         setIsVisible(true);
    }  
  };

    const ltf = useSpring({
      from: {transform: 'translateX(30%)'},
      to: dataRef?.isIntersecting ? {transform: 'translateX(0%)'} : {transform: 'translateX(30%)', } ,
      config: {duration: 1000},

      // reset: true
    })

    const rtl = useSpring({
      from: {transform: 'translateX(-30%)'},
      to: dataRef?.isIntersecting ? {transform: 'translateX(0%)', } : {transform: 'translateX(30%)', } ,
      config: {duration: 1000},

      // reset: true
    })

    gsap.registerPlugin(ScrollTrigger);


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


    },[])




    return (
      <div className=''>
          <div className='place-content-center'>
            <div className='contentBox sm:h-48 md:h-64 lg:h-[36rem] xl:h-[44rem] 2xl:h-[52rem]'>
            <img className='eclip sm:p-32 md:p-36 lg:p-44 xl:p-52 2xl:p-64 mb-36' />
            {/* <div onMouseMove={handleMouseMove} style={{
                backgroundPositionX: bgX
              }}> */}

              <img src={Levs}  id='levsAnim' width={'90%'} className='lves ml-10'/>
            {/* </div> */}
            <div className='-z-5 ' ref={vidRef}>
              <span className='anim_item'>
                <p className='strk-3  sm:text-xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-bold tracking-wider '>Elevate Your Wellness <span className='xl:font-extrabold 2xl:font-extrabold lg:font-extrabold  md:font-bold sm:font-bold strk-0'>Journey</span></p>
              </span>
            </div>

              {
        isVisible 
         && 

         <div className='max-h-96 hide'>

          <canvas id="hero-lightpass " />
            {/* <div id='scene'> */}
          <AirPodsAnimation />
          </div>
      }


              {/* <div ref={setHeightRef} id="set-height">
              </div> */}
                  {/* <video ref={vidRef} id="v0" >
                  <source type='video/mp4' src={Vdeo}></source>
                </video> */}
              {/* </div> */}
              <div className='lves2'>
              <svg xmlns="http://www.w3.org/2000/svg" className='natEssen' width="193" height="90.5" viewBox="0 0 382 177" fill="none">
                <path d="M0 29.9957V147.037C0 163.606 13.4314 177 30 177H282.545C299.114 177 312.545 163.569 312.545 147V142.462C312.545 125.894 325.977 112.462 342.545 112.462H352C368.569 112.462 382 99.0306 382 82.4621V30C382 13.4315 368.569 0 352 0H30C13.4315 0 0 13.4271 0 29.9957Z" fill="white"/>
              </svg>
                <div className='natText'>
                  <span className='ml-5'>
                    <span className='flex flex-row ml-80'>

                      <img src={Levs1} className='h-10 mt-24' width={'50%'}/>
                      <p className='font-bold text-tintFont whitespace-nowrap mt-24 '>{"Nature’s Essence"}</p>
                    </span>
                  </span>
                </div>
              <div className='absolute z-2 mt-32 ml-7 w-18'>
                <p className='z-2 ml-80 text-[10px] font-normal text-tintFont whitespace-nowrap'>Plant based</p>
                <p className='z-2 ml-80 text-[10px] font-normal text-tintFont whitespace-nowrap'>Mint Enhanced</p>
                <p className='z-2 ml-80 text-[10px] font-normal text-tintFont whitespace-nowrap'>Liquid Fill 2-  in -1 Technology</p>

              </div>
              </div>


            </div>
      </div>
      <div className='sm:1/3 md:h-1/2 lg:h-2/3 xl:h-5/6 2xl:h-5/6 mt-20'>
      <div className='md:place-content-center sm:place-content-center'>
        <animated.div className='flex flex-row 2xl:place-content-end lg:place-content-end xl:place-content-end' style={ltf} on id='crvTrigger'>
          <div className='eclip1 lg:w-80 md:w-60 sm:w-44 2xl:w-96 xl:w-96 mx-5 mr-16'  id='crvTrigger-element'>
            <span className='flex flex-row'>
              <img src={Cap1} width={'10%'} className='h-7 mt-3'/>
              <p className='text-tintFont sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold tracking-wider'>Unique Capsule in Capsule, 2-IN-1 Technology</p>
            </span>
              <p className='text-tintFont text-[11px] font-semibold mt-1 tracking-wider'>Our trademarked technology combines oily and dry ingredients in a single capsule, including incompatible ingredients like Fat and Water soluble Vitamins and Minerals. Intake all key nutrients with just 1 pill a day.</p>
          </div>
        </animated.div>
        <div ref={triggerRef} />
      </div>


        <div className='md:place-content-center sm:place-content-center sm:ml-0 md:ml-0 ml-40'>
          <animated.div className='flex flex-row' style={rtl} id='crvTrigger'>
            <div className='eclip1 lg:w-80 md:w-60 sm:w-44 2xl:w-96 xl:w-96 mt-40 mx-5 sm:ml-0 md:ml-0 2xl:ml-32 lg:ml-28 xl:ml-32' id='crvTrigger-element'>
              <span className='flex flex-row'>
                <img src={Time1} width={'10%'} className='h-6 mx-3'/>
                <p className='text-tintFont sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold tracking-wider'>Delayed Release Technology</p>
              </span>
                <p className='text-Font text-[11px] font-semibold mt-1 mx-2 tracking-wider'>Our delayed-release capsules dissolve in the small intestine, where nutrient absorption is most effective.</p>
            </div>
          </animated.div>
          <div ref={triggerRef} />
        </div>


        <div className='md:place-content-center sm:place-content-center'>
          <animated.div className='flex flex-row 2xl:place-content-end lg:place-content-end xl:place-content-end ml-3' style={ltf} id='crvTrigger'>
            <div className='eclip1 lg:w-80 md:w-60 sm:w-44 2xl:w-96 xl:w-96 mt-72 mx-6 mr-56' id='crvTrigger-element'>
              <span className='flex flex-row' id=''>
                <img src={Cap2} width={'15%'} className='h-6 mx-1'/>
                <p className='text-tintFont sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold tracking-wider'>Liquid Fill Encapsulation with VFILL™ Technology</p>
              </span>
                <p className='text-tintFont text-[11px] font-semibold mt-1 mx-2 tracking-wider'>Our delayed-release capsules dissolve in the small intestine, where nutrient absorption is most effective.</p>
            </div>
          </animated.div>
          <div ref={triggerRef} />
        </div>

      </div>
    </div>
    )
}

export default CapsuleSection;
