import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Award, GraduationCap, Globe2, TrendingUp, BookOpen, Plane, FileCheck,
  Home as HomeIcon, Headphones, Users, ArrowRight, Quote, Sparkles, Target, HeartHandshake,
} from "lucide-react";
import { HeroSlideshow } from "@/components/site/HeroSlideshow";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { COUNTRIES, CountryCard } from "@/components/site/CountryCard";
import { FAQ } from "@/components/site/FAQ";
import reception from "@/assets/ec-reception.jpg";
import consultation from "@/assets/ec-consultation.jpg";
import ielts from "@/assets/ec-ielts.jpg";
import airport from "@/assets/ec-airport.jpg";
import graduation from "@/assets/ec-graduation.jpg";
import studentMale from "@/assets/ec-student-male.jpg";
import studentFemale from "@/assets/ec-student-female.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Education Curatives — Curated Pathways to Australia, UK, Germany, Ireland & NZ" },
      { name: "description", content: "Education Curatives — a modern consultancy curating bespoke study-abroad journeys. Admissions, IELTS, visa and settlement, end to end." },
      { property: "og:title", content: "Education Curatives — Curating Global Futures" },
      { property: "og:description", content: "Modern study-abroad consulting from Rawalpindi to the world." },
    ],
  }),
  component: Home,
});

const stats = [
  { icon: Award, value: 1200, suffix: "+", label: "Curated Acceptances" },
  { icon: TrendingUp, value: 96, suffix: "%", label: "Visa Approval Rate" },
  { icon: GraduationCap, value: 120, suffix: "+", label: "Partner Universities" },
  { icon: Globe2, value: 5, suffix: "", label: "Global Destinations" },
];

const services = [
  { icon: BookOpen, title: "Bespoke Counselling", desc: "Profile mapping and a personal study-abroad blueprint." },
  { icon: Headphones, title: "IELTS & PTE Coaching", desc: "Targeted coaching engineered for top band scores." },
  { icon: FileCheck, title: "Visa Curation", desc: "Documentation, financial planning and interview prep." },
  { icon: Award, title: "Scholarship Sourcing", desc: "We hunt funding so you don't have to." },
  { icon: Plane, title: "Pre-Departure Concierge", desc: "Briefings, bookings and a confident first flight." },
  { icon: HomeIcon, title: "Settlement Support", desc: "Verified housing, SIM, banking and arrival kit." },
];

const why = [
  { icon: Users, title: "Curators, not salespeople", desc: "Our advisers are paid to find your best fit — not to push a quota of universities." },
  { icon: GraduationCap, title: "Two countries, one team", desc: "Local presence in Rawalpindi and Wallan, Victoria — your journey is supported on both ends." },
  { icon: HeartHandshake, title: "Lifetime alumni network", desc: "From counselling to convocation and beyond — our students stay family." },
  { icon: Target, title: "Outcome-focused", desc: "We measure ourselves on visa grants, scholarships secured and graduate employment." },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "A free 30-minute conversation about your ambitions, grades and budget." },
  { step: "02", title: "Curate Shortlist", desc: "We design a personalised list of universities, courses and intakes." },
  { step: "03", title: "Application Sprint", desc: "SOPs, references, transcripts — managed by your dedicated curator." },
  { step: "04", title: "Visa & Funding", desc: "Documentation, financial proofs and visa lodgement, done right." },
  { step: "05", title: "Land & Thrive", desc: "Pre-departure briefing, accommodation and on-ground support." },
];

const testimonials = [
  { name: "Areeba S.", role: "MSc Data Science · UNSW Sydney", text: "The Curatives team rebuilt my SOP three times until it sang. Visa came through in two weeks.", img: studentFemale },
  { name: "Bilal A.", role: "BEng · TU Berlin", text: "I never thought a German tuition-free university was within reach. They walked me through every form.", img: studentMale },
  { name: "Mahnoor I.", role: "MA · UCD Dublin", text: "From IELTS coaching to my Dublin flat keys — Education Curatives genuinely stayed by my side.", img: studentFemale },
];

