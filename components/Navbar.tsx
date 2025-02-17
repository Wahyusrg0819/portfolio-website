"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import { BiHomeAlt2, BiUser, BiFolder, BiEnvelope } from "react-icons/bi";
import { RiMenu4Line } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { name: "Beranda", path: "/", icon: <BiHomeAlt2 className="text-xl" /> },
    { name: "Tentang", path: "/about", icon: <BiUser className="text-xl" /> },
    { name: "Proyek", path: "/projects", icon: <BiFolder className="text-xl" /> },
    { name: "Kontak", path: "/contact", icon: <BiEnvelope className="text-xl" /> },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/70 backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="relative">
          {/* Gradient line at bottom */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent-purple/5 to-accent-pink/5" />
            <motion.div
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-24 h-24 bg-primary/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-24 h-24 bg-accent-purple/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex items-center justify-between h-16">
              {/* Logo with enhanced animation */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-purple/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Link href="/" className="relative font-bold text-xl bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent group-hover:from-accent-purple group-hover:to-primary transition-all duration-300">
                  Wahyu Shiregaru
                </Link>
              </motion.div>
              
              {/* Desktop Menu with enhanced effects */}
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="relative group flex items-center gap-2"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${
                        pathname === item.path 
                          ? "text-primary"
                          : "text-gray-600 group-hover:text-primary"
                      } transition-colors duration-300`}
                    >
                      {item.icon}
                    </motion.div>
                    <span className={`${
                      pathname === item.path 
                        ? "text-primary"
                        : "text-gray-600 group-hover:text-primary"
                    } transition-colors duration-300 relative`}
                    >
                      {item.name}
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/50 to-accent-purple/50 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: pathname === item.path ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button with enhanced animation */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden relative group p-2 rounded-lg hover:bg-white/50 transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent-purple/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <RiMenu4Line className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors duration-300" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with enhanced animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-white/70 backdrop-blur-xl" />
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="px-2 pt-2 pb-3 space-y-1 relative"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent-purple/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Link
                      href={item.path}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                        pathname === item.path
                          ? "text-primary bg-primary/10"
                          : "text-gray-600 hover:text-primary"
                      } transition-all duration-300 relative`}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.icon}
                      </motion.div>
                      <span className="relative">
                        {item.name}
                        <motion.span
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/50 to-accent-purple/50 rounded-full"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: pathname === item.path ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </LazyMotion>
  );
} 