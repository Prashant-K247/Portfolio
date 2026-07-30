import BorderGlow from "../ui/BorderGlow";
import CountUp from "../ui/CountUp";

const achievements = [
  {
    value: 60,
    suffix: "+",
    label: "Code Contributions",
  },
  {
    value: 20,
    suffix: "%",
    label: "Faster Initial Load",
  },
  {
    value: 6,
    suffix: "",
    label: "Months Industry Experience",
  },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "REST APIs",
  "JavaScript",
  "Git",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-transparent text-white px-10 md:px-20 py-28"
    >
      <div className="grid lg:grid-cols-12 gap-16">

        {/* Left Side */}
        <div className="lg:col-span-3">

          <p className="uppercase tracking-[0.3em] text-neutral-400 mb-4">
            Career
          </p>

          <h2 className="text-4xl md:text-8xl font-black mb-16">
            EXPERIENCE
          </h2>

          <div className="space-y-6">

            {achievements.map((item) => (
              <BorderGlow
                key={item.label}
                edgeSensitivity={0}
                glowColor="40 80 80"
                backgroundColor="#141414"
                borderRadius={28}
                glowRadius={90}
                glowIntensity={1}
                coneSpread={30}
                animated={false}
                colors={["#8b5cf6", "#3b82f6", "#06b6d4"]}
              >
                <div className="p-8 text-center">

                  <h3 className="text-5xl font-black flex justify-center items-center">
                    <CountUp
                        from={0}
                        to={item.value}
                        separator=","
                        direction="up"
                        duration={2}
                        delay={0}
                        className="count-up-text"
                    />
                    <span>{item.suffix}</span>
                  </h3>

                  <p className="mt-3 text-neutral-400">
                    {item.label}
                  </p>

                </div>
              </BorderGlow>
            ))}

          </div>

        </div>

        {/* Right Side */}

        <div className="lg:col-span-9 space-y-6 mt-50">

          {/* Internship */}

          <BorderGlow
            edgeSensitivity={0}
            glowColor="40 80 80"
            backgroundColor="#141414"
            borderRadius={28}
            glowRadius={90}
            glowIntensity={1}
            coneSpread={30}
            animated={false}
            colors={["#8b5cf6", "#3b82f6", "#06b6d4"]}
          >
            <div className="p-10">

              <div className="flex flex-col md:flex-row md:justify-between md:items-start">

                <div>

                  <h3 className="text-4xl font-bold">
                    Frontend Developer Intern
                  </h3>

                  <p className="text-xl text-neutral-300 mt-2">
                    Nexolvia LLP
                  </p>

                </div>

                <p className="text-neutral-400 mt-6 md:mt-0">
                  October 2025 — March 2026
                </p>

              </div>

              <div className="mt-10 space-y-6 text-lg text-neutral-300">

                <p>
                  • Led end-to-end development of the Edit Event module,
                  enabling seamless event modification without interrupting
                  user workflows.
                </p>

                <p>
                  • Contributed 60+ pull requests during the migration
                  of the codebase from React to Next.js, improving
                  initial page load by 20%.
                </p>

                <p>
                  • Built 4 production-ready pages and 5+ reusable
                  TypeScript components from Figma designs using
                  Next.js and Tailwind CSS.
                </p>

                <p>
                  • Integrated REST APIs with asynchronous JavaScript
                  to improve real-time communication between frontend
                  and backend.
                </p>

              </div>

            </div>
          </BorderGlow>

        </div>

        <div className="lg:col-span-full space-y-6 -mt-10">
            <BorderGlow
            edgeSensitivity={0}
            glowColor="40 80 80"
            backgroundColor="#141414"
            borderRadius={28}
            glowRadius={90}
            glowIntensity={1}
            coneSpread={30}
            animated={true}
            colors={["#8b5cf6", "#3b82f6", "#06b6d4"]}
          >
            <div className="p-10">
              <h3 className="text-3xl font-bold mb-8">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-4">

                {techStack.map((tech) => (
                  <div
                    key={tech}
                    className="px-5 py-3 rounded-full bg-[#1B1B1B] border border-neutral-700"
                  >
                    {tech}
                  </div>
                ))}

              </div>

            </div>
          </BorderGlow>

          <BorderGlow
            edgeSensitivity={0}
            glowColor="40 80 80"
            backgroundColor="#141414"
            borderRadius={28}
            glowRadius={90}
            glowIntensity={1}
            coneSpread={30}
            animated={false}
            colors={["#8b5cf6", "#3b82f6", "#06b6d4"]}
          >
            <div className="p-10">

              <h3 className="text-3xl font-bold mb-6">
                Impact
              </h3>

              <p className="text-lg leading-9 text-neutral-300">
                During my internship at Nexolvia LLP, I contributed to
                the migration of a production application from React to
                Next.js, developed production-ready features from Figma
                designs, and built reusable components that improved
                development efficiency. I collaborated closely with
                backend APIs to deliver responsive, scalable, and
                user-focused experiences while gaining hands-on
                experience working on a real-world SaaS product.
              </p>

            </div>
          </BorderGlow>
        </div>

      </div>
    </section>
  );
}