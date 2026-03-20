import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Talent from "@/components/talent";
import Portfolio from "@/components/portfolio";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Divider from "@/components/divider";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Services />
      <Divider />
      <Talent />
      <Divider subtle />
      <Portfolio />
      <Divider />
      <ContactSection />
      <Footer />
    </>
  );
}
