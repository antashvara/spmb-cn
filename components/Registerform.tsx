"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  IdCard,
  Loader2,
} from "lucide-react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    await new Promise((r) => setTimeout(r, 2000));

    setLoading(false);
  };

  return (
    <section
      className="
        relative
        flex-1
        flex
        items-center
        justify-center
        px-6
        py-10
        bg-[#f7faf8]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          top-[-120px]
          right-[-100px]
          w-[320px]
          h-[320px]
          bg-emerald-400/10
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      {/* Form Card */}
      <div
        className="
          relative
          w-full
          max-w-[440px]
          rounded-[30px]
          border
          border-emerald-500/10
          bg-white/88
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(5,150,105,0.10)]
          overflow-hidden
          animate-fade-in-up
        "
      >
        {/* Top Accent */}
        <div
          className="
            h-1.5
            w-full
            bg-gradient-to-r
            from-emerald-600
            via-green-500
            to-teal-400
          "
        />

        <div className="p-8">

          {/* Logo */}
          <div className="flex items-center gap-3 mb-7">

            <div
              className="
                w-12
                h-12
                rounded-2xl
                bg-gradient-to-br
                from-emerald-700
                to-emerald-400
                flex
                items-center
                justify-center
                shadow-lg
                shadow-emerald-500/25
              "
            >
              <Image
                src="/logo-cn.png"
                alt="Logo CN"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>

            <div>
              <h2
                className="
                  text-[15px]
                  font-bold
                  text-emerald-950
                  leading-tight
                "
              >
                SMK Citra Negara
              </h2>

              <p className="text-[11px] text-gray-500 mt-0.5">
                Smart Admission System
              </p>
            </div>
          </div>

          {/* Heading */}
          <h1
            className="
              text-[28px]
              font-extrabold
              text-emerald-950
              leading-tight
            "
          >
            Buat Akun Baru
          </h1>

          <p
            className="
              text-[13px]
              text-gray-500
              mt-2
              leading-relaxed
            "
          >
            Lengkapi data diri untuk memulai proses
            pendaftaran SPMB.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-7 space-y-4"
          >
            {/* Nama */}
            <InputField
              icon={<User size={17} />}
              placeholder="Nama Lengkap"
              type="text"
            />

            {/* Email */}
            <InputField
              icon={<Mail size={17} />}
              placeholder="Alamat Email"
              type="email"
            />

            {/* Grid */}
            <div className="grid grid-cols-2 gap-3">

              <InputField
                icon={<IdCard size={17} />}
                placeholder="NISN"
                type="text"
              />

              <InputField
                icon={<Phone size={17} />}
                placeholder="Telepon"
                type="text"
              />
            </div>

            {/* Password */}
            <div className="relative">

              <InputField
                icon={<Lock size={17} />}
                placeholder="Password"
                type={showPassword ? "text" : "password"}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                  hover:text-emerald-600
                  transition
                "
              >
                {showPassword ? (
                  <EyeOff size={17} />
                ) : (
                  <Eye size={17} />
                )}
              </button>
            </div>

            {/* Confirm */}
            <div className="relative">

              <InputField
                icon={<Lock size={17} />}
                placeholder="Konfirmasi Password"
                type={showConfirm ? "text" : "password"}
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirm(!showConfirm)
                }
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                  hover:text-emerald-600
                  transition
                "
              >
                {showConfirm ? (
                  <EyeOff size={17} />
                ) : (
                  <Eye size={17} />
                )}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                relative
                overflow-hidden
                w-full
                h-[48px]
                rounded-2xl
                bg-gradient-to-r
                from-emerald-700
                via-emerald-500
                to-teal-400
                text-white
                font-bold
                shadow-[0_12px_30px_rgba(5,150,105,0.35)]
                hover:-translate-y-1
                hover:shadow-[0_18px_40px_rgba(5,150,105,0.45)]
                transition-all
                duration-300
                mt-2
              "
            >

              {/* Highlight */}
              <span
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-transparent
                  via-white/10
                  to-white/20
                "
              />

              <span
                className="
                  relative
                  z-10
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                {loading ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />
                    Memproses...
                  </>
                ) : (
                  <>
                    Daftar Sekarang
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Login */}
          <p
            className="
              text-center
              text-[13px]
              text-gray-500
              mt-5
            "
          >
            Sudah memiliki akun?{" "}

            <Link
              href="/login"
              className="
                text-emerald-600
                font-bold
                hover:text-emerald-700
                transition
              "
            >
              Login di sini
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

/* Input Component */
function InputField({
  icon,
  placeholder,
  type,
}: {
  icon: React.ReactNode;
  placeholder: string;
  type: string;
}) {
  return (
    <div className="relative">

      <span
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-gray-400
        "
      >
        {icon}
      </span>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          h-[46px]
          rounded-xl
          border
          border-emerald-500/15
          bg-white
          pl-11
          pr-4
          text-[14px]
          text-gray-800
          outline-none
          transition-all
          duration-200
          placeholder:text-gray-400
          hover:border-emerald-500/30
          focus:border-emerald-500
          focus:ring-4
          focus:ring-emerald-500/10
        "
      />
    </div>
  );
}