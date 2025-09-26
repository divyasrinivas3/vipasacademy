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

function Sapfico() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const curriculum = [
    "Introduction to SAP & FICO",
    "Enterprise Structure & Basic Settings", 
    "General Ledger Accounting (FI-GL)",
    "Accounts Payable (FI-AP)",
    "Accounts Receivable (FI-AR)",
    "Asset Accounting (FI-AA)",
    "Controlling Basics (CO)",
    "Product Costing & Profitability Analysis (CO-PC/CO-PA)",
    "Integration with Other Modules",
    "SAP S/4HANA Finance Innovations",
    "Real time Scenarios & Projects"
  ];

  const courseFeatures = [
    { icon: Users, title: "Expert Mentors", desc: "Industry professionals with SAP experience" },
    { icon: Code, title: "Hands-on Practice", desc: "Real-world scenarios and projects" },
    { icon: Award, title: "Certification", desc: "Industry-recognized certification" },
    { icon: TrendingUp, title: "Career Support", desc: "Resume prep and mock interviews" }
  ];

  const careerRoles = [
    { title: "SAP FICO Consultant",  icon: Building },
    { title: "Financial Accountant / Analyst",  icon: TrendingUp },
    { title: "Cost / Management Accountant", icon: Award },
    { title: "SAP Finance Functional Analyst",  icon: Code },
    { title: "Business Analyst / ERP Finance Specialist", icon: Users }
  ];

  const projects = [
    "End-to-End Procure-to-Pay (P2P) Cycle",
    "Order-to-Cash (OTC) Cycle", 
    "Asset Accounting Project",
    "Cost Center & Profitability Analysis"
  ];

 

  const faqs = [
    {
      question: "Who can join this course?",
      answer: "Anyone interested in finance, accounting, or ERP systems can enroll. It’s ideal for fresh graduates, accountants, finance professionals, or those seeking a career in SAP."
    },
    {
      question: "Do I need prior SAP or accounting knowledge?",
      answer: "Basic accounting knowledge is helpful but not mandatory. No prior SAP experience is required."
    },
    {
      question: "What career opportunities will I get after completing SAP FICO training?",
      answer: "You can work as an SAP FICO Consultant, Financial Accountant, Cost/Management Accountant, or SAP Finance Functional Analyst in various industries."
    },
    {
      question: "Will I get hands-on practical training?",
      answer: "Yes! Training includes real-time scenarios like Procure-to-Pay, Order-to-Cash, Asset Accounting, Cost Center Accounting, and Financial Closing in a sandbox SAP system."

    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-5leading-tight p-10">
              SAP FICO – Financial Accounting & Controlling 
              <span className="block text-blue-200 md-text-3xl mb-0 p-6">Certification Course</span>
            </h1>
            <p className="text-xl md:text-1xl mb-8 text-white max-w-6xl mx-auto">
             Become proficient in SAP Financial Accounting and Controlling to streamline finance, procurement, and management processes in ERP systems.
              Gain hands-on experience with real-time scenarios and S/4HANA innovations.
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
              SAP SD is a critical module in SAP ERP systems that manages the entire sales and distribution process. 
              With growing demand for ERP expertise in supply chain and sales operations, SAP SD professionals 
              command high salaries and excellent career growth opportunities.
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
            <p className="text-lg text-gray-700">Comprehensive curriculum covering all aspects of SAP SD</p>
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
            <p className="text-lg text-gray-300">High-demand roles with competitive salaries await SAP SD professionals</p>
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
            <p className="text-lg text-gray-700">Real-world projects to strengthen your SAP SD expertise</p>
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

      {/* Course Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Course Structure</h2>
            <p className="text-xl text-black">
              12-week comprehensive learning path from beginner to job-ready developer
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-primary-900"></div>
            
            <div className="space-y-12">
              {[
                {
                  weeks: "Module-1",
                  title: "Introduction & Enterprise Structure",
                  topics: ["Overview of SAP ERP & S/4HANA Finance", "Introduction to SAP FI & CO modules", "Integration with other modules (MM, SD, PP, HCM)", "Enterprise structure in FICO: Company, Company Code, Business Area, Controlling Area","Chart of Accounts, Fiscal Year Variant, Posting Periods, Document Types "]
                },
                {
                  weeks: "Module-2",
                  title: "Financial Accounting (FI)",
                  topics: ["General Ledger (GL) Accounting ", "Accounts Payable (AP)", "Accounts Receivable (AR)","Asset Accounting (AA)"]
                },
                {
                  weeks: "Module-3",
                  title: "Controlling (CO) Basics & Cost Management",
                  topics: ["Cost elements, cost centers, internal orders, profit centers","Statistical key figures & cost allocations (distribution, assessment)","Product Costing","Profitability Analysis (CO-PA)" ]
                },
                {
                  weeks: "Module-4",
                  title: "Integration & Advanced FICO Concepts",
                  topics: ["FI–MM, FI–SD, FI–PP integration processes", "End-to-End Procure-to-Pay (P2P) & Order-to-Cash (OTC) cycles", "Real-time reporting & reconciliation","SAP S/4HANA Finance"]
                },
                {
                  weeks: "Module-5",
                  title: "Real-Time Scenarios & Projects",
                  topics: ["End-to-End financial closing & reporting project", "Procure-to-Pay cycle simulation in sandbox","Order-to-Cash cycle simulation in sandbox","Asset lifecycle management project","Capstone Project: Configure complete financial processes & generate reports"]
                }
              ].map((phase, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:w-5/12">
                    <div className="bg-white p-6 rounded-xl shadow-xl ml-16 md:ml-0">
                      <div className="text-gray-900 font-bold text-sm mb-2">{phase.weeks}</div>
                      <h3 className="text-xl font-bold text-primary-900 mb-4">{phase.title}</h3>
                      <ul className="space-y-2">
                        {phase.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="text-secondary-900 flex-shrink-0" size={16} />
                            <span className="text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary-900 border-4 border-white rounded-full"></div>
                  <div className="flex-1 md:w-5/12"></div>
                </div>
              ))}
            </div>
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
            Start Your Journey as a SAP SD Expert Today!
          </h2>
          <p className="text-xl mb-8 text-white">
            Join thousands of professionals who have transformed their careers with our SAP SD certification
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

export default Sapfico;