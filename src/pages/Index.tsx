import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Coffee, Leaf, UtensilsCrossed, Star, ArrowRight, Clock, MapPin, Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

// 🔁 Replace these with your actual Grapi café photos in /assets/
import heroSlide1 from "@/assets/hero slider 1.webp";
import heroSlide2 from "@/assets/hero slider 2.webp";
import heroSlide3 from "@/assets/hero silder 3.webp";
import heroSlide4 from "@/assets/hero slider 4.webp";
import coffeeImg    from "@/assets/signature.webp";
import croissantImg from "@/assets/butter croissant.webp";
import breakfastImg from "@/assets/egg drop.webp";
import tacoImg      from "@/assets/taco.webp";
import gallery1     from "@/assets/gallery 1.webp";
import gallery2     from "@/assets/gallery 2.webp";


const PHONE        = "+919811964712";
const PHONE_DISPLAY = "+91 98119 64712";
const ADDRESS      = "Shop No. 9, Geetanjali Enclave, Behind Oberoi Dhaba, Malviya Nagar, New Delhi, Delhi 110017";
const MAPS_LINK    = "https://google.com/maps/place/Grapi/data=!4m2!3m1!1s0x0:0xa4484a0406a534e3";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.1!2d77.20559!3d28.52761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1e6b4a534e3%3A0xa4484a0406a534e3!2sGrapi!5e0!3m2!1sen!2sin!4v1709467200000!5m2!1sen!2sin";


const heroSlides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

const specialties = [
  { name: "Signature Latte",         desc: "Single-origin espresso, velvety micro-foam — brewed to perfection every time.",     img: coffeeImg,    price: "₹220", tag: "Bestseller" },
  { name: "Butter Croissant",        desc: "Hand-laminated, baked fresh every morning — crispy outside, fluffy inside.",         img: croissantImg, price: "₹150", tag: "Baked Fresh" },
  { name: "Egg Drop Sandwich",       desc: "Chunky egg filling, house aioli, toasted brioche — our most-loved breakfast.",       img: breakfastImg, price: "₹280", tag: "Must Try" },
  { name: "Veg DIY Taco",            desc: "Guacamole, beetroot, corn & salsa — assemble your own flavour-packed taco.",         img: tacoImg,      price: "₹320", tag: "Fan Favourite" },
];

const reviews = [
  { name: "Anika R.",   text: "Best café in Malviya Nagar, hands down! The cold brew and croissant combo is absolutely unreal. I come here every weekend now.",    rating: 5, avatar: "A" },
  { name: "Rohan M.",   text: "The egg drop sandwich blew my mind. Everything feels premium — the food, the space, the coffee. Grapi is a vibe.",                  rating: 5, avatar: "R" },
  { name: "Simran K.",  text: "Gorgeous presentation, incredible taste. The spaghetti carbonara is restaurant-level quality. This place deserves way more hype.",  rating: 5, avatar: "S" },
];

