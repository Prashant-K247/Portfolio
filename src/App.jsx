import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";

import Home from "./Pages/Home";

import AIvideo from "./component/Project/AIvideo";
import Algoguide from "./component/Project/Algoguide";
import Reelbite from "./component/Project/Reelbite";
import Hirepath from "./component/Project/Hirepath";
import Inhandly from "./component/Project/Inhandly";
import SmoothScroll from "./component/ui/SmoothScroll"


function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);

    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SmoothScroll/>

      <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/project/ai-meeting"
        element={<AIvideo />}
      />

      <Route
        path="/project/reelbite"
        element={<Reelbite />}
      />

      <Route
        path="/project/algoguide"
        element={<Algoguide />}
      />

      <Route
        path="/project/hirepath"
        element={<Hirepath />}
      />

      <Route
        path="/project/inhandly"
        element={<Inhandly />}
      />
    </Routes>
    
    </>
    
  );
}