"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  ClipboardList,
  FolderOpen,
  CreditCard,
  Bell,
  LogOut,
} from "lucide-react";

const menus = [
  {
    label: "Dashboard",
    href: "/user/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Profil Saya",
    href: "/user/profil",
    icon: User,
  },
  {
    label: "Pendaftaran",
    href: "/user/pendaftaran",
    icon: ClipboardList,
  },
  {
    label: "Dokumen",
    href: "/user/dokumen",
    icon: FolderOpen,
  },
  {
    label: "Pembayaran",
    href: "/user/pembayaran",
    icon: CreditCard,
  },
  {
    label: "Pengumuman",
    href: "/user/pengumuman",
    icon: Bell,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        fixed
        left-0
        top-0
        w-[250px]
        h-screen
        bg-white
        border-r
        border-emerald-500/10
        px-5
        py-6
        flex
        flex-col
        z-50
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div
          className="
            w-11
            h-11
            rounded-2xl
            bg-gradient-to-br
            from-emerald-700
            to-emerald-400
            flex
            items-center
            justify-center
            text-white
            font-black
            shadow-lg
            shadow-emerald-500/30
          "
        >
          CN
        </div>

        <div>
          <h1 className="text-[14px] font-bold text-emerald-950">
            SMK Citra Negara
          </h1>

          <p className="text-[11px] text-gray-500">
            Smart Admission
          </p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2">
        {menus.map((menu) => {
          const Icon = menu.icon;

          const active =
            pathname === menu.href;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-2xl
                transition-all
                duration-200
                text-[14px]
                font-semibold

                ${
                  active
                    ? "bg-gradient-to-r from-emerald-600 to-teal-400 text-white shadow-lg shadow-emerald-500/25"
                    : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-700"
                }
              `}
            >
              <Icon size={18} />
              {menu.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="mt-auto">
        <button
          className="
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-2xl
            text-red-500
            hover:bg-red-50
            transition
            font-semibold
            text-[14px]
          "
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}