const stats = [
  { value: "4.6★",  label: "Google Rating"    },
  { value: "365+",  label: "Happy Reviews"    },
  { value: "30+",   label: "Menu Items"       },
  { value: "2024",  label: "Est. Malviya Nagar" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = React.useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      }
    }
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {heroSlides.map((slide, i) => (
          <motion.img
            key={i}
            src={slide}
            alt="Grapi Cafe"
            className="absolute inset-0 w-full h-full object-cover"
            initial={false}
            animate={{ opacity: i === currentSlide ? 1 : 0, scale: i === currentSlide ? 1 : 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 hero-overlay z-10" />
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl z-10" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl z-10" />

        <div className="relative z-20 container">
          <div className="max-w-2xl">
            {/* REMOVED: Specialty Coffee & Patisserie Label */}

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-[0.95]"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Grapi
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-primary-foreground/80 mb-10 italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Where Every Detail is Brewed to Perfection
            </motion.p>

            {/* REMOVED: Long description text block */}

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link
                to="/menu"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Explore Menu
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-4 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <Phone size={18} />
                Call Us
              </a>
            </motion.div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? "bg-primary-foreground w-8" : "bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
          </div>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="relative z-30 py-12">
        <div className="container">
          <ScrollReveal>
            <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-3xl md:text-4xl font-bold text-gradient"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-sm text-muted-foreground mt-1"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY GRAPI ── */}
      <section className="py-20 bg-grain">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span
                className="text-primary text-sm font-semibold tracking-widest uppercase"
                style={{ fontFamily: "'Lato', sans-serif", letterSpacing: "0.2em" }}
              >
                Why Us
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mt-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                The Grapi Difference
              </h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Coffee,          title: "Specialty Coffee",      desc: "Single-origin beans, precision-brewed by passionate baristas. Every cup is a craft, not a commodity." },
              { icon: Leaf,            title: "Fresh Every Morning",   desc: "Our pastries are baked in-house daily and our ingredients are sourced fresh. No shortcuts, ever." },
              { icon: UtensilsCrossed, title: "All-Day Dining",        desc: "From 10 AM breakfast plates to late-night mains — Grapi has you covered every hour of the day." },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.15}>
                <div className="p-8 rounded-2xl bg-card border border-border card-hover text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                    <f.icon size={28} className="text-primary" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-muted-foreground leading-relaxed"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    {f.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE DISHES ── */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span
                className="text-primary text-sm font-semibold tracking-widest uppercase"
                style={{ fontFamily: "'Lato', sans-serif", letterSpacing: "0.2em" }}
              >
                Our Menu
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mt-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Signature Dishes
              </h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden bg-card border border-border group card-hover">
                  <div className="relative overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {s.tag}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className="font-bold text-lg"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {s.name}
                      </h3>
                      <span
                        className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        {s.price}
                      </span>
                    </div>
                    <p
                      className="text-sm text-muted-foreground leading-relaxed"
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link
                to="/menu"
                className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                View Full Menu <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── AMBIANCE SPLIT ── */}
      <section className="py-20 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src={gallery1}
                  alt="Grapi café interior"
                  className="rounded-2xl w-full h-80 object-cover shadow-xl"
                  loading="lazy"
                />
                <img
                  src={gallery2}
                  alt="Grapi food platter"
                  className="absolute -bottom-8 -right-4 md:-right-8 w-48 h-48 object-cover rounded-2xl border-4 border-background shadow-lg"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="md:pl-4">
                <span
                  className="text-primary text-sm font-semibold tracking-widest uppercase"
                  style={{ fontFamily: "'Lato', sans-serif", letterSpacing: "0.2em" }}
                >
                  Our Story
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold mt-2 mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  A Café Obsessed<br />with Every Detail
                </h2>
                <p
                  className="text-muted-foreground leading-relaxed mb-6"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  Grapi opened in 2024 with one mission — to make every detail of your café visit perfect. 
                  From the temperature of your espresso to the crunch of a fresh croissant, nothing at Grapi 
                  is left to chance. We're proud to be Malviya Nagar's most-loved neighbourhood café.
                </p>
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Read Our Story <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 bg-secondary bg-grain">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span
                className="text-primary text-sm font-semibold tracking-widest uppercase"
                style={{ fontFamily: "'Lato', sans-serif", letterSpacing: "0.2em" }}
              >
                Testimonials
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mt-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What Our Guests Say
              </h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 0.15}>
                <div className="p-8 rounded-2xl bg-card border border-border card-hover relative">
                  <div
                    className="absolute -top-3 left-8 text-6xl text-primary/10"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    "
                  </div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      /* UPDATED: Stars are now a premium golden color */
                      <Star key={j} size={16} className="fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>
                  <p
                    className="text-muted-foreground mb-6 leading-relaxed"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    {r.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {r.avatar}
                    </div>
                    <p
                      className="font-semibold text-sm"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {r.name}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOURS & LOCATION ── */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div>
                <span
                  className="text-primary text-sm font-semibold tracking-widest uppercase"
                  style={{ fontFamily: "'Lato', sans-serif", letterSpacing: "0.2em" }}
                >
                  Find Us
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold mt-2 mb-8"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Visit Grapi
                </h2>
                <div className="space-y-6">
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4
                        className="font-semibold mb-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Address
                      </h4>
                      <p
                        className="text-sm text-muted-foreground"
                        style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                      >
                        {ADDRESS}
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4
                        className="font-semibold mb-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Opening Hours
                      </h4>
                      <p
                        className="text-sm text-muted-foreground"
                        style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                      >
                        Monday – Sunday: 10:00 AM – 11:45 PM
                      </p>
                    </div>
                  </div>
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4
                        className="font-semibold mb-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Phone
                      </h4>
                      <p
                        className="text-sm text-muted-foreground"
                        style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                      >
                        {PHONE_DISPLAY}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-80">
                <iframe
                  src={MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Grapi Cafe Location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-10" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Craving Something Good?
            </h2>
            <p
              className="text-primary-foreground/70 mb-8 text-lg max-w-lg mx-auto"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              Come visit us in Malviya Nagar or give us a call — we'd love to brew your next favourite cup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground text-foreground px-8 py-4 font-semibold hover:shadow-xl transition-all duration-300"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <Phone size={18} />
                Call Us Now
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Explore Menu
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;