import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-ec.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/destinations", label: "Destinations" },
  { to: "/why-us", label: "Why Us" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* top utility bar */}
      <div className="hidden md:block bg-navy text-navy-foreground text-xs">
        <div className="mx-auto max-w-7xl px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-5 opacity-90">
            <span className="inline-flex items-center gap-1.5"><Mail className="h-3 w-3 text-[var(--color-accent-gold)]" /> info@educationcuratives.com</span>
            <span className="opacity-40">·</span>
            <span>admission@educationcuratives.com</span>
          </div>
          <a href="tel:+923275873923" className="flex items-center gap-2 font-semibold tracking-wide hover:text-[var(--color-accent-gold)] transition-colors">
            <Phone className="h-3.5 w-3.5" /> +92 327 5873923
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl shadow-soft"
            : "bg-background/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Education Curatives"
              className="h-12 w-12 object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-xl text-navy tracking-tight font-semibold">Education Curatives</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-primary font-semibold">Curating Global Futures</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => {
              const active = location.pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-primary" : "text-foreground/75 hover:text-primary"
                  }`}
                >
                  {n.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-gradient-to-r from-primary to-[var(--color-accent-gold)] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-navy text-navy-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-navy/90 hover:shadow-elegant transition-all"
            >
              Free Consultation
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden p-2 rounded-md text-navy hover:bg-secondary"
              aria-label="Menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {nav.map((n, i) => (
                  <motion.div
                    key={n.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={n.to}
                      className="block px-3 py-3 rounded-md text-base font-medium hover:bg-secondary hover:text-primary"
                    >
                      {n.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  to="/contact"
                  className="mt-3 text-center bg-navy text-navy-foreground px-5 py-3 rounded-full font-semibold"
                >
                  Free Consultation
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
