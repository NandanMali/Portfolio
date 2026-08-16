import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const stack = [
  { icon: SiReact, label: "React.js" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiExpress, label: "Express.js" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
];

export default function TechStack() {
  return (
    <section className="bg-ink border-t border-parchment/10 py-9 px-6 md:px-10" aria-label="Technology stack">
      <div className="section-inner flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {stack.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 text-parchment/45 hover:text-copper transition-colors"
          >
            <Icon aria-hidden="true" className="text-lg" />
            <span className="text-sm font-medium">{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
