import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail, Clock, Globe2 } from "lucide-react";
import logo from "@/assets/logo-ec.png";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[var(--color-accent-gold)]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-white p-2 rounded-2xl">
              <img src={logo} alt="EC" className="h-11 w-11 object-contain" />
            </div>
            <div>
              <div className="font-display text-xl font-semibold">Education Curatives</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent-gold)] font-semibold">Curating global futures</div>
            </div>
          </div>
          <p className="text-sm text-navy-foreground/70 leading-relaxed">
            A modern education consultancy curating bespoke pathways for ambitious students — from
            first counselling session to graduation day abroad.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { icon: Facebook, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Instagram, href: "#" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                aria-label="Social link"
                className="h-10 w-10 grid place-items-center rounded-full bg-white/8 hover:bg-primary transition-colors border border-white/10"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5 text-[var(--color-accent-gold)] font-semibold">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              ["/about", "About"],
              ["/services", "Services"],
              ["/destinations", "Destinations"],
              ["/why-us", "Why Curatives"],
              ["/team", "Team"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-navy-foreground/70 hover:text-[var(--color-accent-gold)] transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  · {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5 text-[var(--color-accent-gold)] font-semibold">Reach Us</h4>
          <ul className="space-y-4 text-sm text-navy-foreground/80">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>
                <span className="font-semibold text-navy-foreground block">Pakistan Office</span>
                28-A, Jhelum Road,<br />
                Morgah Mohr, Rawalpindi
              </span>
            </li>
            <li className="flex gap-3">
              <Globe2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>
                <span className="font-semibold text-navy-foreground block">Australia Office</span>
                1 Astelia Lane, Wallan<br />
                VIC 3756, Australia
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <a href="tel:+923275873923" className="hover:text-[var(--color-accent-gold)]">+92 327 5873923</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5 text-[var(--color-accent-gold)] font-semibold">Hours & Email</h4>
          <ul className="space-y-4 text-sm text-navy-foreground/80">
            <li className="flex gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>
                <a href="mailto:info@educationcuratives.com" className="hover:text-[var(--color-accent-gold)] block">info@educationcuratives.com</a>
                <a href="mailto:admission@educationcuratives.com" className="hover:text-[var(--color-accent-gold)] block">admission@educationcuratives.com</a>
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-navy-foreground">Mon – Sat</div>
                <div>10:00 AM – 7:00 PM (PKT)</div>
                <div className="text-navy-foreground/50 text-xs mt-1">Sunday — by appointment</div>
              </div>
            </li>
          </ul>
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-primary to-[var(--color-primary-glow)] text-primary-foreground">
            <div className="text-[10px] uppercase tracking-[0.25em] opacity-80">Operating in</div>
            <div className="font-display text-2xl font-semibold mt-1">5 Countries</div>
            <div className="text-xs opacity-85">AU · UK · DE · IE · NZ</div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-navy-foreground/55">
          <p>© {new Date().getFullYear()} Education Curatives. All rights reserved.</p>
          <p className="tracking-wider uppercase">Curate · Guide · Elevate</p>
        </div>
      </div>
    </footer>
  );
}
