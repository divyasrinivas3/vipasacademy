import React from "react";

const SacPlanningCourse: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <h1 className="text-4xl font-bold mb-4">
          SAP Analytics Cloud (SAC) – Planning Course
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Master budgeting, forecasting, financial planning, and driver-based 
          planning in SAC. Learn how to integrate with SAP ERP, BPC, and S/4HANA 
          while building real-world dashboards & workflows.
        </p>
      </section>

      {/* Course Features */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Course Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "End-to-end SAC Planning training",
            "Covers BI, Planning, Predictive & Augmented Analytics",
            "Integration with SAP S/4HANA, BW/4HANA, BPC",
            "Hands-on with real financial data",
            "Capstone Project for CFO dashboard",
            "Career-focused learning path",
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-lg shadow hover:shadow-md transition"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* What You’ll Learn (5 Steps) */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-center">
          What You’ll Learn (5 Steps)
        </h2>
        <ol className="space-y-6 max-w-3xl mx-auto">
          <li>
            <strong>Step 1:</strong> Introduction to SAC – BI, Planning, Predictive, 
            Augmented Analytics, navigation & key terminology.
          </li>
          <li>
            <strong>Step 2:</strong> Core Components – Data modeling, dashboards, 
            planning models, value driver trees, predictive & augmented analytics.
          </li>
          <li>
            <strong>Step 3:</strong> SAC Planning Deep Dive – Planning workflows, 
            roles, data integration with SAP/non-SAP, financial data loading.
          </li>
          <li>
            <strong>Step 4:</strong> Advanced Planning Functions – Data actions, 
            automation, predictive forecasting, collaboration & approval workflows.
          </li>
          <li>
            <strong>Step 5:</strong> Reporting & Capstone Project – CFO dashboard, 
            variance analysis, end-to-end financial planning scenario.
          </li>
        </ol>
      </section>

      {/* Career Opportunities */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Career Opportunities
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "SAC Planning Consultant",
            "SAP Analytics Specialist",
            "Financial Planning Analyst",
            "SAP BI/Planning Developer",
            "SAC Predictive & Forecasting Expert",
            "Business Transformation Consultant",
          ].map((role, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-lg shadow hover:shadow-md transition"
            >
              {role}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-center">Projects You’ll Build</h2>
        <ul className="space-y-4 max-w-3xl mx-auto list-disc list-inside">
          <li>Financial planning model with multiple versions (Plan, Forecast, Actuals).</li>
          <li>Value driver tree for revenue planning & scenario analysis.</li>
          <li>Budget approval workflow with role-based collaboration.</li>
          <li>CFO dashboard with variance analysis (Actual vs Plan vs Forecast).</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Start Your SAP SAC Planning Journey Today!
        </h2>
        <p className="mb-6">
          Gain practical expertise in SAC Planning and build the skills needed 
          for real-world SAP projects.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100">
          Enroll Now
        </button>
      </section>
    </div>
  );
};

export default SacPlanningCourse;
