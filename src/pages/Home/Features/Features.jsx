import Logo from '../../../utils/Logo'
import iconCheck from '../../../assets/icons/icon-check.png'
import iconNotCheck from '../../../assets/icons/icon-not-check.png'
import SectionHeading from '../../../utils/SectionHeading'
const Features = () => {
  return (
    <section className='mx-auto lg:px-20 lg:py-28 sm:px-[72px] py-14 px-6'>
      <SectionHeading
        title='Why PayPulse '
        subTitle="Voilinta is fully reserved. Unlike banks, we don't loan out your money.
        We publish our holdings and obligations in real time."
      />
      <div className='relative gap-12 mt-[72px] sm:flex justify-center items-center '>
        {/* card 1 */}
        <div>
          <Logo />
          <div className=' bg-[#4759F9] mt-8 text-white py-12 px-[56px]'>
            <h3 className='mb-6 text-2xl font-bold text-center uppercase'>
              Features Included:
            </h3>
            <ul className='space-y-6'>
              <li className='flex items-center'>
                {' '}
                <img src={iconCheck} className='w-4 h-4 mr-4' alt='' />
                No hidden fees. No surprises
              </li>
              <li className='flex items-center justify-start'>
                {' '}
                <img src={iconCheck} className='w-4 h-4 mr-4' alt='' />
                <p> Manage taxes, automatically</p>
              </li>
              <li className='flex items-center'>
                {' '}
                <img src={iconCheck} className='w-4 h-4 mr-4' alt='' />
                Supports 190+ countries
              </li>
              <li className='flex items-center'>
                {' '}
                <img src={iconCheck} className='w-4 h-4 mr-4' alt='' />
                Provides 24/7 live support
              </li>
              <li className='flex items-center'>
                {' '}
                <img src={iconCheck} className='w-4 h-4 mr-4' alt='' />
                Works with the real exchange rate
              </li>
              <li className='flex items-center'>
                {' '}
                <img src={iconCheck} className='w-4 h-4 mr-4' alt='' />
                Integrates seamlessly
              </li>
            </ul>
          </div>
        </div>
        {/* middle icon */}
        <div className='bg-[#FEAE37] text-center flex items-center justify-center w-20 h-20 rounded-full mx-auto -mt-6 md:absolute md:top-1/2 md:right-[48%]'>
          {' '}
          <h1 className='text-3xl font-bold text-white'>VS</h1>
        </div>
        {/* card 2 */}
        <div>
          <h2 className='text-[29px] text-center font-bold'>Other Apps</h2>
          <div className='text-center  mt-8  shadow-xl py-12 px-[56px]'>
            <h3 className='mb-6 text-2xl font-bold'>FEATURES not INCLUDED :</h3>
            <ul className='space-y-6'>
              <li className='flex items-center'>
                {' '}
                <img src={iconNotCheck} className='w-4 h-4 mr-4' alt='' />
                Complicated fee structure
              </li>
              <li className='flex items-center'>
                {' '}
                <img src={iconNotCheck} className='w-4 h-4 mr-4' alt='' />
                Need a lot of manual tax management
              </li>
              <li className='flex items-center'>
                {' '}
                <img src={iconNotCheck} className='w-4 h-4 mr-4' alt='' />
                Support 50-100 countries
              </li>
              <li className='flex items-center'>
                {' '}
                <img src={iconNotCheck} className='w-4 h-4 mr-4' alt='' />
                Have poor support and weekends off
              </li>
              <li className='flex items-center'>
                {' '}
                <img src={iconNotCheck} className='w-4 h-4 mr-4' alt='' />
                Use unfair, higher exchange rates
              </li>
              <li className='flex items-center'>
                {' '}
                <img src={iconNotCheck} className='w-4 h-4 mr-4' alt='' />
                Have spotty integrations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
