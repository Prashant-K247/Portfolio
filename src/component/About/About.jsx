import Shuffle from "../ui/Shuffle";

export default function About() {
  const heading = `I build products that solve problems, systems that scale.`;

  const para1 = `I'm a full-stack developer working across web platforms and AI systems. I build end-to-end products using Next.js and Node.js, with GenAI workflows powered by LangChain, modern LLM tooling and Vector Database.`;

  const para2 = `My work spans frontend engineering, backend development, and AI integration. From transforming Figma designs into responsive interfaces to building scalable APIs and intelligent AI workflows, I focus on creating products that are performant, intuitive, and built to last.`;

  return (
    <section
      id="about"
      className="min-h-screen w-full bg-transparent px-8 md:px-20 lg:px-28 py-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-30 ">

        {/* Left Side - ABOUT label */}
        <div className="lg:col-span-3 mt-10">
          <Shuffle
            text="ABOUT"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={false}
            triggerOnHover
            respectReducedMotion={true}
            loop={false}
            loopDelay={0}
            className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight"
          />
        </div>

        {/* Right Side - heading + body */}
        <div className=" lg:col-span-9 sm:mt-20 md:mt-25 lg:mt-40">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-neutral-900 whitespace-pre-line mb-16">
            {heading}
          </h2>

          <div className="space-y-8 max-w-3xl">
            <p className="text-md md:text-xl leading-[1.8] text-neutral-800 font-medium">
              {para1}
            </p>
            <p className="text-md md:text-xl leading-[1.8] text-neutral-800 font-medium">
              {para2}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}