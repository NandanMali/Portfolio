import Hero from "../components/Hero/Hero.jsx";
import TechStack from "../components/TechStack/TechStack.jsx";
import About from "../components/About/About.jsx";
import Services from "../components/Services/Services.jsx";
import WhyWorkWithMe from "../components/WhyWorkWithMe/WhyWorkWithMe.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Experience from "../components/Experience/Experience.jsx";
import Process from "../components/Process/Process.jsx";
import CTA from "../components/CTA/CTA.jsx";
import FAQ from "../components/FAQ/FAQ.jsx";
import Contact from "../components/Contact/Contact.jsx";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <About />
      <Services />
      <WhyWorkWithMe />
      <Skills />
      <Projects />
      <Experience />
      <Process />
      <CTA />
      <FAQ />
      <Contact />
    </main>
  );
}
