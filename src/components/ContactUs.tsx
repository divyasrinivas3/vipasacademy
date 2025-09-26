import { useState } from "react";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import {
  educationOptions,
  planOfFutureOptions,
  careerOptionsMap,
  ContactFormData,
  PlanOfFuture,
} from "../types/form"; // ✅ adjust path if needed

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    contact: "",
    email: "",
    education: "",
    planOfFuture: "",
    careerPath: "",
  });
  const [loading, setLoading] = useState(false); // loading state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (name === "planOfFuture") {
        return { ...prev, planOfFuture: value as PlanOfFuture, careerPath: "" };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          contactNumber: formData.contact,
          email: formData.email,
          education: formData.education,
          planOfFuture: formData.planOfFuture,
          careerPath: formData.careerPath,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit form");

      const data = await res.json();
      console.log("API response:", data);
      alert("Thank you! Your message has been sent.");

      // Reset form
      setFormData({
        name: "",
        contact: "",
        email: "",
        education: "",
        planOfFuture: "",
        careerPath: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Started with Vipas Academy Today
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to transform your career? Fill out the form below and we’ll
            guide you on the right learning path.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-900 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 99666 52099</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary-900 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@vipasacademy.com</p>
                  <p className="text-gray-600">admissions@vipasacademy.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary-900 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Address</h4>
                  <p className="text-gray-600">
                    Tirupati,<br />
                    Telangana, India
                    <br />
                    5000080
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Contact Number *
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your contact number"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="education"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Education *
                </label>
                <select
                  id="education"
                  name="education"
                  required
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select Education</option>
                  {educationOptions.map((edu) => (
                    <option key={edu} value={edu}>
                      {edu}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="planOfFuture"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Plan of Future *
                </label>
                <select
                  id="planOfFuture"
                  name="planOfFuture"
                  required
                  value={formData.planOfFuture}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select Plan</option>
                  {planOfFutureOptions.map((plan) => (
                    <option key={plan} value={plan}>
                      {plan}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {formData.planOfFuture && (
              <div className="mb-6">
                <label
                  htmlFor="careerPath"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Career Path *
                </label>
                <select
                  id="careerPath"
                  name="careerPath"
                  required
                  value={formData.careerPath}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select Career Path</option>
                  {careerOptionsMap[formData.planOfFuture].map((career) => (
                    <option key={career} value={career}>
                      {career}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-900 mt-10 text-white py-4 px-6 rounded-lg font-semibold hover:bg-secondary-900 transition-colors flex items-center justify-center space-x-2 group"
            >
              <span>{loading ? "Sending..." : "Send Message"}</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
