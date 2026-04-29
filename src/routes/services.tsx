import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import {
  BookOpen, GraduationCap, Globe2, FileCheck, Plane, Home as HomeIcon,
  Headphones, Wallet, Award, ArrowRight, CheckCircle2, Users
} from "lucide-react";
import ielts from "@/assets/ec-ielts.jpg";
import consultation from "@/assets/ec-consultation.jpg";
import visa from "@/assets/ec-visa.jpg";
import airport from "@/assets/ec-airport.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Curated Admissions, IELTS & Visa | Education Curatives" },
      { name: "description", content: "Bespoke counselling, IELTS/PTE coaching, visa curation, scholarships and pre-departure concierge — all under one roof." },
      { property: "og:title", content: "Education Curatives Services" },
      { property: "og:description", content: "A complete suite, thoughtfully curated for ambitious students." },
      { property: "og:image", content: consultation },
    ],
  }),
  component: Services,
});

const consultancy = [
  { icon: BookOpen, t: "Profile Discovery", d: "Deep dive into your grades, goals and budget." },
  { icon: Globe2, t: "Country & Course Curation", d: "We map the best fit across our 5 destinations." },
  { icon: GraduationCap, t: "University Placement", d: "Bespoke shortlists and application strategy." },
  { icon: FileCheck, t: "Visa & Immigration", d: "End-to-end documentation and lodgement." },
  { icon: Wallet, t: "Scholarships & Funding", d: "Sourcing grants, waivers and education loans." },
  { icon: Plane, t: "Pre-Departure Concierge", d: "Briefings, flights and travel essentials." },
  { icon: HomeIcon, t: "Accommodation", d: "Verified housing options near campus." },
  { icon: Award, t: "Onshore Settlement", d: "SIM, banking, GP, transport — sorted." },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A complete suite, thoughtfully curated."
        subtitle="From the first conversation to your first day abroad — every service is hand-crafted, never templated."
        image={consultation}
      />

      <section className="py-24 mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Curated Consultancy"
          title="Everything an ambitious student needs."
          description="A modular set of services — pick what you need, or hand us the entire journey."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {consultancy.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="group h-full p-6 rounded-3xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 hover:shadow-soft transition-all">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-[var(--color-accent-gold)] group-hover:text-[var(--color-accent-gold-foreground)] group-hover:scale-110 transition-all">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl text-navy mb-2 leading-tight font-semibold">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Coaching Studio"
            title="Crack IELTS & PTE. Unlock the world."
            description="Our in-house coaching studio is built around small groups, mock tests and laser-focused feedback."
          />
          <div className="mt-12 grid lg:grid-cols-2 gap-8 items-stretch">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl shadow-elegant h-full min-h-[400px]">
                <img src={ielts} alt="IELTS coaching studio" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </Reveal>
            <div className="grid gap-5">
              {[
                { t: "Group Coaching", d: "Small batches with structured weekly modules across all four bands.", icon: Headphones },
                { t: "1:1 Intensive", d: "Targeted one-to-one sessions to push your score over the line you need.", icon: Award },
              ].map((c, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="p-7 rounded-3xl bg-card border border-border hover:border-primary/40 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 grid place-items-center rounded-2xl bg-primary text-primary-foreground shrink-0">
                        <c.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl text-navy mb-2 font-semibold">{c.t}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-3">{c.d}</p>
                        <ul className="space-y-1.5 text-sm">
                          {["Certified trainers", "Weekly mock tests", "Personalised feedback", "Flexible schedules"].map((b) => (
                            <li key={b} className="flex items-center gap-2 text-navy">
                              <CheckCircle2 className="h-4 w-4 text-[var(--color-accent-gold)]" /> {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8">
        {[
          { img: visa, eyebrow: "Visa Curation", title: "Documentation, done right.", desc: "Avoid common refusals — our specialists handle every form, financial proof and interview prep with surgical precision." },
          { img: airport, eyebrow: "Land & Settle", title: "Step off the plane with confidence.", desc: "Pre-departure briefing, airport pickup, accommodation and onshore support so you settle in without stress." },
        ].map((b, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="group relative h-[420px] overflow-hidden rounded-3xl shadow-elegant">
              <img src={b.img} alt={b.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-primary-foreground">
                <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent-gold)] mb-2">{b.eyebrow}</div>
                <h3 className="font-display text-4xl mb-3 font-medium">{b.title}</h3>
                <p className="opacity-90 mb-5">{b.desc}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-[var(--color-accent-gold)] font-semibold w-fit">
                  Talk to a curator <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="pb-24 mx-auto max-w-7xl px-6">
        <div className="rounded-[2.5rem] bg-navy text-navy-foreground p-12 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[var(--color-accent-gold)]/20 blur-3xl" />
          <div className="relative">
            <Users className="h-12 w-12 text-[var(--color-accent-gold)] mx-auto mb-4" />
            <h3 className="font-display text-4xl md:text-5xl mb-3 font-medium">Not sure which service is right for you?</h3>
            <p className="opacity-80 max-w-2xl mx-auto mb-6">Book a free 30-minute discovery call and a curator will design a custom roadmap, just for you.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[var(--color-accent-gold)] text-[var(--color-accent-gold-foreground)] px-7 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform">
              Book Discovery Call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
