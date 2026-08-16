import Reveal from "../Reveal.jsx";

const highlights = [
  "MERN stack",
  "Responsive development",
  "REST APIs",
  "Database integration",
  "Real-world project experience",
];

export default function About() {
  return (
    <section id="about" className="section bg-paper scroll-mt-20 md:scroll-mt-24">
      <div className="section-inner grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
        <Reveal>
          <p className="eyebrow">about</p>
          <h2 className="text-3xl md:text-[42px] text-ink leading-[1.15]">
            Turning ideas into practical web applications.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-ink/70 leading-relaxed mb-4 text-lg font-light">
            I'm Nandan Mali, a MERN stack developer focused on building
            responsive, modern web applications. I enjoy taking an idea or a
            business requirement and turning it into something functional —
            not just visually clean, but structured well underneath.
          </p>
          <p className="text-ink/70 leading-relaxed mb-9 text-lg font-light">
            I gained hands-on experience during my internship at{" "}
            <span className="font-medium text-ink">Ypsilon IT Solutions Pvt Ltd</span>,
            working on a real-world logistics application. That experience
            shaped how I approach development now: understand the problem
            first, build with scalable backend thinking, keep the UI clean,
            and keep improving as I go.
          </p>

          <div className="flex flex-wrap gap-2">
            {highlights.map((it) => (
              <span
                key={it}
                className="text-xs font-mono text-copper-deep bg-copper-soft rounded-full px-3.5 py-1.5"
              >
                {it}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
