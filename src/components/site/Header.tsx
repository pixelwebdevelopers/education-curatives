import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, Instagram, Facebook, Linkedin, ArrowRight, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-ec.png";

const nav = [
  { to: "/", label: "Home", subtitle: "Start your journey" },
  { to: "/about", label: "About", subtitle: "Our story & mission" },
  { to: "/services", label: "Services", subtitle: "Expert consulting" },
  { to: "/destinations", label: "Destinations", subtitle: "Global opportunities" },
  { to: "/why-us", label: "Why Us", subtitle: "The EC advantage" },
  { to: "/team", label: "Team", subtitle: "Meet our experts" },
  { to: "/contact", label: "Contact", subtitle: "Get in touch" },
] as const;

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.paddingRight = "var(--scrollbar-width, 0px)";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Utility Bar - Modernized */}
      <div className="hidden lg:block bg-navy/5 text-navy/60 text-[11px] font-medium border-b border-navy/5">
        <div className="mx-auto max-w-7xl px-8 py-2 flex items-center justify-between tracking-wider uppercase">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 group cursor-default">
              <Mail className="h-3 w-3 text-primary group-hover:scale-110 transition-transform" />
              info@educationcuratives.com
            </span>
            <span className="h-3 w-[1px] bg-navy/10" />
            <span className="flex items-center gap-2 group cursor-default">
              <Globe className="h-3 w-3 text-primary group-hover:scale-110 transition-transform" />
              Global Reach, Local Support
            </span>
          </div>
          <a href="tel:+923275873923" className="flex items-center gap-2 text-navy hover:text-primary transition-colors font-bold">
            <Phone className="h-3 w-3" /> +92 327 5873923
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-[100] transition-all duration-500 ease-in-out ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div 
            className={`relative flex items-center justify-between px-6 transition-all duration-500 rounded-2xl ${
              scrolled 
                ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/20 py-3" 
                : "bg-transparent py-2"
            }`}
          >
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 group relative z-[110]">
              <div className="relative">
                <img
                  src={logo}
                  alt="Education Curatives"
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-all duration-500 group-hover:scale-110"
                />
                {scrolled && (
                  <motion.div 
                    layoutId="logo-glow"
                    className="absolute inset-0 bg-primary/20 blur-xl rounded-full -z-10"
                  />
                )}
              </div>
              <div className="leading-none">
                <div className="font-display text-lg sm:text-xl text-navy tracking-tight font-bold">
                  Education <span className="text-primary">Curatives</span>
                </div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-navy/40 font-bold mt-0.5">
                  Curating Global Futures
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {nav.map((n) => {
                const active = location.pathname === n.to;
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    className={`relative px-4 py-2 text-[13px] font-bold tracking-wide uppercase transition-all duration-300 ${
                      active ? "text-primary" : "text-navy/60 hover:text-navy"
                    }`}
                  >
                    <span className="relative z-10">{n.label}</span>
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-primary/5 rounded-full -z-0"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4 relative z-[130]">
              <Link
                to="/contact"
                className="hidden md:flex items-center gap-2 bg-navy text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary hover:shadow-glow transition-all duration-300 active:scale-95"
              >
                Consult Now
              </Link>
              
              <button
                onClick={() => setOpen((o) => !o)}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  open ? "bg-navy text-white shadow-lg" : "bg-navy/5 text-navy hover:bg-navy/10"
                }`}
                aria-label="Toggle Menu"
              >
                <div className="relative w-6 h-6">
                  <motion.span
                    animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                    className="absolute top-1/2 left-0 w-6 h-0.5 bg-current rounded-full"
                  />
                  <motion.span
                    animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                    className="absolute top-1/2 left-0 w-6 h-0.5 bg-current rounded-full"
                  />
                  <motion.span
                    animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                    className="absolute top-1/2 left-0 w-6 h-0.5 bg-current rounded-full"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[120] lg:hidden bg-navy/95 backdrop-blur-2xl"
            >
              <div className="flex flex-col h-full pt-12 pb-12 px-8 overflow-y-auto">
                {/* Mobile Menu Logo Branding */}
                <div className="flex items-center gap-3 mb-12">
                  <img
                    src={logo}
                    alt="Education Curatives"
                    className="h-10 w-10 object-contain brightness-0 invert"
                  />
                  <div className="leading-none">
                    <div className="font-display text-xl text-white tracking-tight font-bold">
                      Education <span className="text-primary-glow">Curatives</span>
                    </div>
                    <div className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold mt-0.5">
                      Curating Global Futures
                    </div>
                  </div>
                </div>

                <div className="grid gap-6">
                  {nav.map((n, i) => (
                    <motion.div
                      key={n.to}
                      initial={{ opacity: 0, y: 20, rotateX: -20 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                    >
                      <Link
                        to={n.to}
                        className="group block"
                      >
                        <div className="flex items-end gap-4">
                          <span className="text-4xl sm:text-5xl font-display font-medium text-white group-hover:text-primary transition-colors">
                            {n.label}
                          </span>
                          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-2 group-hover:text-primary/50 transition-colors">
                            {n.subtitle}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto pt-12 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                  <div className="space-y-4">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Get In Touch</div>
                    <div className="space-y-2">
                      <a href="mailto:info@educationcuratives.com" className="block text-white/70 hover:text-white transition-colors">
                        info@educationcuratives.com
                      </a>
                      <a href="tel:+923275873923" className="block text-xl font-bold text-white hover:text-primary transition-colors">
                        +92 327 5873923
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {socialLinks.map((social, i) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
