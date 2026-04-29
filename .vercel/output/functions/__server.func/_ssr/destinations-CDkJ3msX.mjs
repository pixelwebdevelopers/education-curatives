import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero } from "./PageHero-DjAYjfn5.mjs";
import { R as Reveal } from "./Reveal-CkUMeAw3.mjs";
import { C as COUNTRIES } from "./CountryCard-VOaGx5kO.mjs";
import { a as au } from "./router-Bycc-U4k.mjs";
import { G as GraduationCap, n as Briefcase, o as Coins, d as ArrowRight } from "../_libs/lucide-react.mjs";
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
function Destinations() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Destinations", title: "Five worlds, one curator.", subtitle: "Each destination is hand-picked for academic strength, post-study work rights and student wellbeing.", image: au }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 mx-auto max-w-7xl px-6 space-y-20", children: COUNTRIES.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.image, alt: c.name, loading: "lazy", className: "rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 left-6 bg-card rounded-2xl shadow-elegant p-5 border border-border flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: c.flag }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-navy leading-none font-semibold", children: c.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-primary font-semibold uppercase tracking-[0.2em] mt-1", children: c.tag })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] uppercase tracking-[0.3em] text-primary font-semibold mb-3", children: [
          "Destination 0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl text-navy mb-4 font-medium", children: [
          c.name,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--color-accent-gold)]", children: "." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed mb-6", children: c.blurb }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 mb-6", children: [{
          icon: GraduationCap,
          k: "Universities",
          v: c.unis.length + "+"
        }, {
          icon: Briefcase,
          k: "Work Rights",
          v: "Yes"
        }, {
          icon: Coins,
          k: "Scholarships",
          v: "Available"
        }].map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-secondary/50 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "h-5 w-5 text-primary mx-auto mb-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: it.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-navy text-sm", children: it.v })
        ] }, it.k)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-navy mb-2", children: "Featured Universities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: c.unis.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-navy", children: u }, u)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 bg-navy text-navy-foreground px-6 py-3 rounded-full font-semibold hover:bg-navy/90 transition-colors", children: [
          "Curate ",
          c.name,
          " pathway ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }, c.slug)) })
  ] });
}
export {
  Destinations as component
};
