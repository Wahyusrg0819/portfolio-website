"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState, useEffect } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import Typewriter from 'typewriter-effect';
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { 
  FaGithub, 
  FaInstagram, 
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaShieldAlt
} from "react-icons/fa";
import { 
  SiVuedotjs,
  SiFirebase,
  SiTypescript
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  level?: number;
  bgColor: string;
  barColor?: string;
}

interface SecurityTool {
  name: string;
  icon: React.ReactNode;
  description: string;
  bgColor: string;
}

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={`group relative bg-gradient-to-br ${skill.bgColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm`}
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
  );
};

const SecurityToolCard = ({ tool }: { tool: SecurityTool }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={`flex flex-col items-center p-8 bg-gradient-to-br ${tool.bgColor} rounded-xl shadow-lg backdrop-blur-sm
        hover:shadow-xl transition-all duration-300 min-w-[250px] border border-gray-100/20`}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-full blur-xl" />
        {tool.icon}
      </div>
      <span className="text-lg font-bold text-gray-900 mt-4 mb-2">{tool.name}</span>
      <p className="text-base text-gray-700 text-center leading-relaxed">{tool.description}</p>
    </motion.div>
  );
};

const skills: Skill[] = [
  {
    name: "React & React Native",
    icon: <FaReact className="w-16 h-16 text-[#61DAFB] group-hover:text-[#00D8FF] transition-colors duration-300" />,
    description: "Pengembangan aplikasi web dan mobile modern",
    level: 85,
    bgColor: "from-[#61DAFB]/10 to-[#61DAFB]/20",
    barColor: "bg-[#61DAFB]"
  },
  {
    name: "Vue.js",
    icon: <SiVuedotjs className="w-16 h-16 text-[#42b883] group-hover:text-[#34495e] transition-colors duration-300" />,
    description: "Framework JavaScript progresif untuk UI",
    level: 75,
    bgColor: "from-[#42b883]/10 to-[#42b883]/20",
    barColor: "bg-[#42b883]"
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="w-16 h-16 text-[#68A063] group-hover:text-[#3C873A] transition-colors duration-300" />,
    description: "Runtime JavaScript untuk backend",
    level: 80,
    bgColor: "from-[#68A063]/10 to-[#68A063]/20",
    barColor: "bg-[#68A063]"
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="w-16 h-16 text-[#FFCA28] group-hover:text-[#FFA000] transition-colors duration-300" />,
    description: "Backend dan database untuk aplikasi",
    level: 80,
    bgColor: "from-[#FFCA28]/10 to-[#FFCA28]/20",
    barColor: "bg-[#FFA000]"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-16 h-16 text-[#3178C6] group-hover:text-[#235A97] transition-colors duration-300" />,
    description: "Pengembangan yang aman dan terstruktur",
    level: 75,
    bgColor: "from-[#3178C6]/10 to-[#3178C6]/20",
    barColor: "bg-[#3178C6]"
  }
  
];

const securityTools: SecurityTool[] = [
  {
    name: "Penetration Testing",
    icon: <FaShieldAlt className="w-14 h-14 text-red-500 group-hover:text-red-600 transition-colors duration-300 relative z-10" />,
    description: "Pengujian keamanan sistem dan identifikasi kerentanan",
    bgColor: "from-red-500/10 to-red-500/20"
  }
];

const TypewriterComponent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Render konten statis yang sama di server dan client sebelum hydration
  if (!isMounted) {
    return (
      <div className="min-h-[72px] flex items-center" suppressHydrationWarning>
        <span className="inline-block bg-gradient-to-r from-primary-600 to-accent-purple bg-clip-text text-transparent" suppressHydrationWarning>
          Wahyu M. Siregar
        </span>
      </div>
    );
  }

  // Hanya render Typewriter setelah mounting di client
  return (
    <div className="min-h-[72px] flex items-center" suppressHydrationWarning>
      <div className="text-2xl md:text-4xl font-bold w-full" suppressHydrationWarning>
        <Typewriter
          options={{
            strings: [
              'Wahyu M. Siregar',
              'Web Developer',
              'Mobile Developer',
              'Security Expert'
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 80,
            cursor: '|',
            wrapperClassName: "inline-block bg-gradient-to-r from-primary-600 to-accent-purple bg-clip-text text-transparent",
            cursorClassName: "text-primary-600 animate-pulse"
          }}
        />
      </div>
    </div>
  );
};

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen" suppressHydrationWarning>
        {/* Hero Section */}
        <section className="min-h-screen relative flex items-center py-12 sm:py-16 md:py-20 overflow-hidden" suppressHydrationWarning>
          {/* Rainbow Gradient Background with Animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent-purple/5 to-accent-pink/5 animate-gradient" suppressHydrationWarning>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" suppressHydrationWarning />
          </div>

          {/* Enhanced Particles Background */}
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              particles: {
                number: { 
                  value: 30, 
                  density: { 
                    enable: true, 
                    value_area: 800 
                  } 
                },
                color: { 
                  value: ["#4F46E5", "#EC4899", "#8B5CF6", "#14B8A6"] 
                },
                links: { 
                  enable: true, 
                  color: "#4F46E5",
                  opacity: 0.2,
                  distance: 150
                },
                move: { 
                  enable: true, 
                  speed: 1,
                  direction: "none",
                  random: true,
                  straight: false,
                  outModes: "out"
                },
                size: { value: 3 },
                opacity: { 
                  value: 0.3,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1
                  }
                }
              },
              interactivity: {
                events: { 
                  onHover: { 
                    enable: true, 
                    mode: "grab",
                    parallax: { enable: true, force: 60 }
                  }
                }
              },
              background: { color: { value: "transparent" } }
            }}
            className="absolute inset-0"
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mx-4 sm:mx-6 lg:mx-8">
              {/* Enhanced Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-center md:text-left w-full md:w-1/2 relative"
              >
                {/* Floating Elements with Rainbow Colors */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -left-8 -top-8 w-16 h-16 bg-gradient-to-r from-primary/20 to-accent-purple/20 rounded-full blur-xl"
                />
                <motion.div
                  animate={{
                    rotate: [360, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -right-8 bottom-8 w-20 h-20 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 rounded-full blur-xl"
                />

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative z-10 text-gray-900">
                    <TypewriterComponent />
                  </h1>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="relative z-10 mb-6"
                  >
                    <span className="text-base sm:text-lg md:text-xl text-gray-800 font-medium relative">
                      <span className="relative">
                        Mahasiswa Teknik Informatika di Universitas Islam Riau
                        <motion.div
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/80 to-accent-purple/80"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ delay: 1, duration: 0.8 }}
                        />
                      </span>
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  className="relative z-10 mb-8"
                >
                  <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto md:mx-0">
                    <span className="font-bold text-gray-900">Passionate</span> dalam{" "}
                    <span className="text-primary-700 font-bold">pengembangan aplikasi web</span>{" "}
                      dan{" "}
                    <span className="text-primary-700 font-bold">mobile</span> dengan fokus pada{" "}
                    <span className="text-accent-purple font-bold">teknologi modern</span>{" "}
                      dan{" "}
                    <span className="text-accent-pink font-bold">user experience</span>.
                    </p>
                  </motion.div>
                
                  {/* Enhanced Social Links with Rainbow Effects */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="flex gap-6 justify-center md:justify-start mb-8 relative z-10"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 360 }} 
                      whileTap={{ scale: 0.9 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-purple/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300" />
                      <Link 
                        href="https://github.com/Wahyusrg0819"
                        target="_blank"
                      className="relative bg-white/80 p-3 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/50 shadow-lg group-hover:shadow-primary/30 transition-all duration-300"
                      >
                      <FaGithub className="h-6 w-6 text-gray-800 group-hover:text-primary transition-colors" />
                      </Link>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 360 }} 
                      whileTap={{ scale: 0.9 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300" />
                      <Link 
                        href="#"
                        target="_blank"
                      className="relative bg-white/80 p-3 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/50 shadow-lg group-hover:shadow-accent-purple/30 transition-all duration-300"
                      >
                      <FaInstagram className="h-6 w-6 text-gray-800 group-hover:text-accent-purple transition-colors" />
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Action Buttons with Rainbow Effects */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start relative z-10"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent-purple/20 to-accent-pink/20 rounded-lg blur-md group-hover:blur-xl transition-all duration-300" />
                      <Link
                        href="/projects"
                      className="relative bg-gradient-to-r from-primary-600 via-accent-purple to-accent-pink text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg group-hover:shadow-primary/50"
                      >
                        Lihat Proyek Saya
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <FaArrowRight className="w-4 h-4" />
                        </motion.div>
                      </Link>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 to-accent-pink/10 rounded-lg blur-md group-hover:blur-xl transition-all duration-300" />
                      <Link
                        href="/contact"
                      className="relative border-2 border-accent-purple text-accent-purple px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-accent-purple/5 transition-all duration-300 shadow-lg group-hover:shadow-accent-purple/30"
                      >
                        Hubungi Saya
                      </Link>
                    </motion.div>
                  </motion.div>
              </motion.div>
              
              {/* Profile Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex-1 flex justify-center md:justify-end w-full md:w-1/2"
              >
                <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
                  {/* Outer glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-accent-purple/30 to-accent-pink/30 blur-3xl animate-pulse-slow" />
                  
                  {/* Rotating border with multiple layers */}
                  <div className="absolute inset-0 rounded-full bg-gradient-shine animate-spin-slow" style={{ backgroundSize: '200% 200%' }}>
                    <div className="absolute inset-1 rounded-full bg-gray-900/90 backdrop-blur-sm" />
                  </div>

                  {/* Rotating geometric shapes */}
                  <div className="absolute inset-0 animate-spin-slow">
                    {/* Corner dots with glowing effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary/40 rounded-full blur-sm">
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent-purple/40 rounded-full blur-sm">
                      <div className="absolute inset-0 rounded-full bg-accent-purple animate-ping opacity-50" />
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-accent-blue/40 rounded-full blur-sm">
                      <div className="absolute inset-0 rounded-full bg-accent-blue animate-ping opacity-50" />
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-accent-teal/40 rounded-full blur-sm">
                      <div className="absolute inset-0 rounded-full bg-accent-teal animate-ping opacity-50" />
                    </div>

                    {/* Additional decorative elements */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-reverse-spin" />
                    <div className="absolute inset-2 rounded-full border border-white/5 animate-spin-slow" />
                  </div>

                  {/* Main image container with enhanced effects */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut"
                    }}
                    className="relative w-full h-full"
                  >
                    {/* Inner container with gradient border */}
                    <div className="absolute inset-6 rounded-full p-1 bg-gradient-to-br from-primary/20 via-accent-purple/20 to-accent-pink/20 backdrop-blur-sm">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-900/90">
                        {/* Image */}
                        <Image
                          src="/me.png"
                          alt="Wahyu Muliadi Siregar"
                          fill
                          className="object-cover rounded-full"
                          priority
                          sizes="(max-width: 768px) 288px, 384px"
                        />

                        {/* Overlay effects */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent-purple/10 mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-shine opacity-30" style={{ backgroundSize: '200% 200%' }} />
                        
                        {/* Inner glow */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 to-accent-purple/5 mix-blend-overlay" />
                      </div>
                    </div>

                    {/* Additional decorative elements */}
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/20 to-accent-purple/20 blur animate-pulse-slow" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 to-white/10 mix-blend-overlay" />
                  </motion.div>

                  {/* Floating particles with enhanced animation */}
                  <div className="absolute inset-0">
                    {[
                      { left: '20%', top: '10%', delay: 0 },
                      { left: '80%', top: '15%', delay: 0.5 },
                      { left: '10%', top: '50%', delay: 1 },
                      { left: '90%', top: '45%', delay: 1.5 },
                      { left: '30%', top: '90%', delay: 2 },
                      { left: '70%', top: '85%', delay: 2.5 }
                    ].map((position, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/30 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          y: [-20, 0, 20]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: position.delay,
                          ease: "easeInOut",
                        }}
                        style={{
                          left: position.left,
                          top: position.top
                        }}
                      >
                        <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Glowing orbs */}
                  <div className="absolute -inset-4 opacity-50">
                    <div className="absolute top-1/2 left-0 w-4 h-4 bg-primary/30 rounded-full blur-sm animate-pulse" />
                    <div className="absolute top-1/2 right-0 w-4 h-4 bg-accent-purple/30 rounded-full blur-sm animate-pulse" />
                    <div className="absolute top-0 left-1/2 w-4 h-4 bg-accent-pink/30 rounded-full blur-sm animate-pulse" />
                    <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-accent-blue/30 rounded-full blur-sm animate-pulse" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12 sm:py-16 md:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-100">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
            {/* Skills Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              {/* Background accent untuk judul */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-xl" />
              
              {/* Judul dengan styling yang ditingkatkan */}
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 tracking-tight relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                  Teknologi yang Saya Kuasai
                </span>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary/30 rounded-full" />
              </h2>

              {/* Deskripsi dengan styling yang ditingkatkan */}
              <div className="relative max-w-3xl mx-auto">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium px-6 py-4 bg-white/50 rounded-xl shadow-sm backdrop-blur-sm border border-gray-100">
                  Berfokus pada{" "}
                  <span className="text-primary font-semibold">pengembangan web modern</span>{" "}
                  dan{" "}
                  <span className="text-primary font-semibold">keamanan siber</span>,{" "}
                  saya terus mengembangkan keterampilan dalam berbagai teknologi terkini.
                </p>
                
                {/* Decorative dots */}
                <div className="absolute -right-4 -bottom-4 w-8 h-8 bg-primary/10 rounded-full" />
                <div className="absolute -left-4 -top-4 w-6 h-6 bg-primary/10 rounded-full" />
              </div>
            </motion.div>

            {/* Skills Grid dengan margin yang konsisten */}
            <div className="relative backdrop-blur-sm bg-white/40 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl mx-4 sm:mx-6 lg:mx-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* Security Tools Section dengan margin yang konsisten */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 sm:mt-16 md:mt-20 text-center relative mx-4 sm:mx-6 lg:mx-8"
            >
              {/* Background accent untuk judul cybersecurity */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-red-500/5 to-transparent blur-xl" />
              
              {/* Judul dengan styling yang ditingkatkan */}
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 tracking-tight relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
                  Fokus Cybersecurity
                </span>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-500/30 rounded-full" />
              </h3>

              {/* Container untuk security tools dengan styling yang ditingkatkan */}
              <div className="relative max-w-5xl mx-auto">
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                  {securityTools.map((tool) => (
                    <SecurityToolCard key={tool.name} tool={tool} />
                  ))}
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -right-8 -bottom-8 w-16 h-16 bg-red-500/10 rounded-full blur-lg" />
                <div className="absolute -left-8 -top-8 w-20 h-20 bg-purple-500/10 rounded-full blur-lg" />
              </div>

              {/* Additional description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-8 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium px-6 py-4 bg-white/50 rounded-xl shadow-sm backdrop-blur-sm border border-gray-100"
              >
                Memperdalam pengetahuan dalam{" "}
                <span className="text-red-600 font-semibold">keamanan siber</span>{" "}
                untuk mengembangkan sistem yang{" "}
                <span className="text-purple-600 font-semibold">aman dan terpercaya</span>
              </motion.p>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl" />
        </section>
      </div>
    </LazyMotion>
  );
}
