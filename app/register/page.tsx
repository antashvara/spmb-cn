import RegisterHero from "@/components/Registerhero";
import RegisterForm from "@/components/Registerform";

export const metadata = {
  title: "Daftar | SMK Citra Negara",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#edf4ef] flex flex-col lg:flex-row">

      {/* LEFT SIDE */}
      <div className="lg:w-[48%]">
        <RegisterHero />
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          flex-1
          flex
          items-center
          justify-center
          px-6
          py-16
        "
      >
        <RegisterForm />
      </div>
    </div>
  );
}