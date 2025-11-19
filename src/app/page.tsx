import Navigation from "./components/layout/Navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Testimonials from "./components/sections/Testimonials";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import ScrollProgress from "./components/ui/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
