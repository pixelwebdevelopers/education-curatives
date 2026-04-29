import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero } from "./PageHero-DjAYjfn5.mjs";
import { R as Reveal, S as SectionHeading } from "./Reveal-CkUMeAw3.mjs";
import { t as team } from "./router-Bycc-U4k.mjs";
import { e as Crown, f as Headphones, g as Handshake, h as FileCheck, B as BookOpen, W as Wallet, i as Plane, j as Bed, k as Compass, d as ArrowRight } from "../_libs/lucide-react.mjs";
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
const departments = [{
  icon: Crown,
  t: "Leadership Studio",
  d: "Founders and senior partners setting the standards and shaping every curator's playbook."
}, {
  icon: Headphones,
  t: "Curators & Advisers",
  d: "Dedicated student curators guiding course choice, country fit and long-term career goals."
}, {
  icon: Handshake,
  t: "University Partnerships",
  d: "Relationship leads who maintain ties with 120+ universities across five destinations."
}, {
  icon: FileCheck,
  t: "Visa Specialists",
  d: "Documentation experts with deep embassy knowledge and an obsession for accuracy."
}, {
  icon: BookOpen,
  t: "Coaching Studio",
  d: "IELTS and PTE coaches running small-group and 1:1 intensives in our in-house studio."
}, {
  icon: Wallet,
  t: "Operations & Finance",
  d: "The quiet engine making sure every file, fee and timeline is handled flawlessly."
}];
const support = [{
  icon: Plane,
  t: "Pre-Departure & Pickup"
}, {
  icon: Bed,
  t: "Accommodation Sourcing"
}, {
  icon: Compass,
  t: "Onshore Settlement"
}, {
  icon: Headphones,
  t: "1:1 Curator Access"
}];
function Team() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "The Studio", title: "The curators behind your story.", subtitle: "A boutique team of educators, coaches and specialists — working between Rawalpindi and Wallan.", image: team }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-14 items-center mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: team, alt: "EC studio meeting", loading: "lazy", className: "rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Our Philosophy", title: "Small studio. Outsized care.", description: "We deliberately keep our caseload small. Each curator works with a manageable cohort so you get genuine attention, not a queue ticket. It's slower to scale — but it's the only way we know to deliver outcomes worth talking about." }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { align: "center", eyebrow: "Departments", title: "Six teams. One craft." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: departments.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.07, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full rounded-3xl overflow-hidden border border-border bg-card hover:border-primary/40 hover:-translate-y-2 hover:shadow-glow transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-navy text-navy-foreground p-6 relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/20 blur-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(d.icon, { className: "h-8 w-8 text-[var(--color-accent-gold)] mb-3 relative" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold relative", children: d.t })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: d.d }) })
      ] }) }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { align: "center", eyebrow: "Beyond Admissions", title: "Full-circle student support.", description: "Our craft doesn't stop at the visa stamp." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: support.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/40 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-navy", children: s.t })
      ] }) }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2.5rem] bg-navy text-navy-foreground p-12 text-center relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[var(--color-accent-gold)]/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-4xl md:text-5xl mb-3 font-medium", children: "Want to join the studio?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-85 max-w-xl mx-auto mb-6", children: "We're always interested in passionate curators, coaches and visa specialists. Tell us your story." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 bg-[var(--color-accent-gold)] text-[var(--color-accent-gold-foreground)] px-7 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform", children: [
          "Get in touch ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Team as component
};
