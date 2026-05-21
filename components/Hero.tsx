"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-[#edf4ef] pt-32 pb-16 lg:pt-36 lg:pb-24">
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
          grid
          lg:grid-cols-2
          gap-14
          items-stretch
        "
      >

        {/* Left Content */}
        <div className="flex flex-col justify-between">

          <div>

            {/* Badge */}
            <span
              className="
                inline-flex
                items-center
                gap-2
                px-6
                py-3
                rounded-full
                bg-gradient-to-r
                from-green-100
                to-emerald-50
                text-green-700
                text-sm
                font-bold
                tracking-wide
                mb-6
                border
                border-green-200
                shadow-md
                backdrop-blur-md
              "
            >
              ✦ SISTEM PENERIMAAN MURID BARU
            </span>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Pilihan Yang Tepat
              <br />
              Di Sekolah Yang
              <br />
              <span className="italic text-green-700">
                M.A.N.T.A.P
              </span>
            </h1>

            {/* Desc */}
            <p className="text-gray-600 leading-relaxed max-w-xl mb-8 text-lg">
              Membangun masa depan cerah melalui pendidikan berbasis
              teknologi dan karakter. Bergabunglah dengan komunitas
              pembelajar yang inovatif dan siap kerja.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <button
              className="
                px-7
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-green-600
                to-emerald-500
                text-white
                font-semibold
                shadow-xl
                hover:scale-[1.03]
                hover:shadow-green-300/40
                transition-all
                duration-300
              "
            >
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
                bg-white/70
                backdrop-blur-md
                text-gray-800
                border
                border-white/50
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                inline-flex
                items-center
                justify-center
                font-medium
              "
            >
              Profil Sekolah
            </a>
          </div>
        </div>

        {/* Right Video */}
        <div className="relative h-full">

          {/* Glow */}
          <div
            className="
              absolute
              inset-0
              bg-green-300
              blur-3xl
              opacity-20
              rounded-full
            "
          ></div>

          {/* Video Container */}
          <div
            className="
              relative
              bg-white
              rounded-[32px]
              shadow-2xl
              overflow-hidden
              border
              border-gray-100
              h-full
              min-h-[480px]
            "
          >

            {/* Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
              "
            >
              <source src="/bg-video.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/20
                via-transparent
                to-black/10
              "
            ></div>

          </div>
        </div>
      </div>
    </section>
  );
}