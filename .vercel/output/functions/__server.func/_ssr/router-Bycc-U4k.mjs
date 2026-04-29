import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, L as Link, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { M as Mail, P as Phone, X, a as Menu, F as Facebook, L as Linkedin, I as Instagram, b as MapPin, E as Earth, C as Clock } from "../_libs/lucide-react.mjs";
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
const logo$1 = "/assets/logo-ec-DUEp0B2B.png";
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/destinations", label: "Destinations" },
  { to: "/why-us", label: "Why Us" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const { location } = useRouterState();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block bg-navy text-navy-foreground text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-2.5 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5 opacity-90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3 w-3 text-[var(--color-accent-gold)]" }),
          " info@educationcuratives.com"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "admission@educationcuratives.com" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+923275873923", className: "flex items-center gap-2 font-semibold tracking-wide hover:text-[var(--color-accent-gold)] transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }),
        " +92 327 5873923"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "header",
      {
        className: `sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-xl shadow-soft" : "bg-background/70 backdrop-blur-md"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 flex items-center justify-between h-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: logo$1,
                  alt: "Education Curatives",
                  className: "h-12 w-12 object-contain transition-transform group-hover:scale-105"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:block leading-tight", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-navy tracking-tight font-semibold", children: "Education Curatives" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.28em] text-primary font-semibold", children: "Curating Global Futures" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: nav.map((n) => {
              const active = location.pathname === n.to;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: n.to,
                  className: `relative px-4 py-2 text-sm font-medium transition-colors ${active ? "text-primary" : "text-foreground/75 hover:text-primary"}`,
                  children: [
                    n.label,
                    active && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.span,
                      {
                        layoutId: "nav-underline",
                        className: "absolute left-3 right-3 -bottom-0.5 h-0.5 bg-gradient-to-r from-primary to-[var(--color-accent-gold)] rounded-full"
                      }
                    )
                  ]
                },
                n.to
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  className: "hidden md:inline-flex items-center gap-2 bg-navy text-navy-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-navy/90 hover:shadow-elegant transition-all",
                  children: "Free Consultation"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setOpen((o) => !o),
                  className: "lg:hidden p-2 rounded-md text-navy hover:bg-secondary",
                  "aria-label": "Menu",
                  children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.nav,
            {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              className: "lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 flex flex-col gap-1", children: [
                nav.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: i * 0.04 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: n.to,
                        className: "block px-3 py-3 rounded-md text-base font-medium hover:bg-secondary hover:text-primary",
                        children: n.label
                      }
                    )
                  },
                  n.to
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/contact",
                    className: "mt-3 text-center bg-navy text-navy-foreground px-5 py-3 rounded-full font-semibold",
                    children: "Free Consultation"
                  }
                )
              ] })
            }
          ) })
        ]
      }
    )
  ] });
}
const logo = "/assets/logo-5Gt2aQVs.png";
const pixelLogo = "/assets/pixel-logo-BHP2pnl7.png";
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-navy text-navy-foreground relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/25 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[var(--color-accent-gold)]/15 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-2 rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "EC", className: "h-11 w-11 object-contain" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-semibold", children: "Education Curatives" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent-gold)] font-semibold", children: "Curating global futures" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-navy-foreground/70 leading-relaxed", children: "A modern education consultancy curating bespoke pathways for ambitious students — from first counselling session to graduation day abroad." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mt-6", children: [
          { icon: Facebook, href: "#" },
          { icon: Linkedin, href: "#" },
          { icon: Instagram, href: "#" }
        ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: s.href,
            "aria-label": "Social link",
            className: "h-10 w-10 grid place-items-center rounded-full bg-white/8 hover:bg-primary transition-colors border border-white/10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4" })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg mb-5 text-[var(--color-accent-gold)] font-semibold", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 text-sm", children: [
          ["/about", "About"],
          ["/services", "Services"],
          ["/destinations", "Destinations"],
          ["/why-us", "Why Curatives"],
          ["/team", "Team"],
          ["/contact", "Contact"]
        ].map(([to, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to,
            className: "text-navy-foreground/70 hover:text-[var(--color-accent-gold)] transition-colors inline-block hover:translate-x-1 duration-200",
            children: [
              "· ",
              label
            ]
          }
        ) }, to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg mb-5 text-[var(--color-accent-gold)] font-semibold", children: "Reach Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-sm text-navy-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-navy-foreground block", children: "Pakistan Office" }),
              "28-A, Jhelum Road,",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Morgah Mohr, Rawalpindi"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-navy-foreground block", children: "Australia Office" }),
              "1 Astelia Lane, Wallan",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "VIC 3756, Australia"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+923275873923", className: "hover:text-[var(--color-accent-gold)]", children: "+92 327 5873923" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg mb-5 text-[var(--color-accent-gold)] font-semibold", children: "Hours & Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-sm text-navy-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:info@educationcuratives.com", className: "hover:text-[var(--color-accent-gold)] block", children: "info@educationcuratives.com" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:admission@educationcuratives.com", className: "hover:text-[var(--color-accent-gold)] block", children: "admission@educationcuratives.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-navy-foreground", children: "Mon – Sat" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "10:00 AM – 7:00 PM (PKT)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-navy-foreground/50 text-xs mt-1", children: "Sunday — by appointment" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-4 rounded-2xl bg-gradient-to-br from-primary to-[var(--color-primary-glow)] text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.25em] opacity-80", children: "Operating in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-semibold mt-1", children: "5 Countries" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-85", children: "AU · UK · DE · IE · NZ" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-navy-foreground/55", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Education Curatives. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-navy-foreground/40", children: "Developed by" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://pixelwebdevelopers.com",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-1.5 group transition-opacity hover:opacity-80",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#FF6600]", children: "Pixel Web Developers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: pixelLogo, alt: "Pixel", className: "h-4 w-auto brightness-0 invert opacity-40 group-hover:opacity-100 transition-all" })
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
const appCss = "/assets/styles-DQRFL0KX.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-display text-primary", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$7 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Education Curatives — Curate Your Global Education Journey" },
      {
        name: "description",
        content: "Education Curatives — modern study abroad consultancy curating bespoke pathways to Australia, UK, Germany, Ireland and New Zealand. Visa, IELTS and admissions experts."
      },
      { name: "author", content: "Education Curatives" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const graduation = "/assets/ec-graduation-BBtSu20C.jpg";
const $$splitComponentImporter$6 = () => import("./why-us-BNBx-DJu.mjs");
const Route$6 = createFileRoute("/why-us")({
  head: () => ({
    meta: [{
      title: "Why Education Curatives — A Boutique Consultancy You Can Trust"
    }, {
      name: "description",
      content: "Curators not salespeople, dual offices in Pakistan & Australia, outcome-led process and lifetime alumni support — discover the EC difference."
    }, {
      property: "og:title",
      content: "Why Choose Education Curatives"
    }, {
      property: "og:description",
      content: "The curatorial difference, in six moves."
    }, {
      property: "og:image",
      content: graduation
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const team = "/assets/ec-team-DlkbotMP.jpg";
const $$splitComponentImporter$5 = () => import("./team-Jjv5-imv.mjs");
const Route$5 = createFileRoute("/team")({
  head: () => ({
    meta: [{
      title: "Our Team — The Curators Behind Education Curatives"
    }, {
      name: "description",
      content: "Meet the EC studio — leadership, curators, IELTS coaches, visa specialists and partnerships team — working from Rawalpindi and Wallan."
    }, {
      property: "og:title",
      content: "Meet the Education Curatives Team"
    }, {
      property: "og:description",
      content: "A boutique team of curators, coaches and specialists."
    }, {
      property: "og:image",
      content: team
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const consultation = "/assets/ec-consultation-CEiZSmAR.jpg";
const $$splitComponentImporter$4 = () => import("./services-y1FzSot7.mjs");
const Route$4 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Curated Admissions, IELTS & Visa | Education Curatives"
    }, {
      name: "description",
      content: "Bespoke counselling, IELTS/PTE coaching, visa curation, scholarships and pre-departure concierge — all under one roof."
    }, {
      property: "og:title",
      content: "Education Curatives Services"
    }, {
      property: "og:description",
      content: "A complete suite, thoughtfully curated for ambitious students."
    }, {
      property: "og:image",
      content: consultation
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const au = "/assets/ec-hero-australia-Cy-CJmkV.jpg";
const $$splitComponentImporter$3 = () => import("./destinations-CDkJ3msX.mjs");
const Route$3 = createFileRoute("/destinations")({
  head: () => ({
    meta: [{
      title: "Destinations — Australia, UK, Germany, Ireland, NZ | Education Curatives"
    }, {
      name: "description",
      content: "Five carefully curated study destinations: Australia, UK, Germany, Ireland and New Zealand. Top universities, work rights and visa info."
    }, {
      property: "og:title",
      content: "Curated Study Destinations"
    }, {
      property: "og:description",
      content: "Five worlds, one curator."
    }, {
      property: "og:image",
      content: au
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const building = "/assets/ec-building-CpN2o16B.jpg";
const $$splitComponentImporter$2 = () => import("./contact-W-0TpLRU.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Education Curatives — Rawalpindi & Wallan Offices"
    }, {
      name: "description",
      content: "Visit Education Curatives at 28-A Jhelum Road, Morgah Mohr, Rawalpindi or our Wallan, Victoria office. Call +92 327 5873923 for a free discovery call."
    }, {
      property: "og:title",
      content: "Contact Education Curatives"
    }, {
      property: "og:description",
      content: "Free discovery call — let's curate your global future."
    }, {
      property: "og:image",
      content: building
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-D-XSvOzZ.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Education Curatives — A Modern Study-Abroad Consultancy"
    }, {
      name: "description",
      content: "Learn about Education Curatives — our curatorial philosophy, dual offices in Rawalpindi & Wallan, and our commitment to honest, outcome-led consulting."
    }, {
      property: "og:title",
      content: "About Education Curatives"
    }, {
      property: "og:description",
      content: "Curating bespoke study-abroad journeys with care, clarity and craft."
    }, {
      property: "og:image",
      content: building
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DTNS42TV.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Education Curatives — Curated Pathways to Australia, UK, Germany, Ireland & NZ"
    }, {
      name: "description",
      content: "Education Curatives — a modern consultancy curating bespoke study-abroad journeys. Admissions, IELTS, visa and settlement, end to end."
    }, {
      property: "og:title",
      content: "Education Curatives — Curating Global Futures"
    }, {
      property: "og:description",
      content: "Modern study-abroad consulting from Rawalpindi to the world."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WhyUsRoute = Route$6.update({
  id: "/why-us",
  path: "/why-us",
  getParentRoute: () => Route$7
});
const TeamRoute = Route$5.update({
  id: "/team",
  path: "/team",
  getParentRoute: () => Route$7
});
const ServicesRoute = Route$4.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$7
});
const DestinationsRoute = Route$3.update({
  id: "/destinations",
  path: "/destinations",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  DestinationsRoute,
  ServicesRoute,
  TeamRoute,
  WhyUsRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  au as a,
  building as b,
  consultation as c,
  graduation as g,
  router as r,
  team as t
};