const faqs = [
  { q: "What makes Education Curatives different?", a: "We're a curatorial consultancy — every shortlist, SOP and visa file is handcrafted, not templated. You get a dedicated curator from discovery to graduation." },
  { q: "Which countries do you specialise in?", a: "Australia, the United Kingdom, Germany, Ireland and New Zealand — five destinations chosen for their academic reputation, post-study work rights and welcoming cultures." },
  { q: "Do you provide IELTS and PTE coaching?", a: "Yes. Our in-house coaches run small-group and 1:1 sessions designed to push you past the band you need for top universities and visas." },
  { q: "How long does the full process take?", a: "Plan for 3–6 months from first call to flight. We help you map a realistic timeline against the next available intake." },
  { q: "Do you help with scholarships?", a: "Absolutely. We actively scan partner universities and external funders, then help you craft applications that win." },
  { q: "How do I get started?", a: "Send us a message, call +92 327 5873923, or visit our Rawalpindi office on Jhelum Road. The first consultation is always free." },
];

function Home() {
  return (
    <>
      <HeroSlideshow />

      {/* STATS */}
      <section className="relative -mt-20 z-20 mx-auto max-w-7xl px-6">
        <div className="bg-card rounded-3xl shadow-elegant border border-border p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="text-center md:text-left">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-3">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="font-display text-5xl md:text-6xl text-navy font-medium">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-muted-foreground font-medium mt-1">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WELCOME */}
      <section className="py-24 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl bg-primary/10 -z-10" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-3xl bg-[var(--color-accent-gold)]/15 -z-10" />
              <img src={reception} alt="Education Curatives reception" loading="lazy" className="rounded-3xl shadow-elegant w-full object-cover aspect-[4/5]" />
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 -right-4 md:right-6 bg-card rounded-2xl shadow-elegant p-5 max-w-[230px] border border-border"
              >
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">Curated · Crafted</span>
                </div>
                <p className="text-sm text-navy font-semibold leading-tight">
                  A boutique consultancy with a global mindset.
                </p>
              </motion.div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Welcome to Education Curatives"
              title="Education, the way it should be — curated."
              description="We treat each student like a one-of-a-kind exhibit. From the first conversation to your first day on campus abroad, every step is handpicked, briefed and refined by a dedicated curator who knows your story."
            />
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {[
                { title: "Our Approach", desc: "Bespoke shortlists, never copy-pasted templates." },
                { title: "Our Standard", desc: "Honest advice, transparent fees, measurable outcomes." },
                { title: "Our Promise", desc: "We stay with you long after the visa lands." },
              ].map((c, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-soft hover:-translate-y-1 transition-all">
                    <div className="font-display text-xl text-primary mb-2 font-semibold">{c.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary font-semibold group">
                The Curatives story
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Destinations"
              title="Five worlds, one curator."
              description="Hand-picked study destinations chosen for academic strength, work rights and student wellbeing."
            />
            <Reveal>
              <Link to="/destinations" className="inline-flex items-center gap-2 text-primary font-semibold group">
                View all destinations
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.map((c, i) => <CountryCard key={c.slug} c={c} index={i} />)}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <SectionHeading align="center" eyebrow="Our Services" title="A complete suite, thoughtfully curated."
            description="Each service is designed to feel less like a transaction and more like a trusted partnership." />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="group relative p-7 rounded-3xl bg-card border border-border hover:border-primary/40 transition-all hover:-translate-y-2 hover:shadow-glow overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-[var(--color-accent-gold)] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-5 shadow-soft group-hover:bg-[var(--color-accent-gold)] group-hover:text-[var(--color-accent-gold-foreground)] transition-colors">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl text-navy mb-2 font-semibold">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 bg-navy text-navy-foreground px-6 py-3 rounded-full font-semibold hover:bg-navy/90 transition-colors">
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-gradient-to-b from-secondary/40 to-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <SectionHeading align="center" eyebrow="Why Curatives" title="The Curatives difference, in four moves." />
          </div>
          <div className="space-y-20">
            {[
              { ...why[0], image: consultation, reverse: false },
              { ...why[1], image: ielts, reverse: true },
              { ...why[2], image: graduation, reverse: false },
              { ...why[3], image: airport, reverse: true },
            ].map((row, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-10 items-center ${row.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <Reveal>
                  <div className="relative">
                    <img src={row.image} alt={row.title} loading="lazy" className="rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover" />
                    <div className="absolute -bottom-5 -left-5 h-20 w-20 rounded-2xl bg-[var(--color-accent-gold)] grid place-items-center shadow-elegant">
                      <row.icon className="h-9 w-9 text-[var(--color-accent-gold-foreground)]" />
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.15}>
                  <div>
                    <div className="text-primary font-semibold uppercase tracking-[0.25em] text-xs mb-3">Move 0{i + 1}</div>
                    <h3 className="font-display text-4xl md:text-5xl text-navy mb-4 font-medium">{row.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{row.desc}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <SectionHeading align="center" eyebrow="The Curatorial Process" title="From first call to first class — in five steps."
            description="A clear, honest roadmap so you always know what's next." />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {process.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative h-full p-6 rounded-3xl bg-gradient-to-br from-card to-secondary/40 border border-border hover:border-primary/40 transition-all hover:-translate-y-1">
                <div className="font-display text-7xl text-[var(--color-accent-gold)]/40 leading-none mb-2 font-medium">{p.step}</div>
                <h3 className="font-display text-xl text-navy mb-2 font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 text-primary">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-navy text-navy-foreground relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[var(--color-accent-gold)]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <SectionHeading align="center" light eyebrow="Curated Outcomes" title="Real curators. Real students. Real visas." />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="h-full p-7 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[var(--color-accent-gold)]/40 transition-colors">
                  <Quote className="h-9 w-9 text-[var(--color-accent-gold)] mb-4" />
                  <p className="text-navy-foreground/90 leading-relaxed mb-6 font-display text-lg">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <img src={t.img} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-xs text-navy-foreground/55">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="py-16 bg-secondary/40">
        <div className="text-center mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            120+ Partner Universities Across 5 Countries
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="marquee-track flex gap-12 whitespace-nowrap">
            {[
              "Melbourne", "Oxford", "TU Munich", "Trinity Dublin", "Auckland",
              "Cambridge", "Monash", "Heidelberg", "UCD", "Otago",
              "ANU", "Imperial", "RWTH Aachen", "DCU", "Canterbury",
            ].concat([
              "Melbourne", "Oxford", "TU Munich", "Trinity Dublin", "Auckland",
              "Cambridge", "Monash", "Heidelberg", "UCD", "Otago",
              "ANU", "Imperial", "RWTH Aachen", "DCU", "Canterbury",
            ]).map((u, i) => (
              <div key={i} className="font-display text-2xl md:text-3xl text-navy/35 hover:text-primary transition-colors font-medium">
                {u}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <SectionHeading align="center" eyebrow="FAQs" title="Questions? Curated answers."
            description="Everything you wanted to ask before reaching out." />
        </div>
        <FAQ items={faqs} />
      </section>

      {/* CTA */}
      <section className="py-24 mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-navy text-navy-foreground p-10 md:p-16 shadow-elegant">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[var(--color-accent-gold)]/20 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.3em] mb-4 text-[var(--color-accent-gold)]">Begin the curation</div>
              <h2 className="font-display text-5xl md:text-6xl leading-[0.95] font-medium">
                Your global future, hand-picked.
              </h2>
            </div>
            <div className="md:text-right">
              <p className="opacity-85 text-lg mb-6 max-w-md md:ml-auto">
                Book a free 30-minute discovery call. No pressure, no scripts — just an honest conversation about what's possible.
              </p>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[var(--color-accent-gold)] text-[var(--color-accent-gold-foreground)] px-7 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform">
                  Book Discovery Call <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:+923275873923" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 px-7 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors">
                  +92 327 5873923
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
