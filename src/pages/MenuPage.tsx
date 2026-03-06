import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const PHONE = "+919811964712";

const menuData = [
  {
    category: "Coffee & Hot Drinks",
    emoji: "☕",
    items: [
      { name: "Espresso",           price: "₹120", desc: "Pure single-origin shot, clean and bold" },
      { name: "Cappuccino",         price: "₹180", desc: "Velvety micro-foam over a double espresso shot", popular: true },
      { name: "Signature Latte",    price: "₹220", desc: "House blend espresso with seasonal syrups", popular: true },
      { name: "Flat White",         price: "₹200", desc: "Stronger espresso ratio with silky steamed milk" },
      { name: "Matcha Latte",       price: "₹230", desc: "Ceremonial grade matcha with oat milk" },
      { name: "Hot Chocolate",      price: "₹190", desc: "Rich Belgian cocoa with steamed whole milk" },
    ],
  },
  {
    category: "Cold Drinks",
    emoji: "🧊",
    items: [
      { name: "Cold Brew",          price: "₹210", desc: "12-hour steeped single origin, served over ice", popular: true },
      { name: "Iced Latte",         price: "₹210", desc: "Double shot espresso over ice and cold milk" },
      { name: "Iced Matcha Latte",  price: "₹240", desc: "Ceremonial matcha shaken over ice with oat milk" },
      { name: "Fresh Juice",        price: "₹160", desc: "Seasonal fruits, cold-pressed, no added sugar" },
      { name: "Lemonade",           price: "₹150", desc: "Freshly squeezed with mint and sea salt" },
    ],
  },
  {
    category: "Patisserie & Bakery",
    emoji: "🥐",
    items: [
      { name: "Butter Croissant",   price: "₹150", desc: "Hand-laminated, baked fresh every morning", popular: true },
      { name: "Chocolate Tart",     price: "₹190", desc: "Dark ganache in a crisp buttery shell" },
      { name: "Banana Bread Slice", price: "₹140", desc: "Moist walnut-studded loaf, served warm" },
      { name: "Cinnamon Roll",      price: "₹180", desc: "Soft pull-apart roll with cream cheese glaze", popular: true },
      { name: "Almond Croissant",   price: "₹170", desc: "Filled with frangipane, topped with flaked almonds" },
    ],
  },
  {
    category: "All-Day Breakfast",
    emoji: "🍳",
    items: [
      { name: "Egg Drop Sandwich",  price: "₹280", desc: "Chunky egg filling, house aioli, toasted brioche", popular: true },
      { name: "French Toast",       price: "₹260", desc: "Blueberry & seasonal fruits, maple drizzle", popular: true },
      { name: "Avocado Toast",      price: "₹290", desc: "Sourdough, smashed avo, chilli flakes, poached egg" },
      { name: "Pancake Stack",      price: "₹270", desc: "Three fluffy pancakes with berry compote & cream" },
      { name: "Shakshuka",          price: "₹310", desc: "Eggs poached in spiced tomato sauce, with pita" },
    ],
  },
  {
    category: "Mains & Sharing Plates",
    emoji: "🌮",
    items: [
      { name: "Veg DIY Taco",              price: "₹320", desc: "Guacamole, beetroot, corn & salsa — assemble yourself", popular: true },
      { name: "Chicken Kabab Quesadilla",  price: "₹395", desc: "Served on green hummus base with warm pita (4 pcs)", popular: true },
      { name: "Basa Fish & Mash",          price: "₹430", desc: "Pan-seared basa on creamy mashed potatoes" },
      { name: "Spaghetti Carbonara",       price: "₹390", desc: "Bacon, parmesan, silky egg sauce — restaurant quality" },
      { name: "Hummus Platter",            price: "₹280", desc: "House hummus, warm pita bread & seasonal crudités" },
      { name: "Grapi Loaded Fries",        price: "₹250", desc: "Truffle oil, parmesan, fresh herbs" },
    ],
  },
  {
    category: "Desserts",
    emoji: "🍰",
    items: [
      { name: "Belgian Waffle",     price: "₹300", desc: "Nutella, banana, powdered sugar, whipped cream", popular: true },
      { name: "Tiramisu",           price: "₹280", desc: "Classic Italian, espresso-soaked ladyfingers" },
      { name: "Cheesecake (Slice)", price: "₹260", desc: "Baked New York style with seasonal berry coulis" },
      { name: "Chocolate Lava Cake",price: "₹290", desc: "Warm, gooey centre — served with vanilla ice cream" },
    ],
  },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu = activeCategory === "All" 
    ? menuData 
    : menuData.filter((cat) => cat.category === activeCategory);

  return (
    <div className="pt-28 pb-20" style={{ fontFamily: "'Lato', sans-serif" }}>
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span
              className="text-primary text-sm font-semibold tracking-widest uppercase"
              style={{ letterSpacing: "0.2em" }}
            >
              Explore
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Menu
            </h1>
            <p
              className="text-muted-foreground mt-3 max-w-md mx-auto"
              style={{ fontWeight: 300 }}
            >
              Specialty coffee, house-baked pastries & all-day dining — crafted fresh every day
            </p>
            <div className="section-divider max-w-xs mx-auto mt-6" />
          </div>
        </ScrollReveal>

        {/* Added items-start here so the sidebar doesn't stretch and break the sticky effect! */}
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto relative items-start">
          
          {/* LEFT: Category Sidebar - NOW PROPERLY STICKY */}
          <div className="md:w-72 shrink-0 sticky top-28 z-30 w-full bg-background md:bg-transparent py-4 md:py-0">
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto max-h-[calc(100vh-10rem)] pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              
              <button
                onClick={() => setActiveCategory("All")}
                className={`text-left px-5 py-3.5 rounded-xl transition-all whitespace-nowrap font-semibold text-sm flex items-center gap-3 ${
                  activeCategory === "All"
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]"
                    : "bg-card text-foreground hover:bg-secondary border border-border"
                }`}
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <span className="text-lg">🍽️</span> 
                Full Menu
              </button>

              {menuData.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`text-left px-5 py-3.5 rounded-xl transition-all whitespace-nowrap font-semibold text-sm flex items-center gap-3 ${
                    activeCategory === cat.category
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]"
                      : "bg-card text-foreground hover:bg-secondary border border-border"
                  }`}
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <span className="text-lg">{cat.emoji}</span> 
                  {cat.category}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Dynamic Menu Items */}
          <div className="flex-1 space-y-12">
            {filteredMenu.map((cat, catIdx) => (
              <motion.div 
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                  <h2
                    className="text-2xl font-bold mb-6 flex items-center gap-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <span className="text-2xl">{cat.emoji}</span>
                    {cat.category}
                  </h2>
                  <div className="space-y-1">
                    {cat.items.map((item, i) => (
                      <motion.div
                        key={item.name}
                        className="flex justify-between items-start gap-4 p-3 rounded-xl hover:bg-secondary/60 transition-colors group"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3
                              className="font-semibold text-sm group-hover:text-primary transition-colors"
                              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                            >
                              {item.name}
                            </h3>
                            {(item as any).popular && (
                              <span className="text-[10px] font-bold uppercase tracking-wider bg-accent/15 text-accent px-2 py-0.5 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <p
                            className="text-xs text-muted-foreground mt-0.5"
                            style={{ fontWeight: 300 }}
                          >
                            {item.desc}
                          </p>
                        </div>
                        <span
                          className="text-sm font-bold text-primary whitespace-nowrap bg-primary/5 px-3 py-1 rounded-full"
                          style={{ fontFamily: "'Lato', sans-serif" }}
                        >
                          {item.price}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        <ScrollReveal>
          <div className="text-center mt-16 p-8 rounded-2xl bg-secondary border border-border">
            <p
              className="text-muted-foreground text-sm mb-3"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              Want to reserve a table or have a question? Give us a call!
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              <Phone size={18} />
              Call Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default MenuPage;