import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Crown, Headphones, Handshake, FileCheck, Wallet, BookOpen, ArrowRight, Plane, Bed, Compass } from "lucide-react";
import team from "@/assets/ec-team.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — The Curators Behind Education Curatives" },
      { name: "description", content: "Meet the EC studio — leadership, curators, IELTS coaches, visa specialists and partnerships team — working from Rawalpindi and Wallan." },
      { property: "og:title", content: "Meet the Education Curatives Team" },
      { property: "og:description", content: "A boutique team of curators, coaches and specialists." },
      { property: "og:image", content: team },
    ],
  }),
  component: Team,
});

const departments = [
  { icon: Crown, t: "Leadership Studio", d: "Founders and senior partners setting the standards and shaping every curator's playbook." },
  { icon: Headphones, t: "Curators & Advisers", d: "Dedicated student curators guiding course choice, country fit and long-term career goals." },
  { icon: Handshake, t: "University Partnerships", d: "Relationship leads who maintain ties with 120+ universities across five destinations." },
  { icon: FileCheck, t: "Visa Specialists", d: "Documentation experts with deep embassy knowledge and an obsession for accuracy." },
  { icon: BookOpen, t: "Coaching Studio", d: "IELTS and PTE coaches running small-group and 1:1 intensives in our in-house studio." },
  { icon: Wallet, t: "Operations & Finance", d: "The quiet engine making sure every file, fee and timeline is handled flawlessly." },
];

const support = [
  { icon: Plane, t: "Pre-Departure & Pickup" },
  { icon: Bed, t: "Accommodation Sourcing" },
  { icon: Compass, t: "Onshore Settlement" },
  { icon: Headphones, t: "1:1 Curator Access" },
];

function Team() {
  return (
    <>
      <PageHero
        eyebrow="The Studio"
        title="The curators behind your story."
        subtitle="A boutique team of educators, coaches and specialists — working between Rawalpindi and Wallan."
        image={team}
      />

      <section className="py-24 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          <Reveal>
            <img src={team} alt="EC studio meeting" loading="lazy" className="rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover" />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our Philosophy"
              title="Small studio. Outsized care."
              description="We deliberately keep our caseload small. Each curator works with a manageable cohort so you get genuine attention, not a queue ticket. It's slower to scale — but it's the only way we know to deliver outcomes worth talking about."
            />
          </div>
        </div>

        <div className="text-center mb-14">
          <SectionHeading align="center" eyebrow="Departments" title="Six teams. One craft." />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {departments.map((d, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="group h-full rounded-3xl overflow-hidden border border-border bg-card hover:border-primary/40 hover:-translate-y-2 hover:shadow-glow transition-all">
                <div className="bg-navy text-navy-foreground p-6 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/20 blur-2xl" />
                  <d.icon className="h-8 w-8 text-[var(--color-accent-gold)] mb-3 relative" />
                  <h3 className="font-display text-2xl font-semibold relative">{d.t}</h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">{d.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <SectionHeading align="center" eyebrow="Beyond Admissions" title="Full-circle student support." description="Our craft doesn't stop at the visa stamp." />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {support.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/40 transition-colors">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-3">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="font-semibold text-navy">{s.t}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 mx-auto max-w-7xl px-6">
        <div className="rounded-[2.5rem] bg-navy text-navy-foreground p-12 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[var(--color-accent-gold)]/20 blur-3xl" />
          <div className="relative">
            <h3 className="font-display text-4xl md:text-5xl mb-3 font-medium">Want to join the studio?</h3>
            <p className="opacity-85 max-w-xl mx-auto mb-6">We're always interested in passionate curators, coaches and visa specialists. Tell us your story.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[var(--color-accent-gold)] text-[var(--color-accent-gold-foreground)] px-7 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
