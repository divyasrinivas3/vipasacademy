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

function ProjectSystems() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const curriculum = [
    "Introduction to Project Systems",
    "Organizational Structure in SAP PS", 
    "Work Breakdown Structure (WBS)",
    "Networks & Activities",
    "Project Planning",
    "Project Execution & Monitoring",
    "Project Procurement & Material Management",
    "Project Billing & Revenue",
    "Integration with Other SAP Modules",
    "Advanced Topics",
    "SAP PS in S/4HANA",
    "Real-Time Scenarios & Project",
  ]

  const courseFeatures = [
    { icon: Users, title: "Expert Mentors", desc: "Industry professionals with SAP experience" },
    { icon: Code, title: "Hands-on Practice", desc: "Real-world scenarios and projects" },
    { icon: Award, title: "Certification", desc: "Industry-recognized certification" },
    { icon: TrendingUp, title: "Career Support", desc: "Resume prep and mock interviews" }
  ];

  const careerRoles = [
    { title: "SAP Consultant",  icon: Building },
    { title: "Project Analyst",  icon: TrendingUp },
    { title: "SAP ERP Functional Consultant", icon: Award },
    { title: "Project Controller",  icon: Code },
    { title: "SAP S/4HANA PS Specialist", icon: Users }
  ];

  const projects = [
    "Work Breakdown Structure (WBS)",
    "Networks & Activities", 
    "Procurement & Billing",
    "Monitoring & Reporting"
  ];

 

  const faqs = [
    {
      question: "Who can join this course?",
      answer: "Anyone with an interest in supply chain, procurement, or ERP systems can join. It’s suitable for fresh graduates, working professionals, or anyone looking to build a career in SAP."
    },
    {
      question: "Do I need prior SAP knowledge before joining?",
      answer: "No prior SAP experience is required. Basic knowledge of business processes in procurement or inventory management is helpful but not mandatory."
    },
    {
      question: "What career opportunities will I get after SAP MM training?",
      answer: "You can work as an SAP MM Consultant, Procurement Specialist, Inventory Manager, or Supply Chain Executive in industries like manufacturing, retail, FMCG, and IT consulting."
    },
    {
      question: "Will I get hands-on practical training?",
      answer: "Yes! You will practice in a real-time SAP sandbox system with exercises like Purchase Orders, Goods Movement, Vendor Master setup, and complete P2P cycle projects."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight p-10">
              SAP Project Systems (SAP PS)
              <span className="block text-blue-200">Certification Course</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto">
                 Learn to plan, execute, and monitor projects efficiently using SAP Project Systems        
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
                   The SAP Project Systems (PS) course provides a complete understanding of planning, executing, and monitoring projects within SAP.
                   Learn to configure WBS, networks, budgeting, procurement, billing, and integration with other SAP modules.
                    Gain hands-on experience through real-time scenarios and a mini project to become job-ready in SAP PS         
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
                  title: "Introduction & Organizational Structure",
                  topics: ["Overview of SAP ERP & integration of PS with FI, CO, MM, SD, HR, PP", "Project System basics: structures, master data, transactions", "Role of PS in project management: planning, execution, monitoring, controlling","Enterprise structure, company code, controlling area, project profile"]
                },
                {
                  weeks: "Module-2",
                  title: "Work Breakdown Structure & Networks",
                  topics: ["Creating and structuring WBS elements", "WBS planning and budgeting", "Network types, activities, milestones, and scheduling","Resource assignment and progress tracking"]
                },
                {
                  weeks: "Module-3",
                  title: "Project Planning & Execution",
                  topics: ["Cost, resource, and material planning","Project budgeting and availability control","Project release and status management","Progress analysis and forecasting" ]
                },
                {
                  weeks: "Module-4",
                  title: "Procurement, Billing & Integration",
                  topics: ["Material and services procurement in projects", "Revenue planning and billing integration (SD, DIP)", "Results analysis and reporting","Integration with FI/CO, MM, SD, PP, HR"]
                },
                {
                  weeks: "Module-5",
                  title: "Advanced Topics & Real-Time Scenarios",
                  topics: ["Milestone billing, workflow automation, and simulations", "SAP PS in S/4HANA and Fiori apps","Project versions, CProjects, and collaboration","End-to-end project lifecycle and mini project exercise"]
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
            Start Your Journey as a SAP PS Expert Today!
          </h2>
          <p className="text-xl mb-8 text-white">
            Join thousands of professionals who have transformed their careers with our SAP PS certification
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

export default  ProjectSystems;