import { Link } from "react-router-dom";
import BorderGlow from "../ui/BorderGlow";
import CountUp from "../ui/CountUp";
import { useLayoutEffect, useEffect } from "react";

export default function ProjectPage({ project }) {
  useLayoutEffect(() => {
  console.log("before", window.scrollY);

  window.scrollTo(0, 0);

  console.log("after", window.scrollY);

  setTimeout(() => {
    console.log("500ms", window.scrollY);
  }, 500);
}, []);
  const {
    title,
    tagline,
    overview,
    github,
    live,
    heroImage,
    gallery,
    tech,
    features,
    challenges,
    learnings,
    stats,
  } = project;
 

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">

      {/* ================= HEADER ================= */}

      <section className="max-w-7xl mx-auto px-8 md:px-16 pt-20">

        <div className="flex flex-wrap items-center justify-between gap-6">

          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition"
          >
            ← Back to Portfolio
          </Link>

          <div className="flex gap-4">

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-neutral-700 hover:bg-white hover:text-black transition"
              >
                GitHub ↗
              </a>
            )}

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white text-black hover:scale-105 transition"
              >
                Live Demo ↗
              </a>
            )}

          </div>

        </div>

      </section>

      {/* ================= HERO ================= */}

      <section className="max-w-7xl mx-auto px-8 md:px-16 pt-20">

        <h1 className="text-6xl md:text-8xl font-black leading-none">
          {title}
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-10 text-neutral-300">
          {tagline}
        </p>

        <div className="flex flex-wrap gap-4 mt-12">

          {tech.frontend.map((item) => (
            <div
              key={item}
              className="px-5 py-2 rounded-full border border-neutral-700 bg-[#171717]"
            >
              {item}
            </div>
          ))}

          {tech.backend.map((item) => (
            <div
              key={item}
              className="px-5 py-2 rounded-full border border-neutral-700 bg-[#171717]"
            >
              {item}
            </div>
          ))}

          {tech.ai.map((item) => (
            <div
              key={item}
              className="px-5 py-2 rounded-full border border-neutral-700 bg-[#171717]"
            >
              {item}
            </div>
          ))}

        </div>

      </section>


      {/* ================= OVERVIEW ================= */}

      <section className="max-w-7xl mx-auto px-8 md:px-16 py-28">

        <p className="uppercase tracking-[0.3em] text-neutral-500 mb-6">
          Overview
        </p>

        <h2 className="text-5xl font-black mb-12">
          Building the Product
        </h2>

        <p className="text-xl text-neutral-300 leading-10">
          {overview}
        </p>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="max-w-7xl mx-auto px-8 md:px-16 pb-32">

        <p className="uppercase tracking-[0.3em] text-neutral-500 mb-10">
          Key Features
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => (

            <BorderGlow
              key={feature}
              edgeSensitivity={0}
              glowColor="40 80 80"
              backgroundColor="#141414"
              borderRadius={24}
              glowRadius={80}
              glowIntensity={1}
              coneSpread={28}
              animated={false}
              colors={[
                "#8b5cf6",
                "#3b82f6",
                "#06b6d4",
              ]}
            >

              <div className="p-8 h-full">

                <h3 className="text-2xl font-bold mb-5">
                  {feature}
                </h3>

                <p className="text-neutral-400 leading-8">
                  This feature was implemented as part of the
                  production workflow while keeping scalability,
                  usability and maintainability in mind.
                </p>

              </div>

            </BorderGlow>

          ))}

        </div>

      </section>

      {/* ================= TECH STACK ================= */}

      <section className="max-w-7xl mx-auto px-8 md:px-16 pb-32">

        <p className="uppercase tracking-[0.3em] text-neutral-500 mb-10">
          Technology Stack
        </p>

        <div className="grid md:grid-cols-2 gap-8">
                      {/* Frontend */}

          <BorderGlow
            edgeSensitivity={0}
            glowColor="40 80 80"
            backgroundColor="#141414"
            borderRadius={24}
            glowRadius={80}
            glowIntensity={1}
            coneSpread={28}
            animated={false}
            colors={["#8b5cf6", "#3b82f6", "#06b6d4"]}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-8">
                Frontend
              </h3>

              <div className="flex flex-wrap gap-3">
                {tech.frontend.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-[#1b1b1b] border border-neutral-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </BorderGlow>

          {/* Backend */}

          <BorderGlow
            edgeSensitivity={0}
            glowColor="40 80 80"
            backgroundColor="#141414"
            borderRadius={24}
            glowRadius={80}
            glowIntensity={1}
            coneSpread={28}
            animated={false}
            colors={["#8b5cf6", "#3b82f6", "#06b6d4"]}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-8">
                Backend
              </h3>

              <div className="flex flex-wrap gap-3">
                {tech.backend.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-[#1b1b1b] border border-neutral-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </BorderGlow>

          {/* AI */}

          {tech.ai.length > 0 && (
            <BorderGlow
              edgeSensitivity={0}
              glowColor="40 80 80"
              backgroundColor="#141414"
              borderRadius={24}
              glowRadius={80}
              glowIntensity={1}
              coneSpread={28}
              animated={false}
              colors={["#8b5cf6", "#3b82f6", "#06b6d4"]}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-8">
                  AI
                </h3>

                <div className="flex flex-wrap gap-3">
                  {tech.ai.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-[#1b1b1b] border border-neutral-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </BorderGlow>
          )}

          {/* Tools */}

          <BorderGlow
            edgeSensitivity={0}
            glowColor="40 80 80"
            backgroundColor="#141414"
            borderRadius={24}
            glowRadius={80}
            glowIntensity={1}
            coneSpread={28}
            animated={false}
            colors={["#8b5cf6", "#3b82f6", "#06b6d4"]}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-8">
                Tools
              </h3>

              <div className="flex flex-wrap gap-3">
                {tech.tools.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-[#1b1b1b] border border-neutral-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </BorderGlow>

        </div>

      </section>

      {/* ================= GALLERY ================= */}

      {/* <section className="max-w-7xl mx-auto px-8 md:px-16 pb-32">

        <p className="uppercase tracking-[0.3em] text-neutral-500 mb-10">
          Gallery
        </p>

        <div className="grid lg:grid-cols-3 gap-8">

          <img
            src={gallery[0]}
            alt=""
            className="rounded-3xl border border-neutral-800 w-full h-full object-cover"
          />

        

            <img
              src={gallery[1]}
              alt=""
              className="rounded-3xl border border-neutral-800"
            />

            <img
              src={gallery[2]}
              alt=""
              className="rounded-3xl border border-neutral-800"
            />

          

        </div>

      </section> */}

      {/* ================= CHALLENGES ================= */}

      <section className="max-w-7xl mx-auto px-8 md:px-16 pb-24">

        <BorderGlow
          edgeSensitivity={0}
          glowColor="40 80 80"
          backgroundColor="#141414"
          borderRadius={24}
          glowRadius={80}
          glowIntensity={1}
          coneSpread={28}
          animated={false}
          colors={["#8b5cf6", "#3b82f6", "#06b6d4"]}
        >

          <div className="p-10">
            <h2 className="text-4xl font-black mb-8">
              Challenges
            </h2>
            <p className="text-xl text-neutral-300 leading-10">
              {challenges}
            </p>
          </div>
        </BorderGlow>
      </section>
      {/* ================= LEARNINGS ================= */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 pb-32">

        <BorderGlow
          edgeSensitivity={0}
          glowColor="40 80 80"
          backgroundColor="#141414"
          borderRadius={24}
          glowRadius={80}
          glowIntensity={1}
          coneSpread={28}
          animated={false}
          colors={["#8b5cf6", "#3b82f6", "#06b6d4"]}
        >

          <div className="p-10">

            <h2 className="text-4xl font-black mb-8">
              What I Learned
            </h2>

            <p className="text-xl text-neutral-300 leading-10">
              {learnings}
            </p>

          </div>
        </BorderGlow>
      </section>

      {/* ================= STATS ================= */}

      <section className="max-w-7xl mx-auto px-8 md:px-16 pb-36">

        <div className="grid md:grid-cols-3 gap-8">

          {stats.map((item) => (

            <BorderGlow
              key={item.label}
              edgeSensitivity={0}
              glowColor="40 80 80"
              backgroundColor="#141414"
              borderRadius={24}
              glowRadius={80}
              glowIntensity={1}
              coneSpread={28}
              animated={false}
              colors={["#8b5cf6", "#3b82f6", "#06b6d4"]}
            >

              <div className="p-10 text-center">

                <div className="text-6xl font-black">

                  <CountUp
                    from={0}
                    to={item.value}
                    duration={2}
                  />
                  <span>{item.suffix}</span>

                </div>

                <p className="mt-5 text-neutral-400">
                  {item.label}
                </p>

              </div>

            </BorderGlow>

          ))}

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <section className="border-t border-neutral-800">

        <div className="max-w-7xl mx-auto px-8 md:px-16 py-20 flex flex-col md:flex-row justify-between items-center gap-8">

          <Link
            to="/"
            className="text-neutral-400 hover:text-white transition"
          >
            ← Back to Portfolio
          </Link>

          <p className="text-neutral-500">
            Built with React, GSAP & Tailwind CSS.
          </p>

        </div>

      </section>

    </main>
  );
}