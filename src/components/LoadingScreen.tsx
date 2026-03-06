import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Target both html and body to kill the scrollbar and the track fully
    const html = document.documentElement;
    const body = document.body;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    // This ensures the height is locked so the browser doesn't try to render a track
    html.style.height = "100%";
    body.style.height = "100%";

    const t1 = setTimeout(() => setProgress(65), 100);
    const t2 = setTimeout(() => setProgress(85), 1000);
    const t3 = setTimeout(() => setProgress(100), 1700);
    const t4 = setTimeout(() => {
      // 2. Re-enable everything once loading is done
      html.style.overflow = "";
      body.style.overflow = "";
      html.style.height = "";
      body.style.height = "";
      onComplete();
    }, 2000);

    return () => {
      // Cleanup to prevent the site from being stuck with no scroll
      html.style.overflow = "";
      body.style.overflow = "";
      html.style.height = "";
      body.style.height = "";
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A] w-full h-full"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Matte Finish Texture Overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />

      <motion.div
        className="flex flex-col items-center mb-10 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="text-5xl sm:text-6xl font-bold text-center tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="text-white">Grapi</span>
        </h1>
      </motion.div>

      {/* Loading Bar Track */}
      <motion.div
        className="w-56 sm:w-64 h-1 rounded-full overflow-hidden bg-white/10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="h-full rounded-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </motion.div>

      <motion.p
        className="mt-6 text-[10px] tracking-[0.3em] uppercase text-white/40 z-10"
        style={{ fontFamily: "'Lato', sans-serif" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Specialty Coffee & Patisserie
      </motion.p>

      <motion.p
        className="mt-2 text-[10px] text-white/20 z-10"
        style={{ fontFamily: "'Lato', sans-serif" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Malviya Nagar, New Delhi
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;