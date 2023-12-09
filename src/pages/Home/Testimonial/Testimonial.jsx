import TestimonialCarousel from './TestimonialCarousel'

const Testimonial = () => {
  return (
    <section className='py-14 sm:py-[72px] lg:py-28'>
      <div className='flex items-center'>
        <div className='bg-[#F4F5FF] h-16 w-full sm:w-1/2 lg:w-1/3 '></div>
        <div className='w-8/12 mx-auto'>
          <h1 className='text-[56px] text-center mb-6 font-bold'>
            Real Feedback From Users
          </h1>
          <p className='text-lg text-center'>
            We make it easy for users to use our platform, that&apos;s why we
            provide this benefit.
          </p>
        </div>
      </div>
      <div className='pl-6 pt-[72px] sm:pl-[72px] lg:pl-80'>
        <TestimonialCarousel />
      </div>
    </section>
  )
}

export default Testimonial
