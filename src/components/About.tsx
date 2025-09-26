import React from "react";
import {
  Target,
  TrendingUp,
  Award,

} from "lucide-react";

const About: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Learn",
      description: "Comprehensive curriculum designed by industry experts",
      color: "text-primary-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Practice",
      description: "Continuous learning with practical, hands-on experience",
      color: "text-gold-500",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Achieve",
      description: "Industry-recognized certifications and career placement",
      color: "text-primary-600",
    },
  ];

 

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-black-900 mb-6">
            About Vipas Academy
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Vipas Academy, we believe in shaping careers through quality training, practical learning, and industry-ready skills. Our mission is to 
            bridge the gap between academic knowledge and real-world expertise, 
            empowering students and professionals to excel in their chosen career paths.
            </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`${feature.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-200`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-black leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Section */}
        
      </div>
    </section>
  );
};

export default About;




