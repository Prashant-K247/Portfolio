import BorderGlow from "../ui/BorderGlow";

export default function SkillCard({ title, skills }) {
  return (
    <BorderGlow
      edgeSensitivity={0}
      glowColor="40 80 80"
      backgroundColor="#111111"
      borderRadius={28}
      glowRadius={90}
      glowIntensity={1}
      coneSpread={30}
      animated={false}
      colors={["#8b5cf6", "#3b82f6", "#06b6d4"]}
    >
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-8">
          {title}
        </h3>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-5 py-3 rounded-full border border-neutral-700 bg-[#181818] text-neutral-200 hover:border-white hover:bg-[#202020] transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </BorderGlow>
  );
}