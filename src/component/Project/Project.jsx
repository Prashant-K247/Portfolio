import FlowingMenu from "../ui/FlowingMenu";
import SkillCard from "../ui/SkillCard";
import DecryptedText from '../ui/DecryptedText'
import inhandly from "./images/Inhandly/1.png";
import reelbite from "./images/Reelbite/1.png";
import aivideo from "./images/AIvideo/1.png";
import hirepath from "./images/Hirepath/1.png";
import image from "./images/Algoguide/1.png";



const projects = [
  {
    text: "AI Meeting Intelligence",
    subtitle: "LangChain • Whisper • RAG",
    image: aivideo,
    link: "/project/ai-meeting",
  },
  {
    text: "ReelBite",
    subtitle: "Next.js • Express • MongoDB",
    image: reelbite,
    link: "/project/reelbite",
  },
  {
    text: "AlgoGuide.AI",
    subtitle: "Chrome Extension • Gemini • Node.js",
    image: image,
    link: "/project/algoguide",
  },
  {
    text: "Inhandly",
    subtitle: "React.js • Express.js • Gemini ",
    image: inhandly,
    link: "/project/inhandly",
  },
  {
    text: "HirePath.AI",
    subtitle: "N8N • Gemini",
    image: hirepath,
    link: "/project/hirepath",
  },
];

const frontend = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "shadcn/ui",
];

const backend = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  
];

const ai = [
  "Python",
  "LangChain",
  "RAG Pipelines",
  "HuggingFace",
  "Vector DB (Chroma)",
  "Prompt Engineering",
];

const tools = [
  "Docker",
  "Git",
  "GitHub",
  "Postman",
  "VS Code",
  "n8n",
];
const core = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
];

const professional = [
  "Full Stack Development",
  "Responsive Design",
  "Agile & Scrum",
  "CRUD Operations",
];

export default function Project() {
  return (
    <>
      {/* ================= Projects ================= */}

      <section
        id="projects"
        className="min-h-screen bg-transparent text-white py-24"
      >
        <div className="px-10 md:px-20 mb-20">
          <p className="uppercase tracking-[0.3em] text-neutral-400 mb-1">
            Selected Work
          </p>

          <h2 className="text-6xl md:text-8xl font-black text-orange-50 mt-1">
            PROJECTS
          </h2>
        </div>

        <div className="h-150 overflow-hidden">
          <FlowingMenu
            items={projects}
            speed={7}
            textColor="#ffffff"
            bgColor="#0F0F0F"
            marqueeBgColor="#ffffff"
            marqueeTextColor="#0F0F0F"
            borderColor="#2A2A2A"
          />
        </div>
      </section>

      {/* ================= Technology Arsenal ================= */}

      <section
        id="skills"
        className="bg-transparent text-white px-10 md:px-20 py-30"
      >
        <p className="uppercase tracking-[0.3em] text-neutral-400 mb-3">
          My Stack
        </p>

        <div className="text-4xl md:text-8xl font-black mb-20">
        
          <DecryptedText
            
            text="TECHNOLOGY ARSENAL"
            revealDirection="start"
            sequential
            useOriginalCharsOnly={false}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="lg:col-span-2">
            <SkillCard
              title="Frontend"
              skills={frontend}
            />
          </div>

          <SkillCard
            title="Backend"
            skills={backend}
          />

          <SkillCard
            title="AI / Generative AI"
            skills={ai}
          />

          
          <SkillCard
            title="Tools"
            skills={tools}
          />
          <SkillCard
            title="CS Core"
            skills={core}
          />
          
          <div className="lg:col-span-2">
            <SkillCard
              title="Professional Skills"
              skills={professional}
            />
          </div>

        </div>
      </section>
    </>
  );
}