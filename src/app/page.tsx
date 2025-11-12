import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";

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
