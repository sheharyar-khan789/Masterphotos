import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Portfolio from "@/components/Portfolio";
import VideoShowcase from "@/components/VideoShowcase";
import WhyChoose from "@/components/WhyChoose";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedWork />
        <Portfolio />
        <VideoShowcase />
        <WhyChoose />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
