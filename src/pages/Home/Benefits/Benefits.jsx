import SectionHeading from '../../../utils/SectionHeading'
import icon1 from '../../../assets/icons/icon-box1.png'
import icon2 from '../../../assets/icons/icon-box2.png'
import icon3 from '../../../assets/icons/icon-box3.png'
import icon4 from '../../../assets/icons/icon-box4.png'
const Benefits = () => {
  return (
    <section className='bg-[#F4F5FF] lg:py-28 py-14 px-6 sm:px-[72px] lg:px-20 '>
      <SectionHeading
        title='Benefits & advantages'
        subTitle="We make it easy for users to use our platform, that's why we provide this benefit."
      />
      {/* cards
       */}
      <div className='grid w-11/12 mx-auto grid-cols-1 gap-5 pt-[72px] sm:grid-cols-2 lg:grid-cols-4'>
        {/* card1 */}
        <div className='rounded-lg p-8 bg-white text-[#4759F9]'>
          <img className='w-16 h-16' src={icon1} alt='' />
          <h6 className='mt-6 mb-4 text-2xl font-bold'>Cloud Drive</h6>
          <p className='text-sm'>
            A safe electronic funds transfer (EFT) is a fast and convenient way
            to send and receive money online.
          </p>
        </div>
        {/* card2 */}
        <div className='rounded-lg p-8 bg-white text-[#4759F9]'>
          <img className='w-16 h-16' src={icon2} alt='' />
          <h6 className='mt-6 mb-4 text-2xl font-bold'>Payment Overview</h6>
          <p className='text-sm'>
            In the Payment Overview window, you can query a payment & review
            status and its related high-level information.
          </p>
        </div>
        {/* card 3 */}
        <div className='rounded-lg p-8 bg-white text-[#4759F9]'>
          <img className='w-16 h-16' src={icon3} alt='' />
          <h6 className='mt-6 mb-4 text-2xl font-bold'>Expertise Built</h6>
          <p className='text-sm'>
            A process to build expertise. Expertise is the ability to call on a
            set of skills and knowledge in a given field
          </p>
        </div>
        {/* card 4 */}
        <div className='rounded-lg p-8 bg-white text-[#4759F9]'>
          <img className='w-16 h-16' src={icon4} alt='' />
          <h6 className='mt-6 mb-4 text-2xl font-bold'>Convenient & Easy</h6>
          <p className='text-sm'>
            Suitable or agreeable to the needs or purpose; well-suited with
            respect to facility or ease in use
          </p>
        </div>
      </div>
    </section>
  )
}

export default Benefits
