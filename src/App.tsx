import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code } from 'lucide-react';
import Section from './components/Section';
import profilePicture from '../public/mypicture.jpg'

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const iconAnimation = {
    rest: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
      },
    },
  };

  const technologies = [
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      name: 'Material UI',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
      {/* Hero Section */}
      <Section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Picture */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl"
          >
            <img
              src={profilePicture}
              alt="Profile picture"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight text-center">
            Hi, I'm <span className="text-primary">Ivan Yanez</span>
          </h1>
          <p className="text-base xs:text-lg sm:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto text-center">
            A passionate full-stack developer specializing in React, Node.js, and cloud technologies.
          </p>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex gap-3 md:gap-4 justify-center"
          >
            {[
              { icon: Github, href: 'https://github.com/ivanyanez27', label: 'GitHub Profile', text: 'View GitHub Profile' },
              { icon: Linkedin, href: 'https://linkedin.com/in/ivan-c-yanez/', label: 'LinkedIn Profile', text: 'Connect on LinkedIn' },
              { icon: Mail, href: 'mailto:ivanyanez2712@gmail.com', label: 'Email Contact', text: 'Send Email' }
            ].map(({ icon: Icon, href, label, text }) => (
              <motion.a
                key={label}
                href={href}
                variants={fadeInUp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-primary transition-colors"
                aria-label={label}
                title={text}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                <span className="sr-only">{text}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Tech Stack Section */}
      <Section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-radial from-dark-900 to-dark-950">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            hidden: { opacity: 0, y: 20 }
          }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-12 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={iconAnimation}
                className="flex justify-center"
              >
                <motion.div 
                  className="w-20 h-20 rounded-xl bg-dark-800/50 backdrop-blur-sm p-4 flex items-center justify-center hover:shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <img
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Projects Section */}
      <Section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50 backdrop-blur-sm">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-8 md:mb-12 text-center"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" role="list">
            {[
              {
                id: 1,
                title: "E-commerce Platform",
                description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL.",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
                alt: "E-commerce platform dashboard showing analytics and sales data"
              },
              {
                id: 2,
                title: "Task Management App",
                description: "Real-time task management application using React and WebSocket technology.",
                image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
                alt: "Task management application interface with project boards"
              }
            ].map((project) => (
              <motion.article
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ y: -5 }}
                className="gradient-border rounded-lg overflow-hidden bg-dark-900/80 backdrop-blur-sm"
                role="listitem"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-40 sm:h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-3 sm:gap-4">
                    <a 
                      href="#" 
                      className="flex items-center text-primary hover:text-primary-hover transition-colors text-sm sm:text-base"
                      aria-label={`View code for ${project.title}`}
                    >
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-1" aria-hidden="true" /> Code
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center text-primary hover:text-primary-hover transition-colors text-sm sm:text-base"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-1" aria-hidden="true" /> Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="bg-dark-950/80 backdrop-blur-sm py-6 md:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-gray-400 text-sm sm:text-base">
          <p>© {new Date().getFullYear()} Ivan Yanez</p>
        </div>
      </footer>
    </div>
  );
}

export default App;