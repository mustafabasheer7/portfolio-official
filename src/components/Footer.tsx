"use client";

import { motion } from "framer-motion";
import {
  Heart,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/mustafabasheer7",
      icon: <Github size={20} />,
      color: "hover:text-teal-400 dark:hover:text-teal-300",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/mustafabasheer7",
      icon: <Linkedin size={20} />,
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      name: "Email",
      href: "mailto:mustafa.basheer55@gmail.com",
      icon: <Mail size={20} />,
      color: "hover:text-red-600 dark:hover:text-red-400",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={16} />,
      text: "mustafa.basheer55@gmail.com",
      href: "mailto:mustafa.basheer55@gmail.com",
    },
    {
      icon: <Phone size={16} />,
      text: "+1-613-400-4589",
      href: "tel:+16134004589",
    },
    {
      icon: <MapPin size={16} />,
      text: "Ottawa, ON, Canada",
      href: "#",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  MB
                </div>
                <div>
                  <h3 className="text-xl font-bold">Mustafa Basheer</h3>
                  <p className="text-gray-400">Full-Stack Developer</p>
                </div>
              </motion.div>

              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Building modern, scalable, and high-performance web applications
                with cutting-edge technologies. Passionate about creating
                digital experiences that make a difference.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-all duration-300"
                  >
                    <div className="text-teal-400">{contact.icon}</div>
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      whileHover={{ x: 4 }}
                      className="text-gray-400 hover:text-teal-400 transition-all duration-300 text-sm"
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Connect</h4>

              {/* Social Links */}
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`p-3 bg-gray-800 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-700`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Status */}
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-400">
                    Available for work
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  Open to new opportunities and exciting projects
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm flex items-center gap-1"
              >
                <span>© {currentYear} Mustafa Basheer. Made with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-red-400"
                >
                  <Heart size={14} fill="currentColor" />
                </motion.span>
                <span>using Next.js & Tailwind CSS</span>
                <span>•</span>
                <motion.a
                  href="https://github.com/mustafabasheer7/portfolio-official"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="text-teal-400 hover:text-teal-300 transition-colors duration-300 underline"
                >
                  View Source Code
                </motion.a>
              </motion.div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg transition-all duration-300 text-sm cursor-pointer"
              >
                <ArrowUp size={16} />
                Back to Top
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-teal-500/5 rounded-full blur-xl" />
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-500/5 rounded-full blur-xl" />
    </footer>
  );
};

export default Footer;
