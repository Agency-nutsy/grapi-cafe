import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";

const PHONE        = "+919811964712";
const PHONE_DISPLAY = "+91 98119 64712";
const ADDRESS      = "Shop No. 9, Geetanjali Enclave, Behind Oberoi Dhaba, Malviya Nagar, New Delhi, 110017";
const MAPS_LINK    = "https://google.com/maps/place/Grapi/data=!4m2!3m1!1s0x0:0xa4484a0406a534e3";

const Footer = () => (
  /* Matte black finish with a subtle top border to define the edge */
  <footer className="bg-[#0a0a0a] text-stone-300 border-t border-stone-800 relative">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-1">
          <h3
            className="text-3xl font-bold mb-4 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Grapi
          </h3>
          <p
            className="text-stone-400 text-sm leading-relaxed mb-6"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Specialty coffee, house-baked pastries & all-day breakfast — crafted with obsessive care in Malviya Nagar, Delhi.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/grapicoffee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-stone-300 hover:bg-white hover:text-black transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4
            className="font-semibold mb-4 text-sm uppercase tracking-wider text-stone-500"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Navigate
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/",        label: "Home"    },
              { to: "/menu",    label: "Menu"    },
              { to: "/about",   label: "About"   },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular items */}
        <div>
          <h4
            className="font-semibold mb-4 text-sm uppercase tracking-wider text-stone-500"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Popular
          </h4>
          <ul
            className="space-y-3 text-sm text-stone-400"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            <li>Signature Latte</li>
            <li>Butter Croissant</li>
            <li>Egg Drop Sandwich</li>
            <li>Veg DIY Taco</li>
            <li>Belgian Waffle</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="font-semibold mb-4 text-sm uppercase tracking-wider text-stone-500"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-stone-400">
            <li>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <MapPin size={16} className="mt-0.5 shrink-0 text-stone-600" />
                {ADDRESS}
              </a>
            </li>
            <li>
              <a
                href={`tel:${PHONE}`}
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={16} className="shrink-0 text-stone-600" />
                {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500">
        <p
          className="text-xs"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          © {new Date().getFullYear()} Grapi Coffee & Patisserie. All rights reserved.
        </p>
        <p
          className="text-xs"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Mon – Sun: 10:00 AM – 11:45 PM
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;