"use client";

import Hero from "@/components/Hero";
import AIAnimation from "@/components/AIAnimation";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-secondary-dark min-h-screen">
      <Hero />

      {/* Vision Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              Our Vision
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              WIDD.AI leads the Middle East's AI revolution with cutting-edge
              autonomous agents and advanced AI systems. Our mission is to
              empower organizations across the region with intelligent solutions
              that learn, adapt, and evolve to meet complex challenges in
              real-time.
            </p>
            <div className="flex gap-4">
              <a
                href="/about"
                className="text-primary hover:text-primary-light transition-colors"
              >
                Learn More →
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px]"
          >
            <Image
              src="/globe.svg"
              alt="Global AI Network"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Advanced AI Technologies Section with AIAnimation */}
      <SolutionsShowcase />

      {/* Key Solutions Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-secondary-light/10 relative overflow-hidden">
        {/* AI Animation Background */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <AIAnimation />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Key Solutions
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            From autonomous agents to real-time analytics, our solutions are
            designed to transform businesses and industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {[
            {
              title: "Autonomous AI Agents",
              description:
                "Advanced AI agents with deep learning capabilities, natural language understanding, and adaptive decision-making for complex enterprise tasks.",
              icon: "/window.svg",
            },
            {
              title: "Real-Time Intelligence",
              description:
                "Sophisticated real-time analytics and predictive systems powered by neural networks and machine learning.",
              icon: "/file.svg",
            },
            {
              title: "Advanced Computer Vision",
              description:
                "State-of-the-art visual AI with deep learning models for intelligent recognition and processing.",
              icon: "/vercel.svg",
            },
          ].map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary-dark p-6 rounded-lg border border-gray-800 hover:border-primary transition-colors"
            >
              <div className="w-12 h-12 mb-4">
                <Image
                  src={solution.icon}
                  alt={solution.title}
                  width={48}
                  height={48}
                  className="dark:invert"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-400">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
