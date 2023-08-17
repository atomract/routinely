import B1 from '../assets/Bowel1.png'

const WellnessBowlPage = () => {
    return (<>
    <div className="flex bg-skinFont h-[120vh] place-content-center">
        <div className='flex flex-col place-content-center'>
            <div className="flex py-20  place-content-center">
                <p className="xl:text-6xl lg:text-5xl md:text-4xl 2xl:text-7xl text-3xl font-bold text-tintFont ">Nurturing Wellness</p>
            </div>
            <div className="flex py-10">
                <img src={B1} className='w-96 xl:w-[54rem] h-60 xl:h-80'/>
            </div>

        </div>
    </div>
    </>)

}

export default WellnessBowlPage;