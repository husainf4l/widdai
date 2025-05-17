"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AIAnimation from "./AIAnimation";

interface Solution {
  title: string;
  description: string;
  icon: string;
}

const SolutionsShowcase: React.FC = () => {
  const solutions: Solution[] = [
    {
      title: "Neural Network Architecture",
      description:
        "Custom-designed neural networks optimized for enterprise applications with reinforcement learning capabilities.",
      icon: "/window.svg",
    },
    {
      title: "Deep Learning Models",
      description:
        "State-of-the-art deep learning models fine-tuned for Middle Eastern markets and use cases.",
      icon: "/file.svg",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-secondary-dark to-secondary">
      {/* Contained AI Animation */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full max-w-4xl mx-auto overflow-hidden rounded-3xl">
          <div className="absolute inset-0 opacity-60">
            <AIAnimation />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-secondary-dark"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Advanced AI Technologies
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our proprietary AI technologies power the next generation of
            intelligent systems across the Middle East.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="bg-secondary-dark/80 backdrop-blur-lg p-8 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary to-accent rounded-lg p-3 shadow-lg shadow-primary/20">
                <Image
                  src={solution.icon}
                  alt={solution.title}
                  width={40}
                  height={40}
                  className="dark:invert"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-300 text-lg">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcase;
