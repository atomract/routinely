import { useState } from 'react'
import BottlwImg from '../assets/ImgBottl.png'
import ImageList from './ImageSlider'

const SliderSection = () => {

    const [idx, setIdx] = useState(0)

    const images = [
    {
        path: BottlwImg,
        head: 'Multivitamin Men 18+',
        about: 'Our liquid filled hard capsules cause faster and controlled absorption of nutrients with increased bio-availability.'
    },
    {
        path: BottlwImg,
        head: 'Multivitamin Women 18+',
        about: 'Our liquid filled hard capsules cause faster and controlled absorption of nutrients with increased bio-availability.'
    },
    {
        path: BottlwImg,
        head: 'Multivitamin Men 18+',
        about: 'Our liquid filled hard capsules cause faster and controlled absorption of nutrients with increased bio-availability.'
    },
    {
        path: BottlwImg,
        head: 'Multivitamin Women 18+',
        about: 'Our liquid filled hard capsules cause faster and controlled absorption of nutrients with increased bio-availability.'
    },
    {
        path: BottlwImg,
        head: 'Multivitamin Men 18+',
        about: 'Our liquid filled hard capsules cause faster and controlled absorption of nutrients with increased bio-availability.'
    },
]

    const incIdx = () => {
        if(idx === 4) {
            setIdx(0)
        }
        else {
            setIdx(idx + 1)
        }
    }

    const decIdx = () => {
        if(idx === 0 ) {
            setIdx(4)
        }
        else {
            setIdx(idx - 1)
        }
    }

    return (
        <>
            <div className="e152 z-0 sm:h-[37rem] sm:w-[20rem] xl:h-[61rem] xl:w-[80rem] 2xl:h-[67rem] 2xl:w-[88rem] xl:shrink-0 "  >
                <div className='py-60 sm:py-auto '>
                    <div className='flex flex-col'>
                        <div className='flex flex-row xl:p-10'>
                            {
                                images.map((e, k)=> {
                                    return (
                                        <div className='flex flex-col  sm:px-1 xl:px-6'>
                                            <div className={`${k===idx ? "xl:px-10 sm:px-6" : null}`}>
                                                {k===idx ? 
                                                <ImageList srcPath={e.path} idx={k}/>
                                                    : <img className='xl:h-52 sm:h-12 sm:w-7 z-5 xl:w-44 rounded-3xl opacity-70' src={e.path}/>
                                            }
                                             {/* /   <ImageList srcPath={e.path} ky={k} idx={idx}/> */}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='mt-12'>

                            <div className='flex place-content-center xl:py-6 sm:py-auto flex-row'>
                                <button className='flex xl:p-10 p-3 sm:py-10' onClick={decIdx}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                        <path d="M23.5529 14.3779L16.4219 20.8036C16.2882 20.9231 16.1821 21.0652 16.1097 21.2218C16.0373 21.3784 16 21.5464 16 21.716C16 21.8857 16.0373 22.0537 16.1097 22.2103C16.1821 22.3669 16.2882 22.509 16.4219 22.6285L23.5529 29.0541C23.6855 29.1746 23.8432 29.2702 24.017 29.3355C24.1908 29.4007 24.3772 29.4343 24.5655 29.4343C24.7538 29.4343 24.9402 29.4007 25.114 29.3355C25.2878 29.2702 25.4455 29.1746 25.5781 29.0541C25.7118 28.9347 25.8179 28.7925 25.8903 28.6359C25.9627 28.4793 26 28.3114 26 28.1417C26 27.972 25.9627 27.8041 25.8903 27.6475C25.8179 27.4909 25.7118 27.3487 25.5781 27.2293L19.4454 21.716L25.5781 16.2028C25.8467 15.9608 25.9976 15.6326 25.9976 15.2904C25.9976 15.1209 25.9605 14.9531 25.8886 14.7966C25.8166 14.64 25.7111 14.4978 25.5781 14.3779C25.3096 14.136 24.9453 14 24.5655 14C24.3775 14 24.1912 14.0334 24.0175 14.0982C23.8438 14.1631 23.6859 14.2581 23.5529 14.3779Z" fill="white"/>
                                        <circle cx="20" cy="20" r="21" transform="matrix(-1 0 0 1 42 2)" stroke="white" stroke-width="2"/>
                                    </svg>
                                </button>
                                <div className='flex flex-col  place-content-center'>
                                    <p className='font-bold text-whiteFont self-center xl:text-4xl sm:text-xl'>{images[idx].head}</p>
                                    <p className='font-normal text-whiteFont text-center xl:w-[32rem] sm:w-[28rem] sm:text-xs xl:text-base'>{images[idx].about}</p>
                                </div>
                                <button className='flex xl:p-10 p-3 sm:py-10' onClick={incIdx}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                        <path d="M20.4471 14.3779L27.5781 20.8036C27.7118 20.9231 27.8179 21.0652 27.8903 21.2218C27.9627 21.3784 28 21.5464 28 21.716C28 21.8857 27.9627 22.0537 27.8903 22.2103C27.8179 22.3669 27.7118 22.509 27.5781 22.6285L20.4471 29.0541C20.3145 29.1746 20.1568 29.2702 19.983 29.3355C19.8092 29.4007 19.6228 29.4343 19.4345 29.4343C19.2462 29.4343 19.0598 29.4007 18.886 29.3355C18.7122 29.2702 18.5545 29.1746 18.4219 29.0541C18.2882 28.9347 18.1821 28.7925 18.1097 28.6359C18.0373 28.4793 18 28.3114 18 28.1417C18 27.972 18.0373 27.8041 18.1097 27.6475C18.1821 27.4909 18.2882 27.3487 18.4219 27.2293L24.5546 21.716L18.4219 16.2028C18.1533 15.9608 18.0024 15.6326 18.0024 15.2904C18.0024 15.1209 18.0395 14.9531 18.1114 14.7966C18.1834 14.64 18.2889 14.4978 18.4219 14.3779C18.6904 14.136 19.0547 14 19.4345 14C19.6225 14 19.8088 14.0334 19.9825 14.0982C20.1562 14.1631 20.3141 14.2581 20.4471 14.3779Z" fill="white"/>
                                        <circle cx="22" cy="22" r="21" stroke="white" stroke-width="2"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default SliderSection