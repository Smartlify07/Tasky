import Navbar from "@/app/ui/navbar";
import Gradient from "./ui/home/gradient";
import HeroSection from "./ui/home/hero";

export default function Home() {
  return (
    <>
      <main class="relative min-h-screen w-full bg-white flex flex-col items-center justify-center bg-gradient-to-tr">
        <Gradient />
        <div className="container mx-auto z-10 md:w-11/12 lg:w-10/12">
          <HeroSection />
        </div>
      </main>
    </>
  );
}
