import Link from "next/link";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary mb-2">Wahyu Shiregaru</h3>
            <p className="text-gray-600">
              Mahasiswa Teknik Informatika
              <br />
              Universitas Islam Riau
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Menu Cepat</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-600 hover:text-primary">
                Beranda
              </Link>
              <Link href="/about" className="block text-gray-600 hover:text-primary">
                Tentang
              </Link>
              <Link href="/projects" className="block text-gray-600 hover:text-primary">
                Proyek
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-primary">
                Kontak
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Media Sosial</h4>
            <div className="flex justify-center md:justify-end space-x-6">
              <Link 
                href="https://github.com/Wahyusrg0819"
                target="_blank"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </Link>
              <Link 
                href="https://www.instagram.com/wahyu_shiregaru/"
                target="_blank"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </Link>
              <Link 
                href="mailto:wahyusiregar0819@gmail.com"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Wahyu Muliadi Siregar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 