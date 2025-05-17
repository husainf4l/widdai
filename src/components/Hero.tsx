"use client";

import { motion } from "framer-motion";
import AIAnimation from "./AIAnimation";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-natural-dark">
      {/* AI Network Animation */}
      <AIAnimation />

      {/* Futuristic AI Core Animation */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{
          scale: [0.7, 1.3, 0.7],
          opacity: [0.7, 1, 0.7],
          boxShadow: [
            "0 0 80px 40px #00E5FF55, 0 0 200px 80px #9E00FF33",
            "0 0 120px 60px #00A3FF99, 0 0 300px 120px #00E5FF44",
            "0 0 80px 40px #00E5FF55, 0 0 200px 80px #9E00FF33",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-primary/60 via-accent/40 to-accent2/30 blur-[80px] z-0 shadow-2xl"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-secondary-dark/50 to-secondary-dark z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark via-transparent to-transparent z-0" />

      {/* Glowing Orb */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/20 blur-[100px] z-0"
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 relative">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-block"
            >
              Pioneering
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="inline-block text-primary relative"
            >
              Advanced AI
              <motion.div
                className="absolute -inset-1 bg-primary/20 blur-lg -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="inline-block"
            >
              in the Middle East
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Unleashing next-generation autonomous AI systems with advanced neural
          networks and deep learning capabilities
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex justify-center gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/solutions"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40"
          >
            Explore Solutions
          </motion.a>
        </motion.div>
      </div>

      {/* Animated Brackets */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{
            scale: [0.8, 1.1, 0.8],
            rotateZ: [0, 5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[80vh] border border-primary/20 rounded-3xl"
        />
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{
            scale: [0.8, 1.1, 0.8],
            rotateZ: [0, -5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[80vh] border border-primary/10 rounded-3xl"
        />
      </motion.div>
    </div>
  );
}
