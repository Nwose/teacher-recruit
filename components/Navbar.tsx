"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    return () => {
      setMobileMenuOpen(false);
    };
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Teachers Hub", href: "/teachers-hub" },
    { name: "General Recruitment", href: "/general-recruitment" },
    { name: "Training", href: "/training" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  const drawerVariants: Variants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 260, damping: 26 },
    },
    exit: {
      x: "100%",
      transition: { type: "spring", stiffness: 260, damping: 30 },
    },
  };

  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const listVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06, delayChildren: 0.08 },
    },
    exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 420, damping: 30 },
    },
    exit: { opacity: 0, x: 12, transition: { duration: 0.15 } },
  };

  return (
    <header className="w-full bg-[#002244] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
              <Image
                src="/rt-logo-40.png"
                alt="Recruitment and Training Hub Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
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
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium text-base relative transition-colors duration-200 ${
                    isActive
                      ? "text-[#0CE2A8]"
                      : "text-white hover:text-[#0CE2A8]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#0CE2A8] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7 text-[#0CE2A8]" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              className="absolute right-0 top-0 h-full w-80 max-w-full bg-[#003366] shadow-2xl"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
            >
              {/* Header with logo + text */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Link
                  href="/"
                  className="flex items-center gap-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src="/rt-logo-40.png"
                      alt="Recruitment and Training Hub Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-sm font-bold text-white leading-tight">
                      Recruitment and Training Hub
                    </h1>
                    <p className="text-xs text-white/80 -mt-1">
                      Professional Services
                    </p>
                  </div>
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <nav className="p-6">
                <motion.ul
                  className="space-y-2"
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                      <motion.li key={link.name} variants={itemVariants}>
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between rounded-lg px-4 py-3 transition-colors ${
                            isActive
                              ? "bg-white/10 text-[#0CE2A8] font-semibold"
                              : "text-white/90 hover:bg-white/10 hover:text-[#0CE2A8] font-medium"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span>{link.name}</span>
                          {isActive && (
                            <span className="h-2 w-2 rounded-full bg-[#0CE2A8]" />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </nav>

              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-[#003366]">
                <p className="text-sm text-white/70 text-center">
                  © 2025 Recruitment and Training Hub
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
