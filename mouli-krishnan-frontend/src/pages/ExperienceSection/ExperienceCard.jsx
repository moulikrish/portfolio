import { motion, AnimatePresence } from "framer-motion";
import "./ExperienceCard.css";

export default function ExperienceCard({
  company,
  onNext,
  isLast,
}) {
  if (!company) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="experience-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="experience-card"
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 80,
            scale: 0.85,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className="card-header">
            <div className="company-icon">
              🏢
            </div>

            <div>
              <h1>{company.company}</h1>
              <h3>{company.role}</h3>
            </div>
          </div>

          <div className="info">
            <p>📅 {company.duration}</p>
            <p>📍 {company.location}</p>
          </div>

          <p className="description">
            {company.description}
          </p>

          <h4 className="tech">Technologies</h4>

          <div className="tech-container">
            {company.technologies?.map((tech) => (
              <span
                key={tech}
                className="tech-chip"
              >
                {tech}
              </span>
            ))}
          </div>

          <h4 className="achi">Achievements</h4>

          <ul className="achievement-list">
            {company.achievements?.map((item, index) => (
              <li key={index}>
                ✅ {item}
              </li>
            ))}
          </ul>

          <button
            className="next-btn"
            onClick={onNext}
          >
            {isLast
              ? "🎉 Finish Journey"
              : "Next Company →"}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}