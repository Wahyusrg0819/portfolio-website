"use client";

import Link from "next/link";
import { FaGithub, FaInstagram, FaEnvelope, FaHeart, FaHome, FaUser, FaFolder, FaPhoneAlt } from "react-icons/fa";
import { motion, LazyMotion, domAnimation, m } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <footer className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative" suppressHydrationWarning>
          <div className="text-center" suppressHydrationWarning>
            <p className="text-white/80 text-sm">
              © {currentYear} Wahyu Muliadi Siregar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  const navigationLinks = [
    { href: "/", text: "Beranda", icon: FaHome },
    { href: "/about", text: "Tentang", icon: FaUser },
    { href: "/projects", text: "Proyek", icon: FaFolder },
    { href: "/contact", text: "Kontak", icon: FaPhoneAlt }
  ];

  const socialLinks = [
    { href: "https://github.com/Wahyusrg0819", icon: FaGithub, label: "GitHub", color: "hover:text-white", hoverBg: "hover:bg-gray-800" },
    { href: "https://www.instagram.com/wahyu_shiregaru/", icon: FaInstagram, label: "Instagram", color: "hover:text-pink-400", hoverBg: "hover:bg-pink-900/30" },
    { href: "mailto:wahyusiregar0819@gmail.com", icon: FaEnvelope, label: "Email", color: "hover:text-blue-400", hoverBg: "hover:bg-blue-900/30" }
  ];

  return (
    <LazyMotion features={domAnimation}>
      <footer className="relative overflow-hidden bg-gray-900/50 backdrop-blur-sm border-t border-white/10">
        {/* Background dengan gradien dan pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent-purple/10 to-accent-pink/10" suppressHydrationWarning>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:14px_24px]" suppressHydrationWarning />
        </div>

        {/* Floating elements dengan animasi yang lebih dinamis */}
        <m.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute left-10 top-10 w-16 h-16 bg-gradient-to-r from-primary/30 to-accent-purple/30 rounded-full blur-xl"
          suppressHydrationWarning
        />
        <m.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
            x: [-10, 10, -10]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute right-10 bottom-10 w-20 h-20 bg-gradient-to-r from-accent-purple/30 to-accent-pink/30 rounded-full blur-xl"
          suppressHydrationWarning
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative" suppressHydrationWarning>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8" suppressHydrationWarning>
            {/* Brand Section */}
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
              suppressHydrationWarning
            >
              <div className="relative inline-block group" suppressHydrationWarning>
                <m.div
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(79, 70, 229, 0)",
                      "0 0 0 10px rgba(79, 70, 229, 0.2)",
                      "0 0 0 20px rgba(79, 70, 229, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  suppressHydrationWarning
                />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-4 transform group-hover:scale-105 transition-transform duration-300">
                  Wahyu Shiregaru
                </h3>
                <m.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/80 to-accent-purple/80"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  suppressHydrationWarning
                />
              </div>
              <p className="text-white/70 leading-relaxed mt-6">
                Mahasiswa Teknik Informatika
                <br />
                Universitas Islam Riau
              </p>
            </m.div>

            {/* Quick Links dengan tampilan yang lebih menarik */}
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
              suppressHydrationWarning
            >
              <h4 className="text-lg font-semibold text-white mb-8 relative inline-block">
                Menu Cepat
                <m.div
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/50 to-accent-purple/50"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  suppressHydrationWarning
                />
              </h4>
              <div className="grid grid-cols-2 gap-4" suppressHydrationWarning>
                {navigationLinks.map((link) => (
                  <m.div
                    key={link.href}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                    suppressHydrationWarning
                  >
                    <m.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-purple/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300"
                      suppressHydrationWarning
                    />
                    <Link 
                      href={link.href} 
                      className="relative flex items-center gap-2 justify-center p-3 text-white/70 hover:text-white bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/20"
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{link.text}</span>
                    </Link>
                  </m.div>
                ))}
              </div>
            </m.div>

            {/* Social Links dengan tampilan yang lebih menarik */}
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center md:text-right"
              suppressHydrationWarning
            >
              <h4 className="text-lg font-semibold text-white mb-8 relative inline-block">
                Media Sosial
                <m.div
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/50 to-accent-purple/50"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  suppressHydrationWarning
                />
              </h4>
              <div className="flex justify-center md:justify-end space-x-4" suppressHydrationWarning>
                {socialLinks.map((social) => (
                  <m.div
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group"
                    suppressHydrationWarning
                  >
                    <m.div
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(79, 70, 229, 0)",
                          "0 0 0 8px rgba(79, 70, 229, 0.2)",
                          "0 0 0 16px rgba(79, 70, 229, 0)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                      suppressHydrationWarning
                    />
                    <Link 
                      href={social.href}
                      target={social.href.startsWith('http') ? "_blank" : undefined}
                      className={`block p-4 text-white/70 ${social.color} ${social.hoverBg} relative rounded-lg group bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/20`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
                    </Link>
                  </m.div>
                ))}
              </div>
            </m.div>
          </div>

          {/* Copyright Section dengan desain yang lebih menarik */}
          <div className="mt-16 pt-8 relative" suppressHydrationWarning>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" suppressHydrationWarning />
            <m.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center space-y-4"
              suppressHydrationWarning
            >
              <p className="text-white/60 text-sm flex items-center justify-center gap-2">
                © {currentYear} Wahyu Muliadi Siregar. All rights reserved.
              </p>
              <p className="text-white/60 text-sm flex items-center justify-center gap-2">
                Made with{" "}
                <m.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaHeart className="text-red-400" />
                </m.span>
                {" "}in Indonesia
              </p>
            </m.div>
          </div>
        </div>
      </footer>
    </LazyMotion>
  );
} 