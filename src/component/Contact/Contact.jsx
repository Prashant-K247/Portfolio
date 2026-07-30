import { useRef } from 'react';
import TextPressure from "../ui/TextPressure";
import VariableProximity from "../ui/VariableProximity";
import LocalTime from "../ui/LocalTime.jsx";

const socials = [
  {
    name: "LinkedIn",
    value: "linkedin/prashant-kawadkar",
    link: "https://linkedin.com/in/prashant-kawadkar-a258a528b",
  },
  {
    name: "GitHub",
    value: "github/Prashant-K247",
    link: "https://github.com/Prashant-K247",
  },
  {
    name: "Whatsapp",
    value: "+91 9301121318",
    link: "https://wa.me/919301121318",
  },
  {
    name: "Email",
    value: "prshant247@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=prshant247@gmail.com",
  },
  {
    name: "Instagram",
    value: "@prashant_kawadkar_",
    link: "https://www.instagram.com/prashant_kawadkar_?igsh=MXVxNXM2YzBhdjN5Yg==",
  },
  
];



export default function Contact() {
    const containerRef = useRef(null);
  return (
    <section
      id="contact"
      className="min-h-screen bg-transparent text-white px-10 md:px-20 py-28 flex flex-col justify-between"
    >

      <div
        className="relative h-60 w-full"
      >
        <TextPressure
          text="Let's Connect"
          flex
          alpha={false}
          stroke={false}
          width
          weight
          italic
          textColor="#ffffff"
          strokeColor="#5227FF"
          minFontSize={36}
        />
      </div>

        <div
        ref={containerRef}
        style={{position: 'relative'}} 
        className='flex justify-center sm:text-xl md:text-2xl lg:text-4xl'
        >
          <VariableProximity
            label={'Available for Internships ● Full-time Opportunities ● Exciting Collaborations'}
            className={'variable-proximity-demo'}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>

      {/* Contact Info */}

      <div className="grid md:grid-cols-2 gap-y-8 gap-x-20 mt-20">
        {socials.map((item) => {
          const isEmail = item.link.startsWith("mailto:");
        
          return (
            <a
              key={item.name}
              href={item.link}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noreferrer"}
              className="group border-b border-neutral-800 pb-6 transition-all duration-300 hover:border-white"
            >
              <p className="uppercase tracking-[0.25em] text-neutral-500 text-sm mb-3">
                {item.name}
              </p>
          
              <p className="text-2xl md:text-3xl font-semibold transition-transform duration-300 group-hover:translate-x-2">
                {item.value}
              </p>
            </a>
          );
        })}
      </div>

      {/* Footer */}

      <div className="flex flex-col md:flex-row justify-between items-center mt-28 pt-10 border-t border-neutral-800">
          <div className="absolute left-1/2 -translate-x-1/2 z-40 ">
            <LocalTime />
          </div>

        <p className="text-neutral-500 text-lg">
          © 2026 Prashant Kawadkar
        </p>

        <p className="text-neutral-500 text-lg mt-4 md:mt-0">
          Built with React • GSAP • Tailwind CSS
        </p>

      </div>
    </section>
  );
}