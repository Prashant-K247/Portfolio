import { useEffect, useState, useMemo } from "react";
import gsap from "gsap";

const quotes = [
  "This loading screen serves no purpose. It's purely for the aesthetic.",
  "24th JULY is a special day",
  "Convincing the pixels to cooperate...",
  "There is no spinner. This is the spinner.",
  "Fact: 73% of statistics are made up on the spot.",
  "Somewhere, a server is trying its best.",
  "This is taking exactly as long as it needs to.",
  "Fun fact: octopuses have three hearts and zero patience for slow websites.",
  "Loading... because instant felt showoffy.",
  "You didn't need to see this, but here we are.",
  "Fact: nobody actually knows what a CDN is.",
  "Almost done. Definitely. Probably.",
];

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  // Pick a random quote only once when the component mounts
  const randomQuote = useMemo(() => quotes[Math.floor(Math.random() * quotes.length)], []);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      // Increased the multiplier slightly so it reaches ~95% right around the 2-second mark
      current += Math.random() * 4 + 0.5;
      
      if (current > 95) {
        current = 95;
        clearInterval(interval); 
      }
      
      setProgress(Math.floor(current));
    }, 50); 

    const waitForEverything = async () => {
      // 1. Wait for custom fonts
      const fontsPromise = document.fonts ? document.fonts.ready : Promise.resolve();

      // 2. Wait for window load
      const loadPromise = document.readyState === "complete" 
        ? Promise.resolve() 
        : new Promise((resolve) => window.addEventListener("load", resolve, { once: true }));

      // 3. Force a minimum 2-second wait so users can read the quote
      const minimumTimePromise = new Promise((resolve) => setTimeout(resolve, 2000));

      // Wait until ALL of the above are finished
      await Promise.all([fontsPromise, loadPromise, minimumTimePromise]);

      clearInterval(interval);
      setProgress(100);

      // Give it a tiny 200ms pause at 100% before starting the exit animation
      setTimeout(() => {
        // Fade out the text elements slightly
        gsap.to("#loader-content", {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.inOut",
        });

        // Slide the entire background screen upward like a curtain
        gsap.to("#loader", {
          yPercent: -100,
          duration: 0.8,
          delay: 0.2, 
          ease: "power4.inOut", // Power4 gives it a really snappy, premium feel
          onComplete: onFinish,
        });
      }, 200); 
    };

    waitForEverything();

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      id="loader"
      // Added dark background (bg-neutral-950)
      className="fixed inset-0 z-99999 flex flex-col justify-center items-center bg-neutral-950"
      style={{ color: "#fff7ed" }} 
    >
      <div id="loader-content" className="flex flex-col items-center justify-center w-full max-w-5xl px-8 text-center">
        
        {/* Larger, more prominent quote text */}
        <p className="text-3xl md:text-3xl font-bold mb-12 leading-snug">
          "{randomQuote}"
        </p>

        {/* tabular-nums keeps the width of the numbers identical so text doesn't wiggle */}
        <h1 className="text-6xl md:text-7xl font-black tabular-nums tracking-tighter mt-4">
          {progress}<span className="text-3xl text-neutral-500 ml-1">%</span>
        </h1>

        {/* Progress Bar adapted for dark mode */}
        <div className="w-full max-w-md h-0.5 bg-neutral-800 mt-8 overflow-hidden rounded-full">
          <div
            className="h-full transition-all duration-75 ease-linear"
            style={{ width: `${progress}%`, backgroundColor: "#fff7ed" }}
          />
        </div>
        
      </div>
    </div>
  );
}