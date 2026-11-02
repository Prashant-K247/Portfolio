
import BorderGlow from "../ui/BorderGlow";
import CountUp from "../ui/CountUp";

const experiences = [
  {
    role: "MERN Developer Intern",
    company: "iKounselor Ed-Tech",
    duration: "August 2026 — Present",
    current: true,

    stats: [
      {
        value: 8,
        suffix: "+",
        label: "Features Shipped",
      },
      {
        value: 4,
        suffix: "",
        label: "Legacy Apps Modernized",
      },
      {
        value: 25,
        suffix: "+",
        label: "Defects Resolved",
      },
    ],

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
    current: false,

    stats: [
      {
        value: 60,
        suffix: "+",
        label: "Code Commits",
      },
      {
        value: 20,
        suffix: "%",
        label: "Faster Initial Load",
      },
      {
        value: 5,
        suffix: "+",
        label: "Reusable Components",
      },
    ],

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

        {/* Left Side - Section Heading */}
        <div className="lg:col-span-3">

          <p className="uppercase tracking-[0.3em] text-neutral-400 mb-4">
            Career
          </p>

          <h2 className="text-4xl md:text-7xl font-black mb-8">
            EXPERIENCE
          </h2>

          <p className="text-neutral-400 text-lg leading-8">
            Building real-world products, modernizing applications,
            and developing scalable user-focused experiences.
          </p>

        </div>

        {/* Right Side - Internship Experiences */}
        <div className="lg:col-span-9 space-y-8">

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

                {/* Internship Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

                  <div>

                    <div className="flex items-center gap-3 mb-3">

                      <p className="text-sm uppercase tracking-widest text-neutral-500">
                        {experience.current
                          ? "Current Experience"
                          : "Previous Experience"}
                      </p>

                      {experience.current && (
                        <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/30">
                          Current
                        </span>
                      )}

                    </div>

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

                {/* Individual Internship Statistics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-9">

                  {experience.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-[#1B1B1B] border border-neutral-800 p-5 text-center hover:border-neutral-600 transition-colors"
                    >

                      <h4 className="text-3xl md:text-4xl font-black flex justify-center items-center">

                        <CountUp
                          from={0}
                          to={stat.value}
                          separator=","
                          direction="up"
                          duration={2}
                          delay={0}
                          className="count-up-text"
                        />

                        <span>{stat.suffix}</span>

                      </h4>

                      <p className="text-sm text-neutral-400 mt-2">
                        {stat.label}
                      </p>

                    </div>
                  ))}

                </div>

                {/* Internship Responsibilities */}
                <div className="mt-9 space-y-5 text-base md:text-lg text-neutral-300">

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
        <div className="lg:col-span-full">

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
                    className="px-5 py-3 rounded-full bg-[#1B1B1B] border border-neutral-700 text-sm md:text-base hover:border-cyan-500/50 transition-colors"
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
