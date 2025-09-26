import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Venkata Subba Reddy',
      role: 'Full Stack Developer',
      course: 'Web Development',
      rating: 4,
      text: 'I enrolled in Full Stack Development and built projects using React & Node.js. The sessions were interactive, and the career guidance really helped me in job applications.',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Eshwar',
      role: 'SAP Consultant',
      course: 'SAP FICO',
      rating: 4,
      text: 'The SAP FICO course was very practical and easy to follow. Trainers explained real-time scenarios and guided me through certification. I now feel confident working on SAP projects.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Geetha ',
      role: 'SAP SD Consultant',
      course: 'SAP SD',
      rating: 4,
      text: 'SAP SD training was detailed with end-to-end process coverage. More practice tests would be useful, but overall the sessions gave me clarity and confidence.',
      
    },
    {
      name: 'Sadhana Gandham',
      role: 'SAP Consultant',
      course: 'Cloud Computing',
      rating: 5,
      text: 'The SAP HCM course was very detailed and easy to follow. The trainer explained payroll, time management, and organizational management with real-world examples. It really helped me in my HR career.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Kota Tribuvani',
      role: 'Data Analyst',
      course: 'Power BI',
      rating: 4,
      text:'I joined for Data Analytics with Power BI and SQL. The training was very practical and industry-oriented. I really liked how every module included assignments and case studies. Now I can confidently work with dashboards and reports.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Prabhath',
      role: 'SAP Consultant',
      course: 'SAP ABAP',
      rating: 4,
      text:'The ABAP course gave me strong fundamentals in programming and debugging. More practice exercises could be added, but overall the training was excellent and job-focused',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-6">
            Success Stories from Our Students
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates who have successfully transformed their careers and 
            are now working in top companies worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-primary-900 opacity-50" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;