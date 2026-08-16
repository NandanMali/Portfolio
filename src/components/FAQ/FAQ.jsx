import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import faq from "../../data/faq.js";
import Reveal from "../Reveal.jsx";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section bg-parchment">
      <div className="section-inner max-w-2xl">
        <Reveal>
          <p className="eyebrow">faq</p>
          <h2 className="text-3xl md:text-[42px] text-ink mb-12 leading-tight">Common questions</h2>
        </Reveal>

        <div className="flex flex-col divide-y divide-line border-t border-b border-line">
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  className="w-full flex items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className="text-base font-display text-ink">{item.question}</span>
                  <HiChevronDown
                    aria-hidden="true"
                    className={`shrink-0 text-copper transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-ink/60 leading-relaxed pb-6 pr-8 font-light">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
