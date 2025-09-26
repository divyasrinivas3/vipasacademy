import  { useState } from 'react';
import { 
  CheckCircle, 
  Users, 
  Clock, 
  Monitor, 
  Award, 
  TrendingUp, 
  Code, 
  ChevronDown, 
  ChevronRight,
  Download,
  Play,
  Building,
 
} from 'lucide-react';

function BusinessApplication() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const curriculum = [
    "Basics of SAP & ABAP",
    "ABAP Dictionary & Data Modeling", 
    "ABAP Programming Fundamentals",
    "Reporting (Classical, Interactive, ALV)",
    "Debugging & Tools",
    "Modularization & Reuse",
    "File Handling & Archiving",
    "Data Migration & Interfaces",
    "Enhancements & Modifications & Exits",
    "Forms (SmartForms & Adobe Forms)",
    "Transport Organizer & Version Management",
    "Performance Tools & Optimization",
    "Cross-Application Technologies",
    "Introduction to HANA & ABAP on HANA",
    "Modern ABAP (7.4 / 7.5) & New Syntax",
    "CDS Views & Access Control",
    "ABAP Managed Database Procedures (AMDP)",
    "OData & SAP Gateway"
  ]

  const courseFeatures = [
    { icon: Users, title: "Expert Mentors", desc: "Industry professionals with SAP experience" },
    { icon: Code, title: "Hands-on Practice", desc: "Real-world scenarios and projects" },
    { icon: Award, title: "Certification", desc: "Industry-recognized certification" },
    { icon: TrendingUp, title: "Career Support", desc: "Resume prep and mock interviews" }
  ];

  const careerRoles = [
    { title: "SAP Consultant",  icon: Building },
    { title: "SAP ABAP Developer",  icon: TrendingUp },
    { title: "SAP ABAP Workflow Consultant", icon: Award },
    { title: "SAP Technical Lead / Architect",  icon: Code },
    { title: "SAP S/4HANA PS Specialist", icon: Users }
  ];

  const projects = [
    "Custom Reports & ALV Grids",
    "Forms & SmartForms/Adobe Forms", 
    "Data Interfaces & BAPIs",
    "Workflow Automation"
  ];

 

  const faqs = [
    {
      question: "What are the career benefits of learning ABAP?",
      answer: "ABAP opens roles like ABAP Developer, Workflow Consultant, Fiori/UI5 Developer, and Technical Lead. Skilled ABAP professionals are highly sought after for both ECC and S/4HANA implementations globally."
    },
    {
      question: "Do I need prior programming knowledge to learn ABAP?",
      answer: "No prior SAP experience is required. Basic knowledge of programming concepts (variables, loops, conditional statements) helps, but our course is designed to teach ABAP from scratch."
    },
    {
      question: "What kind of projects will I work on during the course?",
      answer: "You will build projects such as custom reports (ALV), SmartForms/Adobe Forms, data interfaces (BAPIs), workflow automation, and Fiori/UI5 applications for real-world SAP scenarios."
    },
    {
      question: "Can ABAP skills be applied to SAP S/4HANA?",
      answer: "Yes. While traditional ABAP works in ECC systems, modern ABAP skills—including CDS views, AMDP, and Fiori/UI5 development—are fully applicable in S/4HANA environments."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight p-10">
              SAP Advanced Business Application Programming 
              <span className="block text-blue-200">Certification Course</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto">
                 Master SAP ABAP – Develop Custom Solutions and Real-Time Applications in SAP.        
                     </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-secondary-900 hover:bg-transparent border-white hover:border-2 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Enroll Now
              </button>
              <button className="border-2 border-blue-300 hover:bg-primary-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download Syllabus
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-6">
              <div className="bg-white p-6 rounded-lg backdrop-blur-sm">
                <Clock className="w-8 h-8 text-primary-900 mx-auto mb-2" />
                <h3 className="font-semibold mb-1 text-primary-900">Duration</h3>
                <p className=" text-primary-900 ">6 Months</p>
              </div>
              <div className="bg-white p-6 rounded-lg backdrop-blur-sm">
                <Monitor className="w-8 h-8 text-primary-900  mx-auto mb-2" />
                <h3 className="font-semibold mb-1 text-primary-900">Mode</h3>
                <p className="text-primary-900 ">Online/Offline</p>
              </div>
              <div className="bg-white p-6 rounded-lg backdrop-blur-sm">
                <Award className="w-8 h-8 text-primary-900 mx-auto mb-2" />
                <h3 className="font-semibold mb-1 text-primary-900 ">Certification</h3>
                <p className="text-primary-900 ">Industry Recognized</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Course Overview</h2>
            <p className="text-lg text-gray-700 max-w-5xl mx-auto">
                The SAP ABAP course teaches you how to design, develop, and customize SAP applications using ABAP programming.
                Learn to create reports, forms, interfaces, workflows, and Fiori/UI5 applications with hands-on exercises.
                Gain practical experience through real-time projects to become job-ready for SAP technical roles.
                
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-lg transition-shadow">
                <feature.icon className="w-10 h-10 text-primary-900 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-primary-900">{feature.title}</h3>
                <p className="text-gray-900">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
            <p className="text-lg text-gray-700">Comprehensive curriculum covering all aspects of SAP ABAP</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {curriculum.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-primary-900  rounded-lg hover:bg-secondary-900 transition-colors">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Career Opportunities</h2>
            <p className="text-lg text-gray-300">High-demand roles with competitive salaries await SAP ABAP professionals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerRoles.map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-lg transition-colors  ">
                <role.icon className="w-10 h-10 text-primary-900 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-primary-900">{role.title}</h3>
                <div className="flex items-center gap-2 text-secondary-900">        
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Projects You Will Build</h2>
            <p className="text-lg text-gray-700">Real-world projects to strengthen your SAP ABAP expertise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="bg-blue-50 border-l-4 border-primary-900 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-primary-900 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{project}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-900">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary-800 to-secondary-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Journey as a SAP ABAP Expert Today!
          </h2>
          <p className="text-xl mb-8 text-white">
            Join thousands of professionals who have transformed their careers with our SAP ABAP certification
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-900 hover:border-transparent px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Enroll Now
            </button>
            <button className="border-2 border-white hover:bg-primary-900 bg-white text-primary-900 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
                Request Demo
              </button>
          </div>
          
       
        </div>
      </section>

    </div>
  );
}

export default  BusinessApplication;