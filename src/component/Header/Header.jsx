import BubbleMenu from "../ui/BubbleMenu.jsx";
import logo from "./logo.png";

const items = [
  {
    label: "Home",
    href: "#home",
    ariaLabel: "Home",
    rotation: 0,
    hoverStyles: {
      bgColor: "#111111",
      textColor: "#fff",
    },
  },
  {
    label: "About",
    href: "#about",
    ariaLabel: "About",
    rotation: 0,
    hoverStyles: {
      bgColor: "#111111",
      textColor: "#fff",
    },
  },
  {
    label: "Projects",
    href: "#projects",
    ariaLabel: "Projects",
    rotation: 0,
    hoverStyles: {
      bgColor: "#111111",
      textColor: "#fff",
    },
  },
  {
    label: "Experience",
    href: "#experience",
    ariaLabel: "Experience",
    rotation: 0,
    hoverStyles: {
      bgColor: "#111111",
      textColor: "#fff",
    },
  },
  {
    label: "Contact",
    href: "#contact",
    ariaLabel: "Contact",
    rotation: 0,
    hoverStyles: {
      bgColor: "#111111",
      textColor: "#fff",
    },
  },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <a
          href="https://drive.google.com/file/d/1_IsNLVO3C0w_dr9xm3rfsUQy5_KpEnQI/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="
            
            absolute
            top-8
            right-9
            md:right-28
            z-30
            group
          "
        >
          <div
            className="
              flex items-center gap-3
              px-5 py-4
              rounded-full
              bg-white/10
              backdrop-blur-md
              border border-white/20
              shadow-[0_8px_30px_rgba(0,0,0,0.12)]
              transition-all duration-300
              hover:bg-white
              hover:text-gray-950
              hover:scale-105
            "
          >
            <span className="text-sm md:text-base font-bold tracking-[0.18em] text-gray-700">
              RESUME 
            </span>
          </div>
      </a>
      
      <div className=" humane flex items-center justify-between px-8 py-6">
        
        {/* Bubble Menu */}
        <BubbleMenu
          logo={logo}
          items={items}
          menuAriaLabel="Toggle navigation"
          menuBg="#f6f4f0"
          menuContentColor="#111111"
          useFixedPosition={false}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
        />
      </div>
    </header>
  );
}