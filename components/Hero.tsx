"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-[#edf4ef] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs font-semibold mb-6">
            ✦ PENERIMAAN SISWA BARU
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
            Pilihan Yang Tepat
            <br />
            Di Sekolah Yang
            <br />
            <span className="italic text-green-700">
              M.A.N.T.A.P
            </span>
          </h1>

          <p className="text-gray-600 leading-relaxed max-w-xl mb-8">
            Membangun masa depan cerah melalui pendidikan berbasis
            teknologi dan karakter. Bergabunglah dengan komunitas
            pembelajar yang inovatif dan siap kerja.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-7 py-4 rounded-2xl bg-green-700 text-white font-medium shadow-lg hover:bg-green-800 transition">
              Daftar Sekarang →
            </button>

            <a
              href="https://smk.citranegara.sch.id"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-7
                py-4
                rounded-2xl
                bg-white
                text-gray-800
                border
                border-gray-200
                hover:shadow-md
                transition
                inline-flex
                items-center
                justify-center
              "
            >
              Lihat Profil
            </a>
          </div>
        </div>

        {/* Right Video */}
        <div className="relative">

          <div className="absolute inset-0 bg-green-300 blur-3xl opacity-20 rounded-full"></div>

          <div
            className="
              relative
              bg-white
              rounded-[32px]
              shadow-2xl
              overflow-hidden
              border
              border-gray-100
            "
          >

            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/bg-video.mp4" type="video/mp4" />
            </video>

          </div>
        </div>
      </div>
    </section>
  );
}