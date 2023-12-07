/* eslint-disable react/prop-types */
const SectionHeading = ({ title, subTitle }) => {
  return (
    <div className='w-8/12 mx-auto'>
      <h1 className='text-[56px] text-center mb-10 font-bold'>{title}</h1>
      <p className='text-lg text-center'>{subTitle}</p>
    </div>
  )
}

export default SectionHeading
