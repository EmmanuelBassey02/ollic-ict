import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
// import img6 from '../assets/img6.jpg'
// import img7 from '../assets/img7.jpg'
// import img8 from '../assets/img8.jpg'
// import img9 from '../assets/img9.jpg'
// import img10 from '../assets/img10.jpg'
// import img11 from '../assets/img11.jpg'
// import img12 from '../assets/img12.jpg'

function Section5() {
  return (
    <>
        {/* gallery */}
        <section className='py-10 md:px-[4vw] px-[3vw]'>
            <h1 className='font-bold md:text-3xl text-2xl text-black mb-6 w-fit m-auto'>Gallery</h1>
            <div className='grid gap-4 grid-cols-3 aspect-square'>
              <img src={img1} alt="" className=''/>
              <img src={img2} alt="" className=''/>
              <img src={img3} alt="" className=''/>
              <img src={img4} alt="" className=''/>
              <img src={img5} alt="" className=''/>
              {/* <img src={img6} alt="" className=''/>
              <img src={img7} alt="" className=''/>
              <img src={img8} alt="" className=''/>
              <img src={img9} alt="" className=''/>
              <img src={img10} alt="" className=''/>
              <img src={img11} alt="" className=''/>
              <img src={img12} alt="" className=''/> */}
                </div>
        </section>
    </>
  )
}

export default Section5