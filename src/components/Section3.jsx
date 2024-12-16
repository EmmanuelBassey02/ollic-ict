import React from 'react'
import about from '../assets/about.svg'

function Section3() {
  return (
    <>
      <h1 className='font-bold md:text-5xl text-2xl w-fit m-auto text-teal-900 md:mb-10 sm:mb-5 mb-2 py-10'>Who We Are @ OLLIC</h1>
      <div className='md:px-[4vw] px-[3vw] grid md:grid-cols-2 grid-cols-1 gap-10 justify-center items-center'>
        <img src={about} alt="" className='h-[450px] w-[450px] rounded-[50%] m-auto'/>
        <div className='max-w-lg h-fit p-2  w-fit m-auto font-[500]'>
          <p className='text-black md:text-base text-sm mb-6'>
          At Ollic ICT, we aim to empower people of different backgrounds with premium tech skills for financial independence.
          </p>
          <p className='text-black md:text-base text-sm mb-6'>
          Our Courses are designed to make our students tech experts and the best fit in start ups, silicon valley companies, fintech companies and organizations
          </p>
          <p className='text-black md:text-base text-sm mb-6'>
          We coach and empower our students with the practical experience and strategies needed to start earning big after their training.
          </p>
          <p className='text-black md:text-base text-sm mb-6'>
          We have a team of industry experts and passionate instructors.
          </p>
          <p className='text-black md:text-base text-sm mb-6'>
          Join us at Ollic ICT where knowledge meets opportunity, and let us embark you on a journey of growth and financial success.
          </p>
        </div>
      </div>
    </>
  )
}

export default Section3