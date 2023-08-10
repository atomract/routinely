import HandPillImg from '../assets/E1153.png'

const HandPillPage = () => {
    return(
        <div className="flex mt-20 py-32">
            <div className="flex flex-col">
                <div className="flex">
                    <p className="text-tintFont mt-20 ml-20">Nurturing Your Wellness Journey with Absorption, Transparency, and a Refreshing Experience.</p>
                </div>
                <div className="flex flex-row p-20">
                    <div className="flex align-start flex-col mx-5 w-80 mt-32">
                        <div className="flex"> <p className="text-tintFont font-semibold text-2xl">Efficient and Holistic</p></div>
                        <div className="flex"> <p className="text-tintFont  text-xl">Efficient and Holistic</p></div>
                        <div className="flex"> <p className="text-tintFont text-xl">Efficient and Holistic</p></div>
                    </div>
                    <div className="flex align-middle mx-5">
                        <img src={HandPillImg} className='h-96 w-[34rem]'/>
                    </div>
                    <div className="flex flex-col align-end ml-10 w-[30rem] mt-32">
                        <div className='flex'><p  className="text-tintFont font-semibold text-3xl">Efficient and Holistic Absorption of Vitamins</p></div> 
                        <div className='flex'><p  className="text-tintFont font-medium text-base">Our liquid filled hard capsules cause faster and controlled absorption of nutrients with increased bio-availability. Additionally the VFILL technology allows us to create tamper & leak proof, odor masked capsules.</p></div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HandPillPage;