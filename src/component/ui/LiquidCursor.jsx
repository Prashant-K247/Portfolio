import { useEffect, useRef } from 'react';

const LENS_SIZE = 120;
const HALF = LENS_SIZE / 2;
const LERP = 0.18;
const IDLE_EPSILON = 0.1;

const FilterDefinition = (
  <svg
    className="pointer-events-none absolute h-0 w-0"
    aria-hidden="true"
    focusable="false"
  >
    <filter
      id="glass-distort"
      x="-20%"
      y="-20%"
      width="140%"
      height="140%"
      colorInterpolationFilters="sRGB"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.008"
        numOctaves="2"
        seed="10"
        result="noise"
      />
      <feGaussianBlur in="noise" stdDeviation="4" result="blurredNoise" />
      <feDisplacementMap
        in="SourceGraphic"
        in2="blurredNoise"
        scale="60"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);

export default function LiquidCursor() {
  const lensRef = useRef(null);
  const pos = useRef({ x: -HALF, y: -HALF });
  const mouse = useRef({ x: -HALF, y: -HALF });
  const raf = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const tick = () => {
      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;
      pos.current.x += dx * LERP;
      pos.current.y += dy * LERP;

      const node = lensRef.current;
      if (node) {
        node.style.transform =
          `translate3d(${pos.current.x - HALF}px, ${pos.current.y - HALF}px, 0)`;
      }

      if (Math.abs(dx) > IDLE_EPSILON || Math.abs(dy) > IDLE_EPSILON) {
        raf.current = requestAnimationFrame(tick);
      } else {
        raf.current = null;
      }
    };

    const ensureRaf = () => {
      if (raf.current === null) raf.current = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!started.current) {
        pos.current.x = e.clientX;
        pos.current.y = e.clientY;
        started.current = true;
        if (lensRef.current) lensRef.current.style.opacity = '1';
      }
      ensureRaf();
    };

    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        ensureRaf();
      } else if (raf.current !== null) {
        cancelAnimationFrame(raf.current);
        raf.current = null;
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('visibilitychange', onVisibility);
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {FilterDefinition}
      <div
        ref={lensRef}
        className="liquid-lens pointer-events-none fixed left-0 top-0 z-9999 h-30 w-30 rounded-xl opacity-0 transition-opacity duration-200 will-change-transform max-[768px]:hidden"
        aria-hidden="true"
      />
    </>
  );
}