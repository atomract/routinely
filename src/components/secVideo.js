import Vdeo from '../vdeo.mp4'

const VideoSection = () => {
    return (
        <div className=' h-[48rem]'>
            .
        <video className='h-[34rem] w-[1200px] relative top-[600px]' autoPlay={true}>
            <source autoPlay={true} type='video/mp4' src={Vdeo}></source>
        </video>
        </div>
    )
}

export default VideoSection