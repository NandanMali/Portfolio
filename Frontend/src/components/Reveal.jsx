import { motion, useReducedMotion } from "framer-motion";

/**
 * Wraps children in a fade-up-on-scroll animation.
 * Respects prefers-reduced-motion by rendering with no motion at all.
 */
export default function Reveal({ children, delay = 0, className = "", as = "div", y = 24 }) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
