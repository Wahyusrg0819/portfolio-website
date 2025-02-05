import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-40 h-40 mx-auto mb-8">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nama Anda
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Full Stack Developer | UI/UX Designer
            </p>
            <div className="space-x-4">
              <Link
                href="/projects"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Lihat Proyek
              </Link>
              <Link
                href="/contact"
                className="bg-white text-blue-500 px-6 py-3 rounded-lg border border-blue-500 hover:bg-blue-50 transition"
              >
                Hubungi Saya
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 