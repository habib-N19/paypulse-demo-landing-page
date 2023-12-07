import SectionHeading from '../../../utils/SectionHeading'
import blogImg1 from '../../../assets/images/blog-card-image-1.png'
import blogImg2 from '../../../assets/images/blog-card-image-2.png'
const Blogs = () => {
  return (
    <section className='pb-32'>
      <SectionHeading
        subTitle="We make it easy for users to use our platform, that's why we provide this benefit."
        title='What does the Media 
says about us!'
      />
      <div className='mt-[72px] flex gap-5 '>
        {/* blog cards */}
        <div className='p-8 shadow-xl rounded-[32px] card bg-base-100'>
          <figure className=' rounded-[32px] mb-8'>
            <img
              src={blogImg1}
              alt='blog image'
              className='w-full rounded-xl'
            />
          </figure>
          <div className=' card-body'>
            <h2 className='mb-6 text-3xl font-bold '>
              Undoubtedly, Best App for transfer money to anywhere -{' '}
              <span className='text-[#FEAE37]'>The New York times</span>
            </h2>
            <p>
              This app is only available in the US International payments
              transactions to and from different countries....{' '}
              <span className='text-[#4759F9]'>Read More</span>
            </p>
          </div>
        </div>
        <div className='p-8 shadow-xl rounded-[32px] card bg-base-100'>
          <figure className=' rounded-[32px] mb-8'>
            <img
              src={blogImg2}
              alt='blog image'
              className='w-full rounded-xl'
            />
          </figure>
          <div className=' card-body'>
            <h2 className='mb-6 text-3xl font-bold '>
              This app is very fast and secure to send money easily -
              <span className='text-[#FEAE37]'>The Golden Hour</span>
            </h2>
            <p>
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
