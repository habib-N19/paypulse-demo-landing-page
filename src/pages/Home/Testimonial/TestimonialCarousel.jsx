import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import TestimonialSlideContent from '../../../components/TestimonialSlideContent'
import './pagination.css'
const TestimonialCarousel = () => {
  const swiperParams = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }
  return (
    <div className='relative'>
      <Swiper
        loop={true}
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
      <div className='absolute swiper-pagination'></div>
    </div>
  )
}

export default TestimonialCarousel
