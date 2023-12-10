import TestimonialCarousel from './TestimonialCarousel'

const Testimonial = () => {
  return (
    <section className='py-14 sm:py-[72px] lg:py-28'>
      <div className='relative flex items-center'>
        <div className='bg-[#F4F5FF] z-10 h-16 absolute w-full sm:w-1/2 lg:w-1/3 '></div>
        <div className='px-6 text-right z-20 w-full lg:px-20 sm:px-[72px] mx-auto '>
          <h1 className='sm:text-[56px]  text-[40px] w-full  mb-6 font-bold'>
            Real Feedback From Users
          </h1>
          <p className='text-lg'>
            We make it easy for users to use our platform, that&apos;s why we
            provide this benefit.
          </p>
        </div>
      </div>
      <div className='w-full'>
        <TestimonialCarousel />
      </div>
    </section>
  )
}

export default Testimonial
