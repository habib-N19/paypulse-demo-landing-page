import quote from '../assets/icons/quote.png'
import testimonialImg from '../assets/icons/testimonial-img.png'
const TestimonialSlideContent = () => {
  return (
    <section className='w-full  mt-[72px] grid justify-between  lg:grid-cols-5'>
      <div className=' lg:col-span-3 px-6 sm:px-[72px] '>
        <img className='w-10 h-10' src={quote} alt='' />
        <h3 className='text-[40px] my-10 font-bold text-[#1D1E25]'>
          OMG! I cannot believe that I have got a brand new app for transferring
          money . It was super easy to send and receive. i love it soooo much!
        </h3>
        <h6 className='mb-2 text-2xl font-bold'> Sanchier Rek</h6>
        <p className='text-[#454C5D] text-sm'>CEO, Growth Lead</p>
      </div>
      <div className='mt-12 ml-auto lg:col-span-2 lg:mt-0'>
        <img className='h-56 ml-auto sm:h-96' src={testimonialImg} alt='' />
      </div>
    </section>
  )
}

export default TestimonialSlideContent
