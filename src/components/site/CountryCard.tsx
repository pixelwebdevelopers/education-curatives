import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import au from "@/assets/ec-hero-australia.jpg";
import uk from "@/assets/ec-hero-uk.jpg";
import de from "@/assets/ec-hero-germany.jpg";
import ie from "@/assets/ec-hero-ireland.jpg";
import nz from "@/assets/ec-hero-newzealand.jpg";

export const COUNTRIES = [
  { slug: "australia", name: "Australia", flag: "🇦🇺", image: au, tag: "Sun · Sea · Scholarship", blurb: "Group of Eight universities, generous post-study work rights, and a globally connected job market.", unis: ["University of Melbourne", "ANU", "University of Sydney", "Monash"] },
  { slug: "uk", name: "United Kingdom", flag: "🇬🇧", image: uk, tag: "Heritage · Prestige", blurb: "Russell Group institutions and the Graduate Route — two years to launch your global career.", unis: ["Oxford", "Cambridge", "Imperial College", "UCL"] },
  { slug: "germany", name: "Germany", flag: "🇩🇪", image: de, tag: "Tuition-Free · Engineered", blurb: "Public universities at near-zero tuition and an 18-month job-seeker visa for graduates.", unis: ["TU Munich", "LMU Munich", "Heidelberg", "RWTH Aachen"] },
  { slug: "ireland", name: "Ireland", flag: "🇮🇪", image: ie, tag: "Europe's Silicon Coast", blurb: "Headquarters to the world's biggest tech firms, with a 2-year stay-back for new graduates.", unis: ["Trinity College", "UCD", "UCC", "DCU"] },
  { slug: "new-zealand", name: "New Zealand", flag: "🇳🇿", image: nz, tag: "Wild · Welcoming", blurb: "All eight universities ranked in the global top 3% with up to 3 years post-study work rights.", unis: ["Auckland", "Otago", "Canterbury", "Victoria Wellington"] },
];

export function CountryCard({ c, index }: { c: typeof COUNTRIES[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-[440px] rounded-3xl overflow-hidden cursor-pointer"
    >
      <img
        src={c.image}
        alt={c.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-transparent transition-opacity group-hover:from-navy/95" />

      <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/12 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[11px] font-semibold border border-white/20 uppercase tracking-wider">
        <span className="text-base leading-none">{c.flag}</span>
        {c.tag}
      </div>

      <div className="absolute top-5 right-5 h-10 w-10 grid place-items-center rounded-full bg-white/12 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className="h-4 w-4" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
        <h3 className="font-display text-5xl mb-2 font-medium">{c.name}<span className="text-[var(--color-accent-gold)]">.</span></h3>
        <p className="text-white/80 text-sm mb-4 line-clamp-2 leading-relaxed">{c.blurb}</p>
        <Link
          to="/destinations"
          className="inline-flex items-center gap-2 text-[var(--color-accent-gold)] font-semibold text-sm group/link"
        >
          Curate this pathway
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
        </Link>
      </div>
    </motion.div>
  );
}
