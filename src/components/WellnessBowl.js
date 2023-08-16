import B1 from '../assets/Bowel1.png'

const WellnessBowlPage = () => {
    return (<>
    <div className="flex bg-skinFont h-[120vh] place-content-center">
        <div className='flex flex-col place-content-center'>
            <div className="flex py-20  place-content-center">
                <p className="text-6xl font-bold text-tintFont ">Nurturing Wellness</p>
            </div>
            <div className="flex py-10">
                <img src={B1} className='w-[54rem] h-80'/>
            </div>

        </div>
    </div>
    </>)

}

export default WellnessBowlPage;