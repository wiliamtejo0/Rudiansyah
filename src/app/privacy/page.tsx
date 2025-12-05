'use client';

import { useState } from 'react';
import { Menu, X, ArrowLeft, Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PrivacyPolicy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Back Button */}
            <button
              onClick={() => router.back()}
              className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Kembali</span>
            </button>

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
              <Link href="/" className="block py-2 text-slate-700 hover:text-slate-900 font-medium">Beranda</Link>
              <Link href="/privacy" className="block py-2 text-slate-700 hover:text-slate-900 font-medium">Privacy</Link>
              <Link href="/terms" className="block py-2 text-slate-700 hover:text-slate-900 font-medium">Terms</Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-slate-600">Kebijakan Privasi RUDIANSYAH</p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-6"></div>
          </div>

          {/* Last Updated */}
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <p className="text-slate-600">
              <strong>Terakhir diperbarui:</strong> {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 text-yellow-600 mr-3" />
                Pendahuluan
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Selamat datang di RUDIANSYAH. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi 
                data pribadi yang Anda percayakan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami 
                mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan layanan kami.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Dengan menggunakan layanan RUDIANSYAH, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
              </p>
            </section>

            {/* Information Collection */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Database className="w-6 h-6 text-yellow-600 mr-3" />
                Informasi yang Kami Kumpulkan
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Informasi Pribadi</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Kami dapat mengumpulkan informasi pribadi seperti nama, alamat email, nomor telepon, 
                    dan informasi kontak lainnya yang Anda berikan secara sukarela.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Informasi Bisnis</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Informasi terkait kegiatan bisnis Anda yang diperlukan untuk menyediakan layanan profesional kami.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Informasi Penggunaan</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Data tentang bagaimana Anda berinteraksi dengan layanan kami untuk meningkatkan kualitas pelayanan.
                  </p>
                </div>
              </div>
            </section>

            {/* Information Usage */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Eye className="w-6 h-6 text-yellow-600 mr-3" />
                Penggunaan Informasi
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Tujuan Penggunaan</h3>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Menyediakan layanan profesional yang Anda minta</li>
                    <li>Mengkomunikasikan informasi terkait layanan</li>
                    <li>Meningkatkan kualitas layanan kami</li>
                    <li>Memproses transaksi dan pembayaran</li>
                    <li>Memenuhi kewajiban hukum dan peraturan</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Lock className="w-6 h-6 text-yellow-600 mr-3" />
                Perlindungan Data
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                RUDIANSYAH berkomitmen untuk melindungi informasi pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Enkripsi data yang aman</li>
                <li>Akses terbatas kepada informasi pribadi</li>
                <li>Keamanan fisik dan digital fasilitas kami</li>
                <li>Pemantauan keamanan berkelanjutan</li>
                <li>Kebijakan retensi data yang sesuai</li>
              </ul>
            </section>

            {/* User Rights */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <UserCheck className="w-6 h-6 text-yellow-600 mr-3" />
                Hak Anda
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Hak Privasi Anda</h3>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Mengakses informasi pribadi Anda</li>
                    <li>Memperbaiki informasi yang tidak akurat</li>
                    <li>Menghapus informasi pribadi Anda</li>
                    <li>Menolak pemrosesan informasi tertentu</li>
                    <li>Meminta salinan data pribadi Anda</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Hubungi Kami</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlindungan data pribadi Anda, 
                silakan hubungi kami:
              </p>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg">
                <div className="space-y-3">
                  <p className="text-slate-700">
                    <strong>Perusahaan:</strong> RUDIANSYAH
                  </p>
                  <p className="text-slate-700">
                    <strong>Alamat:</strong> JL.IR.SUTAMI, Desa/Kelurahan Karang Asam Ulu, Kec. Sungai Kunjang, Kota Samarinda, Provinsi Kalimantan Timur, 75126
                  </p>
                  <p className="text-slate-700">
                    <strong>Telepon:</strong> +6282382466336
                  </p>
                  <p className="text-slate-700">
                    <strong>Email:</strong> privacy@rudiansyah.com
                  </p>
                </div>
              </div>
            </section>

            {/* Policy Updates */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Pembaruan Kebijakan</h2>
              <p className="text-slate-600 leading-relaxed">
                RUDIANSYAH dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan 
                diberitahukan melalui website atau komunikasi langsung. Penggunaan lanjutan layanan kami 
                setelah perubahan menunjukkan penerimaan Anda terhadap kebijakan yang diperbarui.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">R</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">RUDIANSYAH</h3>
                <p className="text-slate-300 text-sm">Professional Agency</p>
              </div>
            </div>
            <p className="text-slate-300">
              © 2024 RUDIANSYAH. All rights reserved. Professional Agency Samarinda, Kalimantan Timur.
            </p>
            <div className="mt-4 space-x-4">
              <Link href="/privacy" className="text-slate-300 hover:text-yellow-400 transition-colors">Privacy Policy</Link>
              <span className="text-slate-500">•</span>
              <Link href="/terms" className="text-slate-300 hover:text-yellow-400 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}