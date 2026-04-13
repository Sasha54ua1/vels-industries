import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import Process from "@/components/Process";
import Solutions from "@/components/Solutions";
import Clients from "@/components/Clients";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Process />
        <Solutions />
        <Clients />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
