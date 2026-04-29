import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { COUNTRIES } from "@/components/site/CountryCard";
import { ArrowRight, GraduationCap, Briefcase, Coins } from "lucide-react";
import au from "@/assets/ec-hero-australia.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Australia, UK, Germany, Ireland, NZ | Education Curatives" },
      { name: "description", content: "Five carefully curated study destinations: Australia, UK, Germany, Ireland and New Zealand. Top universities, work rights and visa info." },
      { property: "og:title", content: "Curated Study Destinations" },
      { property: "og:description", content: "Five worlds, one curator." },
      { property: "og:image", content: au },
    ],
  }),
  component: Destinations,
});

function Destinations() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Five worlds, one curator."
        subtitle="Each destination is hand-picked for academic strength, post-study work rights and student wellbeing."
        image={au}
      />

      <section className="py-24 mx-auto max-w-7xl px-6 space-y-20">
        {COUNTRIES.map((c, i) => (
          <Reveal key={c.slug}>
            <div className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative">
                <img src={c.image} alt={c.name} loading="lazy" className="rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover" />
                <div className="absolute -bottom-6 left-6 bg-card rounded-2xl shadow-elegant p-5 border border-border flex items-center gap-3">
                  <span className="text-4xl">{c.flag}</span>
                  <div>
                    <div className="font-display text-2xl text-navy leading-none font-semibold">{c.name}</div>
                    <div className="text-[11px] text-primary font-semibold uppercase tracking-[0.2em] mt-1">{c.tag}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold mb-3">
                  Destination 0{i + 1}
                </div>
                <h2 className="font-display text-5xl md:text-6xl text-navy mb-4 font-medium">
                  {c.name}<span className="text-[var(--color-accent-gold)]">.</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{c.blurb}</p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { icon: GraduationCap, k: "Universities", v: c.unis.length + "+" },
                    { icon: Briefcase, k: "Work Rights", v: "Yes" },
                    { icon: Coins, k: "Scholarships", v: "Available" },
                  ].map((it) => (
                    <div key={it.k} className="p-4 rounded-2xl bg-secondary/50 text-center">
                      <it.icon className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">{it.k}</div>
                      <div className="font-semibold text-navy text-sm">{it.v}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold text-navy mb-2">Featured Universities</div>
                  <div className="flex flex-wrap gap-2">
                    {c.unis.map((u) => (
                      <span key={u} className="px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-navy">
                        {u}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/contact" className="inline-flex items-center gap-2 bg-navy text-navy-foreground px-6 py-3 rounded-full font-semibold hover:bg-navy/90 transition-colors">
                  Curate {c.name} pathway <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
