import skills from "../../data/skills.js";
import Reveal from "../Reveal.jsx";

export default function Skills() {
  return (
    <section id="skills" className="section bg-ink scroll-mt-20 md:scroll-mt-24">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">skills</p>
          <h2 className="text-3xl md:text-[42px] text-parchment mb-14 leading-tight max-w-xl">
            Technologies I work with
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.07}>
              <div className="border border-parchment/10 rounded-2xl p-6 h-full hover:border-copper/40 transition-colors duration-300">
                <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] text-copper mb-5">
                  {group.category}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-parchment/70 font-light">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
