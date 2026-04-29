import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { u as ChevronDown } from "../_libs/lucide-react.mjs";
function FAQ({ items }) {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: items.map((it, i) => {
    const isOpen = open === i;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.05 },
        className: `rounded-2xl border overflow-hidden transition-colors ${isOpen ? "border-primary bg-card shadow-soft" : "border-border bg-card/60"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setOpen(isOpen ? null : i),
              className: "w-full flex items-center justify-between gap-4 px-6 py-5 text-left",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-semibold text-base md:text-lg transition-colors ${isOpen ? "text-primary" : "text-navy"}`, children: it.q }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground"}` })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: false,
              animate: { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 },
              transition: { duration: 0.3 },
              className: "overflow-hidden",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-6 pb-5 text-muted-foreground leading-relaxed", children: it.a })
            }
          )
        ]
      },
      i
    );
  }) });
}
export {
  FAQ as F
};
