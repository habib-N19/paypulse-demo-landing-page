/* eslint-disable react/prop-types */
const Logo = ({ color }) => {
  return (
    <div className='flex justify-between mx-auto w-fit '>
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
      <h2 className={` text-${color} text-[29px] font-bold`}>PayPulse</h2>
    </div>
  )
}

export default Logo
