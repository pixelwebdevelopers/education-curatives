import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  Globe2,
  TrendingUp,
  BookOpen,
  Plane,
  FileCheck,
  Home as HomeIcon,
  Headphones,
  Users,
  ArrowRight,
  Quote,
  Sparkles,
  Target,
  HeartHandshake,
} from "lucide-react";
import { HeroSlideshow } from "@/components/site/HeroSlideshow";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { COUNTRIES, CountryCard } from "@/components/site/CountryCard";
import { FAQ } from "@/components/site/FAQ";
import { Carousel, HorizontalScroll } from "@/components/site/Carousel";
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
      {
        name: "description",
        content:
          "Education Curatives — a modern consultancy curating bespoke study-abroad journeys. Admissions, IELTS, visa and settlement, end to end.",
      },
      { property: "og:title", content: "Education Curatives — Curating Global Futures" },
      {
        property: "og:description",
        content: "Modern study-abroad consulting from Rawalpindi to the world.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { icon: Award, value: 1200, suffix: "+", label: "Curated Acceptances" },
  { icon: TrendingUp, value: 75, suffix: "%", label: "Visa Approval Rate" },
  { icon: GraduationCap, value: 120, suffix: "+", label: "Partner Universities" },
  { icon: Globe2, value: 5, suffix: "", label: "Global Destinations" },
];

const services = [
  {
    icon: BookOpen,
    title: "Bespoke Counselling",
    desc: "Profile mapping and a personal study-abroad blueprint.",
  },
  {
    icon: Headphones,
    title: "IELTS & PTE Coaching",
    desc: "Targeted coaching engineered for top band scores.",
  },
  {
    icon: FileCheck,
    title: "Visa Curation",
    desc: "Documentation, financial planning and interview prep.",
  },
  { icon: Award, title: "Scholarship Sourcing", desc: "We hunt funding so you don't have to." },
  {
    icon: Plane,
    title: "Pre-Departure Concierge",
    desc: "Briefings, bookings and a confident first flight.",
  },
  {
    icon: HomeIcon,
    title: "Settlement Support",
    desc: "Verified housing, SIM, banking and arrival kit.",
  },
];

const why = [
  {
    icon: Users,
    title: "Curators, not salespeople",
    desc: "Our advisers are paid to find your best fit — not to push a quota of universities.",
  },
  {
    icon: GraduationCap,
    title: "Two countries, one team",
    desc: "Local presence in Rawalpindi and Wallan, Victoria — your journey is supported on both ends.",
  },
  {
    icon: HeartHandshake,
    title: "Lifetime alumni network",
    desc: "From counselling to convocation and beyond — our students stay family.",
  },
  {
    icon: Target,
    title: "Outcome-focused",
    desc: "We measure ourselves on visa grants, scholarships secured and graduate employment.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "A free 30-minute conversation about your ambitions, grades and budget.",
  },
  {
    step: "02",
    title: "Curate Shortlist",
    desc: "We design a personalised list of universities, courses and intakes.",
  },
  {
    step: "03",
    title: "Application Sprint",
    desc: "SOPs, references, transcripts — managed by your dedicated curator.",
  },
  {
    step: "04",
    title: "Visa & Funding",
    desc: "Documentation, financial proofs and visa lodgement, done right.",
  },
  {
    step: "05",
    title: "Land & Thrive",
    desc: "Pre-departure briefing, accommodation and on-ground support.",
  },
];

const testimonials = [
  {
    name: "Areeba S.",
    role: "MSc Data Science · UNSW Sydney",
    text: "The Curatives team rebuilt my SOP three times until it sang. Visa came through in two weeks.",
    img: studentFemale,
  },
  {
    name: "Bilal A.",
    role: "BEng · TU Berlin",
    text: "I never thought a German tuition-free university was within reach. They walked me through every form.",
    img: studentMale,
  },
  {
    name: "Mahnoor I.",
    role: "MA · UCD Dublin",
    text: "From IELTS coaching to my Dublin flat keys — Education Curatives genuinely stayed by my side.",
    img: studentFemale,
  },
];

const faqs = [
  {
    q: "What makes Education Curatives different?",
    a: "We're a curatorial consultancy — every shortlist, SOP and visa file is handcrafted, not templated. You get a dedicated curator from discovery to graduation.",
  },
  {
    q: "Which countries do you specialise in?",
    a: "Australia, the United Kingdom, Germany, Ireland and New Zealand — five destinations chosen for their academic reputation, post-study work rights and welcoming cultures.",
  },
  {
    q: "Do you provide IELTS and PTE coaching?",
    a: "Yes. Our in-house coaches run small-group and 1:1 sessions designed to push you past the band you need for top universities and visas.",
  },
  {
    q: "How long does the full process take?",
    a: "Plan for 3–6 months from first call to flight. We help you map a realistic timeline against the next available intake.",
  },
  {
    q: "Do you help with scholarships?",
    a: "Absolutely. We actively scan partner universities and external funders, then help you craft applications that win.",
  },
  {
    q: "How do I get started?",
    a: "Send us a message, call +92 327 5873923 or +92 333 5400462, or visit our Rawalpindi office in Gulistan Colony (Building 761, St 7e, Lane 7). The first consultation is always free.",
  },
];

