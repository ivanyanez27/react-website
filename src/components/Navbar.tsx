import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-950/95 shadow-lg shadow-primary/10 backdrop-blur-sm py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center text-lg sm:text-xl font-bold text-white"
            aria-label="Home"
          >
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-primary" aria-hidden="true" />
            <span>IY</span>
          </motion.a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-8" role="menubar">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-primary focus:outline-none p-1"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          id="mobile-menu"
          initial={false}
          animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
          role="menu"
        >
          <div className="py-3 space-y-3">
            <NavLink href="#projects" className="block text-base py-1" role="menuitem">Projects</NavLink>
            <NavLink href="#about" className="block text-base py-1" role="menuitem">About</NavLink>
            <NavLink href="#contact" className="block text-base py-1" role="menuitem">Contact</NavLink>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ 
  href, 
  children, 
  className = '', 
  role 
}: { 
  href: string; 
  children: React.ReactNode; 
  className?: string;
  role?: string;
}) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05 }}
    className={`text-gray-300 hover:text-primary transition-colors ${className}`}
    role={role}
  >
    {children}
  </motion.a>
);

export default Navbar;