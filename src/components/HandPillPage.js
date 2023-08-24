import { useState } from 'react';
import HandPillImg from '../assets/E1153.png'

const HandPillPage = () => {

    const [rotateState, setRotateState] = useState(false)
    const [rotateState1, setRotateState1] = useState(false)

    return(
        <div className="flex 2xl:w-screen lg:w-screen xl:w-screen mx-5 2xl:mx-0 md:w-screen xl:mx-0 py-32">
            <div className="flex flex-col">
                <div className="flex">
                    <p className="text-tintFont mt-20 sm:text-xs md:w-screen md:text-sm xl:w-auto 2xl:w-auto w-[20rem] xl:text-base xl:ml-20 2xl:text-base 2xl:ml-20">Nurturing Your Wellness Journey with Absorption, Transparency, and a Refreshing Experience.</p>
                </div>
                {console.log((rotateState))}
                <div className="flex flex-row  xl:p-20 2xl:p-20">
                    <div className="flex align-start flex-col mx-0 xl:mx-5 w-[5rem] md:w-48 xl:w-80 mt-24">
                        <div className="flex"> <p className="text-tintFont font-semibold text-base md:text-xl xl:text-3xl xl:text-2xl">Efficient and Holistic</p></div>
                        <button className="flex" onClick={() => setRotateState(true)}> <p className="text-tintFontLt mt-5  xl:w-auto 2xl:w-auto md:w-auto md:text-sm  w-[2rem] text-xs 2xl:text-base xl:text-base">Transparency and Traceability </p></button>
                        <button className="flex" onClick={() => setRotateState1(true)}> <p className="text-tintFontLt mt-5 xl:w-auto 2xl:w-auto md:w-auto md:text-sm 2xl:text-lg  w-[2rem] text-xs xl:text-base">Your Wellness Journey</p></button>
                    </div>
                    <div className="flex align-middle place-content-center mt-32 xl:mt-0 xl:w-1/2 xl:h-4/5 w-[7.5rem] md:w-1/3 h-28 xl:mx-5 2xl:mx-5">
                            {/* <div className='z-10 xl:w-auto xl:h-auto absolute xl:top-[199.52rem] xl:left-[20rem]'>
                                <div className={rotateState ? 'duration-700 rotate-90 transition-transform' : rotateState1 ? ' transition-transformduration-700 rotate-180' : ''}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="280" height="420" className='h-32  w-32 xl:w-auto mr-16 xl:mr-auto xl:h-auto' viewBox="0 0 331 642" fill="none">
                                <g filter="url(#filter0_f_177_159)">
                                    <path d="M316.853 636.001C142.962 633.761 3.9241 490.978 6.29817 317.101C8.67224 143.224 151.559 4.06494 325.451 6.30566" stroke="#FFB000" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
                                </g>
                                <defs>
                                    <filter id="filter0_f_177_159" x="0.768555" y="0.778809" width="330.183" height="640.723" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_177_159"/>
                                    </filter>
                                </defs>
                                </svg>
                            </div>
                            </div> */}
                        <div className='flex '>

                        <img src={HandPillImg} className=' xl:h-96 mt-3 xl:mt-0 md:mt-0 xl:w-[34rem] md:w-60 md:h-52 2xl:h-96 2xl:mt-0 2xl:w-[34rem]'/>
                        </div>
                    </div>
                    <div className="flex flex-col xl:align-end 2xl:align-end ml-3 xl:ml-10 2xl:ml-10 w-[7.5rem] md:w-60 xl:w-[30rem] 2xl:w-[35rem] mt-24">
                        <div className='flex'><p  className="text-tintFont font-semibold text-base md:text-xl xl:text-3xl">Efficient and Holistic Absorption of Vitamins</p></div> 
                        <div className='flex'><p  className="text-tintFont mt-5 font-medium xl:text-sm text-xs">Our liquid filled hard capsules cause faster and controlled absorption of nutrients with increased bio-availability. Additionally the VFILL technology allows us to create tamper & leak proof, odor masked capsules.</p></div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HandPillPage;