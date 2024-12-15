import React from 'react'
import whotoenroll from '../assets/whotoenroll.svg'

function Section4() {
  return (
    <><br /><br />
       <section className='md:px-[4vw] px-[3vw] py-12'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 justify-between'>
          <div className='max-w-[300px]'>
            <h1 className='font-bold md:text-3xl text-2xl text-black mb-6 pl-2'>Who can enroll?</h1>
            <ul className='list-disc'>
                <li className='mb-4'>Graduates</li>
                <li className='mb-4'>Job Seekers</li>
                <li className='mb-4'>Those interested in travelling abroad</li>
                <li className='mb-4'>Tech enthusiast</li>
                <li className='mb-4'>Students</li>
                <li className='mb-4'>Working class - who wants to earn extra income</li>
                <li className='mb-4'>Business owners - who want to learn how to scale their business digitally</li>
            </ul>
          </div>
        <div>
          <img src={whotoenroll} alt="" />
        </div>

          <div className='w-fit pl-2'>
            <h1 className='font-bold md:text-3xl text-2xl text-black mb-6'>Why Us?</h1>
            <ul className='list-disc'>
                <li className='mb-4'>Easy Certification with CISCO</li>
                <li className='mb-4'>Conducive Learning Environment</li>
                <li className='mb-4'>Uninterrupted Power Supply</li>
                <li className='mb-4'>100% Practical Training</li>
                <li className='mb-4'>24/7 Free and Fast WiFi</li>
                <li className='mb-4'>Guaranteed Internship after Training</li>
                <li className='mb-4'>Lifetime Career Support</li>
                <li>100% Money Back Guarantee</li>
            </ul>
          </div>
        </div>
       </section>
    </>
  )
}

export default Section4