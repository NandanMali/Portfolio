import experience from "../../data/experience.js";
import Reveal from "../Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section bg-paper">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">experience</p>
          <h2 className="text-3xl md:text-[42px] text-ink mb-14 leading-tight max-w-xl">
            Where I've worked
          </h2>
        </Reveal>

        <div className="flex flex-col gap-9 max-w-2xl">
          {experience.map((role, i) => (
            <Reveal key={role.company} delay={i * 0.1}>
              <div className="border-l-2 border-copper/30 pl-7 relative">
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-copper" aria-hidden="true" />
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-copper mb-2">
                  {role.period}
                </p>
                <h3 className="text-xl font-display text-ink">{role.role}</h3>
                <p className="text-sm text-stone mb-3">{role.company}</p>
                <p className="text-sm text-ink/70 leading-relaxed mb-4 font-light">{role.description}</p>
                <ul className="list-disc list-inside text-sm text-ink/60 flex flex-col gap-1.5 font-light">
                  {role.highlights.map((h) => (
                    <li key={h}>{h}</li>
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
