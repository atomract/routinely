import { useState } from 'react';
import HandPillImg from '../assets/E1153.png'

const HandPillPage = () => {

    const [rotateState, setRotateState] = useState(false)
    const [rotateState1, setRotateState1] = useState(false)

    return(
        <div className="flex mt-20 py-32">
            <div className="flex flex-col">
                <div className="flex">
                    <p className="text-tintFont mt-20 sm:text-xs xl:text-base sm:ml-10 xl:ml-20">Nurturing Your Wellness Journey with Absorption, Transparency, and a Refreshing Experience.</p>
                </div>
                {console.log((rotateState))}
                <div className="flex flex-row xl:p-20">
                    <div className="flex align-start flex-col mx-5 sm:w-20 xl:w-80 mt-24">
                        <div className="flex"> <p className="text-tintFont font-semibold sm:text-base xl:text-2xl">Efficient and Holistic</p></div>
                        <button className="flex" onClick={() => setRotateState(true)}> <p className="text-tintFontLt mt-5  sm:text-xs xl:text-base">Transparency and Traceability </p></button>
                        <button className="flex" onClick={() => setRotateState1(true)}> <p className="text-tintFontLt mt-5 sm:text-xs xl:text-base">Your Wellness Journey</p></button>
                    </div>
                    <div className="flex align-middle xl:mx-5">
                            <div className='z-10 absolute xl:top-[199.52rem] xl:left-[20rem]'>
                                <div className={rotateState ? 'duration-700 rotate-90 transition-transform' : rotateState1 ? ' transition-transformduration-700 rotate-180' : ''}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="297" height="428" viewBox="0 0 331 642" fill="none">
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
                            </div>
                        <img src={HandPillImg} className='sm:w-10 sm:h-10 xl:h-96 xl:w-[34rem]'/>
                    </div>
                    <div className="flex flex-col align-end sm:ml-3 xl:ml-10 sm:w-[rem] xl:w-[30rem] mt-24">
                        <div className='flex'><p  className="text-tintFont font-semibold sm:text-base xl:text-3xl">Efficient and Holistic Absorption of Vitamins</p></div> 
                        <div className='flex'><p  className="text-tintFont mt-5 font-medium text-sm">Our liquid filled hard capsules cause faster and controlled absorption of nutrients with increased bio-availability. Additionally the VFILL technology allows us to create tamper & leak proof, odor masked capsules.</p></div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HandPillPage;