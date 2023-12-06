import { Link } from 'react-router-dom'

const Nav = () => {
  const navItems = (
    <>
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
    </>
  )
  return (
    <div className='justify-between w-11/12 mx-auto navbar'>
      <div className='justify-between w-full navbar-center md:navbar-start md:w-fit'>
        <svg
          className='mr-3'
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='Group'>
            <circle
              id='Ellipse'
              cx='23.7568'
              cy='23.7568'
              r='23.7568'
              fill='#FEAE37'
            />
            <path
              id='v'
              d='M26.7746 23.7334C26.7746 20.2553 27.6604 17.7399 29.4319 16.1871C31.25 14.6344 34.1637 13.858 38.1729 13.858H39.5947V22.662C39.5947 29.8822 37.528 34.5094 33.3945 36.5435C31.9493 37.2577 30.2166 37.6149 28.1965 37.6149H26.7746V23.7334ZM21.2736 37.6149C17.3732 37.6149 14.4673 36.2562 12.5559 33.5389C10.7844 31.0235 9.89867 27.3979 9.89867 22.662V13.858H11.3205C15.3297 13.858 18.2434 14.6344 20.0615 16.1871C21.833 17.7399 22.7188 20.2553 22.7188 23.7334V37.6149H21.2736Z'
              fill='white'
            />
          </g>
        </svg>
        <Link to='/' className='text-[29px] font-bold '>
          PayPulse
        </Link>
        <div className='dropdown'>
          <div
            tabIndex={0}
            role='button'
            className='mr-auto btn btn-ghost md:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box '
          >
            {navItems}
          </ul>
        </div>
      </div>
      <div className='hidden navbar-end lg:flex'>
        <ul className='px-1 font-semibold menu menu-horizontal'>{navItems}</ul>
        <a className='primary_btn'>Download App</a>
      </div>
      {/* <div className='hidden border navbar-end w-fit md:block'>
      </div> */}
    </div>
  )
}

export default Nav
