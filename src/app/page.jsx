"use client";
import Gradient from "./ui/gradient";
import CallToAction from "./ui/home/call-to-action";
import Features from "./ui/home/features";
import Footer from "./ui/footer";
import Hero from "./ui/home/hero";
import HowItWorks from "./ui/home/how-it-works";
import Testimonials from "./ui/home/testimonials";

export default function Home() {
  return (
    <main
      className=" min-h-screen w-full 
    `  md:px-0  overflow-hidden"
    >
      <Gradient />

      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
