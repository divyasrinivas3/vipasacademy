// import React from 'react';
// import { Code, Database, Cloud, Brain, BarChart3, Settings } from 'lucide-react';

// const Courses: React.FC = () => {
//   const courses = [
//     {
//       icon: <Code className="w-8 h-8" />,
//       title: 'Web Development',
//       description: 'Full-stack development with modern frameworks like React, Node.js, and MongoDB',
//       duration: '6 months',
//       level: 'Beginner to Advanced',
//       color: 'from-blue-500 to-purple-600'
//     },
//     {
//       icon: <Settings className="w-8 h-8" />,
//       title: 'SAP',
//       description: 'Enterprise resource planning with SAP modules including FICO, MM, and SD',
//       duration: '4 months',
//       level: 'Intermediate',
//       color: 'from-green-500 to-teal-600'
//     },
//     {
//       icon: <BarChart3 className="w-8 h-8" />,
//       title: 'Data Science',
//       description: 'Analytics, machine learning, and statistical analysis with Python and R',
//       duration: '8 months',
//       level: 'Intermediate',
//       color: 'from-orange-500 to-red-600'
//     },
//     {
//       icon: <Cloud className="w-8 h-8" />,
//       title: 'Cloud Computing',
//       description: 'AWS, Azure, and Google Cloud Platform with hands-on projects',
//       duration: '5 months',
//       level: 'Intermediate to Advanced',
//       color: 'from-cyan-500 to-blue-600'
//     },
//     {
//       icon: <Brain className="w-8 h-8" />,
//       title: 'AI/ML',
//       description: 'Artificial Intelligence and Machine Learning with TensorFlow and PyTorch',
//       duration: '10 months',
//       level: 'Advanced',
//       color: 'from-purple-500 to-pink-600'
//     },
//     {
//       icon: <Database className="w-8 h-8" />,
//       title: 'Database Management',
//       description: 'SQL, NoSQL, and database design with PostgreSQL, MongoDB, and Redis',
//       duration: '3 months',
//       level: 'Beginner to Intermediate',
//       color: 'from-indigo-500 to-blue-600'
//     },
//   ];

//   return (
//     <section id="courses" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16 animate-fade-in-up">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
//             Our Popular Courses
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Choose from our comprehensive range of courses designed to meet industry demands 
//             and accelerate your career growth
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {courses.map((course, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in-up group"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className={`bg-gradient-to-r ${course.color} p-6`}>
//                 <div className="text-white mb-4 group-hover:scale-110 transition-transform duration-200">
//                   {course.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
//                 <div className="flex items-center space-x-4 text-white/90 text-sm">
//                   <span>{course.duration}</span>
//                   <span>•</span>
//                   <span>{course.level}</span>
//                 </div>
//               </div>
              
//               <div className="p-6">
//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {course.description}
//                 </p>
                
//                 <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 group-hover:shadow-lg">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <p className="text-gray-600 mb-6">
//             Can't find what you're looking for? We offer customized training programs too!
//           </p>
//           <button className="bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors duration-200">
//             View All Courses
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Courses;