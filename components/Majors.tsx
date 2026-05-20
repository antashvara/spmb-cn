import Image from "next/image";

const majors = [
  {
    title: "PPLG",
    subtitle: "Pengembangan Perangkat Lunak dan Gim",
    image: "/jurusan-pplg.jpeg",
    logo: "/logo-pplg.png",
    color: "from-emerald-500/20",
  },
  {
    title: "TJKT",
    subtitle: "Teknik Jaringan Komputer dan Telekomunikasi",
    image: "/jurusan-tjkt.jpeg",
    logo: "/logo-tjkt.png",
    color: "from-cyan-500/20",
  },
  {
    title: "DKV",
    subtitle: "Desain Komunikasi Visual",
    image: "/jurusan-dkv.jpeg",
    logo: "/logo-dkv.png",
    color: "from-pink-500/20",
  },
  {
    title: "MPLB",
    subtitle: "Manajemen Perkantoran Layanan Bisnis",
    image: "/jurusan-mplb.jpeg",
    logo: "/logo-mplb.png",
    color: "from-yellow-500/20",
  },
  {
    title: "PEMASARAN",
    subtitle: "",
    image: "/jurusan-pm.jpeg",
    logo: "/logo-pm.png",
    color: "from-orange-500/20",
  },
  {
    title: "PERHOTELAN",
    subtitle: "",
    image: "/jurusan-ph.jpeg",
    logo: "/",
    color: "from-blue-500/20",
  },
];

export default function Majors() {
  return (
    <section
      id="jurusan"
      className="w-full py-28 bg-[#edf4ef]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="text-green-700 font-semibold uppercase tracking-[0.2em] text-sm">
            PROGRAM KEAHLIAN
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-5 leading-tight">
            Temukan Jurusan
            <br />
            Impianmu
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-6 leading-relaxed text-lg">
            Program pembelajaran modern berbasis teknologi dan industri
            untuk membangun generasi unggul dan siap kerja.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {majors.map((major, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                h-[520px]
                cursor-pointer
                transition-all
                duration-500
                hover:-translate-y-4
              "
            >

              {/* Background Image */}
              <Image
                src={major.image}
                alt={major.title}
                fill
                className="
                  object-cover
                  group-hover:scale-110
                  transition-transform
                  duration-700
                "
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10"></div>

              {/* Glow */}
              <div
                className={`
                  absolute
                  inset-0
                  bg-gradient-to-br
                  ${major.color}
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                `}
              ></div>

              {/* Logo */}
              <div
                className="
                  absolute
                  top-6
                  left-6
                  z-20
                "
              >
                <Image
                  src={major.logo}
                  alt={major.title}
                  width={70}
                  height={70}
                  className="
                    object-contain
                    drop-shadow-2xl
                  "
                />
              </div>

              {/* Bottom Content */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-7
                  z-20
                "
              >

                {/* Glass Card */}
                <div
                  className="
                    backdrop-blur-xl
                    bg-white/10
                    border
                    border-white/20
                    rounded-[30px]
                    p-6
                    shadow-2xl
                  "
                >

                  <h3 className="text-4xl font-bold text-white mb-3">
                    {major.title}
                  </h3>

                  <p className="text-white/80 leading-relaxed mb-7">
                    {major.subtitle}
                  </p>

                  {/* Button */}
                  <button
                    className="
                      w-full
                      py-4
                      rounded-2xl
                      bg-white
                      text-gray-900
                      font-semibold
                      hover:bg-green-500
                      hover:text-white
                      transition-all
                      duration-300
                      shadow-xl
                    "
                  >
                    Lihat Detail →
                  </button>
                </div>
              </div>

              {/* Floating Blur */}
              <div
                className="
                  absolute
                  -bottom-20
                  -right-20
                  w-52
                  h-52
                  bg-green-400/20
                  blur-3xl
                  rounded-full
                "
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}