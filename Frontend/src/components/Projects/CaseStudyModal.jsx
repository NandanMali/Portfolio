import { useEffect, useRef } from "react";
import { HiX } from "react-icons/hi";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function CaseStudyModal({ project, onClose }) {
  const closeBtnRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    closeBtnRef.current?.focus();
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;
  const cs = project.caseStudy;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] bg-ink/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        onClick={onClose}
      >
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="bg-paper rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-7 md:p-11"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between mb-7">
            <div>
              {project.isInternship && (
                <span className="text-xs font-mono text-copper-deep bg-copper-soft rounded-full px-3 py-1">
                  Internship project — {project.company}
                </span>
              )}
              <h2 id="case-study-title" className="text-2xl md:text-3xl font-display text-ink mt-3">
                {project.name}
              </h2>
            </div>
            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close case study"
              className="text-ink/40 hover:text-ink text-2xl shrink-0"
            >
              <HiX />
            </button>
          </div>

          <dl className="flex flex-col gap-6">
            <CaseSection term="Overview" description={cs.overview} />
            <CaseSection term="Problem" description={cs.problem} />
            <CaseSection term="My role" description={cs.role} />
            <CaseSection term="Technology used" description={cs.tech} />
            <div>
              <dt className="text-[11px] font-mono uppercase tracking-[0.2em] text-copper mb-2.5">
                Key features
              </dt>
              <dd>
                <ul className="list-disc list-inside text-sm text-ink/70 leading-relaxed flex flex-col gap-1 font-light">
                  {cs.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <CaseSection term="Development approach" description={cs.approach} />
            <CaseSection term="Challenges" description={cs.challenges} />
            <CaseSection term="What I learned" description={cs.learned} />
            <CaseSection term="Outcome" description={cs.outcome} />
          </dl>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function CaseSection({ term, description }) {
  return (
    <div>
      <dt className="text-[11px] font-mono uppercase tracking-[0.2em] text-copper mb-2.5">{term}</dt>
      <dd className="text-sm text-ink/70 leading-relaxed font-light">{description}</dd>
    </div>
  );
}
