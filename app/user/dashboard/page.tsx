export default function DashboardPage() {
  return (
    <div className="space-y-6">

      {/* Hero */}
      <section
        className="
          relative
          overflow-hidden
          rounded-[32px]
          bg-gradient-to-br
          from-emerald-700
          via-emerald-600
          to-teal-500
          p-8
          text-white
          shadow-[0_20px_60px_rgba(5,150,105,0.25)]
        "
      >
        <div className="relative z-10">
          <p className="text-sm text-white/80 mb-2">
            SPMB 2026
          </p>

          <h1
            className="
              text-[34px]
              font-black
              leading-tight
            "
          >
            Selamat Datang,<br />
            Ananta 👋
          </h1>

          <p className="mt-3 text-white/80 max-w-[500px]">
            Lengkapi proses pendaftaranmu
            dan pantau perkembangan secara realtime.
          </p>
        </div>

        {/* Glow */}
        <div
          className="
            absolute
            w-[320px]
            h-[320px]
            rounded-full
            bg-white/10
            blur-3xl
            top-[-100px]
            right-[-80px]
          "
        />
      </section>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {[
          {
            title: "Status Pendaftaran",
            value: "Diproses",
          },
          {
            title: "Dokumen Upload",
            value: "4 / 6",
          },
          {
            title: "Pembayaran",
            value: "Belum Lunas",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="
              bg-white
              rounded-[28px]
              border
              border-emerald-500/10
              p-6
              shadow-sm
            "
          >
            <p className="text-[13px] text-gray-500">
              {card.title}
            </p>

            <h2
              className="
                mt-2
                text-[28px]
                font-black
                text-emerald-950
              "
            >
              {card.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Announcement */}
      <div
        className="
          bg-white
          rounded-[28px]
          border
          border-emerald-500/10
          p-6
        "
      >
        <h2
          className="
            text-[20px]
            font-bold
            text-emerald-950
          "
        >
          Pengumuman Terbaru
        </h2>

        <div className="mt-5 space-y-4">

          {[1,2,3].map((item) => (
            <div
              key={item}
              className="
                p-4
                rounded-2xl
                bg-emerald-50
                border
                border-emerald-500/10
              "
            >
              <h3 className="font-bold text-emerald-900">
                Jadwal Tes Seleksi Gelombang 1
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                Tes akan dilaksanakan tanggal 20 Juni 2026.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}