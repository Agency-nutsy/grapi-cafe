import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

// 🔁 Replace these image files in your /assets/ folder with real Grapi photos
import coffeeImg       from "@/assets/signature.webp";
import croissantImg    from "@/assets/butter croissant.webp";
import breakfastImg    from "@/assets/egg drop.webp";
import tacoImg         from "@/assets/taco.webp";
import cafeInteriorImg from "@/assets/gallery 1.webp";
import baristaImg      from "@/assets/barista.webp";
import coldbrewImg     from "@/assets/cold.jpg";
import pastaImg        from "@/assets/carbonara.jpg";
import waffleImg       from "@/assets/waffle.jpg";
import gallery3        from "@/assets/vibes.webp";




const images = [
  { src: coffeeImg,       alt: "Signature Latte",         cat: "Coffee" },
  { src: cafeInteriorImg, alt: "Café Interior",           cat: "Ambiance" },
  { src: breakfastImg,    alt: "Egg Drop Sandwich",       cat: "Food" },
  { src: croissantImg,    alt: "Fresh Butter Croissant",  cat: "Food" },
  { src: tacoImg,         alt: "Veg DIY Taco",            cat: "Food" },
  { src: baristaImg,      alt: "Barista Crafting Coffee", cat: "Ambiance" },
  { src: coldbrewImg,     alt: "Cold Brew",               cat: "Coffee" },
  { src: pastaImg,        alt: "Spaghetti Carbonara",     cat: "Food" },
  { src: waffleImg,       alt: "Belgian Waffle",          cat: "Food" },
  { src: gallery3,        alt: "Grapi Café Vibes",        cat: "Ambiance" },
];

const filters = ["All", "Food", "Coffee", "Ambiance"];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.cat === filter);

  return (
    <div className="pt-28 pb-20" style={{ fontFamily: "'Lato', sans-serif" }}>
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span
              className="text-primary text-sm font-semibold tracking-widest uppercase"
              style={{ letterSpacing: "0.2em" }}
            >
              Gallery
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A Glimpse Inside Grapi
            </h1>
            <p
              className="text-muted-foreground mt-3"
              style={{ fontWeight: 300 }}
            >
              Our coffee, our food, our soul
            </p>
            <div className="section-divider max-w-xs mx-auto mt-6" />
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal>
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{ fontFamily: "'Lato', sans-serif" }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Image Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.alt}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="overflow-hidden rounded-2xl group aspect-square cursor-pointer relative"
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p
                    className="text-primary-foreground text-sm font-semibold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {img.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  src={filtered[selected]?.src}
                  alt={filtered[selected]?.alt}
                  className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                />
                {/* Caption */}
                <p
                  className="text-center text-white/80 mt-3 text-sm"
                  style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
                >
                  {filtered[selected]?.alt}
                </p>
                {/* Close hint */}
                <p
                  className="text-center text-white/40 text-xs mt-1"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Click anywhere to close
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default GalleryPage;
