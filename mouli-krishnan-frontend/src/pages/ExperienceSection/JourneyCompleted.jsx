import { motion } from "framer-motion";

export default function JourneyCompleted() {
  return (
    <motion.div
      className="journey"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <h1>🎉 Journey Complete</h1>

      <p>Thanks for visiting my experience.</p>
    </motion.div>
  );
}
