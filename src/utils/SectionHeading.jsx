/* eslint-disable react/prop-types */
const SectionHeading = ({ title, subTitle }) => {
  return (
    <div className='mx-auto md:w-8/12'>
      <h1 className='text-[40px] sm:text-[56px] text-center mb-10 font-bold'>
        {title}
      </h1>
      <p className='text-lg text-center'>{subTitle}</p>
    </div>
  )
}

export default SectionHeading
