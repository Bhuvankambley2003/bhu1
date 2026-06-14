import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import EmailSidebar from '@/components/EmailSidebar';
import About from '@/components/About';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import FloatingDock from '@/components/FloatingDock';

const Index = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Add CV fonts to document head
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Initial smooth appearance of the whole page
    document.body.classList.remove('opacity-0');
    document.body.classList.add('opacity-100', 'transition-opacity', 'duration-1000');

    // Handle scroll events
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(link);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 selection:text-accent font-sans text-foreground">
      <Navigation />
      
      {/* Right Email Sidebar */}
      <EmailSidebar />

      <main className="flex flex-col items-center w-full min-h-screen">
        <Header />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
      
      <FloatingDock />

      <footer className="w-full py-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://github.com/Bhuvankambley2003" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-mono text-xs text-muted-foreground hover:text-accent transition-colors p-4 inline-block"
          >
            <div>Designed &amp; Built by Bhuvan Kambley</div>
          </a>
        </motion.div>
      </footer>

      {/* Fixed Bottom Right Controls */}
      <div className="fixed bottom-6 right-6 md:bottom-8 lg:right-24 z-50 flex flex-col items-center gap-4">
        {/* Back to top button */}
        <motion.div
          className="lg:hidden"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: showScrollButton ? 1 : 0, 
            scale: showScrollButton ? 1 : 0,
            pointerEvents: showScrollButton ? 'auto' : 'none'
          }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full w-12 h-12 bg-background/80 backdrop-blur-md border-accent text-accent hover:bg-accent hover:text-background shadow-lg transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
