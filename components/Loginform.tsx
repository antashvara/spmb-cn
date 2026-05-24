"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, LogIn, Loader2 } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-[400px]">
      {/* Brand Header */}
      <div className="flex items-center gap-3 mb-8 animate-fade-in-up">

        {/* Logo */}
        <div
          className="
            w-18
            h-18
            rounded-2xl
            border
            border-emerald-500/10
            shadow-lg
            flex
            items-center
            justify-center
            overflow-hidden
            shrink-0
          "
        >
          <img
            src="/logo-cn.png"
            alt="Logo SMK Citra Negara"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Text */}
        <div>
          <h1 className="text-[20px] font-bold text-emerald-950 leading-tight">
            SMK Citra Negara
          </h1>

          <p className="text-[12px] font-medium text-gray-500 mt-0.5">
            Portal Penerimaan Murid Baru
          </p>
        </div>
      </div>

      {/* Login Card */}
      <div className="bg-white/85 backdrop-blur-xl border border-emerald-500/15 rounded-[28px] p-9 shadow-[0_8px_40px_rgba(5,150,105,0.10)] animate-fade-in-up animation-delay-100">
        <h2 className="text-[26px] font-extrabold text-emerald-950 mb-1.5">
          Selamat Datang 👋
        </h2>
        <p className="text-[13.5px] text-gray-400 mb-7 leading-relaxed">
          Silakan masuk untuk melanjutkan pendaftaran
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email / NISN */}
          <div>
            <label
              htmlFor="email"
              className="block text-[13px] font-semibold text-gray-700 mb-1.5"
            >
              Email / NISN
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-gray-400 pointer-events-none">
                <Mail size={17} />
              </span>
              <input
                id="email"
                type="text"
                placeholder="Masukkan Email atau NISN"
                className="w-full h-[46px] pl-10 pr-4 border-[1.5px] border-emerald-500/20 rounded-xl bg-white/80 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-200 hover:border-emerald-500/40 focus:border-emerald-500 focus:bg-white focus:ring-3 focus:ring-emerald-500/12"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-[13px] font-semibold text-gray-700 mb-1.5"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-gray-400 pointer-events-none">
                <Lock size={17} />
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan Password Anda"
                className="w-full h-[46px] pl-10 pr-10 border-[1.5px] border-emerald-500/20 rounded-xl bg-white/80 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-200 hover:border-emerald-500/40 focus:border-emerald-500 focus:bg-white focus:ring-3 focus:ring-emerald-500/12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-gray-400 hover:text-emerald-600 transition-colors p-1 rounded-lg"
                aria-label="Toggle password"
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 text-[13px] text-gray-700 font-medium cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="w-4 h-4 accent-emerald-600 cursor-pointer"
              />
              Ingat Saya
            </label>
            <a
              href="#"
              className="text-[13px] font-semibold text-emerald-600 hover:text-emerald-700 transition-colors hover:underline"
            >
              Lupa Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 mt-2 rounded-[13px] bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400 text-white text-[15px] font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/35 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/45 active:translate-y-0 disabled:opacity-80 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Memproses...
              </>
            ) : (
              <>
                <LogIn size={18} />
                Masuk ke Portal
              </>
            )}
          </button>
        </form>

        {/* Register */}
        <p className="text-center mt-4 text-[13.5px] text-gray-400">
          Belum memiliki akun?{" "}
          <a
            href="#"
            className="text-emerald-600 font-bold hover:text-emerald-700 hover:underline transition-colors"
          >
            Daftar Sekarang
          </a>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4 text-[12px] font-medium text-gray-400">
          <span className="flex-1 h-px bg-emerald-500/15" />
          Atau
          <span className="flex-1 h-px bg-emerald-500/15" />
        </div>

        {/* Google Button */}
        <button className="w-full h-[46px] bg-white border-[1.5px] border-emerald-500/20 rounded-[13px] text-sm font-semibold text-gray-700 flex items-center justify-center gap-2.5 shadow-sm transition-all duration-200 hover:bg-emerald-50/50 hover:border-emerald-500/40 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Masuk dengan Google
        </button>
      </div>

      <p className="text-center mt-5 text-[11.5px] text-gray-400">
        © 2026 SMK Citra Negara. Sistem SPMB Futuristik.
      </p>
    </div>
  );
}