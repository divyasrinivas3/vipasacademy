import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <section id="home" className="relative pt-16 bg-gradient-to-br from-primary-50 to-gold-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6">
              Shape{' '}
              <span className="text-Primary-800 gap-4" >What's Next</span>
              {' '}
              <span className="text-primary-900">with Us</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We don’t just teach tools we empower you with skills, confidence, and 
              support to shape your future in technology and business.
              
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection('/fullstack')}
                className="bg-primary-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary-900 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Explore Courses
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-secondary-900 text-secondary-900 px-8 py-4 rounded-lg text-lg font-semibold hover:border-transparent hover:bg-secondary-900 hover:text-white transform hover:scale-105 transition-all duration-200"
              >
                Join Now
              </button>
            </div>

           
          </div>

          <div className="relative animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-5">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Students learning"
                className="w-full h-90 object-cover rounded-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white bg-primary-800 p-4 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;