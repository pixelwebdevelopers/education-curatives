import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Users, GraduationCap, HeartHandshake, Calendar, Award, Globe2, Quote, ArrowRight } from "lucide-react";
import bulb from "@/assets/ec-consultation.jpg";
import grad from "@/assets/ec-graduation.jpg";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Education Curatives — A Boutique Consultancy You Can Trust" },
      { name: "description", content: "Curators not salespeople, dual offices in Pakistan & Australia, outcome-led process and lifetime alumni support — discover the EC difference." },
      { property: "og:title", content: "Why Choose Education Curatives" },
      { property: "og:description", content: "The curatorial difference, in six moves." },
      { property: "og:image", content: grad },
    ],
  }),
  component: WhyUs,
});

const reasons = [
  { icon: Users, t: "Curators, Not Sales Reps", d: "Our advisers are paid to find your best fit — not to push you toward a quota." },
  { icon: GraduationCap, t: "Dual-Office Advantage", d: "Local presence in Rawalpindi and Wallan, Australia — a team on both ends of your journey." },
  { icon: HeartHandshake, t: "Lifetime Support", d: "From discovery call to convocation and beyond — you stay part of the EC alumni family." },
  { icon: Award, t: "Outcome-Driven", d: "We measure ourselves on visa grants, scholarships secured and graduate employment." },
  { icon: Calendar, t: "Workshops & Webinars", d: "Regular sessions with university reps, embassy officers and EC alumni already abroad." },
  { icon: Globe2, t: "Truly Global Network", d: "120+ partner universities across five carefully curated destinations." },
];

function WhyUs() {
  return (
    <>
      <PageHero
        eyebrow="Why Curatives"
        title="A boutique studio. A global craft."
        subtitle="Every consultancy says they care. Here's how Education Curatives proves it — every day."
        image={grad}
      />

      <section className="py-24 mx-auto max-w-7xl px-6">
        <SectionHeading align="center" eyebrow="Six Moves" title="The Curatives difference, distilled." />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="group h-full p-7 rounded-3xl bg-card border border-border hover:border-primary/40 hover:-translate-y-2 hover:shadow-glow transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 font-display text-8xl text-[var(--color-accent-gold)]/10 leading-none p-2 font-medium">
                  0{i + 1}
                </div>
                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-5 group-hover:bg-[var(--color-accent-gold)] group-hover:text-[var(--color-accent-gold-foreground)] transition-colors">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl text-navy mb-2 font-semibold">{r.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{r.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-navy text-navy-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={bulb} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Quote className="h-12 w-12 text-[var(--color-accent-gold)] mx-auto mb-6" />
          <p className="font-display text-3xl md:text-4xl leading-tight mb-6 font-medium">
            "We don't sell visas. We curate futures — bespoke, honest and built to last well beyond graduation."
          </p>
          <div className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent-gold)]">— The Curatives Promise</div>
        </div>
      </section>

      <section className="py-24 mx-auto max-w-7xl px-6">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-primary to-[var(--color-primary-glow)] text-primary-foreground p-12 text-center shadow-elegant">
          <h3 className="font-display text-4xl md:text-5xl mb-3 font-medium">Ready to experience the EC difference?</h3>
          <p className="opacity-90 max-w-xl mx-auto mb-6">Book your free discovery call and let a curator design your global future.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-navy text-navy-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-navy/90 transition-colors">
            Book Discovery Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
