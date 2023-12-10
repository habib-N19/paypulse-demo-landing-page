import SectionHeading from '../../../utils/SectionHeading'
import blogImg1 from '../../../assets/images/blog-card-image-1.png'
import blogImg2 from '../../../assets/images/blog-card-image-2.png'
const Blogs = () => {
  return (
    <section className='px-6 lg:py-28 sm:py-[72px] py-14 pb-44 sm:px-[72px] lg:px-20 lg:pb-48 sm:pb-40 '>
      <SectionHeading
        subTitle="We make it easy for users to use our platform, that's why we provide this benefit."
        title='What does the Media 
says about us!'
      />
      <div className='mt-[72px]  md:flex gap-5 '>
        {/* blog cards */}
        <div className='p-4 sm:p-8 shadow-xl rounded-[32px] card bg-base-100'>
          <figure className=' rounded-[32px] mb-8'>
            <img
              src={blogImg1}
              alt='blog image'
              className='w-full rounded-xl'
            />
          </figure>
          <div className='p-0 card-body'>
            <h2 className='mb-6 text-3xl font-bold sm:text-3xl '>
              Undoubtedly, Best App for transfer money to anywhere{' '}
              <span className='text-[#FEAE37]'> - The New York times</span>
            </h2>
            <p className='text-base'>
              This app is only available in the US International payments
              transactions to and from different countries....{' '}
              <span className='text-[#4759F9]'>Read More</span>
            </p>
          </div>
        </div>
        <div className='p-4 sm:p-8 mt-5 md:mt-0 shadow-xl rounded-[32px] card bg-base-100'>
          <figure className=' rounded-[32px] mb-8'>
            <img
              src={blogImg2}
              alt='blog image'
              className='w-full rounded-xl'
            />
          </figure>
          <div className='p-0 card-body'>
            <h2 className='mb-6 text-3xl font-bold sm:text-3xl '>
              This app is very fast and secure to send money easily
              <span className='text-[#FEAE37]'> - The Golden Hour</span>
            </h2>
            <p className='text-base'>
              This app is only available in the US International payments
              transactions to and from different countries....{' '}
              <span className='text-[#4759F9]'>Read More</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs
