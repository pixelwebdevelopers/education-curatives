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
  {
    country: "Australia",
    image: au,
    tag: "Curated · Down Under",
    desc: "Sun-drenched campuses, post-study work rights of up to 4 years, and a lifestyle that rewards ambition.",
  },
  {
    country: "United Kingdom",
    image: uk,
    tag: "Curated · Heritage",
    desc: "Centuries-old institutions, the Graduate Route visa, and global recognition that opens every door.",
  },
  {
    country: "Germany",
    image: de,
    tag: "Curated · Innovation",
    desc: "Tuition-free public universities, an engineering powerhouse, and 18-month job-seeker pathways.",
  },
  {
    country: "Ireland",
    image: ie,
    tag: "Curated · Tech Capital",
    desc: "Europe's silicon coast — Google, Meta and Stripe HQs, plus a 2-year graduate stay-back option.",
  },
  {
    country: "New Zealand",
    image: nz,
    tag: "Curated · Pacific",
    desc: "Eight world-class universities, dramatic landscapes, and one of the safest study destinations on earth.",
  },
];

export function HeroSlideshow() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const s = slides[idx];

  return (
    <section className="relative h-[92vh] min-h-[600px] md:h-[95vh] overflow-hidden bg-navy">
      {/* Premium Grain Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <AnimatePresence mode="sync">
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.25 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.6 }, scale: { duration: 10, ease: "linear" } }}
          className="absolute inset-0"
        >
          <img src={s.image} alt={s.country} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/20 to-transparent md:from-navy/80" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-30 mx-auto max-w-7xl h-full px-6 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-full text-[var(--color-accent-gold)] text-[10px] font-bold uppercase tracking-[0.4em] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-gold)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent-gold)]"></span>
              </span>
              {s.tag}
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white leading-[0.95] mb-8 font-semibold tracking-tighter">
              <span className="block opacity-70 font-sans text-sm md:text-2xl font-normal tracking-[0.3em] uppercase mb-4">
                Discover your future in
              </span>
              {s.country}
              <span className="text-[var(--color-accent-gold)]">.</span>
            </h1>

            <p className="text-white/70 text-lg md:text-2xl max-w-2xl mb-12 leading-relaxed font-light">
              {s.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-white text-navy px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-glow"
              >
                <div className="absolute inset-0 bg-[var(--color-accent-gold)] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">Start Your Curation</span>
                <ArrowRight className="relative z-10 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/destinations"
                className="inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                Explore More <Compass className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dynamic Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-32 right-6 hidden xl:flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-3xl"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-10 w-10 rounded-full border-2 border-navy bg-primary/20" />
            ))}
          </div>
          <div>
            <div className="text-white font-bold text-sm">75% Success Rate</div>
            <div className="text-white/40 text-[10px] uppercase tracking-widest">
              Visa approvals in 2025
            </div>
          </div>
        </motion.div>

        {/* Refined Navigation */}
        <div className="absolute bottom-10 left-6 right-6 flex items-end justify-between">
          <div className="flex gap-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="relative group h-12 flex items-center"
              >
                <div
                  className={`h-1 rounded-full transition-all duration-700 ${
                    i === idx
                      ? "w-16 bg-[var(--color-accent-gold)]"
                      : "w-6 bg-white/20 group-hover:bg-white/40"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex flex-col items-end gap-2 text-white/30">
            <span className="text-[10px] uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr]">
              Scroll
            </span>
            <div className="h-16 w-px bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
