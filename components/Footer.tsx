"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/teachers-hub", label: "Teachers Hub" },
    { href: "/general-recruitment", label: "General Recruitment" },
    { href: "/training", label: "Training" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    {
      href: "/general-recruitment",
      label: "School & Organization Recruitment",
    },
    { href: "/training", label: "Professional Training" },
    { href: "/teachers-hub", label: "Teachers Hub" },
    {
      href: "https://teachersconsult.manatal.careers",
      label: "Job Board",
      external: true,
    },
  ];

  const socials = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com" },
  ];

  return (
    <footer className="bg-[#002244] text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10 bg-[#0CE2A8]">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Find Your Next Great Hire or Opportunity?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/general-recruitment"
              className="px-6 py-3 bg-[#002244] text-[#0CE2A8] font-semibold rounded-md hover:brightness-110 transition"
            >
              Submit a Vacancy
            </Link>
            <a
              href="https://teachersconsult.manatal.careers"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-[#002244] font-semibold rounded-md hover:bg-gray-100 transition"
            >
              Browse Job Openings
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-6">
            {/* Logo */}
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
              <Image
                src="/rt-logo-40.png"
                alt="Recruitment and Training Hub Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Name */}
            <div>
              <h4 className="text-lg font-bold leading-tight">
                Recruitment and Training Hub
              </h4>
              <p className="text-[#0CE2A8] text-sm">Professional Services</p>
            </div>
          </Link>

          <p className="text-white/80 mb-6 leading-relaxed max-w-md">
            Delivering trusted recruitment and professional training solutions
            for educators, schools, and organizations.
          </p>

          <div className="space-y-3 mb-6">
            <a
              href="tel:5551234567"
              className="flex items-center gap-3 text-white/80 hover:text-[#0CE2A8] transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>(555) 123-4567</span>
            </a>
            <a
              href="mailto:info@recruitmenthub.com"
              className="flex items-center gap-3 text-white/80 hover:text-[#0CE2A8] transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>info@recruitmenthub.com</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-[#0CE2A8]/30 transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-[#0CE2A8] hover:pl-2 transition-all duration-300 inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-bold mb-6">Services</h4>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service.label}>
                {service.external ? (
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#0CE2A8] hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {service.label}
                  </a>
                ) : (
                  <Link
                    href={service.href}
                    className="text-white/80 hover:text-[#0CE2A8] hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {service.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {currentYear} Recruitment and Training Hub. All rights reserved.
          </p>
          <p className="text-white/60 text-sm text-center md:text-right">
            Designed by Nwose for Education
          </p>
        </div>
      </div>
    </footer>
  );
}
