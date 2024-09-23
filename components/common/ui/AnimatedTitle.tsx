import { motion } from "framer-motion";

export default function AnimatedTitle({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <motion.h2
      className={`text-4xl font-semibold mb-8 text-center pt-4 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          animate={{
            y: [0, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: index * 0.1,
          }}
          style={{
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
}
