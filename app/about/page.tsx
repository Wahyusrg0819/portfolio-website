"use client";

import Image from "next/image";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { FaCode, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiVuedotjs } from "react-icons/si";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useCallback, useState, useEffect } from "react";
import dynamic from 'next/dynamic';

const skills = [
  {
    name: "React & React Native",
    icon: <FaReact className="w-16 h-16 text-[#61DAFB]" />,
    description: "Pengembangan aplikasi web dan mobile modern",
    level: 30,
    bgColor: "from-[#61DAFB]/10 to-[#61DAFB]/20",
    barColor: "bg-[#61DAFB]"
  },
  {
    name: "Vue.js",
    icon: <SiVuedotjs className="w-16 h-16 text-[#42b883]" />,
    description: "Framework JavaScript progresif untuk UI",
    level: 30,
    bgColor: "from-[#42b883]/10 to-[#42b883]/20",
    barColor: "bg-[#42b883]"
  },
  // ... tambahkan skill lainnya dari page.tsx
];

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
    color: { value: "#4F46E5" },
    links: { enable: true, color: "#4F46E5", opacity: 0.2 },
    move: { enable: true, speed: 1 },
    size: { value: 3 },
    opacity: { value: 0.3 }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" }
    }
  },
  background: { color: { value: "transparent" } }
};

// Lazy load Particles untuk mengurangi beban awal
const DynamicParticles = dynamic(() => import('react-particles'), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />
});

export default function About() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="min-h-[80vh] relative flex items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Particles Background */}
          {!isMobile && (
            <DynamicParticles
              id="tsparticles"
              init={particlesInit}
              options={particlesOptions}
              className="absolute inset-0"
            />
          )}

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-purple">
                  Tentang Saya
                </h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100/20"
                >
                  <p className="mb-4">
                    Saya adalah seorang{" "}
                    <span className="text-primary-600 font-semibold">Mahasiswa Teknik Informatika</span>{" "}
                    di{" "}
                    <span className="text-accent-purple font-semibold">Universitas Islam Riau</span>.
                  </p>
                  <p className="mb-4">
                    <span className="font-medium text-gray-800">Passionate</span> dalam{" "}
                    <span className="text-primary font-semibold">pengembangan aplikasi web</span>{" "}
                    dan{" "}
                    <span className="text-primary font-semibold">mobile</span> dengan fokus pada{" "}
                    <span className="text-indigo-600 font-semibold">teknologi modern</span>{" "}
                    dan{" "}
                    <span className="text-indigo-600 font-semibold">user experience</span>.
                  </p>
                  <p>
                    Saya terus mengembangkan diri dalam{" "}
                    <span className="text-primary-600 font-semibold">Full Stack Development</span>{" "}
                    dan{" "}
                    <span className="text-accent-purple font-semibold">Cybersecurity</span>.
                  </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.title}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.2 }}
                      className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                    >
                      <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.iconColor} mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`} />
                      <h3 className="font-bold text-base sm:text-xl mb-1 sm:mb-2 text-gray-900">{stat.title}</h3>
                      <p className={`${stat.textColor} font-bold text-lg sm:text-2xl`}>{stat.value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="order-1 md:order-2 relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-purple/20 backdrop-blur-sm" />
                <Image
                  src="/me.png"
                  alt="Wahyu Muliadi Siregar"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
                  priority={!isMobile}
                  loading={isMobile ? "lazy" : "eager"}
                  fetchPriority={isMobile ? undefined : "high"}
                />
                <div className="absolute inset-0 bg-gradient-shine opacity-30" 
                     style={{ backgroundSize: '200% 200%' }} />
                
                {/* Fixed position particles */}
                {!isMobile && (
                  <>
                    {[...Array(6)].map((_, i) => {
                      const positions = [
                        { left: '20%', top: '20%' },
                        { left: '80%', top: '20%' },
                        { left: '20%', top: '80%' },
                        { left: '80%', top: '80%' },
                        { left: '50%', top: '10%' },
                        { left: '50%', top: '90%' },
                      ];
                      return (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-primary/30 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{
                            scale: [0, 1, 0],
                            y: [0, -10, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "easeInOut",
                          }}
                          style={positions[i]}
                        />
                      );
                    })}
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-100">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Skills Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16 relative"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-xl" />
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 tracking-tight relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                  Teknologi yang Saya Kuasai
                </span>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary/30 rounded-full" />
              </h2>

              <div className="relative max-w-3xl mx-auto">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium px-6 py-4 bg-white/50 rounded-xl shadow-sm backdrop-blur-sm border border-gray-100">
                  Berfokus pada{" "}
                  <span className="text-primary font-semibold">pengembangan web modern</span>{" "}
                  dan{" "}
                  <span className="text-primary font-semibold">keamanan siber</span>
                </p>
              </div>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative bg-gradient-to-br ${skill.bgColor} p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm`}
                >
                  <div className="absolute inset-0 bg-white/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="font-bold text-lg md:text-xl text-center mb-3 text-gray-900">{skill.name}</h3>
                    <p className="text-gray-700 text-center text-base leading-relaxed">{skill.description}</p>
                    {skill.level && (
                      <div className="mt-6">
                        <div className="h-2.5 bg-gray-200/50 rounded-full overflow-hidden backdrop-blur-sm">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={`h-full ${skill.barColor} rounded-full shadow-lg`}
                          />
                        </div>
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-sm font-semibold text-gray-700">Keahlian</span>
                          <span className="text-sm font-bold text-gray-900">{skill.level}%</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-accent-purple/10 rounded-full blur-3xl" />
        </section>
      </div>
    </LazyMotion>
  );
}

const stats = [
  {
    title: "Semester",
    value: "6",
    icon: FaGraduationCap,
    iconColor: "text-primary-600",
    textColor: "text-primary-600"
  },
  {
    title: "Organisasi",
    value: "1+",
    icon: FaBriefcase,
    iconColor: "text-accent-purple",
    textColor: "text-accent-purple"
  },
  {
    title: "Skill",
    value: "1+",
    icon: FaCode,
    iconColor: "text-accent-teal",
    textColor: "text-accent-teal"
  }
]; 