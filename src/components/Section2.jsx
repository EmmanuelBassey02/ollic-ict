
import React from 'react';
import backend from '../assets/backend.jpg'
import frontend from '../assets/frontend.svg'
import fullstack from '../assets/fullstack.jpg'
import mobile from '../assets/mobile.jpg'


function Section2() {
  const courses = [
    {
      title: 'Frontend Engineering',
      description: 'Become a frontend engineer amd build seamless user interface and user experience logic.',
      duration: '4 Months',
      students: '120+',
      image: frontend,
    },
    {
      title: 'Backend Engineering',
      description: 'Build powerful web applications using our tailored backend engineering course outline.',
      duration: '4 Months',
      students: '100+',
      image: backend,
    },
    {
      title: 'Full Stack Web Development',
      description: 'Become a FullStack web developer Maestro with building fully functional web apps.',
      duration: '6 Months',
      students: '50+',
      image: fullstack,
    },
    {
      title: 'Mobile App Development',
      description: 'Build Robust and highly functional apps for iOS and Android using Flutter or React Native.',
      duration: '5 Months',
      students: '90+',
      image: mobile,
    },

    {
      title: 'Python Development',
      description: 'Everything can be done using python - Web, Mobile, AI, Data! Get started Today!',
      duration: '5 Months',
      students: '80+',
      image: mobile,
    },
  ];

  return (
    <div className="bg-neutral-100 py-10 md:px-[4vw] px-[3vw]">
      <div className="text-center mb-8">
        <h1 className="md:text-5xl text-2xl font-bold text-teal-900 mb-6">Our Courses</h1>
        <p className="text-gray-700 mt-2 mb-16 max-w-2xl m-auto text-lg font-[500]">
          We provide comprehensive training in computer programming, equipping individuals with a solid foundation in
          software engineering to position them as sought-after professionals in the tech industry.
        </p>
      </div>

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-3 md:gap-6 gap-4 w-full">
        {courses.map((course, index) => (
          <div key={index} className="bg-white m rounded-lg shadow m-auto  overflow-hidden border border-orange-600 max-w-[350px]">
            <img src={course.image} alt={course.title} className="h-40 w-full object-cover" />
            <div className="p-2">
              <p className="text-white text-sm font-semibold mb-2 bg-teal-600 w-fit rounded-[20px] px-4 p-1">
                {course.students} students
              </p>
              <h2 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4 md:text-sm">{course.description}</p>
              <p className="text-gray-700 font-medium mb-4">{course.duration}</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section2;
