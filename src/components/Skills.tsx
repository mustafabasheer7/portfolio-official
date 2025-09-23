"use client";

import { motion } from "framer-motion";
import { Code, Database, Wrench, Zap, TestTube, Monitor } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End",
      icon: <Monitor size={24} />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        "React",
        "Next.js (App Router/RSC)",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind",
        "React Testing Library",
      ],
    },
    {
      title: "Back-End",
      icon: <Code size={24} />,
      color: "from-green-500 to-emerald-500",
      skills: [
        "Node.js",
        "Express",
        "PHP (CakePHP/Laravel)",
        "REST/GraphQL",
        "Auth (Clerk/Auth0)",
      ],
    },
    {
      title: "Databases & Tools",
      icon: <Database size={24} />,
      color: "from-purple-500 to-violet-500",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"],
    },
    {
      title: "Testing & Quality",
      icon: <TestTube size={24} />,
      color: "from-teal-500 to-cyan-500",
      skills: ["Jest", "Lighthouse", "Swagger/OpenAPI"],
    },
    {
      title: "DevOps & Deployment",
      icon: <Wrench size={24} />,
      color: "from-indigo-500 to-purple-500",
      skills: ["CI/CD (GitHub Actions/Netlify)", "Git", "Vercel", "Netlify"],
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
        duration: 0.6,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950">
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
            <Code size={16} />
            Skills & Technologies
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            Technical Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A comprehensive toolkit for building modern, scalable, and
            high-performance applications
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 h-full">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, x: 4 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 cursor-default"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-r ${category.color} opacity-5 rounded-bl-full`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Proficiency Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
            Core Competencies
          </h3>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { name: "React/Next.js", level: 95 },
              { name: "TypeScript", level: 90 },
              { name: "Backend Development", level: 85 },
              { name: "Database Design", level: 80 },
              { name: "Performance Optimization", level: 90 },
              { name: "AI Integration", level: 90 },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6"
              >
                <div className="w-40 text-right">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"
                  />
                </div>
                <div className="w-12 text-left">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
