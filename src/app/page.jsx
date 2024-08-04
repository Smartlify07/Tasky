import Navbar from "@/app/ui/navbar";
import Gradient from "./ui/home/gradient";
import HeroSection from "./ui/home/hero";
import Features from "./ui/home/features";

export default function Home() {
  return (
    <>
      <main class="relative min-h-screen w-full bg-white flex flex-col items-center justify-center  overflow-hidden">
        <Gradient />
        <div className="container mx-auto py-10 z-10 md:w-11/12 lg:w-10/12">
          <HeroSection />
          <Features />
        </div>
      </main>
    </>
  );
}
