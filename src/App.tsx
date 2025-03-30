import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, BookOpen } from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-primary">Ivan Yanez</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            A passionate developer focused on creating beautiful and functional web experiences.
          </p>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex gap-4"
          >
            {[
              { icon: Github, href: 'https://github.com/ivanyanez27', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/ivan-c-yanez/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:ivanyanez2712@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                variants={fadeInUp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Projects Section */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50 backdrop-blur-sm">
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
            className="text-2xl sm:text-3xl font-bold text-white mb-12"
          >
            Featured Projects
          </motion.h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {['Movie Recommender', 'This Website'].map((project) => (
              <motion.div
                key={project}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ y: -5 }}
                className="gradient-border rounded-lg overflow-hidden bg-dark-900/80 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800`}
                    alt="Project Preview"
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project}</h3>
                  <p className="text-gray-300 mb-4">
                    A brief description of the project and the technologies used.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="flex items-center text-primary hover:text-primary-hover transition-colors">
                      <Code size={20} className="mr-1" /> Code
                    </a>
                    <a href="#" className="flex items-center text-primary hover:text-primary-hover transition-colors">
                      <ExternalLink size={20} className="mr-1" /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* About Section */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-radial from-dark-900 to-dark-950">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">About Me</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
              I'm a full-stack developer with a passion for building modern web applications.
              With expertise in React, Node.js, and cloud technologies, I create scalable
              solutions that solve real-world problems.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="bg-dark-950/80 backdrop-blur-sm py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Ivan Yanez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;