"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm font-medium mb-6"
          >
            <User size={16} />
            About Me
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            Crafting Digital Experiences
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Passionate about building high-performance web applications that
            make a difference
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              {/* Photo Container */}
              <div className="relative w-80 h-96 mx-auto bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder Avatar */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900 dark:to-blue-900">
                  <div className="w-32 h-32 bg-teal-200 dark:bg-teal-700 rounded-full flex items-center justify-center">
                    <User
                      size={48}
                      className="text-teal-600 dark:text-teal-300"
                    />
                  </div>
                </div>

                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-200 dark:bg-teal-700 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 dark:bg-blue-700 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
            >
              Full stack developer with{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-400">
                5+ years of experience
              </span>{" "}
              building production-grade web applications for{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-400">
                4,000+ users
              </span>
              . I specialize in React, Next.js, and performance-first UI
              development.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
            >
              I have a proven track record of reducing load times by{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-400">
                38%
              </span>
              , cutting development cycles by{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-400">
                25%
              </span>
              , and shipping features that drive growth. I'm passionate about
              AI-accelerated development using tools like Cursor, GitHub
              Copilot, and OpenAI API.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
            >
              When I'm not coding, you'll find me exploring the latest web
              technologies, contributing to open-source projects, or
              experimenting with new development methodologies to stay at the
              cutting edge of the industry.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Download size={20} />
                Download Resume
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/mustafabasheer7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer"
              >
                <ExternalLink size={20} />
                View LinkedIn
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                  5+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                  4K+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Users Impacted
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                  38%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Performance Boost
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
