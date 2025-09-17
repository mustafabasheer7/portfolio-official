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
      title: "Onboarding – Clinic Registration",
      subtitle: "Multi-step Registration Wizard",
      period: "2023 – 2024",
      description:
        "Comprehensive clinic registration system with multi-step wizard, real-time validation, conditional fields, and progress tracking.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "CakePHP", "TypeScript", "Tailwind CSS", "PHP"],
      features: [
        "Multi-step form with progress tracking",
        "Real-time validation and error handling",
        "Conditional field rendering",
        "Mobile-responsive design",
        "Integration with backend APIs",
      ],
      stats: {
        users: "1,200+",
        improvement: "40%",
        satisfaction: "95%",
      },
      color: "from-teal-500 to-cyan-500",
      status: "Production",
    },
    {
      title: "Simple Task Manager",
      subtitle: "React Task Management App",
      period: "2024",
      description:
        "Modern task management application with CRUD operations, filtering, search functionality, and light/dark mode support.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
      features: [
        "CRUD operations for tasks",
        "Priority-based filtering",
        "Search and sort functionality",
        "Light/dark mode toggle",
        "Responsive design",
      ],
      stats: {
        performance: "98%",
        accessibility: "A+",
        responsive: "100%",
      },
      color: "from-blue-500 to-indigo-500",
      status: "Completed",
    },
    {
      title: "E-Commerce Platform",
      subtitle: "Full-Stack Online Store",
      period: "Coming Soon",
      description:
        "Modern e-commerce platform with advanced features, payment integration, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
      features: [
        "Product catalog with search",
        "Shopping cart and checkout",
        "Payment processing",
        "Admin dashboard",
        "Order management",
      ],
      stats: {
        planning: "80%",
        design: "60%",
        development: "20%",
      },
      color: "from-purple-500 to-violet-500",
      status: "In Development",
    },
    {
      title: "AI Content Generator",
      subtitle: "OpenAI-Powered Content Tool",
      period: "Planned",
      description:
        "AI-powered content generation tool with custom prompts, multiple output formats, and collaboration features.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
      features: [
        "AI content generation",
        "Custom prompt templates",
        "Multiple output formats",
        "Team collaboration",
        "Version history",
      ],
      stats: {
        research: "90%",
        prototype: "40%",
        design: "70%",
      },
      color: "from-orange-500 to-red-500",
      status: "Planning",
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
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors duration-200 cursor-pointer"
                  >
                    <ExternalLink size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors duration-200 cursor-pointer"
                  >
                    <Github size={20} />
                  </motion.button>
                </div>
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
