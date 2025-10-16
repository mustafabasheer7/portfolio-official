"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Code,
  Briefcase,
} from "lucide-react";

const Education = () => {
  const education = {
    degree: "Bachelor of Applied Science in Software Engineering (Co-op)",
    university: "University of Ottawa",
    location: "Ottawa, ON",
    period: "2016 – 2021",
    description:
      "Comprehensive software engineering program with co-op work terms, focusing on software design, development methodologies, and engineering principles.",
  };

  const relevantCourses = [
    {
      category: "Software Development",
      courses: [
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Software Engineering Principles",
        "Design Patterns",
        "Software Architecture",
      ],
    },
    {
      category: "Web Technologies",
      courses: [
        "Web Application Development",
        "Database Systems",
        "Human-Computer Interaction",
        "Network Programming",
        "Mobile App Development",
      ],
    },
    {
      category: "Computer Science",
      courses: ["Computer Graphics", "Operating Systems", "Computer Networks"],
    },
  ];

  const achievements = [
    {
      title: "Capstone Project Excellence",
      description:
        "Led team development of innovative web application solving real-world problems",
      icon: <Code size={20} />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Academic Scholarship",
      description:
        "Recipient of merit-based scholarship for outstanding academic performance",
      icon: <GraduationCap size={20} />,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const skills = [
    "Software Engineering Principles",
    "Algorithm Design & Analysis",
    "System Architecture",
    "Database Design",
    "Project Management",
    "Team Leadership",
    "Problem Solving",
    "Technical Documentation",
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            <GraduationCap size={16} />
            Education
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            Academic Foundation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Building strong fundamentals in software engineering and computer
            science
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 h-full"
            >
              {/* Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="p-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl text-white shadow-lg">
                  <GraduationCap size={32} />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-xl text-teal-600 dark:text-teal-400 font-semibold mb-3">
                    {education.university}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {education.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {education.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {education.description}
              </p>

              {/* Core Skills Developed */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <BookOpen size={18} />
                  Core Skills Developed
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Side Content */}
          <div className="space-y-8">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
                <Award size={18} />
                Achievements
              </h4>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${achievement.color} text-white flex-shrink-0`}
                    >
                      {achievement.icon}
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        {achievement.title}
                      </h5>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Relevant Courses */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
                <Code size={18} />
                Key Coursework
              </h4>

              <div className="space-y-6">
                {relevantCourses.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h5 className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-3">
                      {category.category}
                    </h5>
                    <div className="space-y-2">
                      {category.courses.map((course, courseIndex) => (
                        <motion.div
                          key={course}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: courseIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            {course}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                label: "Years of Study",
                value: "5",
                icon: <Calendar size={24} />,
              },
              {
                label: "Co-op Experience",
                value: "4 Terms",
                icon: <Briefcase size={24} />,
              },
              {
                label: "Capstone Success",
                value: "Top 10%",
                icon: <Award size={24} />,
              },
              {
                label: "Team Leadership",
                value: "5 Projects Led",
                icon: <GraduationCap size={24} />,
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="text-teal-600 dark:text-teal-400 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
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

export default Education;
