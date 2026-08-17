import Reveal from "../Reveal.jsx";

const steps = [
  { number: "01", title: "Understand", description: "Understand the idea, business requirements and goals." },
  { number: "02", title: "Plan", description: "Plan the structure, features and technology approach." },
  { number: "03", title: "Build", description: "Develop responsive frontend, backend APIs and database functionality." },
  { number: "04", title: "Refine", description: "Test, improve responsiveness, fix issues and polish the final product." },
];

export default function Process() {
  return (
    <section className="section bg-ink">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">how I work</p>
          <h2 className="text-3xl md:text-[42px] text-parchment mb-16 leading-tight max-w-xl">
            A structured process, start to finish
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <span className="font-display text-5xl text-copper/40">{step.number}</span>
              <h3 className="text-xl font-display text-parchment mt-3 mb-2">{step.title}</h3>
              <p className="text-sm text-parchment/50 leading-relaxed font-light">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
