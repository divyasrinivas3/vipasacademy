import { useState } from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  CheckCircle, 
  Users, 
  Award, 
  Briefcase, 
  Clock, 
  BookOpen,
  ChevronDown,
  ChevronUp,
  Star,
  Laptop,
  Smartphone,
  ShoppingCart,
  MessageSquare,
  User,
  Play,
  Download
} from 'lucide-react';


function FullStack() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Who can join this course?",
      answer: "This course is perfect for beginners with basic computer knowledge, college students, professionals looking to switch careers, and anyone interested in web development. No prior coding experience is required."
    },
    {
      question: "Do I need prior coding experience?",
      answer: "No! This course is designed for complete beginners. We start with the fundamentals and gradually progress to advanced topics. Our structured approach ensures you build a strong foundation."
    },
    {
      question: "Is there placement assistance?",
      answer: "Yes, we provide comprehensive placement assistance including resume building, mock interviews, portfolio review, and direct connections with our hiring partners. Our placement success rate is over 85%."
    },
    {
      question: "What is the duration of the course?",
      answer: "The course is 3 months (12 weeks) long with flexible scheduling options. You can choose from weekday evening batches or weekend batches to fit your schedule."
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, you'll receive an industry-recognized certificate upon successful completion of the course and capstone project. This certificate is valued by employers in the tech industry."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-7">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold py-10 leading-tight">
                  MERN Stack Web Development Course
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  Master MongoDB, Express, React, and Node.js to become a Full Stack Developer
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary-900 hover:bg-transparent hover:border text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Play size={20} />
                  Enroll Now
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download Syllabus
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">6 Months</div>
                  <div className="text-blue-200">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-blue-200">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-blue-200">Students Placed</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-900 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
                    <Database className="text-white" size={24} />
                    <span className="font-semibold text-white">MongoDB</span>
                  </div>
                  <div className="bg-primary-900 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
                    <Server className="text-white" size={24} />
                    <span className="font-semibold text-white">Express.js</span>
                  </div>
                  <div className="bg-primary-900 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
                    <Code className="text-white" size={24} />
                    <span className="font-semibold text-white ">React.js</span>
                  </div>
                  <div className="bg-primary-900 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
                    <Globe className="text-white" size={24} />
                    <span className="font-semibold text-white">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Course Overview</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The MERN stack is one of the most popular and powerful technology stacks for building modern web applications. 
              It combines MongoDB's flexible database, Express.js's robust backend framework, React's dynamic frontend library, 
              and Node.js's efficient server-side JavaScript runtime to create scalable, high-performance applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mb-6">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Demand</h3>
              <p className="text-gray-600">
                MERN stack developers are highly sought after with competitive salaries ranging from ₹4-15 LPA for freshers to experienced professionals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mb-6">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3 Month Program</h3>
              <p className="text-gray-600">
                Intensive 12-week program with hands-on projects, mentorship, and placement assistance. Available in online and offline modes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Growth</h3>
              <p className="text-gray-600">
                Build scalable web applications and advance your career as a full-stack developer with in-demand skills and certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
            <p className="text-xl text-gray-600">
              Comprehensive curriculum covering all aspects of modern web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Database, title: "MongoDB", desc: "NoSQL database fundamentals and advanced querying" },
              { icon: Server, title: "Express.js", desc: "Backend framework for building robust APIs" },
              { icon: Code, title: "React.js", desc: "Modern frontend development with hooks and state management" },
              { icon: Globe, title: "Node.js", desc: "Server-side JavaScript and npm ecosystem" },
              { icon: BookOpen, title: "REST APIs", desc: "RESTful API development and best practices" },
              { icon: Users, title: "Authentication", desc: "JWT, OAuth, and secure user management" },
              { icon: Laptop, title: "Deployment", desc: "Cloud deployment on AWS, Heroku, and Vercel" },
              { icon: Briefcase, title: "Best Practices", desc: "Industry standards, testing, and code quality" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                <CheckCircle className="text-green-500 mt-3" size={20} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Vipas Academy */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Vipas Academy?</h2>
            <p className="text-xl text-blue-100">
              Join thousands of successful developers who started their journey with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Mentors",
                desc: "Learn from industry professionals with 5+ years of experience"
              },
              {
                icon: Laptop,
                title: "Hands-on Projects",
                desc: "Build real-world applications and create an impressive portfolio"
              },
              {
                icon: Briefcase,
                title: "Career Guidance",
                desc: "Resume building, mock interviews, and job placement assistance"
              },
              {
                icon: Award,
                title: "Certification",
                desc: "Industry-recognized certificate and lifetime placement support"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Career Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
            <p className="text-xl text-gray-600">
              Open doors to exciting career paths in web development
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Full Stack Developer", salary: "₹6-12 LPA" },
              { title: "Frontend Developer", salary: "₹4-8 LPA" },
              { title: "Backend Developer", salary: "₹5-10 LPA" },
              { title: "MERN Stack Developer", salary: "₹7-15 LPA" },
              { title: "Freelance Developer", salary: "₹500-2000/hr" }
            ].map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="text-primary-900" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{job.title}</h3>
                <p className="text-primary-900 font-semibold">{job.salary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Projects You Will Build</h2>
            <p className="text-xl text-gray-600">
              Create impressive projects to showcase your skills to employers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: User,
                title: "Portfolio Website",
                desc: "Personal portfolio with React.js showcasing your skills and projects",
                tech: ["React", "CSS3", "JavaScript"]
              },
              {
                icon: BookOpen,
                title: "Blog Application",
                desc: "Full-stack blog with CRUD operations using MERN stack",
                tech: ["MongoDB", "Express", "React", "Node.js"]
              },
              {
                icon: ShoppingCart,
                title: "E-commerce Store",
                desc: "Complete online store with cart, payments, and user authentication",
                tech: ["MERN", "Stripe", "JWT"]
              },
              {
                icon: MessageSquare,
                title: "Chat Application",
                desc: "Real-time chat app with WebSockets and user presence",
                tech: ["Socket.io", "MERN", "WebSockets"]
              }
            ].map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <project.icon className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Course Structure</h2>
            <p className="text-xl text-gray-600">
              12-week comprehensive learning path from beginner to job-ready developer
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-blue-300"></div>
            
            <div className="space-y-12">
              {[
                {
                  weeks: "Week 1-4",
                  title: "Frontend Foundations",
                  topics: ["HTML5 & CSS3", "JavaScript ES6+", "React.js Fundamentals", "Component Lifecycle"]
                },
                {
                  weeks: "Week 5-7",
                  title: "Backend Development",
                  topics: ["Node.js Basics", "Express.js Framework", "RESTful APIs", "Middleware & Routing"]
                },
                {
                  weeks: "Week 8-10",
                  title: "Database & Integration",
                  topics: ["MongoDB Fundamentals", "Mongoose ODM", "API Integration", "Authentication Systems"]
                },
                {
                  weeks: "Week 11-12",
                  title: "Deployment & Career Prep",
                  topics: ["Capstone Project", "Cloud Deployment", "Portfolio Building", "Interview Preparation"]
                }
              ].map((phase, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:w-5/12">
                    <div className="bg-white p-6 rounded-xl shadow-lg ml-16 md:ml-0">
                      <div className="text-blue-600 font-bold text-sm mb-2">{phase.weeks}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                      <ul className="space-y-2">
                        {phase.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                            <span className="text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 border-4 border-white rounded-full"></div>
                  <div className="flex-1 md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our MERN stack course
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Start Your Journey as a Full Stack Developer Today!
          </h2>
          <p className="text-xl mb-8 text-white">
            Join our next batch and transform your career in just 6 months. Limited seats available!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-primary-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Play size={20} />
              Enroll Now - ₹29,999
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2">
              <Smartphone size={20} />
              Request a Demo
            </button>
          </div>

          
        </div>
      </section>

     
      
    </div>
  );
}

export default FullStack;