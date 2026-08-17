import { HiOutlineArrowRight } from "react-icons/hi";
import Reveal from "../Reveal.jsx";

export default function CTA() {
  return (
    <section className="section bg-paper">
      <div className="section-inner">
        <Reveal>
          <div className="bg-ink rounded-3xl px-8 py-20 md:py-24 text-center flex flex-col items-center relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-copper/10 blur-3xl"
            />
            <h2 className="text-3xl md:text-[44px] text-parchment mb-5 max-w-xl leading-tight relative">
              Have an idea? Let's build it.
            </h2>
            <p className="text-parchment/55 max-w-lg mb-10 font-light relative">
              Whether you need a new website, a custom web application or
              improvements to an existing project, let's discuss what you're
              trying to build.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-7 relative">
              <a href="#contact" className="btn-primary-light">
                Start a project <HiOutlineArrowRight />
              </a>
              <a href="#contact" className="btn-secondary-light">
                Let's talk
              </a>
            </div>

            <p className="text-xs font-mono text-parchment/35 relative">
              Currently open to selected freelance projects.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
