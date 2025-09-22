"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "Noterro",
      location: "Remote",
      period: "Jan 2022 – Present",
      type: "Full-time",
      description:
        "Leading front-end development initiatives and performance optimization projects.",
      achievements: [
        "Migrated legacy PHP views to Next.js (App Router) with SSR/ISR and route-level code-splitting",
        "Standardised data fetching with SWR/React Query: cache policies, request de-duplication, error/refresh patterns",
        "Introduced a Tailwind + Storybook design system adopted across 50+ screens; enforced tokens and variants",
        "Delivered via epic-based planning with clear designs, acceptance criteria, QA/CR gates, and target dates",
        "Improved Core Web Vitals (LCP/CLS/INP) through render strategy and bundle size reduction",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Storybook",
        "SWR",
      ],
      color: "from-teal-500 to-cyan-500",
    },
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      location: "Remote",
      period: "2021 – 2022",
      type: "Contract",
      description:
        "Built responsive brochure sites for local businesses using React, HTML/CSS, and Firebase.",
      achievements: [
        "Built responsive brochure sites for local businesses using React, HTML/CSS, and Firebase",
        "Deployed on Netlify with basic CI for quick client updates and maintenance",
      ],
      technologies: [
        "React",
        "Firebase",
        "Netlify",
        "JavaScript",
        "CSS3",
        "HTML5",
      ],
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Web Developer (Co-op)",
      company: "University of Ottawa",
      location: "Ottawa, ON",
      period: "May 2020 – Sep 2020",
      type: "Co-op",
      description:
        "Contributed to the Academic Accommodations Service (student-facing) and built an internal React app.",
      achievements: [
        "Contributed to the Academic Accommodations Service (student-facing) and built an internal React app to consolidate branch data",
        "Collaborated with branch managers and supported database design and integration",
      ],
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Database Design"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Software Developer (Co-op)",
      company: "Ribbon Communications",
      location: "Ottawa, ON",
      period: "Sep 2018 – Dec 2018",
      type: "Co-op",
      description:
        "Contributed to Java feature design and testing, debugging web apps with Eclipse.",
      achievements: [
        "Contributed to Java feature design and testing, debugging web apps with Eclipse",
        "Documented components to support maintenance and knowledge transfer",
      ],
      technologies: ["Java", "Eclipse", "Web Apps", "Documentation"],
      color: "from-purple-500 to-violet-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            <Briefcase size={16} />
            Professional Experience
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            Career Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Building expertise through diverse projects and continuous learning
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 via-blue-500 to-purple-500 transform md:-translate-x-1/2" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 transform -translate-x-1/2 z-10">
                <div
                  className={`w-4 h-4 rounded-full bg-gradient-to-r ${experience.color} shadow-lg`}
                />
                <div
                  className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r ${experience.color} animate-pulse opacity-20`}
                />
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-2">
                        {experience.company}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${experience.color} text-white`}
                    >
                      {experience.type}
                    </span>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {experience.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3 mb-6">
                    {experience.achievements.map(
                      (achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: achievementIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} mt-2 flex-shrink-0`}
                          />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {achievement}
                          </span>
                        </motion.div>
                      )
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
            Impact & Results
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp size={24} />,
                value: "38%",
                label: "Performance Improvement",
                color: "text-green-600",
              },
              {
                icon: <Clock size={24} />,
                value: "25%",
                label: "Faster Dev Cycles",
                color: "text-blue-600",
              },
              {
                icon: <Users size={24} />,
                value: "4K+",
                label: "Users Impacted",
                color: "text-purple-600",
              },
              {
                icon: <Briefcase size={24} />,
                value: "70%",
                label: "Reduced API Traffic",
                color: "text-teal-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 ${stat.color} bg-gray-50 dark:bg-gray-800 rounded-lg mb-4`}
                >
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
