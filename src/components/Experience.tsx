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
      location: "Remote, Canada",
      period: "2021 – 2022",
      type: "Contract",
      description:
        "Built full-stack web applications for local businesses using modern React architecture, Firebase backend services, and responsive design principles.",
      achievements: [
        "Architected and developed responsive business websites using React, HTML/CSS, and Firebase with focus on performance and mobile-first design",
        "Implemented client solutions including contact forms, appointment scheduling systems, and email integrations with third-party APIs",
        "Established CI/CD pipelines on Netlify for automated deployments and streamlined client maintenance workflows",
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
      title: "Web Developer Intern",
      company: "University of Ottawa",
      location: "Ottawa, Canada",
      period: "May 2020 – Sep 2020",
      type: "Co-op",
      description:
        "Led modernization of Academic Accommodations Service portal serving 3,000+ students, implementing React-based dynamic form systems.",
      achievements: [
        "Engineered a React dynamic form builder for the Academic Accommodations Service, reducing staff administrative overhead by 20% and improving student experience",
        "Delivered 50+ Jira tickets (PHP/JavaScript/SQL) ahead of project timelines while maintaining high code quality standards through comprehensive peer reviews",
        "Enhanced system reliability by expanding PHPUnit test coverage from 45% to 73%, implementing automated testing protocols",
      ],
      technologies: ["React", "PHP", "JavaScript", "SQL", "PHPUnit", "Jira"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Software Developer Intern",
      company: "Ribbon Communications",
      location: "Ottawa, Canada",
      period: "Sep 2018 – Dec 2018",
      type: "Co-op",
      description:
        "Contributed to enterprise Java application development with focus on feature design, comprehensive testing, and system stability improvements.",
      achievements: [
        "Designed and implemented Java software features with comprehensive test case development to enhance system stability and reduce production bugs",
        "Leveraged Eclipse IDE and debugging tools to diagnose and resolve complex issues in enterprise Java web applications",
        "Created detailed technical documentation for software components, facilitating knowledge transfer and long-term maintenance strategies",
      ],
      technologies: [
        "Java",
        "Eclipse",
        "Testing",
        "Debugging",
        "Documentation",
      ],
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
