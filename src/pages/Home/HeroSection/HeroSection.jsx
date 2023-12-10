import appStore from '../../../assets/icons/AppStore.png'
import playStore from '../../../assets/icons/PlayStore.png'
import heroImage from '../../../assets/images/heroImage.png'
const HeroSection = () => {
  return (
    <div className='h-[872px] mb-[800px] md:mb-0 bg-center bg-no-repeat bg-cover  pt-14 sm:pt-20 bg-heroBg'>
      <div className='relative grid h-full grid-cols-1 px-6 border mt-7 sm:px-0 sm:pl-[72px] lg:px-20 md:grid-cols-6'>
        <div className='col-span-1 border md:col-span-4 '>
          <div className='flex items-center '>
            <button className='bg-[#FEAE37] text-white rounded-xl  px-4 py-1 mr-2'>
              New
            </button>
            <p className='text-base'>Download and enjoy!</p>
          </div>
          <h2 className='font-extrabold pt-10 md:pr-6 whitespace-pre-wrap text-[56px] leading-[56px] sm:leading-[70px] w-full md:text-[64px] '>
            The <span className='text-[#4759F9]'>Easiest</span> way to send
            money safely to anywhere
          </h2>
          <p className='pt-10 lg:pt-14 sm:pt-12 '>
            Send your money to everywhere in the world in less than a minute!
          </p>
          <p className='pb-10'>Download the app now.</p>
          {/* store links */}
          <div className='gap-6 sm:flex'>
            <img src={appStore} className='mb-6 sm:mb-0' alt='app store' />
            <img src={playStore} alt='play store' />
          </div>
        </div>
        <div className='col-span-full md:absolute lg:h-[875px] md:-right-0 lg:-right-12 md:w-[350px] lg:w-[410px] mt-14 md:mt-0'>
          <img
            className=' lg:w-[400px]  md:pl-12 object-cover md:h-[761.02px] w-full lg:h-[875px] mx-auto'
            src={heroImage}
            alt='hero image'
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
