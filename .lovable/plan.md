# MA Education Consultants — Modern Website Revamp

A complete visual and structural revamp of the existing site, keeping the logo and red/navy color scheme but elevating it to a modern, animated, image-rich experience.

## Brand Foundation

- **Logo**: Use the uploaded MAEC logo across header, footer, favicon, and hero badge
- **Color scheme** (kept from original):
  - Primary Red: bold MAEC red (used for accents, CTAs, highlights)
  - Deep Navy: dark blue-gray (headings, footer, contrast surfaces)
  - Off-white / soft cream backgrounds with subtle gradient washes
- **Typography**: Modern pairing — bold condensed display font for headings (Bebas Neue / Anton style), clean sans-serif for body (Inter)
- **Motion language**: Smooth fades, parallax, staggered reveals on scroll, subtle hover lifts, animated gradient blobs, marquee logos

## Site Structure (separate routes for SEO)

```
/                Home
/about           About / Our Story
/services        Services
/destinations    Countries we cover
/why-us          Why Choose Us
/team            Our Team (generalized)
/contact         Contact
```

Sticky transparent-on-top header that solidifies on scroll, with logo left, nav center, "Apply Now" red CTA right. Mobile: animated hamburger → slide-in drawer.

## Page-by-Page Plan

### Home (`/`)
1. **Hero slideshow** — full-bleed rotating slides for each destination country (Australia, UK, Germany, Ireland, New Zealand). Each slide: cinematic landmark image (Opera House, Big Ben, Brandenburg Gate, Cliffs of Moher, Auckland skyline), animated headline "Study Abroad in [Country]", subhead, dual CTAs ("Book Free Consultation" / "Explore Destinations"). Ken Burns zoom on image, text fades + slides in, custom progress dots, autoplay with pause-on-hover.
2. **Trust strip** — animated counters: 800+ Visa Grants · 100+ University Partners · 90% Success Rate · 15+ Years (est. 2008). Icons + count-up on scroll.
3. **Welcome / Intro** — split layout: office reception image (uploaded image-10) on one side, "Welcome to MAEC" copy + 3 mini cards (Our Story / Our Values / Our Promise) with hover lift.
4. **Destinations carousel** — 5 country cards with flag + landmark image, hover reveal CTA, links to `/destinations`.
5. **Services preview** — grid of 6 service cards with line icons (Education Consultancy, IELTS & English, Visa Assistance, Scholarships, Pre-Departure, Accommodation). Glass-morphism cards, gradient border on hover.
6. **Why Choose Us** — alternating image+text rows with parallax, Pakistani student photos.
7. **Process timeline** — animated 5-step journey (Consult → Choose → Apply → Visa → Fly), SVG path that draws as you scroll.
8. **Testimonials slider** — student stories with photos (Pakistani-looking subjects), university logos, star ratings, swipeable.
9. **University partners marquee** — infinite scrolling logo strip.
10. **CTA banner** — bold red gradient with "Start Your Journey Today" + contact.
11. **Footer** — logo, address, hours, quick links, socials (FB, LinkedIn, Instagram), newsletter input.

### About (`/about`)
- Hero with office building image (uploaded image-9) and tagline
- "Our Story" long-form with image collage
- Mission / Vision / Values trio with icons
- Stats band
- Office gallery (uploaded reception + building images + AI-generated relevant interiors)

### Services (`/services`)
- Hero with relevant image
- Education Consultancy section: 8 services as animated icon grid
- Coaching & IELTS Training: split section with 2 detailed cards (Coaching Services, IELTS Training)
- Additional services: Visa, Pre-Departure, Accommodation, Travel
- CTA

### Destinations (`/destinations`)
- 5 large country cards (Australia, UK, Germany, Ireland, New Zealand) — each with landmark hero image, brief intro, top universities, why study there, requirements snapshot. Reveal-on-scroll, hover tilt.

### Why Choose Us (`/why-us`)
- Hero
- 6 reason cards with icons + imagery (informed counselors, experience with Pakistani students, ongoing support, seminars/workshops, top university placements, global opportunities)
- Quote/testimonial band

### Team (`/team`) — generalized
- Hero "Meet Our Team" with team-style office photo
- Intro paragraph about word-of-mouth philosophy and team approach
- Department cards (no individual names): Leadership · Counseling & Advisory · Institutional Partnerships · Visa & Documentation · Finance & Operations · IELTS Trainers — each with icon, brief role description, generic professional imagery
- Values strip: Pre-departure, airport pickup, accommodation, settlement, post-arrival support
- Join-our-team CTA

### Contact (`/contact`)
- Hero
- Two-column: contact form (name, email, phone, country of interest, message) with floating labels and animated submit, alongside info card with new address (Building #67, Southern Commercial Hub, Bahria Safari Valley Phase 8, Bahria Town, Rawalpindi 44000), phones (051-4444489, +92 334 9087094), emails (Study@maeduconsultants.com, Apply@maeduconsultants.com), hours (Mon–Sat 9 AM–6 PM, Sunday closed), social icons
- Embedded Google Map of new address
- FAQ accordion (services, eligibility, timeline, scholarships, support, getting started)

## Imagery Strategy

- **Uploaded assets used directly**: logo (header/footer/favicon), office building exterior (about/contact heroes), reception interior (about gallery, home welcome section)
- **AI-generated images** (Pakistani-looking subjects where people appear): student consultations, IELTS classroom, students with luggage at airport, advisor with student, group of smiling Pakistani students with university backdrop, hands signing documents, graduation
- **Stock-style country landmarks**: Opera House, Big Ben/London, Brandenburg Gate, Cliffs of Moher, Auckland — generated for hero slides and destination cards
- Every section has a relevant image, illustration, or icon

## Animations & Interactions

- Scroll-triggered reveals (fade + slide up, staggered) using Intersection Observer
- Hero: Ken Burns zoom, slide crossfade, animated text mask
- Animated counters on stats
- Marquee for partner logos
- Hover: card lift + shadow grow, image zoom, gradient border glow, button shimmer
- Header shrink + background blur on scroll
- Animated SVG underlines on links
- Floating gradient blobs on hero/CTA backgrounds
- Smooth page transitions
- Mobile drawer slide-in with stagger
- Reduced-motion respected via `prefers-reduced-motion`

## Technical Notes

- TanStack Start file-based routes; each route gets its own `head()` SEO meta + og:image
- Tailwind v4 design tokens extended with brand colors in `src/styles.css`
- Reusable components: `Header`, `Footer`, `HeroSlideshow`, `SectionHeading`, `StatCounter`, `CountryCard`, `ServiceCard`, `TestimonialCarousel`, `LogoMarquee`, `FAQAccordion`, `RevealOnScroll`, `AnimatedCTA`
- Image generation via Lovable AI Gateway (Nano Banana Pro for hero/destination key visuals, Nano Banana 2 for secondary), saved into `src/assets/`
- Uploaded images copied into `src/assets/` (logo, building, reception)
- Contact form is front-end only (no backend) — submit shows toast; can be wired to email later
- Fully responsive (mobile-first), accessible (semantic HTML, alt text, focus states, ARIA on accordions/sliders)
