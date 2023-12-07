import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import TestimonialSlideContent from '../../../components/TestimonialSlideContent'
const TestimonialCarousel = () => {
  const swiperParams = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        {...swiperParams}
        className='mySwiper'
      >
        <SwiperSlide>
          <TestimonialSlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialSlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialSlideContent />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default TestimonialCarousel
