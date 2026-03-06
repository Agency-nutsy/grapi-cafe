import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-muted text-center px-4"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      <div>
        <p
          className="text-9xl font-bold text-primary mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          404
        </p>
        <h1
          className="text-2xl md:text-3xl font-bold mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Page Not Found
        </h1>
        <p
          className="text-muted-foreground mb-8 max-w-sm mx-auto"
          style={{ fontWeight: 300 }}
        >
          Looks like you wandered off the menu. Let's get you back to Grapi ☕
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all group"
        >
          Back to Home
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
