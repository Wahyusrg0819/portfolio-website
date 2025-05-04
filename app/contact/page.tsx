"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaMapMarkerAlt, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useCallback, useState, useEffect } from "react";
import dynamic from 'next/dynamic';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

// Pindahkan konfigurasi particles ke konstanta terpisah di luar komponen
const particlesOptions = {
  particles: {
    number: { value: 8, density: { enable: true, value_area: 800 } },
    color: { value: ["#4F46E5", "#EC4899"] }, // Kurangi jumlah warna
    links: { 
      enable: true, 
      color: "#4F46E5",
      opacity: 0.2,
      distance: 150
    },
    move: { 
      enable: true, 
      speed: 1,
      direction: "none" as const,
      random: true,
      straight: false,
      outMode: "out" as const
    },
    size: { value: 3 },
    opacity: { value: 0.3 }
  },
  interactivity: {
    events: { 
      onHover: { 
        enable: true, 
        mode: "grab" as const
      }
    }
  },
  background: { color: { value: "transparent" } }
};

// Lazy load Particles untuk mengurangi beban awal
const DynamicParticles = dynamic(() => import('react-particles'), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />
});

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  useEffect(() => setMounted(true), []);

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-8 h-8" />,
      title: "Email",
      value: "wahyumuliadisiregar@gmail.com",
      link: "mailto:wahyumuliadisiregar@gmail.com",
      color: "hover:text-red-600",
      gradient: "from-red-500/20 to-orange-500/20",
      hoverGradient: "hover:from-red-500/30 hover:to-orange-500/30",
      borderColor: "border-red-200",
      titleColor: "text-red-900",
      valueColor: "text-red-700",
    },
    {
      icon: <FaWhatsapp className="w-8 h-8" />,
      title: "WhatsApp",
      value: "+62 857-6330-4788",
      link: "https://wa.me/6285763304788",
      color: "hover:text-green-600",
      gradient: "from-green-500/20 to-emerald-500/20",
      hoverGradient: "hover:from-green-500/30 hover:to-emerald-500/30",
      borderColor: "border-green-200",
      titleColor: "text-green-900",
      valueColor: "text-green-700",
    },
    {
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      title: "Lokasi",
      value: "Tapanuli Selatan, Sumatera Utara, Indonesia",
      link: "https://maps.google.com/?q=TapanuliSelatan,SumateraUtara,Indonesia",
      color: "hover:text-blue-600",
      gradient: "from-blue-500/20 to-cyan-500/20",
      hoverGradient: "hover:from-blue-500/30 hover:to-cyan-500/30",
      borderColor: "border-blue-200",
      titleColor: "text-blue-900",
      valueColor: "text-blue-700",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-10 h-10" />,
      name: "GitHub",
      url: "https://github.com/Wahyusrg0819",
      color: "hover:text-gray-800",
      gradient: "from-gray-500/10 to-gray-700/10",
      hoverGradient: "hover:from-gray-500/20 hover:to-gray-700/20",
      description: "Lihat proyek dan kontribusi saya",
      titleColor: "text-gray-900",
      descColor: "text-gray-700",
    },
    {
      icon: <FaInstagram className="w-10 h-10" />,
      name: "Instagram",
      url: "https://instagram.com/wahyu_shiregaru",
      color: "hover:text-pink-600",
      gradient: "from-pink-500/10 via-purple-500/10 to-indigo-500/10",
      hoverGradient: "hover:from-pink-500/20 hover:via-purple-500/20 hover:to-indigo-500/20",
      description: "Ikuti saya di Instagram",
      titleColor: "text-pink-900",
      descColor: "text-pink-700",
    },
    {
      icon: <FaLinkedin className="w-10 h-10" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/wahyumuliadisiregar",
      color: "hover:text-blue-600",
      gradient: "from-blue-500/10 to-cyan-500/10",
      hoverGradient: "hover:from-blue-500/20 hover:to-cyan-500/20",
      description: "Mari terhubung di LinkedIn",
      titleColor: "text-blue-900",
      descColor: "text-blue-700",
    },
  ];

  if (!mounted) return null;

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen pt-16">
        <section className="min-h-screen relative flex items-center py-12 sm:py-16 md:py-20">
          {/* Rainbow Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent-purple/5 to-accent-pink/5 animate-gradient">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
          </div>

          {/* Particles dengan warna yang lebih beragam */}
          {!isMobile && (
            <DynamicParticles
              id="tsparticles"
              init={particlesInit}
              options={particlesOptions}
              className="absolute inset-0"
            />
          )}

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            {/* Header Section dengan teks yang lebih kontras */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 via-accent-purple to-accent-pink animate-text">
                  Hubungi Saya
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-gradient-to-r from-primary-600 via-accent-purple to-accent-pink rounded-full" />
              </h1>
              <p className="text-base sm:text-lg text-gray-800 max-w-xl sm:max-w-2xl mx-auto leading-relaxed bg-white/60 backdrop-blur-sm p-3 sm:p-4 rounded-xl font-medium">
                Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui salah satu platform berikut
              </p>
            </motion.div>

            {/* Contact Info Grid dengan margin yang konsisten */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mx-4 sm:mx-6 lg:mx-8 mb-8 sm:mb-12 md:mb-16">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${info.gradient} hover:${info.hoverGradient} backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 
                    shadow-lg border ${info.borderColor} hover:shadow-xl transition-all duration-300 group text-center
                    transform hover:-translate-y-1 bg-white/80 flex flex-col items-center justify-center`}
                >
                  <div className={`text-gray-700 ${info.color} transition-all duration-300 mb-3 sm:mb-4
                    transform group-hover:scale-110`}>
                    {info.icon}
                  </div>
                  <h3 className={`font-bold text-lg sm:text-xl mb-1 sm:mb-2 ${info.titleColor}`}>{info.title}</h3>
                  <p className={`${info.valueColor} group-hover:text-gray-900 transition-colors duration-300 font-medium text-sm sm:text-base break-words`}>
                    {info.value}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Social Links Section dengan margin yang konsisten */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 mx-4 sm:mx-6 lg:mx-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-accent-purple">
                  Media Sosial
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-accent-purple rounded-full" />
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`group flex flex-col items-center p-4 sm:p-6 rounded-xl bg-gradient-to-br ${social.gradient} 
                      ${social.hoverGradient} transition-all duration-300 transform hover:-translate-y-1 bg-white/90`}
                  >
                    <div className={`text-gray-700 ${social.color} transition-all duration-300 mb-3 sm:mb-4 
                      transform group-hover:scale-110`}>
                      {social.icon}
                    </div>
                    <h3 className={`font-semibold text-base sm:text-lg mb-1 sm:mb-2 ${social.titleColor}`}>{social.name}</h3>
                    <p className={`${social.descColor} text-center text-xs sm:text-sm group-hover:text-gray-900 transition-colors duration-300 font-medium`}>
                      {social.description}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl" />
        </section>
      </div>
    </LazyMotion>
  );
} 