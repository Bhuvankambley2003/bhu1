import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-12 pt-20 pb-16 max-w-[1000px] mx-auto"
    >
      {/* Social icons with vertical line starting from bottom */}
      <motion.div 
        className="fixed left-[40px] bottom-0 z-10 hidden lg:flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        {/* Social Links - Positioned above the line */}
        <div className="flex flex-col items-center gap-5 mb-5">
          <motion.a 
            href="https://github.com/Bhuvankambley2003" 
            className="p-2 rounded-full text-muted-foreground hover:text-accent transition-colors duration-200"
            aria-label="GitHub Profile"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/bhuvankambley/" 
            className="p-2 rounded-full text-muted-foreground hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a 
            href="https://x.com/BKambley" 
            className="p-2 rounded-full text-muted-foreground hover:text-accent transition-colors duration-200"
            aria-label="Twitter Profile"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Twitter size={20} />
          </motion.a>
          <motion.a 
            href="https://instagram.com/bhuvan__kambley" 
            className="p-2 rounded-full text-muted-foreground hover:text-accent transition-colors duration-200"
            aria-label="Instagram Profile"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Instagram size={20} />
          </motion.a>
        </div>
        
        {/* Vertical line */}
        <div className="w-[1px] h-[90px] bg-muted-foreground/40" />
      </motion.div>
      
      <div className="w-full flex flex-col items-start justify-center md:pl-[60px] lg:pl-[100px]">
        {/* Text Content - Left aligned, minimal stack */}
        <motion.div 
          className="flex flex-col items-start text-left max-w-[700px] w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p 
            className="text-accent font-mono text-sm sm:text-base mb-4 md:mb-5 ml-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1 
            className="text-[clamp(32px,6vw,64px)] font-bold text-foreground leading-[1.1] tracking-tight m-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            P Bhuvan Kambley.
          </motion.h1>

          <motion.h2 
            className="text-[clamp(28px,5vw,56px)] font-bold text-muted-foreground leading-[1.1] tracking-tight mt-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            I build things for the cloud.
          </motion.h2>

          <motion.p 
            className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-[540px] mt-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            dangerouslySetInnerHTML={{ 
              __html: "Hi, I'm Bhuvan Kambley. I am a Cloud Support Engineer at Akamai and a Computer Science graduate from NIE Mysuru.<br /><br />With a unique blend of <strong class=\"text-foreground font-semibold\">Full-Stack Engineering</strong> skills and <strong class=\"text-foreground font-semibold\">Cloud Operations</strong> expertise, I help enterprises navigate the complexities of the Intelligent Edge. I am passionate about solving intricate network challenges, mastering new technologies, and delivering exceptional value through clear communication and technical precision."
            }}
          />
          
          {/* CTA Button */}
          <motion.div 
              className="mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.55 }}
            >
              <Button 
                variant="outline"
                className="rounded border-accent text-accent font-mono text-sm px-7 py-6 transition-all hover:bg-accent/10 hover:text-accent" 
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Check out my work!
              </Button>
          </motion.div>
          
          {/* Social Links - Mobile only (horizontal) */}
          <motion.div 
            className="flex lg:hidden items-center gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.65 }}
          >
            <motion.a 
              href="https://github.com/Bhuvankambley2003" 
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub Profile"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={22} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/bhuvankambley/" 
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={22} />
            </motion.a>
            <motion.a 
              href="https://x.com/BKambley" 
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Twitter Profile"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter size={22} />
            </motion.a>
            <motion.a 
              href="https://instagram.com/bhuvan__kambley" 
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Instagram Profile"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={22} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;