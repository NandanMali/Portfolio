import { HiOutlineCode, HiOutlineDeviceMobile, HiOutlineLightBulb, HiOutlineChatAlt2, HiOutlineTrendingUp } from "react-icons/hi";
import Reveal from "../Reveal.jsx";

const points = [
  { icon: HiOutlineCode, title: "Clean & maintainable code" },
  { icon: HiOutlineDeviceMobile, title: "Responsive, user-friendly interfaces" },
  { icon: HiOutlineLightBulb, title: "Practical problem solving" },
  { icon: HiOutlineChatAlt2, title: "Clear communication" },
  { icon: HiOutlineTrendingUp, title: "Continuous improvement" },
];

export default function WhyWorkWithMe() {
  return (
    <section className="section bg-paper">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">why work with me</p>
          <h2 className="text-3xl md:text-[42px] text-ink mb-14 leading-tight max-w-xl">
            What working together looks like
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {points.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <Icon aria-hidden="true" className="text-3xl text-copper mb-4" />
              <p className="text-base font-display text-ink leading-snug">{title}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
