import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'About', href: '#about', number: '01.' },
  { name: 'Experience', href: '#experience', number: '02.' },
  { name: 'Work', href: '#projects', number: '03.' },
  { name: 'Contact', href: '#contact', number: '04.' },
];

const FloatingDock: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 hidden md:flex justify-center pointer-events-none h-32 items-center">
      {/* Progressive Blur Mask for scrolling content (Liquid Glass Effect) */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
          maskImage: 'linear-gradient(to top, black 0%, transparent 100%)'
        }}
      />

      <motion.div
        className="flex items-center justify-center gap-4 pl-6 pr-2 py-2.5 rounded-full bg-background/30 backdrop-blur-2xl backdrop-saturate-150 border border-foreground/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] pointer-events-auto mt-8"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
      >
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            className="text-sm font-medium hover:text-accent transition-colors text-foreground/80 px-2"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
          </motion.a>
        ))}

        <div className="w-[1px] h-5 bg-border mx-1" />

        <motion.button
          onClick={() => window.open('/bhuvankambley-dev.pdf', '_blank')}
          className="text-sm font-medium text-accent hover:text-accent/80 transition-colors px-2 font-mono"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.button>

        <div className="w-[1px] h-5 bg-border ml-1 mr-0" />

        <div className="flex items-center justify-center -my-2 -ml-7 -mr-2 scale-75">
          <ThemeToggle />
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingDock;
