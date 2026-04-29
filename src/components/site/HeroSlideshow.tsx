import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Compass } from "lucide-react";
import au from "@/assets/ec-hero-australia.jpg";
import uk from "@/assets/ec-hero-uk.jpg";
import de from "@/assets/ec-hero-germany.jpg";
import ie from "@/assets/ec-hero-ireland.jpg";
import nz from "@/assets/ec-hero-newzealand.jpg";

const slides = [
  { country: "Australia", image: au, tag: "Curated · Down Under", desc: "Sun-drenched campuses, post-study work rights of up to 4 years, and a lifestyle that rewards ambition." },
  { country: "United Kingdom", image: uk, tag: "Curated · Heritage", desc: "Centuries-old institutions, the Graduate Route visa, and global recognition that opens every door." },
  { country: "Germany", image: de, tag: "Curated · Innovation", desc: "Tuition-free public universities, an engineering powerhouse, and 18-month job-seeker pathways." },
  { country: "Ireland", image: ie, tag: "Curated · Tech Capital", desc: "Europe's silicon coast — Google, Meta and Stripe HQs, plus a 2-year graduate stay-back option." },
  { country: "New Zealand", image: nz, tag: "Curated · Pacific", desc: "Eight world-class universities, dramatic landscapes, and one of the safest study destinations on earth." },
];

export function HeroSlideshow() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const s = slides[idx];

  return (
    <section className="relative h-[94vh] min-h-[680px] overflow-hidden bg-navy">
      <AnimatePresence mode="sync">
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1.14 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.4 }, scale: { duration: 8, ease: "linear" } }}
          className="absolute inset-0"
        >
          <img src={s.image} alt={s.country} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* decorative blobs */}
      <div className="absolute top-1/4 right-10 w-80 h-80 rounded-full bg-primary/30 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-10 w-72 h-72 rounded-full bg-[var(--color-accent-gold)]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl h-full px-6 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-primary-foreground text-[11px] font-semibold uppercase tracking-[0.3em] mb-7">
              <Compass className="h-3.5 w-3.5 text-[var(--color-accent-gold)]" /> {s.tag}
            </div>
            <div className="text-primary-foreground/85 font-sans text-sm md:text-base tracking-[0.4em] uppercase mb-4">
              Your future is curated in
            </div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-primary-foreground leading-[0.95] mb-7 font-medium">
              {s.country}<span className="text-[var(--color-accent-gold)]">.</span>
            </h1>
            <p className="text-primary-foreground/85 text-lg md:text-xl max-w-2xl mb-9 leading-relaxed">
              {s.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-[var(--color-accent-gold)] text-[var(--color-accent-gold-foreground)] px-7 py-3.5 rounded-full font-semibold shadow-elegant hover:scale-105 transition-transform"
              >
                Begin Your Journey
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/destinations"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors"
              >
                Browse Destinations
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* slide indicators */}
        <div className="absolute bottom-10 left-6 right-6 mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex gap-3">
            {slides.map((sl, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="group flex flex-col items-start"
                aria-label={sl.country}
              >
                <div className={`h-1 transition-all duration-500 rounded-full ${
                  i === idx ? "w-16 bg-[var(--color-accent-gold)]" : "w-8 bg-white/30 group-hover:bg-white/60"
                }`} />
                <span className={`mt-2 text-[10px] uppercase tracking-[0.25em] transition-colors ${
                  i === idx ? "text-[var(--color-accent-gold)]" : "text-white/45"
                }`}>
                  {sl.country}
                </span>
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-2 text-primary-foreground/55 text-xs uppercase tracking-[0.3em]">
            <span>Scroll</span>
            <div className="w-12 h-px bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
