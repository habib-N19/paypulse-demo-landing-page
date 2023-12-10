import { Link } from 'react-router-dom'
import appStore from '../../../assets/icons/AppStore.png'
import playStore from '../../../assets/icons/PlayStore.png'
import Logo from '../../../utils/Logo'
import fbIcon from '../../../assets/icons/icon-facebook.png'
import instaIcon from '../../../assets/icons/icon-instagram.png'
import twitterIcon from '../../../assets/icons/icon-twitter.png'
const Footer = () => {
  return (
    <footer className='relative bg-[#4759F9]'>
      {/* upper footer */}
      <div className='rounded-[32px] sm:w-11/12 sm:mx-auto z-10  -top-32 left-0 right-0 absolute bg-[#FEAE37] py-12 lg:py-20 px-8 lg:px-12 flex flex-col sm:flex-row justify-between items-center'>
        <div className='text-white sm:w-3/5'>
          <h3 className='text-3xl md:text-[40px] mb-2'>
            Download now! A great app for Sending money
          </h3>
          <p>
            Send your money to everywhere in the world in less than a minute!
            Download the app now.
          </p>
        </div>
        <div className='items-center mt-10 space-y-6 sm:mt-0 sm:ml-auto sm:justify-end sm:w-2/5 lg:space-y-0 lg:flex'>
          <img src={appStore} className='w-48 h-16 ml-auto' alt='app store' />
          <img src={playStore} className='w-48 h-16 ml-auto' alt='play store' />
        </div>
      </div>
      {/* lower footer */}
      <div className='pt-[500px] sm:pt-56'>
        <Logo color='white' />
        <ul className='flex flex-wrap justify-center gap-6 px-6 pt-10 mx-auto text-white md:w-2/4'>
          <li>
            <Link to='/'>Features</Link>
          </li>
          <li>
            {' '}
            <Link to='/'>Benefits</Link>
          </li>
          <li>
            {' '}
            <Link to='/'>Testimonial</Link>
          </li>
          <li>
            {' '}
            <Link to='/'>FAQ</Link>
          </li>
          <li>
            {' '}
            <Link to='/'>News</Link>
          </li>
        </ul>
        {/* <hr className='w-11/12 mx-auto'></hr> */}
        <div className='w-11/12 h-5 mx-auto mt-10 mb-8 border-t'></div>
      </div>
      <div className='flex flex-col items-center justify-between w-11/12 pb-8 mx-auto mt-8 text-center text-white sm:mt-0 sm:flex-row'>
        <p className='order-2 my-5 text-sm sm:my-0 sm:order-1'>
          © 2023 PayPulse inc. All right reserved
        </p>
        <ul className='flex order-1 gap-8 mx-auto text-sm0 w-fit sm:order-2'>
          <li>
            <a href='#'> Privacy Policy</a>
          </li>
          <li>
            <a href='#'> Terms & Conditions</a>
          </li>
        </ul>
        <div className='flex order-3 gap-6 mx-auto w-fit'>
          <img src={fbIcon} alt='' />
          <img src={instaIcon} alt='' />
          <img src={twitterIcon} alt='' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
