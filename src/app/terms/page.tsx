'use client';

import { useState } from 'react';
import { Menu, X, ArrowLeft, FileText, Shield, Users, AlertCircle, CheckCircle, Scale } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TermsAndConditions() {
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
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms & Conditions</h1>
            <p className="text-xl text-slate-600">Syarat dan Ketentuan Layanan RUDIANSYAH</p>
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
                Selamat datang di RUDIANSYAH. Syarat dan Ketentuan ini mengatur penggunaan layanan profesional 
                yang kami sediakan. Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan ini.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Harap baca dengan seksama sebelum menggunakan layanan kami.
              </p>
            </section>

            {/* Services */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Users className="w-6 h-6 text-yellow-600 mr-3" />
                Layanan Kami
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Deskripsi Layanan</h3>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    RUDIANSYAH menyediakan layanan profesional meliputi:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Konsultasi bisnis dan strategi</li>
                    <li>Manajemen hubungan mitra</li>
                    <li>Pengembangan dan ekspansi usaha</li>
                    <li>Layanan agen profesional lainnya</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Ketersediaan Layanan</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Kami berusaha untuk menyediakan layanan yang kontinu, namun tidak menjamin ketersediaan 100% 
                    dan dapat melakukan pemeliharaan berkala.
                  </p>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-yellow-600 mr-3" />
                Tanggung Jawab Pengguna
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Kewajiban Pengguna</h3>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Memberikan informasi yang akurat dan lengkap</li>
                    <li>Menggunakan layanan untuk tujuan yang sah</li>
                    <li>Mematuhi hukum dan peraturan yang berlaku</li>
                    <li>Tidak melanggar hak pihak ketiga</li>
                    <li>Menjaga kerahasiaan informasi bisnis</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Larangan</h3>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Penggunaan layanan untuk kegiatan ilegal</li>
                    <li>Pencemaran nama baik atau pemerasan</li>
                    <li>Pengiriman informasi palsu atau menyesatkan</li>
                    <li>Upaya untuk membobol sistem keamanan</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Scale className="w-6 h-6 text-yellow-600 mr-3" />
                Ketentuan Pembayaran
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Struktur Biaya</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Biaya layanan akan dijelaskan sebelum dimulainya kerja sama. Semua biaya yang disepakati 
                    bersifat mengikat dan harus dibayar sesuai dengan jadwal yang ditentukan.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Metode Pembayaran</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Pembayaran dapat dilakukan melalui metode yang disepakati bersama. Semua pembayaran harus 
                    dilakukan dalam mata uang Rupiah.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Keterlambatan Pembayaran</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Keterlambatan pembayaran dapat dikenakan denda sesuai dengan kesepakatan yang telah ditetapkan.
                  </p>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-yellow-600 mr-3" />
                Hak Kekayaan Intelektual
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Hak Cipta</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Semua materi yang disediakan oleh RUDIANSYAH dilindungi oleh hak cipta dan tidak boleh 
                    direproduksi tanpa izin tertulis.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Merek Dagang</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nama "RUDIANSYAH" dan logo terkait adalah merek dagang terdaftar dan dilindungi hukum.
                  </p>
                </div>
              </div>
            </section>

            {/* Confidentiality */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-yellow-600 mr-3" />
                Kerahasiaan
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Informasi Rahasia</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Baik RUDIANSYAH maupun klien setuju untuk menjaga kerahasiaan informasi bisnis yang 
                    dibagikan selama kerja sama.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Kewajiban Kerahasiaan</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Kewajiban kerahasiaan tetap berlaku setelah berakhirnya kerja sama kecuali informasi 
                    tersebut telah menjadi domain publik.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-yellow-600 mr-3" />
                Pembatasan Tanggung Jawab
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Batasan Tanggung Jawab</h3>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    RUDIANSYAH tidak bertanggung jawab atas:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Kerugian tidak langsung atau konsekuensial</li>
                    <li>Kehilangan data atau keuntungan bisnis</li>
                    <li>Kerusakan yang disebabkan oleh pihak ketiga</li>
                    <li>Kegagalan teknis di luar kendali kami</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-yellow-600 mr-3" />
                Pengakhiran Kerja Sama
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Pengakhiran oleh Pihak Manapun</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Kerja sama dapat diakhiri oleh salah satu pihak dengan pemberitahuan tertulis minimal 30 hari 
                    sebelumnya.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Pengakhiran Langsung</h3>
                  <p className="text-slate-600 leading-relaxed">
                    RUDIANSYAH berhak mengakhiri kerja sama secara langsung jika terjadi pelanggaran berat 
                    terhadap syarat dan ketentuan.
                  </p>
                </div>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Scale className="w-6 h-6 text-yellow-600 mr-3" />
                Penyelesaian Sengketa
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Hukum yang Berlaku</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Yurisdiksi</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Sengketa akan diselesaikan melalui negosiasi terlebih dahulu. Jika tidak tercapai kesepakatan, 
                    sengketa akan diajukan ke pengadilan di Kota Samarinda.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Hubungi Kami</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
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
                    <strong>Email:</strong> legal@rudiansyah.com
                  </p>
                </div>
              </div>
            </section>

            {/* Agreement */}
            <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-xl border border-yellow-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-yellow-600 mr-3" />
                Pernyataan Persetujuan
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Dengan menggunakan layanan RUDIANSYAH, Anda menyatakan bahwa telah membaca, memahami, 
                dan setuju untuk terikat oleh Syarat dan Ketentuan ini.
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