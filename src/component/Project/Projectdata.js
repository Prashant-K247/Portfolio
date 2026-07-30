// ---------- AI Meeting Intelligence ----------

import ai1 from "./images/AIvideo/1.png";
import ai2 from "./images/AIvideo/2.png";
import ai3 from "./images/AIvideo/3.png";


export const aiMeeting = {
  slug: "ai-meeting",

  title: "AI Meeting Intelligence",

  tagline:
    "Transform meeting recordings into searchable knowledge using Whisper, Sarva AI, LangChain and Retrieval-Augmented Generation (RAG).",

  overview:
    "AI Meeting Intelligence is an end-to-end meeting analysis platform that converts meeting recordings and YouTube videos into structured insights. The application automatically transcribes audio, generates concise summaries, extracts action items, open questions and key decesions, and enables users to chat with meeting content using a Retrieval-Augmented Generation pipeline.",

  github: "https://github.com/Prashant-K247/ai_video_assistant",

  live: "",

//   heroImage: aiHero,

  gallery: [
    ai1,
    ai2,
    ai3,
  ],

  tech: {
    frontend: [
    ],

    backend: [
    ],

    ai: [
    "Python", 
      "LangChain",
      "Whisper",
      "Sarvam AI",
      "RAG",
      "Chroma",
      "HuggingFace",
      "Mistral"
    ],

    tools: [
      "Git",
    ]
  },

  features: [
    "Meeting & YouTube transcription",
    "AI-generated summaries",
    "Action item extraction",
    "Conversational RAG search",
    "Vector database retrieval",
    "Meeting title generation"
  ],

  challenges:
    "Building an efficient Retrieval-Augmented Generation pipeline while handling large transcripts, maintaining response quality, and reducing inference latency.",

  learnings:
    "Learned production RAG architecture, vector databases, embedding models, prompt engineering, LLM orchestration with LangChain, and designing scalable AI workflows.",

  stats: [
    {
      value: 15,
      suffix: " min",
      label: "Meeting Processed"
    },
    {
      value: 4.5,
      suffix: " min",
      label: "Processing Time"
    },
    {
      value: 100,
      suffix: "%",
      label: "Semantic Search"
    }
  ]
};

// ---------- ReelBite ----------

import reel1 from "./images/Reelbite/1.png";
import reel2 from "./images/Reelbite/2.png";
import reel3 from "./images/Reelbite/3.png";


export const reelbite = {

  slug: "reelbite",

  title: "ReelBite",

  tagline:
    "A modern restaurant discovery platform inspired by Instagram Reels and Swiggy.",

  overview:
    "Reelbite Production is a full-stack food discovery and partner engagement platform. It lets food partners upload short video reels, while users can browse food content, search for restaurants, like reels, and comment on them.",

  github: "https://github.com/Prashant-K247/reelbite_production",

  live: "https://reelbite-frontend-2e7i.onrender.com/",

//   heroImage: reelHero,

  gallery: [
    reel1,
    reel2,
    reel3
  ],

  tech: {

    frontend: [
      "Next.js",
      "React",
      "Tailwind CSS",
    ],

    backend: [
      "Node.js",
      "Express",
      "MongoDB"
    ],

    ai: [],

    tools: [
      "Git",
      "Render",
      "Postman"
    ]
  },

  features: [
    "User registration and login",
    "Instagram-like explore page and Reel feed",
    "Reel/video upload for partners",
    "like & Comment feature like Instagram",
    "Responsive UI",
    "Backend rate limiting and basic security middleware"
  ],

  challenges:
    "Designing a highly responsive UI while maintaining Lighthouse performance and ensuring smooth backend communication.",

  learnings:
    "Improved understanding of full-stack application architecture, authentication flows, API design, rate limiting and production deployment.",

  stats: [
    {
      value: 100,
      suffix: "/100",
      label: "Lighthouse Score"
    },
    {
      value: 3,
      suffix: "tier",
      label: "Rate limiting"
    },
    {
      value: 23,
      suffix: "s",
      label: "avg. reel upload time"
    }
  ]
};

// ---------- AlgoGuide ----------

import algo1 from "./images/Algoguide/1.png";
import algo2 from "./images/Algoguide/2.png";
import algo3 from "./images/Algoguide/3.png";


