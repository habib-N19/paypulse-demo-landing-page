import ctaImg from '../../../assets/images/bg-cta.png'
import user1 from '../../../assets/icons/user-01.png'
import user2 from '../../../assets/icons/user-02.png'
import user3 from '../../../assets/icons/user-03.png'
import user4 from '../../../assets/icons/user-04.png'
const Cta = () => {
  return (
    //  className='w-[283.5px] sm:w-[386px] lg:w-[486px] h-full object-center '
    <section className='bg-[#4759F9] flex pt-10 px-20'>
      <div className='w-[283.5px] sm:w-[386px] lg:w-[630px] px-[72px] border  h-[580px] object-center '>
        <img className='object-center w-full h-full' src={ctaImg} alt='' />
      </div>
      <div className='py-12 text-white px-14 '>
        <h2 className='text-[56px] font-bold mb-6'>
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
        <button className='text-[#1D1E25] px-7 py-3 mt-10 bg-white btn'>
          Try Our App
        </button>
      </div>
    </section>
  )
}

export default Cta
