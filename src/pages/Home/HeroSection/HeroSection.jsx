import appStore from '../../../assets/icons/AppStore.png'
import playStore from '../../../assets/icons/PlayStore.png'
import heroImage from '../../../assets/images/heroImage.png'
const HeroSection = () => {
  return (
    <div className=' relative bg-center bg-no-repeat bg-cover  bg-heroBg h-[75%]  max-w-[100vw] px-6 py-14 sm:pt-28 lg:px-20 '>
      <div className='justify-between sm:flex'>
        <div>
          <div className='flex items-center '>
            <button className='bg-[#FEAE37] text-white rounded-xl  px-4 py-1 mr-2'>
              New
            </button>
            <p>Download and enjoy!</p>
          </div>
          <h1 className='text-6xl font-extrabold pt-11 pb-14'>
            The <span className='text-[#4759F9]'>Easiest</span> way to send
            money safely to anywhere
          </h1>
          <p>
            Send your money to everywhere in the world in less than a minute!
          </p>
          <p>Download the app now.</p>
          {/* store links */}
          <div className='gap-6 mt-10 sm:flex'>
            <img src={appStore} className='mb-6 sm:mb-0' alt='app store' />
            <img src={playStore} alt='play store' />
          </div>
        </div>
        <div className='pt-14 sm:pt-0'>
          <img className='max-w-xs ' src={heroImage} alt='hero image' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
