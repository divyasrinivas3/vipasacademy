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

function OnbCourse() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    // Curriculum (short)
    const curriculum = [
        "Introduction to Onboarding & Role in Employee Lifecycle",
        "Provisioning Setup & Permissions",
        "Onboarding Process Flow & Configurations",
        "New Hire, Manager & HR Tasks",
        "Advanced Integrations with EC & Payroll",
        "Compliance Forms & Custom Rules",
        "Reporting & Analytics",
        "Hands-on & Certification Prep"
    ];

    const courseFeatures = [
        { icon: Users, title: "Expert Trainers", desc: "Learn from certified SAP Onboarding consultants" },
        { icon: Code, title: "Hands-on Practice", desc: "Live system practice with real-world scenarios" },
        { icon: Award, title: "Certification Prep", desc: "Guidance for SAP SF Onboarding certification" },
        { icon: TrendingUp, title: "Career Guidance", desc: "Mock interviews, resume prep & referrals" }
    ];

    const careerRoles = [
        { title: "SAP Onboarding Consultant", icon: Building },
        { title: "HR Onboarding Specialist", icon: Users },
        { title: "Employee Experience Analyst", icon: Award },
        { title: "HRIS Consultant", icon: Code },
        { title: "Business Process Analyst", icon: TrendingUp }
    ];

    const projects = [
        "Configure a new hire Onboarding process with tasks",
        "Set up compliance forms & electronic signature",
        "Integrate Onboarding with Employee Central",
        "Automate provisioning & IT access setup"
    ];

    const faqs = [
        {
            question: "Who can take this course?",
            answer: "HR professionals, SAP beginners, and consultants focusing on Onboarding."
        },
        {
            question: "Is SAP knowledge required?",
            answer: "Not mandatory. The course covers fundamentals before advanced topics."
        },
        {
            question: "Will I get hands-on practice?",
            answer: "Yes, practice on live demo systems with real scenarios."
        },
        {
            question: "Is certification included?",
            answer: "We provide training and prep support for SAP SF Onboarding certification."
        }
    ];

    // 5-step learning structure
    const courseSteps = [
        {
            phase: "Step 1",
            title: "Introduction & Setup",
            topics: [
                "Importance of structured Onboarding",
                "Provisioning setup & enabling Onboarding",
                "Role-based permissions"
            ]
        },
        {
            phase: "Step 2",
            title: "Process Configuration",
            topics: [
                "Create Onboarding programs",
                "Set up new hire tasks",
                "Manager & HR tasks"
            ]
        },
        {
            phase: "Step 3",
            title: "Compliance & Customization",
            topics: [
                "Compliance forms configuration",
                "e-Signature setup",
                "Custom business rules"
            ]
        },
        {
            phase: "Step 4",
            title: "Integration",
            topics: [
                "Integration with Employee Central",
                "IT system provisioning",
                "Payroll & other modules"
            ]
        },
        {
            phase: "Step 5",
            title: "Reports & Hands-on",
            topics: [
                "Onboarding dashboards & analytics",
                "Compliance tracking reports",
                "Final case studies & certification prep"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-primary-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight p-10">
                        SAP SuccessFactors Onboarding
                        <span className="block text-blue-200">Certification Course</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Learn SAP Onboarding to deliver smooth new hire experiences, compliance & integrations
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
                            <p className="text-primary-900">3 Months</p>
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

            {/* Course Features */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Course Overview</h2>

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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">What You'll Learn</h2>
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Projects You Will Build</h2>
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

            {/* Course Structure */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">Course Structure</h2>
                        <p className="text-xl">5-step learning path to master SAP Onboarding</p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-primary-900"></div>
                        <div className="space-y-12">
                            {courseSteps.map((phase, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    <div className="flex-1 md:w-5/12">
                                        <div className="bg-white p-6 rounded-xl shadow-xl ml-16 md:ml-0">
                                            <div className="text-gray-900 font-bold text-sm mb-2">{phase.phase}</div>
                                            <h3 className="text-xl font-bold text-primary-900 mb-4">{phase.title}</h3>
                                            <ul className="space-y-2">
                                                {phase.topics.map((topic, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-gray-600">
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
                                    {openFAQ === index ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
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
                        Start Your Journey as an SAP Onboarding Expert Today!
                    </h2>
                    <p className="text-xl mb-8">
                        Join HR professionals & consultants transforming employee experiences with SAP SF Onboarding
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

export default OnbCourse;
