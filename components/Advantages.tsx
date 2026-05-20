import {
  ShieldCheck,
  Laptop,
  GraduationCap,
  Users,
} from "lucide-react";

import Image from "next/image";

const cards = [
  {
    title: "Kurikulum Adaptif",
    desc: "Pembelajaran yang selaras dengan kebutuhan industri terbaru demi masa depan yang terjamin.",
    icon: Laptop,
    bg: "bg-emerald-500",
    text: "text-white",
  },
  {
    title: "Kemitraan Luas",
    desc: "Jaringan kerja sama dengan puluhan perusahaan multinasional untuk program magang dan penempatan kerja.",
    icon: Users,
    bg: "bg-[#00695c]",
    text: "text-white",
  },
  {
    title: "Karakter M.A.N.T.A.P",
    desc: "Mandiri, Amanah, Nasionalis, Terampil, Agamis, dan Profesional sebagai fondasi utama siswa.",
    icon: GraduationCap,
    bg: "bg-white",
    text: "text-gray-900",
  },
];

export default function Advantages() {
  return (
    <section className="w-full py-24 bg-[#edf4ef]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Visi & Misi Unggulan
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Menjadi institusi pendidikan kejuruan terdepan yang
            menghasilkan lulusan berakhlak mulia, kompeten,
            dan mandiri.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-6">

          {/* Main Card */}
          <div
            className="
              lg:col-span-8
              relative
              overflow-hidden
              rounded-[32px]
              h-[360px]
              group
              shadow-xl
            "
          >

            {/* Background Video */}
              <Image
                src="/cn6.png"
                alt="Fasilitas Sekolah"
                fill
                className="
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-700
                "
              />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            {/* Gradient Glow */}
            <div
              className="
                absolute
                -bottom-10
                -right-10
                w-56
                h-56
                bg-emerald-400/20
                blur-3xl
                rounded-full
              "
            ></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 z-10">

              <div
                className="
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  rounded-[28px]
                  p-6
                  max-w-xl
                "
              >

                <div className="flex items-center gap-4 mb-4">

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-emerald-500
                      text-white
                      flex
                      items-center
                      justify-center
                      shadow-xl
                    "
                  >
                    <ShieldCheck size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Fasilitas Berstandar Industri
                  </h3>
                </div>

                <p className="text-white/80 leading-relaxed">
                  Kami menyediakan lingkungan belajar modern dengan
                  laboratorium lengkap, ruang praktik, dan teknologi
                  pembelajaran terkini.
                </p>
              </div>
            </div>
          </div>

          {/* Top Right Card */}
          <div
            className="
              lg:col-span-4
              rounded-[32px]
              p-8
              bg-gradient-to-br
              from-emerald-500
              to-green-600
              text-white
              relative
              overflow-hidden
              shadow-xl
              hover:-translate-y-2
              transition-all
              duration-500
            "
          >

            {/* Glow */}
            <div
              className="
                absolute
                -top-10
                -right-10
                w-40
                h-40
                bg-white/10
                blur-3xl
                rounded-full
              "
            ></div>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-white/15
                backdrop-blur-md
                flex
                items-center
                justify-center
                mb-6
              "
            >
              <Laptop size={28} />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Kurikulum Adaptif
            </h3>

            <p className="text-white/80 leading-relaxed">
              Pembelajaran yang selaras dengan kebutuhan industri
              terbaru demi masa depan yang terjamin.
            </p>
          </div>

          {/* Bottom Left */}
          <div
            className="
              lg:col-span-4
              rounded-[32px]
              p-8
              bg-[#00695c]
              text-white
              relative
              overflow-hidden
              shadow-xl
              hover:-translate-y-2
              transition-all
              duration-500
            "
          >

            {/* Glow */}
            <div
              className="
                absolute
                -bottom-10
                -left-10
                w-40
                h-40
                bg-emerald-400/20
                blur-3xl
                rounded-full
              "
            ></div>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-white/10
                backdrop-blur-md
                flex
                items-center
                justify-center
                mb-6
              "
            >
              <Users size={28} />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Kemitraan Luas
            </h3>

            <p className="text-white/80 leading-relaxed">
              Jaringan kerja sama dengan puluhan perusahaan
              multinasional untuk program magang dan penempatan kerja.
            </p>
          </div>

          {/* Bottom Right */}
          <div
            className="
              lg:col-span-8
              rounded-[32px]
              p-8
              bg-white/80
              backdrop-blur-xl
              border
              border-white/50
              relative
              overflow-hidden
              shadow-xl
              hover:-translate-y-2
              transition-all
              duration-500
            "
          >

            {/* Glow */}
            <div
              className="
                absolute
                top-0
                right-0
                w-56
                h-56
                bg-emerald-200/30
                blur-3xl
                rounded-full
              "
            ></div>

            <div className="relative z-10">

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-emerald-500
                  text-white
                  flex
                  items-center
                  justify-center
                  mb-6
                  shadow-lg
                "
              >
                <GraduationCap size={28} />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Pembentukan Karakter M.A.N.T.A.P
              </h3>

              <p className="text-gray-600 leading-relaxed max-w-3xl">
                Mandiri, Amanah, Nasionalis, Terampil, Agamis,
                dan Profesional adalah nilai utama dalam
                pengembangan karakter siswa kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}