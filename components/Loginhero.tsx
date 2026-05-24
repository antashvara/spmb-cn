"use client";

import Image from "next/image";

export default function LoginHero() {
  return (
    <div className="relative flex-1 hidden md:flex overflow-hidden min-h-screen">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/cn1.png')`,
          imageRendering: "auto",
        }}
      />

      {/* Soft Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/30
        "
      />

      {/* Soft Glow */}
      <div
        className="
          absolute
          top-[-120px]
          right-[-120px]
          w-[420px]
          h-[420px]
          bg-emerald-400/15
          blur-3xl
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-[-100px]
          left-[-100px]
          w-[320px]
          h-[320px]
          bg-green-500/10
          blur-3xl
          rounded-full
        "
      />

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          w-full
          px-10
          text-center
        "
      >

        {/* Logo */}
        <div className="animate-float mb-10">

          <div
            className="
              relative
              w-40
              h-40
              rounded-full
              bg-white/10
              backdrop-blur-2xl
              border
              border-white/20
              shadow-[0_8px_40px_rgba(0,0,0,0.35)]
              flex
              items-center
              justify-center
            "
          >

            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-gradient-to-br
                from-white/10
                to-transparent
              "
            />

            <Image
              src="/logo-cn.png"
              alt="Logo SMK Citra Negara"
              width={140}
              height={140}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div className="max-w-xl animate-fade-in-up animation-delay-300">

          <h2
            className="
              text-[clamp(34px,4vw,58px)]
              font-extrabold
              leading-[1.1]
              tracking-tight
              text-white
              drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]
            "
          >
            Pilihan Yang Tepat
            <br />
            Di Sekolah Yang
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
              M.A.N.T.A.P
            </span>
          </h2>

          <p
            className="
              mt-5
              text-white/75
              text-[15px]
              leading-relaxed
              max-w-md
              mx-auto
            "
          >
            Sistem Penerimaan Murid Baru SMK Citra Negara
            berbasis digital modern, cepat, dan efisien.
          </p>

          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              mt-7
              px-5
              py-3
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border
              border-white/15
              text-white/90
              text-sm
              font-semibold
              shadow-lg
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

            Pendaftaran SPMB 2026/2027 Dibuka
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div
        className="
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
          flex
          gap-6
          z-10
        "
      >

        {["Bantuan", "Kontak", "Panduan"].map((item) => (
          <a
            key={item}
            href="#"
            className="
              text-[13px]
              text-white/45
              hover:text-emerald-300
              transition-all
              duration-300
            "
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}