import { MapPin, Phone, MessageCircle, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const PHONE = "+919811964712";
const PHONE_DISPLAY = "+91 98119 64712";
const ADDRESS = "Shop No. 9, Geetanjali Enclave, Behind Oberoi Dhaba, Malviya Nagar, New Delhi, Delhi 110017";
const MAPS_LINK = "https://maps.app.goo.gl/VBbXMC56nwBDVtyj7";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.1!2d77.20559!3d28.52761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1e6b4a534e3%3A0xa4484a0406a534e3!2sGrapi!5e0!3m2!1sen!2sin!4v1709467200000!5m2!1sen!2sin";

const WHATSAPP = "https://wa.me/919811964712";
const INSTAGRAM = "https://www.instagram.com/grapicoffee";

const ContactPage = () => {
  return (
    <div className="pt-28 pb-20" style={{ fontFamily: "'Lato', sans-serif" }}>
      <div className="container max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span
              className="text-primary text-sm font-semibold tracking-widest uppercase"
              style={{ letterSpacing: "0.2em" }}
            >
              Get in Touch
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact Us
            </h1>
            <p
              className="text-muted-foreground mt-3 max-w-md mx-auto"
              style={{ fontWeight: 300 }}
            >
              Have a question or want to make a reservation? Reach out to us directly.
            </p>
            <div className="section-divider max-w-xs mx-auto mt-6" />
          </div>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-12">
            <motion.a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-3 rounded-2xl bg-primary text-primary-foreground px-6 py-5 font-semibold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={22} />
              Call Us
            </motion.a>
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] text-white px-6 py-5 font-semibold text-lg shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={22} />
              WhatsApp Us
            </motion.a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Info Cards */}
          <ScrollReveal direction="left">
            <div className="space-y-4">

              {/* Address */}
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Address
                  </h4>
                  <p className="text-sm text-muted-foreground" style={{ fontWeight: 300 }}>
                    {ADDRESS}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${PHONE}`}
                className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Phone
                  </h4>
                  <p className="text-sm text-muted-foreground" style={{ fontWeight: 300 }}>
                    {PHONE_DISPLAY}
                  </p>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary text-base">🕙</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Opening Hours
                  </h4>
                  <p className="text-sm text-muted-foreground" style={{ fontWeight: 300 }}>
                    Monday – Sunday<br />
                    10:00 AM – 11:45 PM
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="p-5 rounded-2xl bg-card border border-border">
                <h4 className="font-semibold text-sm mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Follow Us
                </h4>
                <div className="flex gap-3">
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Google Maps Embed */}
          <ScrollReveal direction="right">
            <div className="rounded-2xl overflow-hidden border border-border h-72 md:h-full min-h-[280px]">
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
    </div>
  );
};

export default ContactPage;
