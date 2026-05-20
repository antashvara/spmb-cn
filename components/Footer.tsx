import {
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f2d1f] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Top Footer */}
        <div className="grid gap-14 lg:grid-cols-4 pb-16 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center font-bold text-xl">
                S
              </div>

              <div>
                <h2 className="font-bold text-xl">
                  SMK Citra Negara
                </h2>

                <p className="text-sm text-green-200">
                  Building Future Innovators
                </p>
              </div>
            </div>

            <p className="text-white/70 leading-relaxed mb-6">
              Sekolah modern berbasis teknologi yang berkomitmen
              menciptakan generasi unggul, kreatif, dan siap kerja.
            </p>

            {/* Social */}
            <div className="flex gap-4">
              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-white/10
                  hover:bg-green-600
                  transition
                  flex
                  items-center
                  justify-center
                "
              >
                IG
              </a>

              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-white/10
                  hover:bg-green-600
                  transition
                  flex
                  items-center
                  justify-center
                "
              >
                <Globe size={20} />
              </a>

              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-white/10
                  hover:bg-green-600
                  transition
                  flex
                  items-center
                  justify-center
                "
              >
                YT
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              Menu
            </h3>

            <ul className="space-y-4 text-white/70">

              <li>
                <a href="#" className="hover:text-green-300 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#jurusan" className="hover:text-green-300 transition">
                  Program Keahlian
                </a>
              </li>

              <li>
                <a href="#alur" className="hover:text-green-300 transition">
                  Alur Pendaftaran
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:text-green-300 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              Kontak
            </h3>

            <div className="space-y-5 text-white/70">

              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-green-300 mt-1"
                />

                <p>
                  Jl. Pendidikan No. 123,
                  Jakarta, Indonesia
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="text-green-300"
                />

                <p>+62 812 3456 7890</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="text-green-300"
                />

                <p>info@smkcitranegara.sch.id</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              Bergabung Sekarang
            </h3>

            <p className="text-white/70 leading-relaxed mb-6">
              Jadilah bagian dari sekolah modern dengan pendidikan
              berbasis teknologi dan masa depan.
            </p>

            <button
              className="
                w-full
                py-4
                rounded-2xl
                bg-green-600
                hover:bg-green-500
                transition
                font-medium
                shadow-lg
              "
            >
              Daftar Sekarang →
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-white/50">

          <p>
            © 2025 SMK Citra Negara. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-green-300 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-green-300 transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}