"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/for-schools", label: "For Schools" },
    { href: "/for-teachers", label: "For Teachers" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2.5 text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a
            href="tel:+11828-152-A5827"
            className="flex items-center gap-2 hover:text-accent-aqua transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call us Today: +1 (828)-152-A5827</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-lg shadow-lg"
            : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* House/School Icon */}
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="text-accent-aqua"
                >
                  <path
                    d="M24 4L4 18V44H18V30H30V44H44V18L24 4Z"
                    fill="currentColor"
                    opacity="0.9"
                  />
                  <path
                    d="M24 4L4 18V20L24 6L44 20V18L24 4Z"
                    fill="currentColor"
                  />
                </svg>
                <motion.div
                  className="absolute inset-0 bg-accent-aqua/30 rounded-full blur-xl"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.3, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-primary leading-tight">
                  Teachers
                </h1>
                <p className="text-sm text-accent-aqua font-medium -mt-0.5">
                  Recruiting Consult
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-2 text-[15px] font-medium rounded-lg transition-all duration-300 relative group ${
                    link.label === "Home"
                      ? "text-accent-aqua"
                      : "text-gray-700 hover:text-accent-aqua"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {link.label === "Home" && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-accent-aqua/10 rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-aqua transition-all duration-300 group-hover:w-3/4 rounded-full" />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="https://teachersconsult.manatal.careers"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-7 py-3 font-semibold text-white rounded-full overflow-hidden group bg-gradient-to-r from-accent-aqua to-accent-green hover:shadow-2xl transition-all duration-300"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative">Job Openings</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-primary hover:text-accent-aqua transition-colors rounded-lg hover:bg-gray-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <nav className="flex flex-col max-w-7xl mx-auto px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 hover:text-accent-aqua transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://teachersconsult.manatal.careers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-accent-aqua to-accent-green text-white font-semibold py-3 px-4 rounded-lg text-center mt-2 hover:shadow-lg transition-all"
                >
                  Job Openings
                </a>
                <a
                  href="tel:+11828-152-A5827"
                  className="flex items-center justify-center gap-2 py-3 text-primary font-medium"
                >
                  <Phone className="w-5 h-5" />
                  +1 (828)-152-A5827
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
