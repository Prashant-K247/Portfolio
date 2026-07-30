import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Header from "../component/Header/Header";
import Hero from "../component/Hero/Hero";
import About from "../component/About/About";
import Project from "../component/Project/Project";
import Experience from "../component/Experience/Experience";
import Contact from "../component/Contact/Contact";
import SmoothScroll from "../component/ui/SmoothScroll";
import LiquidCursor from "../component/ui/LiquidCursor";
import Loader from "../component/loader/Loader";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const el = document.querySelector(location.hash);

        if (el) {
          setTimeout(() => {
            el.scrollIntoView({
              behavior: "smooth",
            });
          }, 100);
        }
      }
    }, [location]);

  useGSAP(() => {
  const tween = gsap.to("#page", {
    backgroundColor: "#0F0F0F",
    ease: "none",
    scrollTrigger: {
      trigger: "#projects",
      start: "top 65%",
      end: "top 35%",
      scrub: true,
    },
  });

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
  };
});

  return (
    <>
      {loading && (
        <Loader onFinish={() => setLoading(false)} />
      )}

      <div
        id="page"
        className="overflow-hidden min-h-screen"
        style={{ backgroundColor: "#fff7ed" }}
      >
        <LiquidCursor />
     
        <Header />
        <Hero />
        <About />
        <Project />
        <Experience />
        <Contact />
      </div>
    </>
  );
}