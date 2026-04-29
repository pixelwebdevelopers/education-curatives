import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useInView, m as motion } from "../_libs/framer-motion.mjs";
function Reveal({
  children,
  delay = 0,
  y = 30,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
      className,
      children
    }
  );
}
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`, children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.28em] mb-4 ${light ? "bg-white/10 text-primary-foreground" : "bg-primary/10 text-primary"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--color-accent-gold)] animate-pulse" }),
      eyebrow
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-medium tracking-tight ${light ? "text-primary-foreground" : "text-navy"}`, children: title }) }),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-4 text-base md:text-lg ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`, children: description }) })
  ] });
}
export {
  Reveal as R,
  SectionHeading as S
};
