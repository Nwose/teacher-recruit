"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Teachers Hub", href: "/teachers-hub" },
    { name: "General Recruitment", href: "/general-recruitment" },
    { name: "Training", href: "/training" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-[#002244] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-[#003366] font-bold text-2xl">R</span>
            </div>
            <div>
              <h1 className="text-sm md:text-base font-bold text-white leading-tight max-w-xs">
                Recruitment and Training Hub
              </h1>
              <p className="text-xs text-white/80 -mt-1">
                Professional Services
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white font-medium text-base hover:text-[#0CE2A8] transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0CE2A8] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7 text-[#0CE2A8]  hover:text-[#002244]" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl translate-x-0 transition-transform duration-300 ease-out">
            <div className="flex items-center justify-between p-6 border-b">
              <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl">R</span>
              </div>
              <div className="pl-4">
                <h1 className="text-sm md:text-base font-bold text-[#003366] leading-tight max-w-xs">
                  Recruitment and Training Hub
                </h1>
                <p className="text-xs text-[#003366]/80 -mt-1">
                  Professional Services
                </p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            <nav className="p-6">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-lg font-medium text-gray-800 hover:text-[#003366] py-3 border-b border-gray-100 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t bg-gray-50">
              <p className="text-sm text-gray-600 text-center">
                © 2025 Teachers Recruiting Consult
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
