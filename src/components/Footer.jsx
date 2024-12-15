import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';
// import logo from '../assets/logo.jpg'
import darklogo from '../assets/darklogo.jpg'
import { Link } from 'react-router-dom';
// import logo from '../assets/'

function Footer() {
  return (
    <>
    <footer className="bg-[#1f1e1e] text-gray-300 md:pt-12 pt-6 pb-4 px-4 sm:px-6 lg:px-8 border-t-[1px] border-blue-950">
      <div className="flex flex-wrap justify-between items-start md:gap-8 gap-5">
          <div className="rounded-lg p-2 -mt-4">
             <div className="sm:w-[200px] w-[300px]">
                 <img src={darklogo} alt="logo" className=" md:h-[65px] h-[50px] mb-4" />
                 <p className='text-neutral-300 md:text-sm text-xs leading-5'>
                 Edet Akpan Avenue, Uyo, Akwa Ibom State.
                Opening Hours: Monday - Friday (8am - 5pm)
                </p>
             </div>
          </div>

        <div className=''>
          <h2 className="text-orange-500 text-lg  font-semibold mb-4">Useful Links</h2>
            <div className="md:space-y-5 space-y-2 md:text-[15px] text-sm text-neutral-300">
              <Link to=""><p className='hover:underline mb-3'>Home</p></Link>
              <Link to=""><p className='hover:underline mb-3'>Contact</p></Link>
              <Link to=""><p className='hover:underline mb-1'>FAQs</p></Link>
            </div>
        </div>

        <div className="md:text-[15px] text-sm md:space-y-3 space-y-2 text-neutral-300">
          <h2 className="text-orange-500 text-lg font-semibold mb-4">Contact</h2>
          <div className='flex md:gap-3 gap-2 items-center justify-between hover:underline'>
            <FaEnvelope className='md:text-lg text-base'/>
            <p className='mt-[-4px]'><a href="mailto:academy.onelegit@gmail.com">academy.onelegit@gmail.com</a></p>
          </div>
         
          <div className='flex md:gap-3 gap-2 items-center hover:underline'>
            <FaPhone className='md:text-lg text-base'/>
            <p className='text-neutral-300'><a href="tel:+2348053338642">+2348053338642</a></p>
          </div>

          <div className="flex space-x-4 text-neutral-300">
                <FaFacebook className="md:w-6 md:h-6 w-5 h-5 hover:text-orange-500 hover:scale-[1.14]" />
                <FaInstagram className="md:w-6 md:h-6 w-5 h-5 hover:text-orange-500 hover:scale-[1.14]" />
                <FaTwitter className="md:w-6 md:h-6 w-5 h-5 hover:text-orange-500 hover:scale-[1.14]" />
              </div>

         
        </div>

        <div className=''>
          <h2 className="text-orange-500 text-lg font-semibold mb-4">Our Community</h2>
          <p className="mb-4 md:text-[15px] text-sm text-neutral-300">Get regular updates. </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email address..."
              className="rounded-l-md bg-gray-800 h-10 pl-3 outline-none md:w-64 w-56 border-gray-700 text-white"
            />
            <button type="submit" className="bg-orange-600 w-10 p-2 rounded-r-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 rotate-45"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <p className="text-[12px] text-[#8c89ae] md:text-[13px] mt-10 max-w-2xl">
        Copyright © {new Date().getFullYear()}
      </p>
    </footer>
    </>
  )
}

export default Footer