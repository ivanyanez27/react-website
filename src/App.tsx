import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code } from 'lucide-react';
import Section from './components/Section';
import profilePicture from '../public/profile.jpg';

function App() {
  const { scrollYProgress } = useScroll();
  
  const scaleProgress = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, 0.95]
  );

  const opacityProgress = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, 0.8]
  );

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

  const nameAnimation = {
    initial: { 
      backgroundSize: "200% 200%",
      backgroundPosition: "left center"
    },
    hover: { 
      backgroundSize: "200% 200%",
      backgroundPosition: "right center",
      scale: 1.05,
      transition: { 
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const borderAnimation = {
    initial: {
      background: "linear-gradient(0deg, #6366f1, #8b5cf6)",
      rotate: 0
    },
    animate: {
      background: ["linear-gradient(0deg, #6366f1, #8b5cf6)", "linear-gradient(360deg, #6366f1, #8b5cf6)"],
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const sectionVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const technologies = [
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      name: 'AWS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
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
      <Section className="min-h-[90vh] pt-24 lg:pt-32 pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div
          style={{
            scale: scaleProgress,
            opacity: opacityProgress
          }}
          className="max-w-4xl mx-auto w-full"
        >
          {/* Profile Picture */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="relative w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 mx-auto mb-8 group"
          >
            <motion.div
              initial="initial"
              animate="animate"
              variants={borderAnimation}
              className="absolute -inset-2 rounded-full opacity-75 group-hover:opacity-100 blur-sm transition-opacity duration-500"
            />
            <motion.div
              initial="initial"
              animate="animate"
              variants={borderAnimation}
              className="absolute inset-0 rounded-full"
            />
            <motion.div 
              className="absolute inset-1 rounded-full overflow-hidden bg-dark-950"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={profilePicture}
                alt="Profile picture"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          </motion.div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight text-center">
            Hi, I'm{" "}
            <motion.span
              initial="initial"
              whileHover="hover"
              variants={nameAnimation}
              className="inline-block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent cursor-pointer"
            >
              Ivan Yanez
            </motion.span>
          </h1>
          <p className="text-base xs:text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto text-center">
            A passionate full-stack developer specializing in React, Node.js, and cloud technologies.
          </p>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex gap-4 md:gap-6 justify-center"
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
                className="p-3 text-gray-300 hover:text-primary transition-colors"
                aria-label={label}
                title={text}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" aria-hidden="true" />
                <span className="sr-only">{text}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Tech Stack Section */}
      <Section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-radial from-dark-900 to-dark-950">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={sectionVariants}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-16 lg:mb-20 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 xs:gap-8 sm:gap-10 lg:gap-12">
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
                  className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-xl bg-dark-800/50 backdrop-blur-sm p-4 flex items-center justify-center hover:shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
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
      <Section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-dark-900/50 backdrop-blur-sm">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={sectionVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 lg:mb-16 text-center"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" role="list">
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
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 lg:mb-4 text-white">{project.title}</h3>
                  <p className="text-base sm:text-lg text-gray-300 mb-6">
                    {project.description}
                  </p>
                  <div className="flex gap-4 sm:gap-6">
                    <a 
                      href="#" 
                      className="flex items-center text-primary hover:text-primary-hover transition-colors text-base sm:text-lg"
                      aria-label={`View code for ${project.title}`}
                    >
                      <Code className="w-5 h-5 sm:w-6 sm:h-6 mr-2" aria-hidden="true" /> Code
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center text-primary hover:text-primary-hover transition-colors text-base sm:text-lg"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 mr-2" aria-hidden="true" /> Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="bg-dark-950/80 backdrop-blur-sm py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-gray-400 text-base sm:text-lg">
          <p>© {new Date().getFullYear()} Ivan Yanez</p>
        </div>
      </footer>
    </div>
  );
}

export default App;