function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <HeroSlideshow />
      </div>

      {/* INTEGRATED STATS */}
      <section className="relative -mt-16 z-20 mx-auto max-w-7xl px-6">
        <div className="bg-navy rounded-[2.5rem] shadow-elegant border border-white/10 p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-accent-gold)]/10 blur-[100px] -z-10" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-[var(--color-accent-gold)] mb-4 border border-white/10">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <div className="font-display text-4xl md:text-5xl text-white font-semibold tracking-tight">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs md:text-sm text-white/50 font-medium uppercase tracking-widest mt-2">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME - REFINED BENTO-ISH LAYOUT */}
      <section className="py-32 mx-auto max-w-7xl px-6 relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 blur-[120px] -z-10 animate-blob" />

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <SectionHeading
              eyebrow="The Art of Curation"
              title="Education, the way it should be."
              description="We treat each student like a one-of-a-kind exhibit. From the first conversation to your first day on campus abroad, every step is handpicked, briefed and refined by a dedicated curator."
            />

            <div className="space-y-6 mt-10">
              {[
                {
                  title: "Bespoke shortlists",
                  desc: "Never copy-pasted templates, always your fit.",
                  icon: Target,
                },
                {
                  title: "Honest advice",
                  desc: "Transparent fees and measurable outcomes.",
                  icon: HeartHandshake,
                },
                {
                  title: "Lifetime network",
                  desc: "Our students stay family long after graduation.",
                  icon: Users,
                },
              ].map((c, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex gap-4 group">
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-xl text-navy font-semibold">{c.title}</div>
                      <p className="text-muted-foreground text-sm">{c.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-full font-semibold group hover:bg-primary transition-all"
              >
                The Curatives Story
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-2 gap-4">
            <Reveal className="pt-12">
              <div className="relative group overflow-hidden rounded-[2rem] shadow-elegant">
                <img
                  src={reception}
                  alt="Education Curatives"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Reveal>
            <div className="space-y-4">
              <Reveal delay={0.2}>
                <div className="relative group overflow-hidden rounded-[2rem] shadow-elegant">
                  <img
                    src={consultation}
                    alt="Consultation"
                    className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="bg-[var(--color-accent-gold)] p-8 rounded-[2rem] h-[240px] flex flex-col justify-end">
                  <Sparkles className="h-8 w-8 text-[var(--color-accent-gold-foreground)] mb-4" />
                  <p className="font-display text-2xl text-[var(--color-accent-gold-foreground)] font-semibold leading-tight">
                    A boutique consultancy with a global mindset.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS - HORIZONTAL GALLERY */}
      <section className="py-32 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="mx-auto max-w-7xl px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Global Destinations"
            title="Five worlds, one curator."
            description="Hand-picked study destinations chosen for academic strength and student wellbeing."
          />
          <Reveal>
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-primary font-semibold group bg-white px-6 py-3 rounded-full shadow-soft hover:shadow-elegant transition-all"
            >
              View all destinations
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        <HorizontalScroll
          items={COUNTRIES.map((c, i) => (
            <div key={c.slug} className="px-2">
              <CountryCard c={c} index={i} />
            </div>
          ))}
        />
      </section>

      {/* SERVICES - SUPER MODERN BENTO GRID */}
      <section className="py-32 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <SectionHeading
                eyebrow="Our Expertise"
                title="A complete suite, thoughtfully curated."
                description="We don't just process applications; we curate futures. Each service is a masterclass in detail and dedication."
              />
            </div>
            <Reveal>
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 text-primary font-bold text-lg hover:text-navy transition-colors"
              >
                Explore Full Suite{" "}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:auto-rows-[120px]">
            {/* Card 1: Main Highlight */}
            <div className="md:col-span-7 md:row-span-4 group relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-navy p-8 md:p-12 flex flex-col justify-end transition-all hover:shadow-glow min-h-[300px] md:min-h-0">
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent z-10" />
              <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/30 blur-[120px] group-hover:bg-primary/40 transition-colors" />

              <div className="relative z-20">
                <div className="h-20 w-20 rounded-3xl bg-[var(--color-accent-gold)] flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                  <BookOpen className="h-10 w-10 text-navy" />
                </div>
                <h3 className="font-display text-3xl md:text-5xl text-white mb-6 font-semibold leading-tight">
                  Bespoke
                  <br />
                  Counselling
                </h3>
                <p className="text-white/60 text-lg md:text-xl max-w-sm leading-relaxed mb-8">
                  Profile mapping that treats you as an individual, not a number.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Blueprint Design", "Career Mapping", "University Search"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[11px] uppercase font-bold tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2: Test Coaching */}
            <div className="md:col-span-5 md:row-span-3 group relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-white border border-border p-8 md:p-10 flex flex-col justify-between transition-all hover:-translate-y-2 hover:shadow-elegant">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
              <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Headphones className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-display text-3xl text-navy mb-4 font-semibold">
                  Test Coaching
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  IELTS & PTE training engineered by experts for top-tier band scores.
                </p>
              </div>
            </div>

            {/* Card 3: Visa Curation */}
            <div className="md:col-span-5 md:row-span-3 group relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-white border border-border p-8 md:p-10 flex flex-col justify-between transition-all hover:-translate-y-2 hover:shadow-elegant">
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <FileCheck className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-display text-3xl text-navy mb-4 font-semibold">
                  Visa Curation
                </h3>
                <p className="text-muted-foreground text-base">
                  Documentation and interview prep handled with surgical precision.
                </p>
              </div>
            </div>

            {/* Card 4: Scholarship Focus */}
            <div className="md:col-span-4 md:row-span-3 group relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-[var(--color-accent-gold)] p-8 md:p-10 flex flex-col justify-between transition-all hover:-translate-y-2 hover:shadow-glow">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-20" />
              <div className="h-14 w-14 rounded-2xl bg-black/10 text-navy flex items-center justify-center">
                <Award className="h-7 w-7" />
              </div>
              <div>
                <div className="text-navy/60 text-[10px] uppercase font-bold tracking-[0.3em] mb-2">
                  Funding Growth
                </div>
                <h3 className="font-display text-3xl text-navy mb-4 font-semibold">Scholarships</h3>
                <p className="text-navy/70 text-base">
                  We scan every funder to ensure your potential is rewarded.
                </p>
              </div>
            </div>

            {/* Card 5: Post Arrival */}
            <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-white border border-border p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-10 transition-all hover:-translate-y-2 hover:shadow-elegant">
              <div className="h-20 w-20 shrink-0 rounded-[2rem] bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Plane className="h-10 w-10" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-3xl text-navy mb-3 font-semibold">
                  Concierge & Arrival
                </h3>
                <p className="text-muted-foreground text-base max-w-xl">
                  From your flight booking to finding your first flat — we are with you on the
                  ground.
                </p>
              </div>
              <Link
                to="/contact"
                className="h-16 w-16 rounded-full bg-navy text-white flex items-center justify-center hover:bg-primary transition-colors shadow-soft"
              >
                <ArrowRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US - MODERN BENTO GRID */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="mb-20">
            <SectionHeading
              light
              eyebrow="The Difference"
              title="Why Education Curatives?"
              description="We don't just process applications; we curate futures."
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Main Feature */}
            <div className="lg:col-span-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] -z-10 group-hover:bg-primary/30 transition-colors" />
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1">
                  <div className="text-[var(--color-accent-gold)] font-bold mb-4 uppercase tracking-tighter">
                    01. Curators, not salespeople
                  </div>
                  <h3 className="font-display text-4xl text-white mb-6 leading-tight">
                    Our advisers find your best fit — not a quota.
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Unlike traditional agencies, we aren't incentivized by university commissions.
                    Our success is measured solely by your placement in a program that truly aligns
                    with your goals.
                  </p>
                </div>
                <div className="flex-1 w-full">
                  <img
                    src={consultation}
                    alt="Counselling"
                    className="rounded-3xl shadow-elegant object-cover h-64 w-full"
                  />
                </div>
              </div>
            </div>

            {/* Small Feature */}
            <div className="lg:col-span-4 bg-[var(--color-accent-gold)] rounded-[2.5rem] p-10 flex flex-col justify-between group overflow-hidden relative">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black/10 rounded-full blur-3xl" />
              <div>
                <div className="text-navy/60 font-bold mb-4 uppercase tracking-tighter">
                  02. Local & Global
                </div>
                <h3 className="font-display text-3xl text-navy mb-4">
                  Two countries, one dedicated team.
                </h3>
              </div>
              <p className="text-navy/70 text-sm">
                With presence in Pakistan and Australia, we support your journey from both ends.
              </p>
            </div>

            {/* Small Feature */}
            <div className="lg:col-span-4 bg-primary rounded-[2.5rem] p-10 text-white flex flex-col justify-between group">
              <div>
                <div className="text-white/60 font-bold mb-4 uppercase tracking-tighter">
                  03. Support
                </div>
                <h3 className="font-display text-3xl mb-4">Lifetime alumni network.</h3>
              </div>
              <p className="text-white/70 text-sm">
                From counselling to convocation and beyond — our students stay part of the family.
              </p>
            </div>

            {/* Medium Feature */}
            <div className="lg:col-span-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 overflow-hidden relative flex items-center">
              <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                <div className="order-2 md:order-1">
                  <img
                    src={graduation}
                    alt="Graduation"
                    className="rounded-3xl shadow-elegant object-cover h-48 w-full"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="text-[var(--color-accent-gold)] font-bold mb-4 uppercase tracking-tighter">
                    04. Results
                  </div>
                  <h3 className="font-display text-3xl text-white mb-4">
                    Outcome-focused excellence.
                  </h3>
                  <p className="text-white/60 text-sm">
                    We measure ourselves on visa grants, scholarships secured, and graduate
                    employment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS - REFINED PATH */}
      <section className="py-32 mx-auto max-w-7xl px-6 relative">
        <div className="text-center mb-24">
          <SectionHeading
            align="center"
            eyebrow="The Roadmap"
            title="Your Path to Global Success"
            description="A clear, honest journey from first call to your first class."
          />
        </div>

        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 -z-10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative group">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-border flex items-center justify-center font-display text-2xl font-bold text-navy mb-8 group-hover:border-primary group-hover:text-primary transition-all mx-auto lg:mx-0 bg-card shadow-soft">
                    {p.step}
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="font-display text-xl text-navy mb-3 font-semibold">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                  {/* Small arrow for mobile/tablet */}
                  {i < process.length - 1 && (
                    <div className="md:hidden flex justify-center my-6 text-border">
                      <ArrowRight className="h-6 w-6 rotate-90" />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - PREMIUM SLIDER FEEL */}
      <section className="py-32 bg-navy text-navy-foreground relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] -z-10 animate-blob" />
        <div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-accent-gold)]/10 blur-[120px] -z-10 animate-blob"
          style={{ animationDelay: "4s" }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <SectionHeading
              align="center"
              light
              eyebrow="Success Stories"
              title="Real Journeys, Curated."
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="h-full p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 hover:border-[var(--color-accent-gold)]/40 transition-all hover:-translate-y-2 group">
                  <div className="h-12 w-12 rounded-2xl bg-[var(--color-accent-gold)]/20 flex items-center justify-center mb-8 group-hover:bg-[var(--color-accent-gold)] transition-colors">
                    <Quote className="h-6 w-6 text-[var(--color-accent-gold)] group-hover:text-navy" />
                  </div>
                  <p className="text-white/90 leading-relaxed mb-10 font-display text-xl italic font-light">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                    <div className="relative">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="h-14 w-14 rounded-2xl object-cover ring-2 ring-white/10"
                      />
                      <div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-primary grid place-items-center">
                        <FileCheck className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-white text-lg">{t.name}</div>
                      <div className="text-sm text-white/50">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - THE FINAL IMPRESSION */}
      <section className="py-32 mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[3rem] bg-navy text-navy-foreground p-12 md:p-24 shadow-elegant group">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/30 blur-[150px] -z-10 group-hover:bg-primary/40 transition-colors duration-1000" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[var(--color-accent-gold)]/20 blur-[150px] -z-10" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[var(--color-accent-gold)] text-xs font-bold uppercase tracking-widest mb-8 border border-white/10">
                <Sparkles className="h-4 w-4" /> Start Your Curation
              </div>
              <h2 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.85] font-medium tracking-tighter mb-8">
                Your global future,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-gold)] to-primary-glow">
                  hand-picked.
                </span>
              </h2>
              <p className="text-white/70 text-xl max-w-lg leading-relaxed">
                Book a free 30-minute discovery call. No pressure, no scripts — just an honest
                conversation about your potential.
              </p>
            </div>

            <div className="flex flex-col gap-6 lg:items-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[var(--color-accent-gold)] text-navy px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-glow w-full sm:w-auto"
              >
                Book Discovery Call <ArrowRight className="h-5 w-5" />
              </Link>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href="tel:+923275873923"
                  className="inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all text-white flex-1 sm:flex-none"
                >
                  <Headphones className="h-5 w-5" /> +92 327 5873923
                </a>
                <a
                  href="tel:+923335400462"
                  className="inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all text-white flex-1 sm:flex-none"
                >
                  <Headphones className="h-5 w-5" /> +92 333 5400462
                </a>
              </div>
              <div className="mt-4 flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-navy bg-primary/20 backdrop-blur-sm grid place-items-center text-[10px] font-bold text-white"
                  >
                    {i === 4 ? "+50" : ""}
                  </div>
                ))}
                <div className="pl-6 text-sm text-white/40 flex items-center">
                  Joined by 1,200+ students this year
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
