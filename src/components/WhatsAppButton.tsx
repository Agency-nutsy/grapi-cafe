import { MessageCircle, Navigation } from "lucide-react";

const WHATSAPP   = "https://wa.me/919811964712";
const MAPS_LINK = "https://www.google.com/maps/place/grapi+cafe+vibes/data=!4m2!3m1!1s0x390ce3e46c7bfd41:0xa4484a0406a534e3";


const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
    
    {/* Get Directions Button */}
    <a
      href={MAPS_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get Directions"
      className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      style={{ background: "#4285F4" }}
    >
      <Navigation size={24} color="white" />
    </a>

    {/* WhatsApp Button */}
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      style={{ background: "#25D366" }}
    >
      <MessageCircle size={28} color="white" fill="white" />
    </a>

  </div>
);

export default FloatingButtons;
