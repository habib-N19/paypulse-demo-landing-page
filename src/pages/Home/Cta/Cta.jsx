import ctaImg from '../../../assets/images/bg-cta.png'
import user1 from '../../../assets/icons/user-01.png'
import user2 from '../../../assets/icons/user-02.png'
import user3 from '../../../assets/icons/user-03.png'
import user4 from '../../../assets/icons/user-04.png'
import './cta.css'
const Cta = () => {
  return (
    <section className='relative bg-[#4759F9] flex-col sm:flex-row flex pt-10 md:gap-14 px-6 sm:px-[72px] lg:px-20'>
      {/* bg circles */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
      </div>

      <div className='z-10 order-2 mt-12 sm:mt-0 sm:order-1 sm:w-1/2 lg:h-1/4 '>
        <img className='object-fill w-full h-full ' src={ctaImg} alt='' />
      </div>
      <div className='z-10 order-1 text-white sm:order-2 sm:w-1/2 lg:2/3 '>
        <h2 className='text-[40px] sm:text-[56px] font-bold mb-6'>
          Getting Paid is now easier!
        </h2>
        <p className='mb-10 text-lg '>
          PayPulse is fully reserved. Unlike banks, we don&apos;t loan out your
          money. We publish our holdings and obligations in real time.
        </p>
        <div className='flex items-start'>
          <img
            src={user1}
            className='object-cover object-center w-6 h-6 border border-white rounded-full'
            alt=''
          />
          <img
            src={user2}
            className='object-cover object-center w-6 h-6 -ml-2 border border-white rounded-full'
            alt=''
          />
          <img
            src={user3}
            className='object-cover object-center w-6 h-6 -ml-2 border border-white rounded-full'
            alt=''
          />
          <img
            src={user4}
            className='object-cover object-center w-6 h-6 -ml-2 border border-white rounded-full'
            alt=''
          />
          <p className='ml-2 text-sm text-white'>
            More than 10,000 people have tried
          </p>
        </div>
        <button className='text-[#1D1E25] px-7 py-3 mt-10 bg-white rounded btn'>
          Try Our App
        </button>
      </div>
    </section>
  )
}

export default Cta
