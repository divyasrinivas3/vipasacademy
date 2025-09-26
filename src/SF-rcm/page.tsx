import { useState } from 'react';
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

function RcmCourse() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const curriculum = [
  "Introduction to SAP RCM",
  "Recruiting Setup & Configuration",
  "Job Requisition Management",
  "Candidate Management",
  "Recruiting Templates & XML Customization",
  "Offer Management",
  "Recruiting Marketing (RMK) & Career Site",
  "Recruiting Reports & Analytics",
  "Integration with Other Modules",
  "Security, Compliance & GDPR",
  "Advanced Recruiting Features",
  "Real-Time Scenarios & Capstone Project"
  ];

  const courseFeatures = [
    { icon: Users, title: "Expert Mentors", desc: "Industry professionals with SAP RCM experience" },
    { icon: Code, title: "Hands-on Practice", desc: "Real-world recruiting configuration scenarios" },
    { icon: Award, title: "Certification", desc: "Industry-recognized SAP SF RCM certification" },
    { icon: TrendingUp, title: "Career Support", desc: "Resume prep and mock interviews" }
  ];

  const careerRoles = [
    { title: "SAP RCM Consultant",  icon: Building },
    { title: "Recruiting Specialist",  icon: TrendingUp },
    { title: "Talent Acquisition Analyst", icon: Award },
    { title: "HRIS Implementation Specialist",  icon: Code },
    { title: "Business Process Analyst", icon: Users }
  ];

  const projects = [
    "Configure a sample recruiting role and requisition template",
    "Create and approve a job requisition with routing", 
    "Candidate pipeline setup for a new job role",
    "Build a career site with CSB & configure a digital offer letter"
  ];

  const faqs = [
    {
      question: "Who can join this course?",
      answer: "Anyone interested in SAP SuccessFactors and Talent Acquisition can join. No prior SAP experience required."
    },
    {
      question: "Do I need HR experience?",
      answer: "Basic HR knowledge helps, but the course starts from foundational SAP RCM concepts."
    },
    {
      question: "Is placement assistance provided?",
      answer: "Yes, we provide resume preparation, mock interviews, and job referrals."
    },
    {
      question: "Can I get certification after course completion?",
      answer: "Yes, you'll receive an industry-recognized SAP SF RCM certification upon successful completion."
    }
  ];

  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight p-10">
            SAP SuccessFactors RCM
            <span className="block text-blue-200">Certification Course</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto">
            Master SAP Recruiting to become an expert in Talent Acquisition & Recruitment Management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-secondary-900 hover:bg-transparent border-white hover:border-2 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <Play className="w-5 h-5" /> Enroll Now
            </button>
            <button className="border-2 border-blue-300 hover:bg-primary-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <Download className="w-5 h-5" /> Download Syllabus
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-6">
            <div className="bg-white p-6 rounded-lg backdrop-blur-sm">
              <Clock className="w-8 h-8 text-primary-900 mx-auto mb-2" />
              <h3 className="font-semibold mb-1 text-primary-900">Duration</h3>
              <p className="text-primary-900">6 Months</p>
            </div>
            <div className="bg-white p-6 rounded-lg backdrop-blur-sm">
              <Monitor className="w-8 h-8 text-primary-900 mx-auto mb-2" />
              <h3 className="font-semibold mb-1 text-primary-900">Mode</h3>
              <p className="text-primary-900">Online/Offline</p>
            </div>
            <div className="bg-white p-6 rounded-lg backdrop-blur-sm">
              <Award className="w-8 h-8 text-primary-900 mx-auto mb-2" />
              <h3 className="font-semibold mb-1 text-primary-900">Certification</h3>
              <p className="text-primary-900">Industry Recognized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Course Features</h2>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {curriculum.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-primary-900 rounded-lg hover:bg-secondary-900 transition-colors">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Career Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerRoles.map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center">
                <role.icon className="w-10 h-10 text-primary-900 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2 text-primary-900">{role.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Projects You Will Build</h2>
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

      {/* Course Modules */}
      <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-black mb-6">Course Structure</h2>
      <p className="text-xl text-black">
        Comprehensive SAP SuccessFactors RCM learning path from beginner to job-ready professional
      </p>
    </div>

    <div className="relative">
      <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-primary-900"></div>

      <div className="space-y-12">
        {[
          {
            phase: "Introduction to SAP RCM",
            title: "Getting Started with RCM",
            topics: [
              "Overview of SAP SuccessFactors Talent Acquisition Suite (RCM, RMK, Onboarding)",
              "Role of RCM in the hiring process",
              "Key differences: RCM vs RMK vs RBP",
              "Integration with other modules (EC, PMGM, Onboarding, Succession & Development)",
              "Navigation in SuccessFactors"
            ]
          },
          {
            phase: "Recruiting Setup & Candidate Management",
            title: "Recruiting Configuration & Candidate Handling",
            topics: [
              "Provisioning & Admin Center basics",
              "Recruiting permissions (Role-Based Permissions)",
              "Managing recruiting roles (Recruiter, Hiring Manager, Candidate)",
              "Setting up job requisition & candidate profile templates",
              "Candidate application process, pipelines & statuses"
            ]
          },
          {
            phase: "Job Requisition & Offer Management",
            title: "Creating Requisitions and Managing Offers",
            topics: [
              "Job requisition creation process",
              "Approval workflows for requisitions",
              "Job posting management (internal & external career site)",
              "Offer letter templates and approval workflows",
              "Integration with Compensation (salary, bonus, benefits)"
            ]
          },
          {
            phase: "Recruiting Marketing & Reports",
            title: "Marketing, Career Site & Analytics",
            topics: [
              "Basics of RMK (Recruiting Marketing)",
              "Career Site Builder (CSB) overview",
              "Setting up job postings on RMK",
              "Candidate experience journey & mobile-optimized design",
              "Standard recruiting reports, metrics & KPIs",
              "People Analytics for recruiting"
            ]
          },
          {
            phase: "Integration, Security & Advanced Features",
            title: "End-to-End Recruiting & Compliance",
            topics: [
              "RCM + Onboarding, EC, Background checks, LMS integration",
              "Role-Based Permissions (RBP) & GDPR compliance",
              "Recruiting auditing",
              "Advanced features: Multi-channel posting, interview scheduling, Talent Pools, AI & Predictive analytics",
              "Capstone Project: Configure a complete recruiting cycle"
            ]
          }
        ].map((phase, index) => (
          <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="flex-1 md:w-5/12">
              <div className="bg-white p-6 rounded-xl shadow-xl ml-16 md:ml-0">
                <div className="text-gray-900 font-bold text-sm mb-2">{phase.phase}</div>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openFAQ === index ? <ChevronDown className="w-5 h-5 text-gray-500" /> : <ChevronRight className="w-5 h-5 text-gray-500" />}
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
            Start Your Journey as an SAP RCM Expert Today!
          </h2>
          <p className="text-xl mb-8 text-white">
            Join professionals who have transformed their HR & Recruiting careers with SAP SF RCM certification
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-900 hover:border-transparent px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <Play className="w-5 h-5" /> Enroll Now
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

export default RcmCourse;
