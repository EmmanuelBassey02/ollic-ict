import React from 'react'
import hero from '../assets/hero.png'
import { Link } from 'react-router-dom'

function Section1() {
  return (
    <>
      <main className="md:px-[4vw] px-[3vw] py-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="">
              <h2 className="text-base text-gray-800 font-bold bg-gradient-to-r from-orange-400 via-neutral-100 to-neutral-200 border border-orange-600 text-center rounded-[15px] py-[6px] max-w-[300px] mb-10">Your Path to financial stability</h2>
              <h1 className="text-3xl md:text-[42px] font-bold text-gray-900 lg:leading-[56px] leading-[44px]">
                Become a <span className='bg-orange-400 px-3 p-[1px] rounded-[10px]'>CISCO</span> certified <span className='border-b-[4px] border-teal-800'>Software Engineer</span>
              </h1><br />
              <p className="md:text-2xl text-gray-900 font-[600]">and qualify for well-paying remote jobs</p><br />
              <p className="text-gray-900 leading-relaxed">
                With our hands-on training, personalized career coaching, and a network of industry connections, we'll
                have you ready to launch your Tech career in just 6 months
              </p>
              <Link to="https://wa.link/wj8kss">
               <button className="bg-orange-500 mt-5 hover:bg-orange-600 text-white px-8 py-2 text-lg rounded-md transition duration-300">
                Enroll Now
               </button>
              </Link>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600">10+</div>
                <p className="text-sm text-gray-600 mt-2">Professional Courses to choose from</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500">50+</div>
                <p className="text-sm text-gray-600 mt-2">Students trained</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600">10+</div>
                <p className="text-sm text-gray-600 mt-2">Professional Trainers</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-full bg-orange-500 rounded-full opacity-20"></div>
            <div className="relative">
              <img
                src={hero}
                alt="Student with laptop"
                className="w-full h-auto relative z-10"
              />
              {/* Decorative Elements */}
              {/* <div className="absolute top-0 right-0 z-20 animate-bounce">
                <img src="/placeholder.svg" alt="Rocket icon" className="w-20 h-20" />
              </div>
              <div className="absolute bottom-0 right-0 z-20">
                <img src="/placeholder.svg" alt="Trophy icon" className="w-24 h-24" />
              </div>
              <div className="absolute top-10 left-0 w-16 h-16 bg-purple-500 rounded-full opacity-60"></div>
              <div className="absolute bottom-20 right-20 w-12 h-12 bg-blue-500 rounded-full opacity-60"></div> */}
            </div>
          </div>
        </div>
      </main>  
    </>
  )
}

export default Section1