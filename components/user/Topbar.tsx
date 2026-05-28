"use client";

import {
  Bell,
  CalendarDays,
} from "lucide-react";

export default function Topbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-40
        h-[74px]
        bg-white/80
        backdrop-blur-xl
        border-b
        border-emerald-500/10
        px-8
        flex
        items-center
        justify-between
      "
    >
      {/* Left */}
      <div>
        <h1
          className="
            text-[22px]
            font-extrabold
            text-emerald-950
          "
        >
          Dashboard
        </h1>

        <p className="text-[13px] text-gray-500 mt-1">
          Selamat datang kembali 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        <button
          className="
            w-11
            h-11
            rounded-2xl
            border
            border-emerald-500/10
            bg-white
            flex
            items-center
            justify-center
            hover:bg-emerald-50
            transition
          "
        >
          <Bell size={18} />
        </button>

        <button
          className="
            flex
            items-center
            gap-2
            h-11
            px-4
            rounded-2xl
            border
            border-emerald-500/10
            bg-white
            text-[13px]
            font-semibold
            text-gray-700
            hover:bg-emerald-50
            transition
          "
        >
          <CalendarDays size={17} />
          Tahun Ajaran 2026
        </button>
      </div>
    </header>
  );
}