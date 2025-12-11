"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Shield, Users } from "lucide-react";

export default function ForSchools() {
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    email: "",
    phone: "",
    position: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you for your vacancy submission! We will contact you within 24 hours to discuss your needs."
    );
    setFormData({
      name: "",
      school: "",
      email: "",
      phone: "",
      position: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const highlights = [
    {
      icon: Award,
      title: "Quality-Based Recruitment",
      description:
        "We go beyond resumes to assess teaching philosophy, classroom management, and cultural fit to ensure long-term success.",
    },
    {
      icon: Shield,
      title: "Guaranteed Placements",
      description:
        "Our satisfaction guarantee means we'll continue searching until you find the perfect candidate for your institution.",
    },
    {
      icon: Users,
      title: "Specialized for Organizations",
      description:
        "Beyond traditional schools, we recruit for educational nonprofits, training centers, and corporate education departments.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary/90" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070')] bg-cover bg-center opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-['var(--font-poppins)']">
              For Schools & Client Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Fast, quality, guaranteed placements for educational institutions
              and organizations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary text-center mb-16 font-['var(--font-poppins)']"
          >
            Our Services for Educational Institutions
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-xl border-l-4 border-accent-aqua hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-accent-aqua/10 rounded-full flex items-center justify-center mb-6">
                  <highlight.icon className="w-8 h-8 text-accent-aqua" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 font-['var(--font-poppins)']">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-primary text-center mb-8 font-['var(--font-poppins)']">
              Submit Your Vacancy Now
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-primary mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-aqua focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="school"
                  className="block text-sm font-semibold text-primary mb-2"
                >
                  School/Organization *
                </label>
                <input
                  type="text"
                  id="school"
                  value={formData.school}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-aqua focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-primary mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-aqua focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-primary mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-aqua focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-semibold text-primary mb-2"
                >
                  Position Needed
                </label>
                <input
                  type="text"
                  id="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="e.g., High School Science Teacher"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-aqua focus:border-transparent transition-all"
                />
              </div>

              <button type="submit" className="btn-primary w-full text-lg">
                Submit Vacancy Request
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
