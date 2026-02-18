import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-violet/30 selection:text-white">
      <Navbar />

      {/* Background Gradient Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-blue/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-violet/5 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <div className="relative z-10 flex flex-col gap-12 md:gap-32 pb-20">
        <Hero />
        <SelectedWork />
        <Skills />
        <Experience />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
