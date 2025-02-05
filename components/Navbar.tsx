"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { usePathname } from "next/navigation";

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
    { name: "Beranda", path: "/" },
    { name: "Tentang", path: "/about" },
    { name: "Proyek", path: "/projects" },
    { name: "Kontak", path: "/contact" },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="font-bold text-xl text-primary">
                Wahyu Shiregaru
              </Link>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative group"
                >
                  <span className={`${
                    pathname === item.path 
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  } transition-colors`}
                  >
                    {item.name}
                  </span>
                  {/* Animated underline */}
                  <motion.span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ${
                      pathname === item.path ? "w-full" : "w-0"
                    }`}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 8 : 0,
                  }}
                  className="w-6 h-0.5 bg-gray-600 block transition-all duration-300"
                />
                <motion.span
                  animate={{
                    opacity: isOpen ? 0 : 1,
                  }}
                  className="w-6 h-0.5 bg-gray-600 block my-1 transition-all duration-300"
                />
                <motion.span
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -8 : 0,
                  }}
                  className="w-6 h-0.5 bg-gray-600 block transition-all duration-300"
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg shadow-lg"
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.path}
                      className={`block px-3 py-2 rounded-lg ${
                        pathname === item.path
                          ? "text-primary bg-primary/10"
                          : "text-gray-600 hover:text-primary hover:bg-gray-50"
                      } transition-all duration-300`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
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