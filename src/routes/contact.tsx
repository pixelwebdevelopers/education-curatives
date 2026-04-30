import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { FAQ } from "@/components/site/FAQ";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Linkedin, Instagram, CheckCircle2, Globe2 } from "lucide-react";
import building from "@/assets/ec-building.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Education Curatives — Rawalpindi & Wallan Offices" },
      { name: "description", content: "Visit Education Curatives at Building 761, St 7e, Lane 7, Gulistan colony, Rawalpindi or our Wallan, Victoria office. Call +92 327 5873923 or +92 333 5400462 for a free discovery call." },
      { property: "og:title", content: "Contact Education Curatives" },
      { property: "og:description", content: "Free discovery call — let's curate your global future." },
      { property: "og:image", content: building },
    ],
  }),
  component: Contact,
});

const faqs = [
  { q: "Do I need an appointment?", a: "Walk-ins are welcome at our Rawalpindi office, but booking ahead helps us prepare and avoid wait times." },
  { q: "Is the discovery call really free?", a: "Yes — your first 30-minute discovery call is completely free, with no obligation." },
  { q: "Which countries do you cover?", a: "Australia, the United Kingdom, Germany, Ireland and New Zealand." },
  { q: "How quickly will I hear back?", a: "We respond to every enquiry within one business day, usually much sooner." },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's curate your future."
        subtitle="Visit either office, call us, or drop a message — a curator will be in touch within one business day."
        image={building}
      />

      <section className="py-24 mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          <SectionHeading eyebrow="Send a message" title="Tell us about your ambitions." description="Share your goals and a curator will reach out within one business day." />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              setTimeout(() => setSubmitted(false), 6000);
              (e.target as HTMLFormElement).reset();
            }}
            className="mt-8 grid sm:grid-cols-2 gap-4"
          >
            {[
              { n: "name", l: "Full Name", t: "text", req: true },
              { n: "email", l: "Email Address", t: "email", req: true },
              { n: "phone", l: "Phone Number", t: "tel", req: true },
              { n: "country", l: "Country of Interest", t: "text", req: false },
            ].map((f) => (
              <div key={f.n} className="relative">
                <input
                  required={f.req}
                  type={f.t}
                  name={f.n}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 rounded-2xl border border-border bg-card text-navy focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <label className="absolute left-4 top-2 text-xs text-muted-foreground peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary transition-all pointer-events-none">
                  {f.l}{f.req && " *"}
                </label>
              </div>
            ))}
            <div className="relative sm:col-span-2">
              <textarea
                required
                name="message"
                placeholder=" "
                rows={5}
                className="peer w-full px-4 pt-6 pb-2 rounded-2xl border border-border bg-card text-navy focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              />
              <label className="absolute left-4 top-2 text-xs text-muted-foreground peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary transition-all pointer-events-none">
                Your Message *
              </label>
            </div>
            <div className="sm:col-span-2 flex items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-navy text-navy-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-navy/90 hover:shadow-elegant transition-all"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
              {submitted && (
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <CheckCircle2 className="h-5 w-5" /> Thanks! A curator will be in touch shortly.
                </div>
              )}
            </div>
          </form>
        </div>

        <Reveal className="lg:col-span-2">
          <div className="rounded-3xl bg-navy text-navy-foreground p-8 shadow-elegant relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-[var(--color-accent-gold)]/20 blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-3xl mb-6 text-[var(--color-accent-gold)] font-semibold">Reach a curator</h3>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="h-10 w-10 grid place-items-center rounded-xl bg-primary/25 shrink-0">
                    <MapPin className="h-5 w-5 text-[var(--color-accent-gold)]" />
                  </div>
                  <div className="text-sm leading-relaxed">
                    <div className="font-semibold mb-1">Pakistan Studio</div>
                    Building 761, St 7e, Lane 7,<br />
                    Gulistan colony, Rawalpindi<br />
                    <span className="opacity-60 text-xs">(Near Joyland)</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-10 w-10 grid place-items-center rounded-xl bg-primary/25 shrink-0">
                    <Globe2 className="h-5 w-5 text-[var(--color-accent-gold)]" />
                  </div>
                  <div className="text-sm leading-relaxed">
                    <div className="font-semibold mb-1">Australia Studio</div>
                    1 Astelia Lane, Wallan<br />
                    VIC 3756, Australia
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-10 w-10 grid place-items-center rounded-xl bg-primary/25 shrink-0">
                    <Phone className="h-5 w-5 text-[var(--color-accent-gold)]" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold mb-1">Call Us</div>
                    <div className="space-y-1">
                      <a href="tel:+923275873923" className="hover:text-[var(--color-accent-gold)] block transition-colors">+92 327 5873923</a>
                      <a href="tel:+923335400462" className="hover:text-[var(--color-accent-gold)] block transition-colors">+92 333 5400462</a>
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-10 w-10 grid place-items-center rounded-xl bg-primary/25 shrink-0">
                    <Mail className="h-5 w-5 text-[var(--color-accent-gold)]" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold mb-1">Email Us</div>
                    <a href="mailto:info@educationcuratives.com" className="hover:text-[var(--color-accent-gold)] block">info@educationcuratives.com</a>
                    <a href="mailto:admission@educationcuratives.com" className="hover:text-[var(--color-accent-gold)] block">admission@educationcuratives.com</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-10 w-10 grid place-items-center rounded-xl bg-primary/25 shrink-0">
                    <Clock className="h-5 w-5 text-[var(--color-accent-gold)]" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold mb-1">Studio Hours</div>
                    Monday – Saturday: 10 AM – 7 PM (PKT)<br />
                    <span className="opacity-65">Sunday: by appointment</span>
                  </div>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent-gold)] mb-3">Follow the studio</div>
                <div className="flex gap-3">
                  {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                    <a key={i} href="#" aria-label="social" className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-primary transition-colors border border-white/10">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="pb-24 mx-auto max-w-7xl px-6">
        <div className="rounded-3xl overflow-hidden shadow-elegant border border-border h-96">
          <iframe
            title="Education Curatives Rawalpindi office map"
            src="https://www.google.com/maps?q=House+761+St+7e+Lane+7+Gulistan+colony+Rawalpindi&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="pb-24 mx-auto max-w-4xl px-6">
        <div className="text-center mb-10">
          <SectionHeading align="center" eyebrow="Quick answers" title="Before you call..." />
        </div>
        <FAQ items={faqs} />
      </section>
    </>
  );
}
