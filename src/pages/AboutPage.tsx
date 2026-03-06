import { Coffee, Sparkles, MapPin, ChefHat } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import gallery1 from "@/assets/gallery 1.webp";
import gallery2 from "@/assets/gallery 2.webp";
import heroImage from "@/assets/signature.webp";

// Add this in your global CSS or index.css:
// @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Lato:wght@300;400;700&display=swap');

const values = [
  {
    icon: Coffee,
    title: "Specialty Coffee",
    desc: "We source single-origin beans and brew every cup with precision — because great coffee is never an accident.",
  },
  {
    icon: Sparkles,
    title: "Beautiful Presentation",
    desc: "At Grapi, every plate leaves the kitchen looking like art. We believe food should delight the eyes before the palate.",
  },
  {
    icon: MapPin,
    title: "Rooted in Malviya Nagar",
    desc: "We're proud to be Malviya Nagar's favourite café — serving our neighbourhood with warmth since 2024.",
  },
  {
    icon: ChefHat,
    title: "Made Fresh, Daily",
    desc: "From hand-laminated croissants to slow-brewed cold brew, everything at Grapi is crafted fresh every single day.",
  },
];

const AboutPage = () => (
  <div
    className="pt-28 pb-20"
    style={{ fontFamily: "'Lato', sans-serif" }}
  >
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span
            className="text-primary text-sm font-semibold tracking-widest uppercase"
            style={{ fontFamily: "'Lato', sans-serif", letterSpacing: "0.2em" }}
          >
            About Us
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Story
          </h1>
          <p
            className="text-muted-foreground mt-3 max-w-md mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            A café brewed to perfection in the heart of Delhi
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>
      </ScrollReveal>

      {/* Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 max-w-5xl mx-auto">
        <ScrollReveal direction="left">
          <div className="relative">
            <img
              src={gallery1}
              alt="Grapi Cafe interior"
              className="rounded-2xl w-full h-80 object-cover shadow-xl"
              loading="lazy"
            />
            <img
              src={gallery2}
              alt="Grapi barista at work"
              className="absolute -bottom-6 -right-4 w-40 h-40 object-cover rounded-2xl border-4 border-background shadow-lg hidden md:block"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div
            className="space-y-5 text-muted-foreground leading-relaxed"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
          >
            <p>
              Grapi Coffee & Patisserie opened in 2024 with one obsession — perfecting
              every detail of your café experience. Tucked inside Geetanjali Enclave,
              Malviya Nagar, we quickly became Delhi's most talked-about new café, known
              for specialty coffee, house-baked pastries, and all-day breakfast plates
              that are as beautiful as they are delicious.
            </p>
            <p>
              The name <strong style={{ color: "inherit" }}>Grapi</strong> stands for a
              singular philosophy: that nothing about your visit should be average. From
              the temperature of your espresso to the crunch of a fresh croissant — every
              detail is intentional, every ingredient is chosen with care.
            </p>
            <p
              className="font-medium text-foreground"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
            >
              At Grapi, food is more than a meal — it's a carefully crafted experience,
              served with warmth and a whole lot of love.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Full-width image banner */}
      <ScrollReveal>
        <div className="relative rounded-2xl overflow-hidden mb-24 h-64 md:h-80 max-w-5xl mx-auto">
          <img
            src={heroImage}
            alt="Grapi food spread"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-md">
              <h2
                className="text-3xl font-bold text-primary-foreground mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Brewed with Soul
              </h2>
              <p
                className="text-primary-foreground/70"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                Every cup, every plate, every crumb at Grapi is a labor of love —
                crafted to make your day a little more beautiful.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Values */}
      <ScrollReveal>
        <div className="text-center mb-12">
          <span
            className="text-primary text-sm font-semibold tracking-widest uppercase"
            style={{ fontFamily: "'Lato', sans-serif", letterSpacing: "0.2em" }}
          >
            Our Values
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why Choose Grapi
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {values.map((v, i) => (
          <ScrollReveal key={v.title} delay={i * 0.1}>
            <div className="p-8 rounded-2xl bg-card border border-border card-hover group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <v.icon size={24} className="text-primary" />
              </div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {v.title}
              </h3>
              <p
                className="text-sm text-muted-foreground leading-relaxed"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
              >
                {v.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </div>
);

export default AboutPage;
