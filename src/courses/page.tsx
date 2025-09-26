import React from 'react';
import CourseCard from '../components/CourseCard';
// List of courses with individual links
const courses = [
  { id: '1', title: 'SAP SD', category: 'SAP', price: '499', rating: 4.5, image: 'src/assets/SAP-SD.png', lessons: 35, duration: '40h', href: "/Sales&Distribution" },
  { id: '2', title: 'SAP MM', category: 'SAP', price: '499', rating: 4.3, image: 'src/assets/SAP MM.png', lessons: 32, duration: '38h', href: "/sap-mm" },
  { id: '3', title: 'SAP FICO', category: 'SAP', price: '499', rating: 4.4, image: 'src/assets/SAP-FICO.png', lessons: 34, duration: '39h', href: "/sap-fico" },
  { id: '4', title: 'SAP PS', category: 'SAP', price: '499', rating: 4.2, image: 'src/assets/SAP-PS.png', lessons: 30, duration: '35h', href: "/sap-ps" },
  { id: '5', title: 'SAP ABAP', category: 'SAP', price: '499', rating: 4.6, image: 'src/assets/SAP-ABAP.png', lessons: 40, duration: '45h', href: "/sap-abap" },
  { id: '6', title: 'SAP Fiori', category: 'SAP', price: '499', rating: 4.3, image: 'src/assets/SAP-fiori.png', lessons: 28, duration: '33h', href: "/sap-fiori" },
  { id: '7', title: 'SAP BTP', category: 'SAP', price: '499', rating: 4.1, image: 'src/assets/SAP-BTP.png', lessons: 25, duration: '30h', href: "/sap-btp" },
  { id: '8', title: 'SAP ECC', category: 'SAP', price: '499', rating: 4.0, image: 'src/assets/SAP-EC.png', lessons: 22, duration: '28h', href: "/sap-ec" },
  { id: '9', title: 'SF PMGM', category: 'SAP', price: '499', rating: 4.2, image: 'src/assets/sf-pmgm.jpg', lessons: 26, duration: '32h', href: "/SF-pmgm" },
  { id: '10', title: 'SF RCM/RMK', category: 'SAP', price: '499', rating: 4.1, image: '/images/sf-rcm.jpg', lessons: 24, duration: '30h', href: "/SF-rcm" },
    { id: '11', title: 'SF RMK', category: 'SAP', price: '499', rating: 4.1, image: '/images/sf-rmk.jpg', lessons: 24, duration: '30h', href: "/SF-rmk" },
  { id: '12', title: 'SF ONB', category: 'SAP', price: '499', rating: 4.3, image: '/images/sf-omb.jpg', lessons: 27, duration: '33h', href: "/SF-onb" },
    { id: '13', title: 'SF OFB', category: 'SAP', price: '499', rating: 4.3, image: '/images/sf-omb.jpg', lessons: 27, duration: '33h', href: "/SF-ofb" },

  { id: '14', title: 'Full Stack Development', category: 'Development', price: '599', rating: 4.7, image: '/images/fullstack.jpg', lessons: 50, duration: '60h', href: "fullstack" },
  { id: '15', title: 'Excel & Power BI', category: 'Analytics', price: '399', rating: 4.5, image: '/images/excel-bi.jpg', lessons: 20, duration: '25h', href: "/excel" },
  { id: '16', title: 'SAC', category: 'Analytics', price: '399', rating: 4.4, image: '/images/sac.jpg', lessons: 18, duration: '22h', href: "/sap-SAC" },
];

const CoursesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Courses</span>
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
      
    </section>
  );
};

export default CoursesSection;