export const algoguide = {

  slug: "algoguide",

  title: "AlgoGuide.AI",

  tagline:
    "An AI-powered Chrome Extension that provides contextual coding hints.",

  overview:
    "AlgoGuide.AI integrates Google's Gemini 2.5-flash model inside coding platforms to provide non-spoiler algorithm hints, improving problem-solving without directly revealing solutions.",

  github: "https://github.com/Prashant-K247/AlgloGiode.AI",

  live: "",

//   heroImage: algoHero,

  gallery: [
    algo1,
    algo2,
    algo3,

  ],

  tech: {

    frontend: [
      "React",
      "Chrome Extension "
    ],

    backend: [
        "Node.js"
    ],

    ai: [
      "Gemini",
      "Prompt Engineering"
    ],

    tools: [
      "Git"
    ]
  },

  features: [
    "Context-aware coding hints",
    "Lightweight Chrome Extension",
    "Gemini API integration",
    "60 second client side lock to prevent duplicate API calls , reducing server costs"
  ],

  challenges:
    "making a custom SPA lifecycle handler that automatically detects LeetCode page changes and Designing prompts that assist users without leaking complete solutions.",

  learnings:
    "Learned browser extension architecture, prompt engineering and LLM API integration.",

  stats: [
    {
      value: 100,
      suffix: "/100",
      label: "Lighthouse Score"
    },
  ]
};

// ---------- Portfolio ----------

import inh1 from "./images/Inhandly/1.png"
import inh2 from "./images/Inhandly/2.png"
import inh3 from "./images/Inhandly/3.png"

export const inhandly = {

  slug: "inhandly",

  title: "Inhandly",

  tagline:
    "An AI-powered Offer letter comparision, CTC and Tax calculation system.",

  overview:
    "Inhandly is a full-stack salary analysis platform leveraging Gemini API based document parsing to extract structured salary data from offer letters, it have a real-time CTC & Tax calculator Supporting old(6-slab) and new (7-slab regimes)" ,

  github: "https://github.com/Prashant-K247/inhandly",

  live: "https://inhandly.onrender.com",

//   heroImage: algoHero,

  gallery: [
    inh1,
    inh2,
    inh3,

  ],

  tech: {

    frontend: [
      "React",
      "Tailwind CSS",
      "chart.js"
    ],

    backend: [
        "Node.js",
        "Express",
        "PDF-kit"
    ],

    ai: [
      "Gemini",
      "Prompt Engineering"
    ],

    tools: [
      "Git"
    ]
  },

  features: [
    "Real time CTC calculation with zero page reload",
    "AI based offer letter comparision",
    "Downloadable comparision report",
    "Simple & Responsive ui with visual representation of CTC breakdown"
  ],

  challenges:
    "Making a real-time CTC calculator with zero page reload, handling pdfs and returning downloadable report with correctly parsed data",

  learnings:
    "learned about AI API integration, PDF-kit and data parsing from document",

  stats: [
  ]
};

import hire1 from "./images/Hirepath/1.png"
import hire2 from "./images/Hirepath/2.png"

export const hirepath = {

  slug: "hirepath",

  title: "Hirepath.AI",

  tagline:
    "AI powered prep-buddy which helps you prepare for upcoming interview",

  overview:
    "Hirepath.AI is a n8n AI workflow automation that takes input about job description, email id and name from the user and leverages gemini API to generate important questions for the interview as-well-as Roadmap for the preparation, it then generates pdf of that information with the help of pdf co and emails the generated pdf to the user at his given email address",

  github: "https://github.com/Prashant-K247/HirePath.ai",

  live: "",

//   heroImage: algoHero,

  gallery: [
    hire1,
    hire2,
  ],

  tech: {

    frontend: [
    ],

    backend: [],

    ai: [
      "gemini",
      "Prompt Engineering"
    ],

    tools: [
      "n8n",
      "github"
    ]
  },

  features: [
    "AI automation workflow made with n8n",
    "Gives valuable insights about given job description",
    "For future refrence the insights and roadmap is shared with user through email",
  ],

  challenges:
    "Learning how n8n nodes work and how to architect workflows to build reliable automations.",

  learnings:
    "Learned about No-code AI-automation workflows",

  stats: [
  ]
};
