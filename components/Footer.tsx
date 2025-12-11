import Link from "next/link";
import { Phone, Mail, GraduationCap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/for-schools", label: "For Schools" },
    { href: "/for-teachers", label: "For Teachers" },
    { href: "/mentorship", label: "Mentorship & Training" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    { href: "/for-schools", label: "School Recruitment" },
    { href: "/for-schools", label: "Organization Recruitment" },
    { href: "/mentorship", label: "Educator Mentorship" },
    { href: "/mentorship", label: "Professional Development" },
    {
      href: "https://teachersconsult.manatal.careers",
      label: "Job Board",
      external: true,
    },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 font-['var(--font-poppins)']">
              Ready to Find Your Next Great Hire or Role?
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/for-schools" className="btn-primary">
                Submit Your Vacancy Now
              </Link>
              <a
                href="https://teachersconsult.manatal.careers"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Browse Job Openings
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-10 h-10 text-accent-aqua" />
              <div>
                <h4 className="text-2xl font-bold font-['var(--font-poppins)']">
                  Teachers
                </h4>
                <p className="text-accent-aqua text-sm">Recruiting Consult</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Connecting credible educators with top schools through trusted
              recruitment and mentorship solutions.
            </p>
            <div className="space-y-3">
              <a
                href="tel:5551234567"
                className="flex items-center gap-3 text-white/80 hover:text-accent-aqua transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(555) 123-4567</span>
              </a>
              <a
                href="mailto:info@teachersrecruiting.com"
                className="flex items-center gap-3 text-white/80 hover:text-accent-aqua transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@teachersrecruiting.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-['var(--font-poppins)']">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent-aqua hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-['var(--font-poppins)']">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  {service.external ? (
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-accent-aqua hover:pl-2 transition-all duration-300 inline-block"
                    >
                      {service.label}
                    </a>
                  ) : (
                    <Link
                      href={service.href}
                      className="text-white/80 hover:text-accent-aqua hover:pl-2 transition-all duration-300 inline-block"
                    >
                      {service.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-white/60 text-sm">
            © {currentYear} Teachers Recruiting Consult. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
