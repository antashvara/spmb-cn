const steps = [
  {
    number: "01",
    title: "Buat Akun",
    desc: "Calon siswa membuat akun menggunakan email aktif untuk memulai proses pendaftaran.",
    size: "large",
  },
  {
    number: "02",
    title: "Lengkapi Data",
    desc: "Isi formulir pendaftaran dan lengkapi seluruh data diri dengan benar.",
    size: "small",
  },
  {
    number: "03",
    title: "Upload Berkas",
    desc: "Unggah dokumen persyaratan sesuai ketentuan sekolah.",
    size: "small",
  },
  {
    number: "04",
    title: "Verifikasi",
    desc: "Panitia akan memverifikasi seluruh data dan berkas pendaftaran.",
    size: "large",
  },
  {
    number: "05",
    title: "Pengumuman",
    desc: "Hasil seleksi dapat dilihat langsung melalui dashboard siswa.",
    size: "full",
  },
];

const cardStyles = [
  {
    bg: "from-emerald-500 to-green-600",
    title: "text-white",
    desc: "text-white/80",
    glow: "bg-emerald-300/30",
    number: "text-white/10",
    badge: "bg-white/15 text-white border-white/20",
  },

  {
    bg: "from-[#065f46] to-[#064e3b]",
    title: "text-white",
    desc: "text-white/80",
    glow: "bg-green-300/20",
    number: "text-white/10",
    badge: "bg-white/15 text-white border-white/20",
  },

  // CARD 03
  {
    bg: "from-[#dff7f3] to-[#c7f1ea]",
    title: "text-gray-900",
    desc: "text-gray-600",
    glow: "bg-teal-300/40",
    number: "text-teal-700/20",
    badge: "bg-teal-500/10 text-teal-700 border-teal-200",
  },

  {
    bg: "from-[#0f766e] to-[#115e59]",
    title: "text-white",
    desc: "text-white/80",
    glow: "bg-teal-300/20",
    number: "text-white/10",
    badge: "bg-white/15 text-white border-white/20",
  },

  // CARD 05
  {
    bg: "from-[#d9fbe8] to-[#ecfff5]",
    title: "text-gray-900",
    desc: "text-gray-600",
    glow: "bg-emerald-300/40",
    number: "text-emerald-700/20",
    badge: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
  },
];

export default function RegistrationFlow() {
  return (
    <section
      id="alur"
      className="w-full py-24 bg-[#edf4ef] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-emerald-600 font-semibold uppercase tracking-[0.2em] text-sm">
            ALUR PENDAFTARAN
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-5 leading-tight">
            Proses Pendaftaran
            <br />
            Yang Mudah & Modern
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-6 leading-relaxed">
            Sistem pendaftaran online yang cepat, praktis,
            dan terintegrasi untuk memudahkan calon siswa baru.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-6">

          {steps.map((step, index) => {
            const style = cardStyles[index];

            return (
              <div
                key={index}
                className={`
                  relative
                  overflow-hidden
                  rounded-[32px]
                  p-8
                  backdrop-blur-xl
                  border
                  border-white/40
                  shadow-xl
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  group
                  bg-gradient-to-br
                  ${style.bg}

                  ${
                    step.size === "large"
                      ? "lg:col-span-7 min-h-[280px]"
                      : step.size === "full"
                      ? "lg:col-span-12 min-h-[220px]"
                      : "lg:col-span-5 min-h-[280px]"
                  }
                `}
              >

                {/* Glow Effect */}
                <div
                  className={`
                    absolute
                    -top-10
                    -right-10
                    w-44
                    h-44
                    rounded-full
                    blur-3xl
                    opacity-70
                    group-hover:scale-125
                    transition-all
                    duration-700
                    ${style.glow}
                  `}
                ></div>

                {/* Decorative Blur */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-32
                    h-32
                    bg-white/10
                    blur-2xl
                    rounded-full
                  "
                ></div>

                {/* Large Background Number */}
                <div
                  className={`
                    absolute
                    -right-6
                    -bottom-12
                    text-[160px]
                    font-black
                    leading-none
                    select-none
                    ${style.number}
                  `}
                >
                  {step.number}
                </div>

                {/* Top Badge */}
                <div
                  className={`
                    relative
                    w-16
                    h-16
                    rounded-2xl
                    backdrop-blur-md
                    border
                    flex
                    items-center
                    justify-center
                    text-xl
                    font-bold
                    shadow-xl
                    mb-7
                    ${style.badge}
                  `}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative z-10">

                  <h3
                    className={`
                      text-2xl
                      lg:text-3xl
                      font-bold
                      mb-4
                      ${style.title}
                    `}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`
                      leading-relaxed
                      max-w-xl
                      ${style.desc}
                    `}
                  >
                    {step.desc}
                  </p>
                </div>

                {/* Floating Border */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[32px]
                    border
                    border-white/10
                    pointer-events-none
                  "
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}