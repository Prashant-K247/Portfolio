import ScrollVelocity from "../ui/ScrollVelocity";
import TiltedCard from "../ui/TiltedCard";
import mainImage from "./main_image.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-tansparent flex items-center justify-center"
    >
      {/* Resume Button */}

      <div className="absolute inset-0 flex flex-col justify-center gap-15 mt-20">
        

        {/* Line 1 - above the photo */}
        <div className="relative z-20">
          <ScrollVelocity
            texts={[" FULLSTACK DEVELOPER "]}
            velocity={120}
            className="hero-scroll"
            numCopies={7}
            damping={50}
            stiffness={200}
          />
        </div>

       
        <div className="relative z-0">
          <ScrollVelocity
            texts={["REACT • NODE.JS • AI •"]}
            velocity={-120}
            className="hero-scroll dark"
            numCopies={7}
            damping={50}
            stiffness={400}
          />
        </div>

        {/* Line 3 - above the photo */}
        <div className="relative z-20 ">
          <ScrollVelocity
            texts={["BUILD & BREAK &"]}
            velocity={120}
            className="hero-scroll"
            numCopies={7}
            damping={50}
            stiffness={200}
          />
        </div>

      </div>

      <div className="absolute z-10">
        <TiltedCard
          imageSrc={mainImage}
          altText="Prashant"
          containerHeight="390px"
          containerWidth="360px"
          imageHeight="500px"
          imageWidth="360px"
          scaleOnHover={1.05}
          rotateAmplitude={20}
          showMobileWarning={false}
          showTooltip={false}
        />
      </div>
      <div className="absolute bottom-5 right-8 z-30">
  <div className="flex items-center gap-3 bg-transparent ">
    <span className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping"></span>
      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 border border-white"></span>
    </span>

    <span className="text-sm tracking-wide uppercase text-neutral-900">
      Open to Work
    </span>
  </div>
</div>
    </section>
  );
}