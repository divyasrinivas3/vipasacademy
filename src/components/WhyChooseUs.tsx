import React from 'react';
import { Users, BookOpen, Award, HeadphonesIcon } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-14 h-12" />,
      title: 'Expert Faculty',
      description: 'Learn directly from SAP-certified professionals and industry experts with 10+ years of real-world experience.',
      stats: '60+ Certified Instructors'
    },
    {
      icon: <BookOpen className="w-14 h-12" />,
      title: 'Practical Learning',
      description: 'Hands-on exposure with live projects, simulations, and case studies so you’re job-ready from day one.',
      stats: '120+ Real Projects'
    },
    {
      icon: <Award className="w-14 h-12" />,
      title: 'Career & Placement Support',  
      description: 'Dedicated career services with resume building, mock interviews, and placement drives.',
      stats: '96% Placement Success'
    },
    {
      icon: <HeadphonesIcon className="w-14 h-12" />,
      title: 'Industry-Aligned Curriculum',
      description: 'Courses updated monthly to reflect the latest SAP innovations, tools, and business needs.',
      stats: 'Always Future-Ready'
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Why Choose <span className='font-bold text-secondary-900'>Vipas Academy?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
            We provide more than training – we deliver a career-focused learning experience 
            that helps you succeed in the SAP & IT industry.
            
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-xl hover:shadow-blue-900 transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-secondary-900 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              <div className="text-gold-600 font-semibold text-sm">{feature.stats}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-900 to-secondary-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            Ready to Transform Your Career?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community of successful professionals and take the first step 
            towards your dream career today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white  text-primary-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200">
              Schedule Free Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-secondary-900 transition-all duration-200">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;