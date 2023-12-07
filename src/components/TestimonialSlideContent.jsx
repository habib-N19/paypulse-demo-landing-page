import quote from '../assets/icons/quote.png'
import testimonialImg from '../assets/icons/testimonial-img.png'
const TestimonialSlideContent = () => {
  return (
    <section className='col-span-1 mt-[72px] lg:grid lg:grid-cols-2'>
      <div className='col-span-1'>
        <img src={quote} alt='' />
        <h3 className='text-[40px] my-10 font-bold text-[#1D1E25]'>
          OMG! I cannot believe that I have got a brand new app for transferring
          money . It was super easy to send and receive. i love it soooo much!
        </h3>
        <h6 className='mb-2 text-2xl font-bold'> Sanchier Rek</h6>
        <p className='text-[#454C5D] text-sm'>CEO, Growth Lead</p>
      </div>
      <div className='col-span-1 ml-auto'>
        <img className='ml-auto' src={testimonialImg} alt='' />
      </div>
    </section>
  )
}

export default TestimonialSlideContent
