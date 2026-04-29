import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-DjAYjfn5.mjs";
import { S as SectionHeading, R as Reveal } from "./Reveal-CkUMeAw3.mjs";
import { F as FAQ } from "./FAQ-Bdj6rA12.mjs";
import { b as building } from "./router-Bycc-U4k.mjs";
import { S as Send, m as CircleCheck, b as MapPin, E as Earth, P as Phone, M as Mail, C as Clock, F as Facebook, L as Linkedin, I as Instagram } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const faqs = [{
  q: "Do I need an appointment?",
  a: "Walk-ins are welcome at our Rawalpindi office, but booking ahead helps us prepare and avoid wait times."
}, {
  q: "Is the discovery call really free?",
  a: "Yes — your first 30-minute discovery call is completely free, with no obligation."
}, {
  q: "Which countries do you cover?",
  a: "Australia, the United Kingdom, Germany, Ireland and New Zealand."
}, {
  q: "How quickly will I hear back?",
  a: "We respond to every enquiry within one business day, usually much sooner."
}];
function Contact() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Contact", title: "Let's curate your future.", subtitle: "Visit either office, call us, or drop a message — a curator will be in touch within one business day.", image: building }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Send a message", title: "Tell us about your ambitions.", description: "Share your goals and a curator will reach out within one business day." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 6e3);
          e.target.reset();
        }, className: "mt-8 grid sm:grid-cols-2 gap-4", children: [
          [{
            n: "name",
            l: "Full Name",
            t: "text",
            req: true
          }, {
            n: "email",
            l: "Email Address",
            t: "email",
            req: true
          }, {
            n: "phone",
            l: "Phone Number",
            t: "tel",
            req: true
          }, {
            n: "country",
            l: "Country of Interest",
            t: "text",
            req: false
          }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: f.req, type: f.t, name: f.n, placeholder: " ", className: "peer w-full px-4 pt-6 pb-2 rounded-2xl border border-border bg-card text-navy focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "absolute left-4 top-2 text-xs text-muted-foreground peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary transition-all pointer-events-none", children: [
              f.l,
              f.req && " *"
            ] })
          ] }, f.n)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative sm:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, name: "message", placeholder: " ", rows: 5, className: "peer w-full px-4 pt-6 pb-2 rounded-2xl border border-border bg-card text-navy focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "absolute left-4 top-2 text-xs text-muted-foreground peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary transition-all pointer-events-none", children: "Your Message *" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex items-center gap-2 bg-navy text-navy-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-navy/90 hover:shadow-elegant transition-all", children: [
              "Send Message ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
            ] }),
            submitted && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-primary font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5" }),
              " Thanks! A curator will be in touch shortly."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-navy text-navy-foreground p-8 shadow-elegant relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-16 -right-16 w-60 h-60 rounded-full bg-primary/30 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-[var(--color-accent-gold)]/20 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl mb-6 text-[var(--color-accent-gold)] font-semibold", children: "Reach a curator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 grid place-items-center rounded-xl bg-primary/25 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-[var(--color-accent-gold)]" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-1", children: "Pakistan Studio" }),
                "28-A, Jhelum Road,",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Morgah Mohr, Rawalpindi"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 grid place-items-center rounded-xl bg-primary/25 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-5 w-5 text-[var(--color-accent-gold)]" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-1", children: "Australia Studio" }),
                "1 Astelia Lane, Wallan",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "VIC 3756, Australia"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 grid place-items-center rounded-xl bg-primary/25 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-[var(--color-accent-gold)]" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-1", children: "Call Us" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+923275873923", className: "hover:text-[var(--color-accent-gold)] block", children: "+92 327 5873923" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 grid place-items-center rounded-xl bg-primary/25 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-[var(--color-accent-gold)]" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-1", children: "Email Us" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:info@educationcuratives.com", className: "hover:text-[var(--color-accent-gold)] block", children: "info@educationcuratives.com" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:admission@educationcuratives.com", className: "hover:text-[var(--color-accent-gold)] block", children: "admission@educationcuratives.com" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 grid place-items-center rounded-xl bg-primary/25 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-[var(--color-accent-gold)]" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-1", children: "Studio Hours" }),
                "Monday – Saturday: 10 AM – 7 PM (PKT)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-65", children: "Sunday: by appointment" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent-gold)] mb-3", children: "Follow the studio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [Facebook, Linkedin, Instagram].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "social", className: "h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-primary transition-colors border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }, i)) })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24 mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl overflow-hidden shadow-elegant border border-border h-96", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Education Curatives Rawalpindi office map", src: "https://www.google.com/maps?q=28-A+Jhelum+Road+Morgah+Rawalpindi&output=embed", className: "w-full h-full border-0", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pb-24 mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { align: "center", eyebrow: "Quick answers", title: "Before you call..." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: faqs })
    ] })
  ] });
}
export {
  Contact as component
};
