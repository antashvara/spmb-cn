import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Majors from "@/components/Majors";
import RegistrationFlow from "@/components/Registrationflow";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#edf4ef]">
      <Navbar />
      <Hero />
      <Stats />
      <Advantages />
      <Majors />
      <RegistrationFlow />
      <FAQ />
      <Footer />
    </main>
  );
}