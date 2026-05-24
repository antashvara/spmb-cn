"use client";

import Link from "next/link";
import Image from "next/image";

export default function RegisterHero() {
  return (
    <section
      className="
        relative
        hidden
        lg:flex
        flex-col
        justify-between
        overflow-hidden
        min-h-screen
        px-10
        py-8
      "
    >

      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          scale-105
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(3,20,12,0.45),
              rgba(3,20,12,0.55)
            ),
            url('/cn6.png')
          `,
        }}
      />

      {/* Soft Glow */}
      <div
        className="
          absolute
          top-[-120px]
          right-[-120px]
          w-[320px]
          h-[320px]
          rounded-full
          bg-emerald-400/20
          blur-3xl
        "
      />

      {/* Navbar */}
      <nav
        className="
          relative
          z-20
          flex
          items-center
          justify-between
        "
      >

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo-cn.png"
            alt="Logo CN"
            width={42}
            height={42}
            className="object-contain"
            priority
          />

          <div>
            <h1
              className="
                text-[15px]
                font-bold
                text-white
                leading-tight
              "
            >
              SMK Citra Negara
            </h1>

            <p className="text-[11px] text-white/60">
              Smart Admission System
            </p>
          </div>
        </Link>

        <Link
          href="/login"
          className="
            px-5
            py-2.5
            rounded-xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/15
            text-white
            text-sm
            font-semibold
            hover:bg-white/15
            transition-all
            duration-300
          "
        >
          Login
        </Link>
      </nav>

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          justify-center
          flex-1
          max-w-[520px]
        "
      >

        {/* Badge */}
        <div
          className="
            inline-flex
            items-center
            gap-2
            w-fit
            px-4
            py-2
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border
            border-white/15
            text-white/90
            text-sm
            font-semibold
            mb-7
          "
        >

          <span
            className="
              w-2.5
              h-2.5
              rounded-full
              bg-emerald-400
              shadow-[0_0_10px_#34d399]
            "
          />

          SPMB 2026/2027 Dibuka
        </div>

        {/* Heading */}
        <h2
          className="
            text-[clamp(40px,5vw,68px)]
            font-black
            leading-[1.05]
            tracking-tight
            text-white
            drop-shadow-[0_6px_30px_rgba(0,0,0,0.45)]
          "
        >
          Mulai Masa
          <br />

          <span
            className="
              bg-gradient-to-r
              from-emerald-300
              via-teal-200
              to-green-100
              bg-clip-text
              text-transparent
            "
          >
            Depanmu
          </span>

          <br />
          Bersama CN.
        </h2>

        {/* Description */}
        <p
          className="
            mt-6
            text-white/72
            text-[15px]
            leading-relaxed
            max-w-[460px]
          "
        >
          Sistem Penerimaan Murid Baru berbasis digital
          modern dengan pengalaman pendaftaran yang cepat,
          nyaman, dan futuristik.
        </p>

        {/* Bottom Card */}
        <div
          className="
            mt-10
            w-fit
            px-5
            py-4
            rounded-2xl
            bg-white/10
            backdrop-blur-2xl
            border
            border-white/15
            shadow-[0_8px_40px_rgba(0,0,0,0.25)]
          "
        >

          <div className="flex items-center gap-4">

            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-gradient-to-br
                from-emerald-500
                to-green-400
                flex
                items-center
                justify-center
                text-white
                font-bold
                text-lg
              "
            >
              1.4K
            </div>

            <div>
              <p className="text-white font-semibold">
                Siswa Telah Mendaftar
              </p>

              <p className="text-white/60 text-sm">
                Tahun ajaran 2026/2027
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}