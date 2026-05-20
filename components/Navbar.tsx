"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-[#edf4ef]/80 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">
            S
          </div>

          <div>
            <h1 className="text-green-700 font-bold text-lg leading-none">
              SMK Citra Negara
            </h1>
            <p className="text-[11px] text-gray-500">
              Building Future Innovators
            </p>
          </div>
        </div>

        {/* Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
          <li>
            <Link
              href="/"
              className="text-green-700 border-b-2 border-green-700 pb-1"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="#jurusan"
              className="hover:text-green-700 transition"
            >
              Program Keahlian
            </Link>
          </li>

          <li>
            <Link
              href="#biaya"
              className="hover:text-green-700 transition"
            >
              Biaya
            </Link>
          </li>

          <li>
            <Link
              href="#alur"
              className="hover:text-green-700 transition"
            >
              Alur Pendaftaran
            </Link>
          </li>

          <li>
            <Link
              href="#faq"
              className="hover:text-green-700 transition"
            >
              FAQ
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="px-5 py-2 rounded-full border border-green-700 text-green-700 hover:bg-green-50 transition">
            Login
          </button>

          <button className="px-5 py-2 rounded-full bg-green-700 text-white hover:bg-green-800 transition shadow-md">
            Daftar Sekarang
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-green-700">
          ☰
        </button>
      </nav>
    </header>
  );
}