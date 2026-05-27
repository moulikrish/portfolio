import "./pages/Styles/theme.css";
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route , useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import SocialSidebar from "./components/SocialSlider";
import About from "./pages/About";
// import Skills from "./pages/Skills";
// import Experience from "./pages/Experience";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";

import { FaMoon, FaSun } from "react-icons/fa";
// import {GiNightSleep } from "react-icons/gi"
import { IoInvertMode, IoInvertModeOutline  } from "react-icons/io5";
 

function AnimatedRoutes() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <AnimatePresence mode="wait">

      {/* 🌙 ☀ Toggle */}
        <div className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IoInvertMode /> : <IoInvertModeOutline  />}
          
        </div>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}/>
        <Route path="/about" element={<About darkMode={darkMode} setDarkMode={setDarkMode}/>} />
        {/* <Route path="/skills" element={<Skills />} /> */}
        {/* <Route path="/experience" element={<Experience />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  

  return (
    <BrowserRouter>
      <Navbar /> 
      <AnimatedRoutes/>  
      <SocialSidebar />
    </BrowserRouter>
  );
};

export default App;
