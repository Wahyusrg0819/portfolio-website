"use client";

import Image from "next/image";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useCallback } from "react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  github?: string;
  live?: string;
  tech: string[];
  features: string[];
  gradient: string;
  hoverGradient: string;
  textGradient: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const projects = [
  {
    title: "MelodyMessages",
    description: "Aplikasi mobile inovatif yang menggabungkan kekuatan musik dan pesan personal dalam satu platform yang elegan.",
    longDescription: "Dibangun dengan React Native & Expo, mengintegrasikan Spotify API untuk memberikan pengalaman musik yang personal.",
    image: "/projects/melodymessages.jpg",
    github: "https://github.com/Wahyusrg0819/MelodyMessages",
    live: "#",
    tech: ["React Native", "Expo", "Firebase", "Spotify API"],
    features: [
      "Integrasi dengan Spotify untuk pemilihan lagu",
      "Sistem pesan personal yang elegan",
      "UI/UX yang responsif dan modern",
      "Manajemen state dengan Firebase"
    ],
    gradient: "from-blue-500/20 to-purple-500/20",
    hoverGradient: "hover:from-blue-500/30 hover:to-purple-500/30",
    textGradient: "from-blue-600 to-purple-600"
  },
  {
    title: "Konversi Kriptografi",
    description: "Aplikasi web untuk konversi dan enkripsi teks menggunakan berbagai metode kriptografi.",
    longDescription: "Dibangun dengan HTML, CSS, dan JavaScript untuk memberikan antarmuka yang interaktif dan mudah digunakan.",
    image: "/projects/kriptografi.jpg",
    github: "https://github.com/Wahyusrg0819/WahyuMuliadSiregar_223510883_Konversi_Kriptografi",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Konversi teks ke berbagai format kriptografi",
      "Antarmuka pengguna yang intuitif",
      "Implementasi algoritma kriptografi dasar",
      "Responsif di berbagai ukuran layar"
    ],
    gradient: "from-green-500/20 to-teal-500/20",
    hoverGradient: "hover:from-green-500/30 hover:to-teal-500/30",
    textGradient: "from-green-600 to-teal-600"
  }
];

export default function Projects() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen pt-16">
        <section className="min-h-screen relative flex items-center py-12 sm:py-16 md:py-20">
          {/* Rainbow Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent-purple/5 to-accent-pink/5 animate-gradient">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
          </div>

          {/* Particles dengan warna yang lebih beragam */}
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              particles: {
                number: { value: 30, density: { enable: true, value_area: 800 } },
                color: { value: ["#4F46E5", "#EC4899", "#8B5CF6", "#14B8A6"] },
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
                opacity: { value: 0.3 }
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
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 via-accent-purple to-accent-pink">
                  Proyek Saya
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-800 max-w-2xl mx-auto">
                Kumpulan proyek yang telah saya kembangkan dengan fokus pada
                <span className="text-primary-600 font-semibold"> inovasi</span> dan
                <span className="text-accent-purple font-semibold"> teknologi modern</span>
              </p>
            </motion.div>

            {/* Projects Grid dengan margin yang konsisten */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mx-4 sm:mx-6 lg:mx-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
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

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100/20 
      hover:shadow-xl transition-all duration-500"
  >
    {/* Image Container */}
    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
      <Image
        src={project.image}
        alt={`${project.title} Preview`}
        fill
        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 
        group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Project Links - Floating on image */}
      <div className="absolute top-4 right-4 flex gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 
        transform translate-y-2 group-hover:translate-y-0">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            className="p-2 sm:p-3 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl 
              transform hover:scale-110 transition-all duration-300"
            whileHover={{ y: -2 }}
          >
            <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
          </motion.a>
        )}
        {project.live && (
          <motion.a
            href={project.live}
            target="_blank"
            className="p-2 sm:p-3 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl 
              transform hover:scale-110 transition-all duration-300"
            whileHover={{ y: -2 }}
          >
            <FaExternalLinkAlt className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
          </motion.a>
        )}
      </div>
    </div>

    {/* Content Container */}
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Title */}
      <div className="space-y-2">
        <h3 className={`text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${project.textGradient}`}>
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {project.tech.map((tech: string) => (
          <span
            key={tech}
            className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 rounded-full
              hover:bg-gray-200 transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Features List */}
      <div className="space-y-3 sm:space-y-4">
        <h4 className="font-semibold text-sm sm:text-base text-gray-900">Fitur Utama:</h4>
        <ul className="space-y-2">
          {project.features.map((feature: string, idx: number) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-2 sm:gap-3 text-gray-600"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
              <span className="text-xs sm:text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Long Description */}
      <p className="text-xs sm:text-sm text-gray-600 border-t border-gray-100 pt-3 sm:pt-4">
        {project.longDescription}
      </p>
    </div>
  </motion.div>
); 