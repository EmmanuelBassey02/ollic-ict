import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={course.image} alt={course.title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <p className="text-white text-sm font-semibold mb-2 bg-teal-600 w-fit rounded-[20px] px-4 p-1">{course.students} students</p>
        <h2 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h2>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <p className="text-gray-700 font-medium mb-4">{course.duration}</p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;