import "./pages/Styles/theme.css";
import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSlider";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/ExperienceSection/Experience"

import { IoInvertMode, IoInvertModeOutline } from "react-icons/io5";

function AnimatedRoutes({ darkMode, setDarkMode }) {
  const location = useLocation();


  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <IoInvertMode /> : <IoInvertModeOutline />}
      </div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/experience" element={<Experience/>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [showIntro, setShowIntro] = useState(true);

  return (
    <BrowserRouter>
      <Navbar showIntro={showIntro} setShowIntro={setShowIntro} />

      <AnimatedRoutes darkMode={darkMode} setDarkMode={setDarkMode} />

      <SocialSidebar showIntro={showIntro} />
    </BrowserRouter>
  );
}
