import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as consultation, g as graduation, a as au } from "./router-Bycc-U4k.mjs";
import { C as COUNTRIES, a as CountryCard, u as uk, d as de, i as ie, n as nz } from "./CountryCard-VOaGx5kO.mjs";
import { R as Reveal, S as SectionHeading } from "./Reveal-CkUMeAw3.mjs";
import { C as Counter, r as reception } from "./ec-reception-oW72HC1T.mjs";
import { F as FAQ } from "./FAQ-Bdj6rA12.mjs";
import { i as ielts, a as airport } from "./ec-airport-B4Ta9xiV.mjs";
import { A as Award, s as TrendingUp, G as GraduationCap, E as Earth, r as Sparkles, d as ArrowRight, B as BookOpen, f as Headphones, h as FileCheck, i as Plane, l as House, U as Users, H as HeartHandshake, T as Target, Q as Quote, k as Compass } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const slides = [
  { country: "Australia", image: au, tag: "Curated · Down Under", desc: "Sun-drenched campuses, post-study work rights of up to 4 years, and a lifestyle that rewards ambition." },
  { country: "United Kingdom", image: uk, tag: "Curated · Heritage", desc: "Centuries-old institutions, the Graduate Route visa, and global recognition that opens every door." },
  { country: "Germany", image: de, tag: "Curated · Innovation", desc: "Tuition-free public universities, an engineering powerhouse, and 18-month job-seeker pathways." },
  { country: "Ireland", image: ie, tag: "Curated · Tech Capital", desc: "Europe's silicon coast — Google, Meta and Stripe HQs, plus a 2-year graduate stay-back option." },
  { country: "New Zealand", image: nz, tag: "Curated · Pacific", desc: "Eight world-class universities, dramatic landscapes, and one of the safest study destinations on earth." }
];
function HeroSlideshow() {
  const [idx, setIdx] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);
  const s = slides[idx];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[94vh] min-h-[680px] overflow-hidden bg-navy", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "sync", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 1.02 },
        animate: { opacity: 1, scale: 1.14 },
        exit: { opacity: 0 },
        transition: { opacity: { duration: 1.4 }, scale: { duration: 8, ease: "linear" } },
        className: "absolute inset-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.image, alt: s.country, className: "h-full w-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/30 to-transparent" })
        ]
      },
      idx
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 right-10 w-80 h-80 rounded-full bg-primary/30 blur-3xl animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/3 left-10 w-72 h-72 rounded-full bg-[var(--color-accent-gold)]/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl h-full px-6 flex flex-col justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          className: "max-w-3xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-primary-foreground text-[11px] font-semibold uppercase tracking-[0.3em] mb-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-3.5 w-3.5 text-[var(--color-accent-gold)]" }),
              " ",
              s.tag
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary-foreground/85 font-sans text-sm md:text-base tracking-[0.4em] uppercase mb-4", children: "Your future is curated in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-6xl md:text-8xl lg:text-9xl text-primary-foreground leading-[0.95] mb-7 font-medium", children: [
              s.country,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--color-accent-gold)]", children: "." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/85 text-lg md:text-xl max-w-2xl mb-9 leading-relaxed", children: s.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/contact",
                  className: "group inline-flex items-center gap-2 bg-[var(--color-accent-gold)] text-[var(--color-accent-gold-foreground)] px-7 py-3.5 rounded-full font-semibold shadow-elegant hover:scale-105 transition-transform",
                  children: [
                    "Begin Your Journey",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/destinations",
                  className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors",
                  children: "Browse Destinations"
                }
              )
            ] })
          ]
        },
        idx
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-10 left-6 right-6 mx-auto max-w-7xl flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: slides.map((sl, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setIdx(i),
            className: "group flex flex-col items-start",
            "aria-label": sl.country,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-1 transition-all duration-500 rounded-full ${i === idx ? "w-16 bg-[var(--color-accent-gold)]" : "w-8 bg-white/30 group-hover:bg-white/60"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `mt-2 text-[10px] uppercase tracking-[0.25em] transition-colors ${i === idx ? "text-[var(--color-accent-gold)]" : "text-white/45"}`, children: sl.country })
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-2 text-primary-foreground/55 text-xs uppercase tracking-[0.3em]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Scroll" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-px bg-white/30" })
        ] })
      ] })
    ] })
  ] });
}
const studentMale = "/assets/ec-student-male-CtWNrLXo.jpg";
const studentFemale = "/assets/ec-student-female-Cmb4RNBi.jpg";
const stats = [{
  icon: Award,
  value: 1200,
  suffix: "+",
  label: "Curated Acceptances"
}, {
  icon: TrendingUp,
  value: 96,
  suffix: "%",
  label: "Visa Approval Rate"
}, {
  icon: GraduationCap,
  value: 120,
  suffix: "+",
  label: "Partner Universities"
}, {
  icon: Earth,
  value: 5,
  suffix: "",
  label: "Global Destinations"
}];
const services = [{
  icon: BookOpen,
  title: "Bespoke Counselling",
  desc: "Profile mapping and a personal study-abroad blueprint."
}, {
  icon: Headphones,
  title: "IELTS & PTE Coaching",
  desc: "Targeted coaching engineered for top band scores."
}, {
  icon: FileCheck,
  title: "Visa Curation",
  desc: "Documentation, financial planning and interview prep."
}, {
  icon: Award,
  title: "Scholarship Sourcing",
  desc: "We hunt funding so you don't have to."
}, {
  icon: Plane,
  title: "Pre-Departure Concierge",
  desc: "Briefings, bookings and a confident first flight."
}, {
  icon: House,
  title: "Settlement Support",
  desc: "Verified housing, SIM, banking and arrival kit."
}];
const why = [{
  icon: Users,
  title: "Curators, not salespeople",
  desc: "Our advisers are paid to find your best fit — not to push a quota of universities."
}, {
  icon: GraduationCap,
  title: "Two countries, one team",
  desc: "Local presence in Rawalpindi and Wallan, Victoria — your journey is supported on both ends."
}, {
  icon: HeartHandshake,
  title: "Lifetime alumni network",
  desc: "From counselling to convocation and beyond — our students stay family."
}, {
  icon: Target,
  title: "Outcome-focused",
  desc: "We measure ourselves on visa grants, scholarships secured and graduate employment."
}];
const process = [{
  step: "01",
  title: "Discovery Call",
  desc: "A free 30-minute conversation about your ambitions, grades and budget."
}, {
  step: "02",
  title: "Curate Shortlist",
  desc: "We design a personalised list of universities, courses and intakes."
}, {
  step: "03",
  title: "Application Sprint",
  desc: "SOPs, references, transcripts — managed by your dedicated curator."
}, {
  step: "04",
  title: "Visa & Funding",
  desc: "Documentation, financial proofs and visa lodgement, done right."
}, {
  step: "05",
  title: "Land & Thrive",
  desc: "Pre-departure briefing, accommodation and on-ground support."
}];
const testimonials = [{
  name: "Areeba S.",
  role: "MSc Data Science · UNSW Sydney",
  text: "The Curatives team rebuilt my SOP three times until it sang. Visa came through in two weeks.",
  img: studentFemale
}, {
  name: "Bilal A.",
  role: "BEng · TU Berlin",
  text: "I never thought a German tuition-free university was within reach. They walked me through every form.",
  img: studentMale
}, {
  name: "Mahnoor I.",
  role: "MA · UCD Dublin",
  text: "From IELTS coaching to my Dublin flat keys — Education Curatives genuinely stayed by my side.",
  img: studentFemale
}];
const faqs = [{
  q: "What makes Education Curatives different?",
  a: "We're a curatorial consultancy — every shortlist, SOP and visa file is handcrafted, not templated. You get a dedicated curator from discovery to graduation."
}, {
  q: "Which countries do you specialise in?",
  a: "Australia, the United Kingdom, Germany, Ireland and New Zealand — five destinations chosen for their academic reputation, post-study work rights and welcoming cultures."
}, {
  q: "Do you provide IELTS and PTE coaching?",
  a: "Yes. Our in-house coaches run small-group and 1:1 sessions designed to push you past the band you need for top universities and visas."
}, {
  q: "How long does the full process take?",
  a: "Plan for 3–6 months from first call to flight. We help you map a realistic timeline against the next available intake."
}, {
  q: "Do you help with scholarships?",
  a: "Absolutely. We actively scan partner universities and external funders, then help you craft applications that win."
}, {
  q: "How do I get started?",
  a: "Send us a message, call +92 327 5873923, or visit our Rawalpindi office on Jhelum Road. The first consultation is always free."
}];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSlideshow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative -mt-20 z-20 mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-3xl shadow-elegant border border-border p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl md:text-6xl text-navy font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.value, suffix: s.suffix }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground font-medium mt-1", children: s.label })
    ] }) }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-14 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-6 -left-6 w-32 h-32 rounded-3xl bg-primary/10 -z-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-6 -right-6 w-40 h-40 rounded-3xl bg-[var(--color-accent-gold)]/15 -z-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: reception, alt: "Education Curatives reception", loading: "lazy", className: "rounded-3xl shadow-elegant w-full object-cover aspect-[4/5]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          scale: 0.85
        }, whileInView: {
          opacity: 1,
          scale: 1
        }, viewport: {
          once: true
        }, transition: {
          delay: 0.3
        }, className: "absolute bottom-6 -right-4 md:right-6 bg-card rounded-2xl shadow-elegant p-5 max-w-[230px] border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-primary mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-[0.25em]", children: "Curated · Crafted" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-navy font-semibold leading-tight", children: "A boutique consultancy with a global mindset." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Welcome to Education Curatives", title: "Education, the way it should be — curated.", description: "We treat each student like a one-of-a-kind exhibit. From the first conversation to your first day on campus abroad, every step is handpicked, briefed and refined by a dedicated curator who knows your story." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-4 mt-8", children: [{
          title: "Our Approach",
          desc: "Bespoke shortlists, never copy-pasted templates."
        }, {
          title: "Our Standard",
          desc: "Honest advice, transparent fees, measurable outcomes."
        }, {
          title: "Our Promise",
          desc: "We stay with you long after the visa lands."
        }].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-soft hover:-translate-y-1 transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-primary mb-2 font-semibold", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: c.desc })
        ] }) }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "mt-8 inline-flex items-center gap-2 text-primary font-semibold group", children: [
          "The Curatives story",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Destinations", title: "Five worlds, one curator.", description: "Hand-picked study destinations chosen for academic strength, work rights and student wellbeing." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/destinations", className: "inline-flex items-center gap-2 text-primary font-semibold group", children: [
          "View all destinations",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: COUNTRIES.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CountryCard, { c, index: i }, c.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { align: "center", eyebrow: "Our Services", title: "A complete suite, thoughtfully curated.", description: "Each service is designed to feel less like a transaction and more like a trusted partnership." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative p-7 rounded-3xl bg-card border border-border hover:border-primary/40 transition-all hover:-translate-y-2 hover:shadow-glow overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-[var(--color-accent-gold)] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-5 shadow-soft group-hover:bg-[var(--color-accent-gold)] group-hover:text-[var(--color-accent-gold-foreground)] transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-navy mb-2 font-semibold", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: s.desc })
        ] })
      ] }) }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 bg-navy text-navy-foreground px-6 py-3 rounded-full font-semibold hover:bg-navy/90 transition-colors", children: [
        "See all services ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-gradient-to-b from-secondary/40 to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { align: "center", eyebrow: "Why Curatives", title: "The Curatives difference, in four moves." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-20", children: [{
        ...why[0],
        image: consultation,
        reverse: false
      }, {
        ...why[1],
        image: ielts,
        reverse: true
      }, {
        ...why[2],
        image: graduation,
        reverse: false
      }, {
        ...why[3],
        image: airport,
        reverse: true
      }].map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid lg:grid-cols-2 gap-10 items-center ${row.reverse ? "lg:[&>*:first-child]:order-2" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: row.image, alt: row.title, loading: "lazy", className: "rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-5 -left-5 h-20 w-20 rounded-2xl bg-[var(--color-accent-gold)] grid place-items-center shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(row.icon, { className: "h-9 w-9 text-[var(--color-accent-gold-foreground)]" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-primary font-semibold uppercase tracking-[0.25em] text-xs mb-3", children: [
            "Move 0",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-4xl md:text-5xl text-navy mb-4 font-medium", children: row.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: row.desc })
        ] }) })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { align: "center", eyebrow: "The Curatorial Process", title: "From first call to first class — in five steps.", description: "A clear, honest roadmap so you always know what's next." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-5 gap-5", children: process.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full p-6 rounded-3xl bg-gradient-to-br from-card to-secondary/40 border border-border hover:border-primary/40 transition-all hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-7xl text-[var(--color-accent-gold)]/40 leading-none mb-2 font-medium", children: p.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-navy mb-2 font-semibold", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.desc }),
        i < process.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block absolute top-12 -right-3 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5" }) })
      ] }) }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 bg-navy text-navy-foreground relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/25 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[var(--color-accent-gold)]/15 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { align: "center", light: true, eyebrow: "Curated Outcomes", title: "Real curators. Real students. Real visas." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full p-7 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[var(--color-accent-gold)]/40 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-9 w-9 text-[var(--color-accent-gold)] mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-navy-foreground/90 leading-relaxed mb-6 font-display text-lg", children: [
            '"',
            t.text,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-4 border-t border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.name, loading: "lazy", className: "h-12 w-12 rounded-full object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-navy-foreground/55", children: t.role })
            ] })
          ] })
        ] }) }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16 bg-secondary/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.35em] text-muted-foreground", children: "120+ Partner Universities Across 5 Countries" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-track flex gap-12 whitespace-nowrap", children: ["Melbourne", "Oxford", "TU Munich", "Trinity Dublin", "Auckland", "Cambridge", "Monash", "Heidelberg", "UCD", "Otago", "ANU", "Imperial", "RWTH Aachen", "DCU", "Canterbury"].concat(["Melbourne", "Oxford", "TU Munich", "Trinity Dublin", "Auckland", "Cambridge", "Monash", "Heidelberg", "UCD", "Otago", "ANU", "Imperial", "RWTH Aachen", "DCU", "Canterbury"]).map((u, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl md:text-3xl text-navy/35 hover:text-primary transition-colors font-medium", children: u }, i)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 mx-auto max-w-5xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { align: "center", eyebrow: "FAQs", title: "Questions? Curated answers.", description: "Everything you wanted to ask before reaching out." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: faqs })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2.5rem] bg-navy text-navy-foreground p-10 md:p-16 shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[var(--color-accent-gold)]/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid md:grid-cols-2 gap-8 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-[0.3em] mb-4 text-[var(--color-accent-gold)]", children: "Begin the curation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-6xl leading-[0.95] font-medium", children: "Your global future, hand-picked." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-85 text-lg mb-6 max-w-md md:ml-auto", children: "Book a free 30-minute discovery call. No pressure, no scripts — just an honest conversation about what's possible." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 md:justify-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 bg-[var(--color-accent-gold)] text-[var(--color-accent-gold-foreground)] px-7 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform", children: [
              "Book Discovery Call ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+923275873923", className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 px-7 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors", children: "+92 327 5873923" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
