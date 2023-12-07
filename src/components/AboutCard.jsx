/* eslint-disable react/prop-types */
const AboutCard = ({ img, title, subtitle, bg }) => {
  return (
    <div className={`bg-[#${bg}] px-16 py-[72px]`}>
      <img src={img} className='w-24' alt='' />
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='text-base'>{subtitle}</p>
    </div>
  )
}

export default AboutCard
