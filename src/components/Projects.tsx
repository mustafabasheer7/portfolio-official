"use client";

import { motion } from "framer-motion";
import {
  Folder,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Zap,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Teal News",
      subtitle: "AI-Powered News Aggregator",
      period: "2025",
      description:
        "Built a full-stack news platform with Next.js 15, TypeScript, Tailwind, Prisma/MySQL, and Clerk authentication.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "Tailwind",
        "Prisma",
        "MySQL",
        "Clerk",
      ],
      features: [
        "Google Trends integration (via SerpApi) for real-time trending topics",
        "Hugging Face API for AI-generated article summaries",
        "Responsive glassmorphism UI with advanced search",
        "Bookmarking and secure user accounts",
        "Real-time trending topics",
      ],
      stats: {
        performance: "98%",
        features: "Full Stack",
        status: "Live",
      },
      color: "from-teal-500 to-cyan-500",
      status: "Production",
      links: {
        live: "https://tealnews.site/",
        github: "#",
      },
    },
    {
      title: "Onboarding – Clinic Registration",
      subtitle: "Project Lead, Noterro",
      period: "2024",
      description:
        "Led end-to-end development of a multi-step registration wizard using React (frontend) and CakePHP (backend).",
      image: "/api/placeholder/600/400",
      technologies: ["React", "CakePHP", "TypeScript", "Tailwind CSS", "PHP"],
      features: [
        "Multi-step registration wizard",
        "Conditional logic and validation",
        "Progress tracking to create frictionless onboarding flow",
        "Primary registration path for all new clinics",
        "Reduced support requests and improved user adoption",
      ],
      stats: {
        adoption: "Primary Path",
        impact: "Reduced Support",
        role: "Lead",
      },
      color: "from-blue-500 to-indigo-500",
      status: "Production",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "Completed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "In Development":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Planning":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
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
            <Folder size={16} />
            Featured Projects
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            Recent Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A showcase of projects that demonstrate technical expertise and
            problem-solving skills
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center shadow-xl`}
                  >
                    <Folder size={32} className="text-white" />
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Hover Overlay */}
                {project.links && (
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors duration-200 cursor-pointer"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors duration-200 cursor-pointer"
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar size={14} />
                    {project.period}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {project.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`}
                          />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {feature}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="mb-6 grid grid-cols-3 gap-4 py-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  {Object.entries(project.stats).map(
                    ([key, value], statIndex) => (
                      <div key={key} className="text-center">
                        <div
                          className={`text-lg font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                        >
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                          {key}
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
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

              {/* Decorative Element */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/mustafabasheer7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <Github size={20} />
            View More Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
