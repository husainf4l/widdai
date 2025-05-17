"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
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
              About WIDD.AI
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A pioneering force in Middle Eastern AI innovation, delivering
              advanced autonomous systems globally
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-300 mb-6">
                Established in the heart of the Middle East, WIDD.AI emerged
                from a vision to revolutionize the AI landscape with advanced
                autonomous systems and intelligent agents. Through our strategic
                partnership with UK-based Roxate, we combine regional expertise
                with global technological innovation.
              </p>
              <p className="text-gray-300">
                Our mission is to lead the AI revolution in the Middle East,
                delivering sophisticated AI solutions that push the boundaries
                of what&apos;s possible in enterprise automation and intelligence.
              </p>
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
                alt="Global Presence"
                fill
                className="object-contain dark:invert"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-light/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "Pushing boundaries in AI technology and application",
              },
              {
                title: "Excellence",
                description:
                  "Delivering superior solutions with measurable impact",
              },
              {
                title: "Partnership",
                description: "Building lasting relationships with our clients",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-secondary-dark p-6 rounded-lg border border-gray-800"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Global Partnership
              </h2>
              <p className="text-gray-300 mb-6">
                Our strategic partnership with UK-based Roxate brings together
                the best of both worlds - local understanding and global
                expertise in AI innovation.
              </p>
              <p className="text-gray-300">
                This collaboration enables us to deliver world-class AI
                solutions tailored to the unique needs of the Middle Eastern
                market.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 relative h-[300px]"
            >
              <Image
                src="/window.svg"
                alt="Partnership"
                fill
                className="object-contain dark:invert"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
