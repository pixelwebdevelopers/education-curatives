import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { Counter } from "@/components/site/Counter";
import { Target, Eye, Heart, Award, Users, Globe2, Sparkles } from "lucide-react";
import building from "@/assets/ec-building.jpg";
import reception from "@/assets/ec-reception.jpg";
import team from "@/assets/ec-team.jpg";
import consultation from "@/assets/ec-consultation.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Education Curatives — A Modern Study-Abroad Consultancy" },
      { name: "description", content: "Learn about Education Curatives — our curatorial philosophy, dual offices in Rawalpindi & Wallan, and our commitment to honest, outcome-led consulting." },
      { property: "og:title", content: "About Education Curatives" },
      { property: "og:description", content: "Curating bespoke study-abroad journeys with care, clarity and craft." },
      { property: "og:image", content: building },
    ],
  }),
  component: About,
});

const values = [
  { icon: Users, title: "Student-First", desc: "Your goals shape the brief — every time." },
  { icon: Award, title: "Craft", desc: "Bespoke shortlists, never templated applications." },
  { icon: Heart, title: "Honesty", desc: "Transparent fees, honest probabilities, real talk." },
  { icon: Sparkles, title: "Care", desc: "We stay with you long after the visa lands." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A consultancy, reimagined."
        subtitle="Education Curatives is a new kind of study-abroad partner — boutique in size, global in reach, and unwavering in standards."
        image={building}
      />

      <section className="py-24 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative">
              <img src={reception} alt="EC office" loading="lazy" className="rounded-3xl shadow-elegant w-full aspect-[4/5] object-cover" />
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-elegant p-5 border border-border">
                <div className="font-display text-5xl text-primary leading-none font-medium">2</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Continents · One Team</div>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Our Story" title="Built by educators, for ambitious students." />
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Education Curatives was founded on a simple frustration: too many consultancies were treating
                students like a number on a spreadsheet. We wanted to build something different — a studio,
                not a sales floor.
              </p>
              <p>
                Today, our curators work between Rawalpindi and Wallan (Victoria, Australia), giving every
                student a team that's connected on both ends of the journey. Whether you're applying to a
                tuition-free university in Berlin or chasing a Master's in Sydney, your curator is on the
                ground for you.
              </p>
              <p>
                We believe in honest advice, measurable outcomes and the long view. Our success isn't a visa
                stamp — it's seeing you graduate, employed and thriving abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <SectionHeading align="center" eyebrow="Mission · Vision · Promise" title="What guides every curator." />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              { icon: Target, title: "Mission", desc: "To curate bespoke pathways that turn ambition into a degree, a career and a global life." },
              { icon: Eye, title: "Vision", desc: "To be the most trusted boutique education consultancy across South Asia and the Pacific." },
              { icon: Heart, title: "Promise", desc: "Honest counsel, measurable outcomes and a curator who picks up the phone." },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="h-full p-8 rounded-3xl bg-card border border-border hover:border-primary/40 hover:-translate-y-2 hover:shadow-glow transition-all">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-5">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-3xl text-navy mb-3 font-semibold">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <v.icon className="h-8 w-8 text-[var(--color-accent-gold)] mx-auto mb-3" />
                  <div className="font-display text-xl text-navy mb-1 font-semibold">{v.title}</div>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: 1200, s: "+", l: "Acceptances" },
            { v: 75, s: "%", l: "Visa Approval" },
            { v: 120, s: "+", l: "Universities" },
            { v: 5, s: "", l: "Countries" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div>
                <div className="font-display text-6xl text-[var(--color-accent-gold)] font-medium"><Counter to={s.v} suffix={s.s} /></div>
                <div className="mt-2 text-sm text-navy-foreground/65 uppercase tracking-wider">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 mx-auto max-w-7xl px-6">
        <SectionHeading align="center" eyebrow="Inside the Studio" title="Where curation happens." description="Two offices, one craft. Visit us in Rawalpindi or Wallan." />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {[building, reception, team, consultation].slice(0, 3).map((img, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="overflow-hidden rounded-3xl group h-72">
                <img src={img} alt="EC studio" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/5 to-[var(--color-accent-gold)]/10">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Globe2 className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="font-display text-3xl md:text-4xl text-navy mb-3 font-semibold">Where we send our students</h3>
          <p className="text-muted-foreground mb-6">Five carefully chosen destinations — every one personally vetted.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["🇦🇺 Australia", "🇬🇧 United Kingdom", "🇩🇪 Germany", "🇮🇪 Ireland", "🇳🇿 New Zealand"].map((c) => (
              <span key={c} className="px-5 py-2 rounded-full bg-card border border-border text-navy font-semibold shadow-soft">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
