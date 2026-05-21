"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Camera,
  Play,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#0b1511]
        text-white
        pt-16
        pb-8
        border-t
        border-white/5
      "
    >

      {/* Soft Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[200px]
          bg-emerald-500/10
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Main Footer */}
        <div
          className="
            grid
            lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr]
            gap-10
            pb-12
            border-b
            border-white/10
          "
        >

          {/* Brand */}
          <div>

            {/* Logo + Text */}
            <div className="flex items-center gap-4 mb-5">

              {/* Logo */}
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  shrink-0
                "
              >
                <Image
                  src="/logo-cn.png"
                  alt="Logo SMK Citra Negara"
                  width={42}
                  height={42}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Text */}
              <div className="flex flex-col">

                <h2
                  className="
                    text-[22px]
                    lg:text-[25px]
                    font-black
                    leading-none
                    tracking-[-0.02em]
                    whitespace-nowrap
                    bg-gradient-to-r
                    from-white
                    to-emerald-300
                    bg-clip-text
                    text-transparent
                  "
                >
                  SMK Citra Negara
                </h2>

                <p className="text-sm text-white/50 mt-1">
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/60 leading-relaxed text-sm max-w-sm">
              Pilihan Yang Tepat Di Sekolah Yang M.A.N.T.A.P
              
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">

              {[
                {
                  icon: Camera,
                  href: "https://www.instagram.com/smkcitranegaradepok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                },
                {
                  icon: Globe,
                  href: "https://smk.citranegara.sch.id",
                },
                {
                  icon: Play,
                  href: "https://youtube.com/@citranegaratv9070?si=61Zi2jlq-i4LkjcL",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-11
                    h-11
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-white/70
                    hover:text-emerald-300
                    hover:border-emerald-400/30
                    hover:bg-white/10
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:pl-6">

            <h3 className="text-lg font-bold mb-5">
              Navigasi
            </h3>

            <ul className="space-y-4">

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
                      group
                      flex
                      items-center
                      justify-between
                      text-white/60
                      hover:text-emerald-300
                      transition-all
                      duration-300
                    "
                  >
                    <span>{item.name}</span>

                    <ArrowUpRight
                      size={15}
                      className="
                        opacity-0
                        -translate-x-2
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        transition-all
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg font-bold mb-5">
              Kontak
            </h3>

            <div className="space-y-5">

              {/* Address */}
              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="text-emerald-300 mt-1 shrink-0"
                />

                <p className="text-white/60 text-sm leading-relaxed">
                  Jl. Kemiri Jaya No.99,
                  Beji, Kota Depok,
                  Jawa Barat 16421
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">

                <Phone
                  size={18}
                  className="text-emerald-300 shrink-0"
                />

                <p className="text-white/60 text-sm">
                  (021) 77201052
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">

                <Mail
                  size={18}
                  className="text-emerald-300 shrink-0"
                />

                <p className="text-white/60 text-sm">
                  info@citranegara.sch.id
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>

            <div
              className="
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-7
              "
            >

              <h3 className="text-2xl font-bold mb-4">
                Bergabung Sekarang
              </h3>

              <p className="text-white/60 leading-relaxed text-sm mb-6">
                Mulai perjalanan pendidikanmu bersama
                sekolah modern berbasis teknologi.
              </p>

              <button
                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-green-600
                  to-emerald-500
                  text-white
                  font-semibold
                  shadow-lg
                  hover:shadow-emerald-500/20
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                Daftar Sekarang →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            pt-6
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-4
            text-sm
          "
        >

          <p className="text-white/40">
            © 2026 SMK Citra Negara. All rights reserved.
          </p>

          <div className="flex gap-6 text-white/40">

            <a
              href="#"
              className="hover:text-emerald-300 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-emerald-300 transition"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}