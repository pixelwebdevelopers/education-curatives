import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as building } from "./router-Bycc-U4k.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function PageHero({
  eyebrow,
  title,
  subtitle,
  image = building
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[58vh] min-h-[460px] overflow-hidden bg-navy", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.img,
      {
        initial: { scale: 1.18 },
        animate: { scale: 1 },
        transition: { duration: 2.4, ease: "easeOut" },
        src: image,
        alt: title,
        className: "absolute inset-0 h-full w-full object-cover opacity-55"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-navy/30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 right-20 w-96 h-96 rounded-full bg-primary/30 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[var(--color-accent-gold)]/15 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl h-full px-6 flex flex-col justify-end pb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7 },
          className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-primary-foreground text-[11px] font-semibold uppercase tracking-[0.3em] mb-6 self-start",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--color-accent-gold)] animate-pulse" }),
            eyebrow
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.1 },
          className: "font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] font-medium max-w-4xl",
          children: title
        }
      ),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.2 },
          className: "mt-5 text-primary-foreground/85 text-lg md:text-xl max-w-2xl leading-relaxed",
          children: subtitle
        }
      )
    ] })
  ] });
}
export {
  PageHero as P
};
