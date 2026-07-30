import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

let lenis = null;

export default function SmoothScroll() {
  const location = useLocation();

  useEffect(() => {
    if (!lenis) {
      lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 0.4,
        touchMultiplier: 0.2,
        infinite: false,
      });

      let rafId;

      function raf(time) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
        lenis = null;
      };
    }
  }, []);

  // Reset scroll whenever the route changes
  useEffect(() => {
    if (!lenis) return;

    lenis.scrollTo(0, {
      immediate: true,
      force: true,
    });
  }, [location.pathname]);

  return null;
}