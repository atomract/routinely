import Img18 from '../assets/Gallery/img18.png'
import Img37 from '../assets/Gallery/img37.png'
import Img38 from '../assets/Gallery/img38.png'
import Img39 from '../assets/Gallery/img39.png'
import Img40 from '../assets/Gallery/img40.png'
import Img43 from '../assets/Gallery/img43.png'
import Img44 from '../assets/Gallery/img44.png'
import Img45 from '../assets/Gallery/img45.png'
import Img17 from '../assets/Gallery/img17.png'

const GalleryPage = () => {
    return (
        <div className='flex flex-col xl:mt-20'>
            <div className='place-content-center flex'>
                <div className='flex flex-col '>
                    <p className='text-lg text-tintFont text-semibold'>Share your routinely Status with us</p>
                    {" "}
                    <div className='flex place-content-center'>

                    <p className='text-2xl text-tintFont font-bold'>#HealthyYou</p>
                    </div>
                </div>
            </div>
            <div className="h-[100vh] py-5 flex flex-row">
                <div className="flex flex-col">
                    <div className="flex p-1">
                        <img src={Img18}/>
                    </div>
                    <div className="flex p-1">
                        <img src={Img37}/>
                    </div>
                </div>
                <div className="flex flex-col py-20">
                    <div className="flex p-1">
                        <img src={Img38}/>
                    </div>
                    <div className="flex p-1">
                        <img src={Img39}/>
                    </div>
                </div>
                <div className="flex flex-col py-20">
                    <div className="flex p-1">
                        <img src={Img40}/>
                    </div>
                </div>
                <div className="flex flex-col py-20">
                    <div className="flex p-1">
                        <img src={Img43}/>
                    </div>
                    <div className="flex p-1">
                        <img src={Img44}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex p-1">
                        <img src={Img45}/>
                    </div>
                    <div className="flex p-1">
                        <img src={Img17}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryPage;