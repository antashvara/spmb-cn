const stats = [
  {
    number: "2500+",
    label: "SISWA AKTIF",
  },
  {
    number: "95%",
    label: "LULUSAN BEKERJA",
  },
  {
    number: "50+",
    label: "MITRA INDUSTRI",
  },
  {
    number: "120+",
    label: "PRESTASI NASIONAL",
  },
];

export default function Stats() {
  return (
    <section className="w-full bg-[#edf4ef] pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/80
                backdrop-blur-xl
                rounded-[24px]
                p-8
                text-center
                border
                border-white/40
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-500
                group
                relative
                overflow-hidden
              "
            >

              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-green-400/10
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                "
              ></div>

              {/* Number */}
              <h3
                className="
                  relative
                  text-3xl
                  lg:text-4xl
                  font-bold
                  text-green-700
                  mb-3
                "
              >
                {item.number}
              </h3>

              {/* Label */}
              <p
                className="
                  relative
                  text-gray-500
                  text-sm
                  tracking-widest
                  font-medium
                "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}