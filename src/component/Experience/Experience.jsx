
import BorderGlow from "../ui/BorderGlow";
import CountUp from "../ui/CountUp";

const achievements = [
  {
    value: 8,
    suffix: "+",
    label: "Production Features Shipped",
  },
  {
    value: 4,
    suffix: "",
    label: "Legacy Apps Modernized",
  },
  {
    value: 25,
    suffix: "+",
    label: "UI & Functional Defects Resolved",
  },
];

const experiences = [
  {
    role: "MERN Developer Intern",
    company: "iKounselor Ed-Tech",
    duration: "August 2026 — Present",
    points: [
      "Built and shipped 8+ production features across payment, wishlist, course, cohort, blog, authentication, and account-management workflows, including a pre-signup questionnaire for personalized experience curation.",
      "Modernized 4 legacy web applications by upgrading Next.js, React, TypeScript, and Tailwind CSS, refactoring deprecated code and resolving dependency and build issues.",
      "Developed Selenium WebDriver test automation covering key user flows end to end, reducing manual regression effort before releases.",
      "Validated REST APIs using Postman and resolved 25+ UI and functional defects to improve application stability.",
      "Collaborated on an n8n workflow automation that sends 200+ personalized emails daily to B2B clients, replacing manual outreach and accelerating lead follow-up.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Nexolvia LLP",
    duration: "October 2025 — March 2026",
    points: [
      "Led end-to-end development of the Edit Event module, from UI implementation to backend logic and persistence, enabling users to modify event data without interrupting workflows.",
      "Contributed 60+ commits across development and migration branches while migrating the application from React.js to Next.js, leveraging server-side rendering to achieve a 20% reduction in measured initial page-load time.",
      "Developed 4 production-ready pages and 5+ reusable TypeScript components from Figma designs using Next.js, TypeScript, and Tailwind CSS.",
    ],
  },
];

const techStack = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Selenium",
  "Postman",
  "n8n",
  "Git",
  "GitHub",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-transparent text-white px-6 md:px-20 py-28"
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Left Side */}
        <div className="lg:col-span-3">

          <p className="uppercase tracking-[0.3em] text-neutral-400 mb-4">
            Career
          </p>

          <h2 className="text-4xl md:text-7xl font-black mb-12">
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
                <div className="p-7 text-center">
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

                  <p className="mt-3 text-sm text-neutral-400">
                    {item.label}
                  </p>
                </div>
              </BorderGlow>
            ))}

          </div>
        </div>

        {/* Right Side - Experience Timeline */}
        <div className="lg:col-span-9 space-y-8 lg:mt-36">

          {experiences.map((experience, index) => (
            <BorderGlow
              key={experience.company}
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
              <div className="p-7 md:p-10">

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">

                  <div>
                    <p className="text-sm uppercase tracking-widest text-neutral-500 mb-3">
                      {index === 0 ? "Current Experience" : "Previous Experience"}
                    </p>

                    <h3 className="text-2xl md:text-3xl font-bold">
                      {experience.role}
                    </h3>

                    <p className="text-lg text-neutral-300 mt-2">
                      {experience.company}
                    </p>
                  </div>

                  <p className="text-sm md:text-base text-neutral-400 md:text-right">
                    {experience.duration}
                  </p>

                </div>

                <div className="mt-8 space-y-5 text-base md:text-lg text-neutral-300">

                  {experience.points.map((point, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="text-cyan-400 mt-1 shrink-0">
                        ▹
                      </span>
                      <p className="leading-8">
                        {point}
                      </p>
                    </div>
                  ))}

                </div>

              </div>
            </BorderGlow>
          ))}

        </div>

        {/* Tech Stack */}
        <div className="lg:col-span-full space-y-8">

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
            <div className="p-8 md:p-10">

              <h3 className="text-3xl font-bold mb-8">
                Technologies & Tools
              </h3>

              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech}
                    className="px-5 py-3 rounded-full bg-[#1B1B1B] border border-neutral-700 text-sm md:text-base"
                  >
                    {tech}
                  </div>
                ))}
              </div>

            </div>
          </BorderGlow>

        </div>

      </div>
    </section>
  );
}
