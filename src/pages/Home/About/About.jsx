import img1 from '../../../assets/icons/IconBox-01.png'
import img2 from '../../../assets/icons/IconBox-03.png'
import img3 from '../../../assets/icons/IconBox-02.png'
const About = () => {
  return (
    <section className='grid grid-cols-1 gap-5 mx-auto mt-20 sm:px-[72px] py-14 px-6 lg:px-20 lg:py-28 sm:grid-cols-2'>
      <div className='lg:order-2 col-span-full lg:col-span-1'>
        <h2 className='text-[40px] sm:text-[56px] font-bold '>
          Some distinguishing features that set PayPulse apart from others.
        </h2>
        <p className='py-10'>
          Exceptional Attributes that Differentiate PayPulse from Competitors
        </p>
        <button className='btn primary_btn'>Download Now</button>
      </div>
      <div className='rounded-2xl bg-[#F4F5FF] lg:order-1 col-span-1 px-16 py-[72px]'>
        <img src={img1} className='w-32 rounded-full' alt='' />
        <h1 className='my-8 text-4xl font-bold'>Worldwide Payment</h1>
        <p className='text-lg'>
          Worldwide Payment require an operational approach and problem-solving
          methodology that is specifically tailored to drive improvements to the
          system.
        </p>
      </div>
      <div className='rounded-2xl bg-[#F4F5FF] lg:order-3 col-span-1 px-16 py-[72px]'>
        <img src={img2} className='w-32 rounded-full' alt='' />
        <h1 className='my-8 text-4xl font-bold'>Transaction fee is free!</h1>
        <p className='text-lg'>
          Unlock cost-free transactions on our money sending app! Experience the
          ease of sending money without any fees. Enjoy seamless financial
          transactions, where your money stays yours.
        </p>
      </div>
      <div className='rounded-2xl bg-[#F4F5FF] col-span-1 lg:order-4 sm:col-span-full lg:col-span-1 px-16 py-[72px]'>
        <img src={img3} className='w-32 rounded-full' alt='' />
        <h1 className='my-8 text-4xl font-bold'>Secure Transaction</h1>
        <p className='text-lg'>
          Safeguard your sunny transactions with our Secure Transfer feature.
          Enjoy swift and secure money sending that keeps your financial rays
          shining bright.
        </p>
      </div>
    </section>
  )
}

export default About
