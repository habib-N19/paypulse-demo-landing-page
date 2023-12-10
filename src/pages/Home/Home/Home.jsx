import About from '../About/About'
import Benefits from '../Benefits/Benefits'
import Blogs from '../Blogs/Blogs'
import Cta from '../Cta/Cta'
import Faq from '../Faq/Faq'
import Features from '../Features/Features'
import HeroSection from '../HeroSection/HeroSection'
import Testimonial from '../Testimonial/Testimonial'

const Home = () => {
  return (
    <div className=''>
      <HeroSection />
      <About />
      <Features />
      <Benefits />
      <Cta />
      <Testimonial />
      <Faq />
      <Blogs />
    </div>
  )
}

export default Home
