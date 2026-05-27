import React from "react";

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNpm,
  FaServer,
  FaDatabase,
  FaPalette,
  FaCode,
  FaPenNib,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiPostman,
  SiCanva,
} from "react-icons/si";

import "./Styles/Skills.css";

const skillData = [
  {
    title: "Frontend",
    icon: "🌐",

    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "React", icon: <FaReact /> },
    ],
  },

  {
    title: "Backend",
    icon: "⚙️",

    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <FaServer /> },
      { name: "REST APIs", icon: "⚡" },
    ],
  },

  {
    title: "Database",
    icon: "🗄️",

    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },

  {
    title: "Dev Tools",
    icon: "🛠️",

    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "npm", icon: <FaNpm /> },
    ],
  },

  {
    title: "Design",
    icon: "🎨",

    skills: [
      { name: "Photoshop", icon: <FaPalette /> },
      { name: "Illustrator", icon: <FaPenNib /> },
      { name: "Canva", icon: <SiCanva /> },
      { name: "Corel Draw", icon: <FaPalette /> },
      { name: "Figma", icon: <FaFigma /> },
    ],
  },

  {
    title: "Others",
    icon: "🚀",

    skills: [
      { name: "Responsive", icon: "📱" },
      { name: "UI/UX", icon: "🎨" },
      { name: "API", icon: "🔗" },
      { name: "Debugging", icon: "🐞" },
    ],
  },
];

const Skills = () => {
  return (

    <section className="skills-section">

      {/* Background */}
      <div className="space-grid"></div>

      <div className="stars">
        {[...Array(120)].map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Heading */}
      <div className="skills-heading">

        <h1>
          SKILL UNIVERSE
        </h1>

        <p>
          Explore My Technology Galaxy
        </p>

      </div>

      {/* Timeline */}
      <div className="timeline-line"></div>

      {/* Cards */}
      <div className="skills-container">

        {skillData.map((category, index) => (

          <motion.div
            key={index}

            initial={{
              opacity: 0,
              y: 100,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}

            viewport={{
              once: true,
            }}

            className={`skill-card ${
              index % 2 === 0
                ? "left-card"
                : "right-card"
            }`}
          >

            {/* Connector */}
            <div className="connector-dot"></div>

            {/* Main Planet */}
            <div className="planet-card">

              <div className="planet-header">

                <div className="planet-icon">
                  {category.icon}
                </div>

                <h2>
                  {category.title}
                </h2>

              </div>

              {/* Orbit Skills */}
              <div className="skills-orbit">

                {category.skills.map((skill, i) => (

                  <motion.div
                    key={i}

                    whileHover={{
                      scale: 1.12,
                      y: -5,
                    }}

                    className="skill-bubble"
                  >

                    <div className="skill-icon">
                      {skill.icon}
                    </div>

                    <span>
                      {skill.name}
                    </span>

                  </motion.div>
                ))}

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Skills;