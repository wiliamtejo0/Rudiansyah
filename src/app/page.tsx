'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Shield, Users, TrendingUp, Award, Clock, Handshake } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">RUDIANSYAH</h1>
                <p className="text-xs text-slate-600">Professional Agency</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Beranda</Link>
              <Link href="#about" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Tentang</Link>
              <Link href="#services" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Layanan</Link>
              <Link href="#contact" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Kontak</Link>
              <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-slate-200">
                <Link href="/privacy" className="text-slate-600 hover:text-slate-800 text-sm transition-colors">Privacy</Link>
                <Link href="/terms" className="text-slate-600 hover:text-slate-800 text-sm transition-colors">Terms</Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <Link href="#home" className="block py-2 text-slate-700 hover:text-slate-900 font-medium">Beranda</Link>
              <Link href="#about" className="block py-2 text-slate-700 hover:text-slate-900 font-medium">Tentang</Link>
              <Link href="#services" className="block py-2 text-slate-700 hover:text-slate-900 font-medium">Layanan</Link>
              <Link href="#contact" className="block py-2 text-slate-700 hover:text-slate-900 font-medium">Kontak</Link>
              <div className="pt-3 border-t border-slate-200 space-y-2">
                <Link href="/privacy" className="block py-2 text-slate-600 hover:text-slate-800 text-sm">Privacy Policy</Link>
                <Link href="/terms" className="block py-2 text-slate-600 hover:text-slate-800 text-sm">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-700/90"></div>
        <div className="absolute inset-0">
          <Image
            src="/logo.png"
            alt="RUDIANSYAH Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                RUDIANSYAH
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
            </div>
            <h2 className="text-2xl lg:text-4xl font-semibold text-white mb-6">
              Profesional Agency Terpercaya
            </h2>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Mitra bisnis Anda untuk solusi profesional dan terpercaya. Kami berkomitmen memberikan layanan terbaik untuk kesuksesan usaha Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all transform hover:scale-105 shadow-lg">
                Hubungi Kami
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/30">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Tentang RUDIANSYAH</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Profesional agency yang berdedikasi untuk memberikan solusi terbaik bagi mitra bisnis kami
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-8 rounded-2xl">
                  <div className="w-full h-64 bg-gradient-to-br from-slate-300 to-slate-400 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-slate-900">R</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">RUDIANSYAH</h3>
                      <p className="text-slate-700">Professional Agency</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Mitra Bisnis Terpercaya Anda</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  RUDIANSYAH adalah profesional agency yang telah berpengalaman dalam memberikan solusi bisnis terpercaya. 
                  Kami memahami kebutuhan mitra bisnis dan berkomitmen untuk memberikan layanan terbaik dengan standar profesional yang tinggi.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Dengan lokasi strategis di Samarinda, Kalimantan Timur, kami siap melayani berbagai kebutuhan bisnis Anda 
                  dengan dedikasi dan integritas yang tinggi.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-yellow-600" />
                    <span className="text-slate-700 font-medium">Terpercaya</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-yellow-600" />
                    <span className="text-slate-700 font-medium">Profesional</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-yellow-600" />
                    <span className="text-slate-700 font-medium">Mitra Fokus</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-yellow-600" />
                    <span className="text-slate-700 font-medium">Berkembang</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Layanan Kami</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Berbagai layanan profesional untuk mendukung kesuksesan bisnis Anda
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Konsultasi Bisnis</h3>
                <p className="text-slate-600 leading-relaxed">
                  Layanan konsultasi profesional untuk membantu mengembangkan strategi bisnis yang efektif dan efisien.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Manajemen Mitra</h3>
                <p className="text-slate-600 leading-relaxed">
                  Pengelolaan hubungan mitra bisnis yang profesional untuk menciptakan kolaborasi yang saling menguntungkan.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Pengembangan Usaha</h3>
                <p className="text-slate-600 leading-relaxed">
                  Dukungan strategis untuk pengembangan dan ekspansi bisnis ke arah yang lebih baik dan lebih luas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Hubungi Kami</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Siap untuk bermitra dengan kami? Hubungi kami hari ini
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Informasi Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Alamat</h4>
                      <p className="text-slate-600">
                        JL.IR.SUTAMI, Desa/Kelurahan Karang Asam Ulu<br />
                        Kec. Sungai Kunjang, Kota Samarinda<br />
                        Provinsi Kalimantan Timur, 75126
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Telepon</h4>
                      <p className="text-slate-600">+6282382466336</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Email</h4>
                      <p className="text-slate-600">info@rudiansyah.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Pesan</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all resize-none"
                        placeholder="Tulis pesan Anda..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all transform hover:scale-[1.02] shadow-lg"
                    >
                      Kirim Pesan
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                    <span className="text-slate-900 font-bold text-lg">R</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">RUDIANSYAH</h3>
                    <p className="text-slate-300 text-sm">Professional Agency</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Mitra bisnis terpercaya untuk solusi profesional dan berkualitas tinggi.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Layanan</h4>
                <ul className="space-y-2 text-slate-300">
                  <li><Link href="#services" className="hover:text-yellow-400 transition-colors">Konsultasi Bisnis</Link></li>
                  <li><Link href="#services" className="hover:text-yellow-400 transition-colors">Manajemen Mitra</Link></li>
                  <li><Link href="#services" className="hover:text-yellow-400 transition-colors">Pengembangan Usaha</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-slate-300">
                  <li><Link href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-yellow-400 transition-colors">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-8 text-center">
              <p className="text-slate-300">
                © 2024 RUDIANSYAH. All rights reserved. Professional Agency Samarinda, Kalimantan Timur.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}