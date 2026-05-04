import "./pages/Styles/theme.css";
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSlider";

import Home from "./pages/Home";
import About from "./pages/About";

import { FaMoon, FaSun } from "react-icons/fa";

// 🔥 Animated Routes Component
function AnimatedRoutes({ darkMode, setDarkMode }) {
  const location = useLocation();

  return (
    <>
      {/* 🌙 ☀ Theme Toggle */}
      <div
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* ✅ Proper routing order */}
          <Route
            path="/"
            element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route
            path="/about"
            element={<About darkMode={darkMode} setDarkMode={setDarkMode} />}
          />

          {/* ✅ Fallback route */}
          <Route
            path="*"
            element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

// 🚀 Main App
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // 🌙 Apply dark class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes darkMode={darkMode} setDarkMode={setDarkMode} />
      <SocialSidebar />
    </BrowserRouter>
  );
};

export default App;