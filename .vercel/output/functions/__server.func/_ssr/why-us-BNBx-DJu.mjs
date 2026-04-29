import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero } from "./PageHero-DjAYjfn5.mjs";
import { S as SectionHeading, R as Reveal } from "./Reveal-CkUMeAw3.mjs";
import { g as graduation, c as consultation } from "./router-Bycc-U4k.mjs";
import { U as Users, G as GraduationCap, H as HeartHandshake, A as Award, c as Calendar, E as Earth, Q as Quote, d as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const reasons = [{
  icon: Users,
  t: "Curators, Not Sales Reps",
  d: "Our advisers are paid to find your best fit — not to push you toward a quota."
}, {
  icon: GraduationCap,
  t: "Dual-Office Advantage",
  d: "Local presence in Rawalpindi and Wallan, Australia — a team on both ends of your journey."
}, {
  icon: HeartHandshake,
  t: "Lifetime Support",
  d: "From discovery call to convocation and beyond — you stay part of the EC alumni family."
}, {
  icon: Award,
  t: "Outcome-Driven",
  d: "We measure ourselves on visa grants, scholarships secured and graduate employment."
}, {
  icon: Calendar,
  t: "Workshops & Webinars",
  d: "Regular sessions with university reps, embassy officers and EC alumni already abroad."
}, {
  icon: Earth,
  t: "Truly Global Network",
  d: "120+ partner universities across five carefully curated destinations."
}];
function WhyUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Why Curatives", title: "A boutique studio. A global craft.", subtitle: "Every consultancy says they care. Here's how Education Curatives proves it — every day.", image: graduation }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { align: "center", eyebrow: "Six Moves", title: "The Curatives difference, distilled." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: reasons.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full p-7 rounded-3xl bg-card border border-border hover:border-primary/40 hover:-translate-y-2 hover:shadow-glow transition-all relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 right-0 font-display text-8xl text-[var(--color-accent-gold)]/10 leading-none p-2 font-medium", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-5 group-hover:bg-[var(--color-accent-gold)] group-hover:text-[var(--color-accent-gold-foreground)] transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(r.icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-navy mb-2 font-semibold", children: r.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: r.d })
        ] })
      ] }) }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 bg-navy text-navy-foreground relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-25", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: consultation, alt: "", className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-4xl px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-12 w-12 text-[var(--color-accent-gold)] mx-auto mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl md:text-4xl leading-tight mb-6 font-medium", children: `"We don't sell visas. We curate futures — bespoke, honest and built to last well beyond graduation."` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm uppercase tracking-[0.3em] text-[var(--color-accent-gold)]", children: "— The Curatives Promise" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2.5rem] bg-gradient-to-br from-primary to-[var(--color-primary-glow)] text-primary-foreground p-12 text-center shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-4xl md:text-5xl mb-3 font-medium", children: "Ready to experience the EC difference?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-90 max-w-xl mx-auto mb-6", children: "Book your free discovery call and let a curator design your global future." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 bg-navy text-navy-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-navy/90 transition-colors", children: [
        "Book Discovery Call ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) })
  ] });
}
export {
  WhyUs as component
};
