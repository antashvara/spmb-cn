import LoginForm from "@/components/Loginform";
import LoginHero from "@/components/Loginhero";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen bg-emerald-950">
      {/* Left – Form */}
      <section className="relative w-full md:w-[45%] min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-br from-white via-emerald-50/60 to-white overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-emerald-400/8 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-60 h-60 rounded-full bg-emerald-500/8 blur-3xl pointer-events-none" />

        {/* Mobile background (shows behind form on small screens) */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(2,44,22,0.82), rgba(4,70,35,0.88)),
              url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 w-full flex flex-col items-center">
          <LoginForm />
        </div>
      </section>

      {/* Right – Hero */}
      <LoginHero />
    </main>
  );
}