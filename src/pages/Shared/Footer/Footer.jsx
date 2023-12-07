import { Link } from 'react-router-dom'
import appStore from '../../../assets/icons/AppStore.png'
import playStore from '../../../assets/icons/PlayStore.png'
import Logo from '../../../utils/Logo'
const Footer = () => {
  return (
    <footer className='bg-[#4759F9]'>
      {/* upper footer */}
      <div className='rounded-[32px] w-11/12 mx-auto -mt-12 z-10 top-4 bg-[#FEAE37] py-20 px-12 sm:flex sm:justify-between sm:items-center'>
        <div className='text-white'>
          <h3 className=' text-[40px] mb-2'>
            Download now! A great app for Sending money
          </h3>
          <p>
            Send your money to everywhere in the world in less than a minute!
            Download the app now.
          </p>
        </div>
        <div className='gap-2 sm:flex'>
          <img src={appStore} alt='app store' />
          <img src={playStore} alt='play store' />
        </div>
      </div>
      {/* lower footer */}
      <div>
        <Logo />
        <ul className='flex justify-between w-2/4 mx-auto my-10 text-white'>
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
        <hr className='w-11/12 mx-auto'></hr>
      </div>
    </footer>
  )
}

export default Footer
