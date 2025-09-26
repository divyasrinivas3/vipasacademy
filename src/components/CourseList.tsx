import React from 'react';
import CourseCard from './CourseCard';

// List of courses with individual links
const courses = [
  { 
    id: '1', 
    title: 'SAP SD', 
    category: 'SAP', 
    price: '499', 
    rating: 4.5, 
    image: 'src/assets/SAP-SD.png', 
    lessons: 35, 
    duration: '40h', 
    href: "/Sales&Distribution" 
  },
  { 
    id: '2', 
    title: 'SAP MM', 
    category: 'SAP', 
    price: '499', 
    rating: 4.3, 
    image:'src/assets/SAP MM.png',
    lessons: 32, 
    duration: '38h', 
    href: "/sap-mm" 
  },
  { 
    id: '3', 
    title: 'SAP FICO', 
    category: 'SAP', 
    price: '499', 
    rating: 4.4, 
    image: 'src/assets/SAP-FICO.png', 
    lessons: 34, 
    duration: '39h', 
    href: "/sap-fico" 
  },
 
];

const CoursesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our 
            <span className=" text-secondary-900"> Courses</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Master the skills that top companies are looking for with our industry-focused courses designed by experts.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard 
              key={course.id}
              id={course.id}
              title={course.title}
              category={course.category}
              price={course.price}
              rating={course.rating}
              image={course.image}
              lessons={course.lessons}
              duration={course.duration}
              href={course.href}
            />
          ))}
        </div>
      </div>

      {/* View All Courses Button */}
      <div className="text-center mt-16">
        <button 
          onClick={() => window.location.href = '/courses'}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-secondary-900 to-secondary-800 text-white font-semibold rounded-full hover:bg-primary-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span className="mr-2">View All Courses</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CoursesSection;