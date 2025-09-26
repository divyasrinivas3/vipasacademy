import { useState } from "react";
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
} from "lucide-react";

function DataAnalyticsCourse() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Curriculum (short form)
  const curriculum = [
    "Introduction to Data Analytics & Tools",
    "Statistics & Probability Foundations",
    "Excel for Data Analysis & Dashboards",
    "SQL for Data Analytics",
    "Power BI for Visualization & Reporting",
    "Advanced Analytics (Forecasting, Regression, Clustering)",
    "Big Data & Cloud Platforms Basics",
    "Capstone Projects & Certification Prep",
  ];

  // Features
  const courseFeatures = [
    { icon: Users, title: "Expert Mentors", desc: "Learn from experienced data analysts & BI consultants" },
    { icon: Code, title: "Hands-on Practice", desc: "Work on real datasets with Excel, SQL & Power BI" },
    { icon: Award, title: "Certification Ready", desc: "Prepare for DA-100 & other analytics certifications" },
    { icon: TrendingUp, title: "Career Guidance", desc: "Mock interviews, resume prep & placement support" },
  ];

  // Career Roles
  const careerRoles = [
    { title: "Data Analyst", icon: Building },
    { title: "Business Intelligence Analyst", icon: Users },
    { title: "Data Visualization Specialist", icon: Award },
    { title: "SQL/Power BI Developer", icon: Code },
    { title: "Business Analyst", icon: TrendingUp },
  ];

  // Projects
  const projects = [
    "Retail Analytics – Build sales dashboard with Excel & Power BI",
    "HR Analytics – Predict attrition using survey & SQL data",
    "Finance Analytics – Budget forecasting with What-If & Power BI",
    "Marketing Analytics – Campaign performance analysis",
  ];

  // FAQs
  const faqs = [
    {
      question: "Who can take this course?",
      answer: "Students, professionals, and anyone looking to start a career in data analytics.",
    },
    {
      question: "Do I need programming knowledge?",
      answer: "Basic Excel knowledge helps, but programming is not mandatory. SQL & Python are taught step by step.",
    },
    {
      question: "Will I get hands-on practice?",
      answer: "Yes, with multiple mini-projects and capstone projects using real datasets.",
    },
    {
      question: "Is certification included?",
      answer: "We provide training and prep support for Power BI, SQL, and analytics certifications.",
    },
  ];

  // 5-step structure
  const courseSteps = [
    {
      phase: "Step 1",
      title: "Foundations",
      topics: ["Introduction to Analytics", "Data Types & Statistics Basics", "Excel for Analysis"],
    },
    {
      phase: "Step 2",
      title: "Data Handling",
      topics: ["Data Cleaning & Preparation", "SQL Queries & Joins", "Mini-project on HR Data"],
    },
    {
      phase: "Step 3",
      title: "Visualization",
      topics: ["Excel Dashboards", "Power BI Data Modeling", "Interactive Reports & Charts"],
    },
    {
      phase: "Step 4",
      title: "Advanced Analytics",
      topics: ["Forecasting & Regression", "Clustering & Segmentation", "Time Series Analysis"],
    },
    {
      phase: "Step 5",
      title: "Projects & Careers",
      topics: ["Capstone Projects", "Portfolio Building", "Certification & Career Guidance"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight p-10">
            Data Analytics
            <span className="block text-blue-200">Certification Course</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Master Excel, SQL & Power BI to analyze data, build dashboards, and become industry ready.
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
            <div className="bg-white p-6 rounded-lg">
              <Clock className="w-8 h-8 text-primary-900 mx-auto mb-2" />
              <h3 className="font-semibold mb-1 text-primary-900">Duration</h3>
              <p className="text-primary-900">4 Months</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Monitor className="w-8 h-8 text-primary-900 mx-auto mb-2" />
              <h3 className="font-semibold mb-1 text-primary-900">Mode</h3>
              <p className="text-primary-900">Online/Offline</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Award className="w-8 h-8 text-primary-900 mx-auto mb-2" />
              <h3 className="font-semibold mb-1 text-primary-900">Certification</h3>
              <p className="text-primary-900">Industry Recognized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Course Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-xl hover:shadow-lg transition-shadow"
              >
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {curriculum.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-primary-900 rounded-lg hover:bg-secondary-900 transition-colors"
              >
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Projects You Will Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-blue-50 border-l-4 border-primary-900 p-6 rounded-r-lg"
              >
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

      {/* 5-Step Structure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Course Structure</h2>
            <p className="text-xl">5-step learning path to become a Data Analyst</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-primary-900"></div>
            <div className="space-y-12">
              {courseSteps.map((phase, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 md:w-5/12">
                    <div className="bg-white p-6 rounded-xl shadow-xl ml-16 md:ml-0">
                      <div className="text-gray-900 font-bold text-sm mb-2">
                        {phase.phase}
                      </div>
                      <h3 className="text-xl font-bold text-primary-900 mb-4">
                        {phase.title}
                      </h3>
                      <ul className="space-y-2">
                        {phase.topics.map((topic, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-gray-600"
                          >
                            <CheckCircle size={16} className="text-secondary-900" />
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

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary-800 to-secondary-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Journey as a Data Analyst Today!
          </h2>
          <p className="text-xl mb-8">
            Join industry experts & get hands-on with Excel, SQL & Power BI to build your career in analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-900 px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2">
              <Play className="w-5 h-5" /> Enroll Now
            </button>
            <button className="border-2 border-white bg-white text-primary-900 hover:bg-primary-900 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2">
              Request Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataAnalyticsCourse;
