"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Image from "next/image";

const solutions = [
  {
    title: "Advanced AI Agents",
    description:
      "Next-generation autonomous AI agents powered by deep learning and neural networks. Our agents demonstrate sophisticated cognitive abilities, natural language understanding, and complex problem-solving capabilities for enterprise-scale automation.",
    features: [
      "Deep Learning & Neural Networks",
      "Natural Language Understanding",
      "Autonomous Decision Making",
      "Adaptive Learning",
    ],
    image: "/window.svg",
  },
  {
    title: "Real-Time Intelligence",
    description:
      "Cutting-edge analytics systems utilizing advanced machine learning algorithms for real-time data processing and predictive analysis, delivering instant actionable insights for critical operations.",
    features: [
      "Neural Network Processing",
      "Predictive Analytics",
      "Real-time Learning",
      "Intelligent Monitoring",
    ],
    image: "/file.svg",
  },
  {
    title: "Advanced Computer Vision",
    description:
      "State-of-the-art computer vision powered by deep convolutional neural networks for superior object detection, recognition, and scene understanding in complex environments.",
    features: [
      "Deep Neural Networks",
      "Advanced Object Recognition",
      "Semantic Understanding",
      "Real-time Processing",
    ],
    image: "/vercel.svg",
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen pt-16 bg-secondary-dark">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-secondary-dark z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Advanced AI Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading-edge artificial intelligence solutions powered by
              sophisticated neural networks and deep learning, designed to
              transform enterprises across the Middle East.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="grid grid-cols-2 gap-4">
                    {solution.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-400"
                      >
                        <svg
                          className="w-5 h-5 text-primary mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`relative h-64 ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-contain dark:invert"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary-light/10 to-secondary-dark">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact us to discuss how our AI solutions can help your
            organization stay ahead in the digital age.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
          >
            Get Started
          </a>
        </motion.div>
      </section>
    </div>
  );
}
