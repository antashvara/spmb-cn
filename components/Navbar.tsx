"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-2xl
        bg-white/60
        border-b
        border-white/20
        shadow-[0_8px_30px_rgb(0,0,0,0.05)]
      "
    >
      <nav
        className="
          w-full
          px-6
          lg:px-12
          h-24
          flex
          items-center
          justify-between
        "
      >

        {/* LEFT */}
        <div className="flex items-center gap-3 shrink-0 group cursor-pointer">

          {/* Logo */}
          <div
          className="
            transition-all
            duration-500
            group-hover:scale-110
            shrink-0
          "
        >
          <Image
            src="/logo-cn.png"
            alt="Logo SMK Citra Negara"
            width={80}
            height={80}
            className="
              object-contain
              drop-shadow-xl
              w-16
              h-16
              lg:w-20
              lg:h-20
            "
            priority
          />
        </div>

          {/* Text */}
          <div className="pb-1">
            <h1
              className="
                text-2xl
                lg:text-3xl
                font-black
                leading-tight
                tracking-tight
                bg-gradient-to-r
                from-green-700
                to-emerald-500
                bg-clip-text
                text-transparent
              "
            >
              SMK Citra Negara
            </h1>
          </div>
        </div>

        {/* CENTER MENU */}
        <ul
          className="
            hidden
            lg:flex
            items-center
            gap-2
            text-sm
            font-semibold
          "
        >

          {[
            { name: "Beranda", href: "/" },
            { name: "Program Keahlian", href: "#jurusan" },
            { name: "Biaya", href: "#biaya" },
            { name: "Alur Pendaftaran", href: "#alur" },
            { name: "FAQ", href: "#faq" },
          ].map((item, index) => (
            <li key={index}>

              <Link
                href={item.href}
                className="
                  px-5
                  py-3
                  rounded-2xl
                  border
                  border-transparent
                  bg-white/40
                  backdrop-blur-md
                  text-gray-700
                  font-semibold
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:text-green-700
                  hover:shadow-xl
                  hover:border-green-100
                "
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT BUTTONS */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">

          {/* Login */}
          <Link
            href="/login"
            className="
              px-6
              py-3
              rounded-2xl
              border
              border-green-200
              bg-white/70
              backdrop-blur-md
              text-green-700
              font-semibold
              hover:bg-green-50
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
              inline-flex
              items-center
              justify-center
            "
          >
            Login
          </Link>

          {/* Register */}
          <button
            className="
              relative
              overflow-hidden
              px-7
              py-3
              rounded-2xl
              bg-gradient-to-r
              from-green-600
              to-emerald-500
              text-white
              font-semibold
              shadow-xl
              hover:shadow-green-300/40
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >

            {/* Glow */}
            <span
              className="
                absolute
                inset-0
                bg-white/10
                opacity-0
                hover:opacity-100
                transition
              "
            ></span>

            <span className="relative z-10">
              Daftar Sekarang
            </span>
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="
            lg:hidden
            w-12
            h-12
            rounded-2xl
            bg-white
            shadow-lg
            flex
            items-center
            justify-center
            text-2xl
            text-green-700
            hover:scale-105
            transition-all
          "
        >
          ☰
        </button>
      </nav>
    </header>
  );
}