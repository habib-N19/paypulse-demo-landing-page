import appStore from '../../../assets/icons/AppStore.png'
import playStore from '../../../assets/icons/PlayStore.png'
import heroImage from '../../../assets/images/heroImage.png'
import headerBg from '../../../assets/headerBg.png'
const HeroSection = () => {
  return (
    <div
      className='h-[872px] mb-[800px] md:mb-0 bg-center bg-no-repeat bg-cover  pt-14 sm:pt-20 bg-heroBg'
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <div className='relative grid h-full grid-cols-1 px-6  mt-7 sm:px-0 sm:pl-10 lg:pl-[72px] lg:px-20 md:grid-cols-7'>
        <div className='col-span-1 lg:pr-0 md:col-span-4'>
          <div className='flex items-center '>
            <button className='bg-[#FEAE37] text-white rounded-xl  px-4 py-1 mr-2'>
              New
            </button>
            <p className='text-base'>Download and enjoy!</p>
          </div>
          <h2 className='font-extrabold pt-10 whitespace-pre-wrap text-[56px] leading-[56px] sm:leading-[70px] w-full  lg:text-[64px]'>
            The <span className='text-[#4759F9]'>Easiest</span> way to send
            money safely to anywhere
          </h2>
          <p className='pt-10 break-words md:pt-4 lg:pt-14 sm:pt-12 '>
            Send your money to everywhere in the world in less than a minute!
          </p>
          <p className='pb-10 '>Download the app now.</p>
          {/* store links */}
          <div className='gap-6 sm:flex'>
            <img src={appStore} className='mb-6 sm:mb-0' alt='app store' />
            <img src={playStore} alt='play store' />
          </div>
        </div>
        <div className='col-span-full md:absolute lg:h-[875px] lg:-right-12 md:-right-0 md:w-[350px]   lg:w-[522px] mt-14 md:mt-0'>
          <img
            className=' object-cover w-fit md:h-[761.02px] lg:h-[875px] mx-auto md:ml-auto '
            src={heroImage}
            alt='hero image'
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
