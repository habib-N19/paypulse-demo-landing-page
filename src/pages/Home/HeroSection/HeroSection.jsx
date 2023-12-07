import appStore from '../../../assets/icons/AppStore.png'
import playStore from '../../../assets/icons/PlayStore.png'
import heroImage from '../../../assets/images/heroImage.png'
const HeroSection = () => {
  return (
    // min-h-[calc(100vh-60px)]
    <div
      className=' relative bg-center bg-no-repeat bg-cover border bg-heroBg h-[70vh] max-w-[100vw] '
      // style={{
      //   backgroundImage: `url(images/headerBg.png)`
      // }}
    >
      <div className='flex justify-between w-11/12 mx-auto mt-24 border'>
        <div>
          <div className='flex'>
            <button className='bg-[#FEAE37] text-white rounded-xl  px-4 py-1'>
              New
            </button>
            <p>Download and enjoy!</p>
          </div>
          <h1 className='font-extrabold'>
            The <span className='text-[#4759F9]'>Easiest</span> way to send
            money safely to anywhere
          </h1>
          <p>
            Send your money to everywhere in the world in less than a minute!
          </p>
          <p>Download the app now.</p>
          {/* store links */}
          <div className='flex gap-4'>
            <img src={appStore} alt='app store' />
            <img src={playStore} alt='play store' />
          </div>
        </div>
        <div className=''>
          {/* <img className='max-w-xs ' src={heroImage} alt='hero image' /> */}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
