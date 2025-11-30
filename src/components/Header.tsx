import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter, FileText, Mail , Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center px-3 sm:px-4 md:px-6 pt-20 pb-16 code-effect"
    >
      {/* Social icons with vertical line starting from bottom */}
      <motion.div 
        className="fixed left-[100px] bottom-0 z-10 hidden lg:flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Vertical line - starting from bottom and going up 20% */}
        <motion.div 
          className="w-[2px] h-[20vh] bg-gradient-to-t from-foreground/10 via-foreground/15 to-foreground/5 mb-4"
          initial={{ height: 0 }}
          animate={{ height: "20vh" }}
          transition={{ duration: 1.2, delay: 0.4 }}
        />
        
        {/* Social Links - Positioned above the line */}
        <motion.div 
          className="flex flex-col items-center gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <motion.a 
            href="https://github.com/Bhuvankambley2003" 
            className="p-3.0 rounded-full "
            aria-label="GitHub Profile"
            whileHover={{ scale: 1.4, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Github size={25} className="text-foreground/80" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/bhuvankambley/" 
            className="p-3.0 rounded-full"
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Linkedin size={25} className="text-foreground/80" />
          </motion.a>
          <motion.a 
            href="https://x.com/BKambley" 
            className="p-3.0 rounded-full "
            aria-label="Twitter Profile"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Twitter size={25} className="text-foreground/80" />
          </motion.a>
          <motion.a 
            href="https://instagram.com/bhuvan__kambley" 
            className="p-3.0 rounded-full"
            aria-label="Twitter Profile"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Instagram size={25} className="text-foreground/80" />
          </motion.a>
        </motion.div>
      </motion.div>
      
      <div className="max-w-5xl w-full mx-auto flex flex-col items-start justify-center pl-8 md:pl-16 lg:pl-24">
        {/* Text Content - Now left aligned */}
        <motion.div 
          className="flex flex-col items-start text-left max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="inline-flex items-center gap-1 px-3 py-1 mb-4 text-[10px] font-medium tracking-wider uppercase rounded-full bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/10 text-accent sm:gap-2 sm:px-4 sm:py-1.5 sm:mb-6 sm:text-xs "
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse sm:w-2 sm:h-2"></span>
            <span>Software Engineer</span>
          </motion.div>
          

          {/* <motion.h1 
            className="text-xl md:text-2xl font-display tracking-tight ml-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
              <motion.span 
                className="inline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Hello👋, my name is 
              </motion.span>
          </motion.h1> */}
          <motion.h1 
            className="text-xl  md:text-2xl font-display font-bold tracking-tight ml-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
              <motion.span 
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >Hello 👋, my name is  
              </motion.span>
          </motion.h1>
          <motion.h1 
            className="text-3xl mt-4 md:text-6xl font-display font-bold tracking-tight ml-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
              <motion.span 
                className="text-gradient inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >P Bhuvan Kambley
              </motion.span>
          </motion.h1>
          {/* <motion.h1 
            className="text-2xl md:text-3xl mt-4 font-display font-bold tracking-tight ml-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
              <motion.span 
                className="text-accent/60"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Designing the Future, One Line of Code at a Time
              </motion.span>
          </motion.h1> */}
            <motion.p 
            className="mt-6 text-base leading-relaxed text-foreground/80 text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            dangerouslySetInnerHTML={{ 
              __html: "Hi, I'm Bhuvan Kambley. I am a Cloud Support Engineer at Akamai and a Computer Science graduate from NIE Mysuru.<br /><br />With a unique blend of <strong class=\"text-foreground font-semibold\">Full-Stack Engineering</strong> skills and <strong class=\"text-foreground font-semibold\">Cloud Operations</strong> expertise, I help enterprises navigate the complexities of the Intelligent Edge. I am passionate about solving intricate network challenges, mastering new technologies, and delivering exceptional value through clear communication and technical precision."
              
              // I'm <strong class=\"text-foreground font-semibold\">Bhuvan Kambley</strong>,
              // At Vegam Solutions, I'm developing <strong class=\"text-foreground font-semibold\">StockForge</strong>—a cloud-based solution designed to streamline inventory and production management for manufacturing enterprises.<br />I take pride in being an <strong class=\"text-foreground font-semibold\">enthusiastic and conscientious team player</strong> with exceptional communication and soft skills. I am passionate about learning new skills, keeping up with emerging tech trends, and identifying the best technologies to enhance our solutions. Furthermore, I believe in giving back to society and actively participate in volunteering activities to create a positive impact."
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 mx-auto w-full">
          {/* <div className="bg-foreground/[0.02] border border-foreground/10 rounded-xl p-4 flex flex-col items-center text-center">
            <div className="bg-primary/10 rounded-full p-3 mb-3">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"></path>
                <path d="M12 12l8-4.5"></path>
                <path d="M12 12v9"></path>
                <path d="M12 12L4 7.5"></path>
              </svg>
            </div>
            <h3 className="font-medium text-foreground">Full-Stack Development</h3>
            <p className="text-sm text-foreground/70 mt-1">Building end-to-end solutions with modern frameworks</p>
          </div> */}
          
          {/* <div className="bg-foreground/[0.02] border border-foreground/10 rounded-xl p-4 flex flex-col items-center text-center">
            <div className="bg-primary/10 rounded-full p-3 mb-3">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 16v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"></path>
                <path d="M9 15V9"></path>
                <path d="M12 12L9 9"></path>
                <path d="M12 12L9 15"></path>
                <rect x="16" y="5" width="6" height="14" rx="2"></rect>
              </svg>
            </div>
            <h3 className="font-medium text-foreground">Machine Learning</h3>
            <p className="text-sm text-foreground/70 mt-1">Implementing intelligent systems with TensorFlow and PyTorch</p>
          </div>
           */}
          {/* <div className="bg-foreground/[0.02] border border-foreground/10 rounded-xl p-4 flex flex-col items-center text-center">
            <div className="bg-primary/10 rounded-full p-3 mb-3">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="font-medium text-foreground">Problem Solving</h3>
            <p className="text-sm text-foreground/70 mt-1">Analytical approach to technical challenges</p>
          </div> */}
        </div>
          {/* CTA Buttons */}
          <motion.div 
              className="mt-8 flex flex-wrap gap-4 justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.div 
                className="relative"
                initial={{ 
                  boxShadow: ".9px 1px 0 0 var(--accent), 1.5px 2px 0 0 var(--accent), 2.5px 3px 0 0 var(--accent), 3.5px 4px 0 0 var(--accent), 4.5px 5px 0 0 var(--accent), 5.5px 6px 0 0 var(--accent), 6.5px 7px 0 0 var(--accent), 7.5px 8px 0 0 var(--accent), 8.5px 9px 0 0 var(--accent), 9.5px 10px 0 0 var(--accent)"
                }}
                whileHover={{ 
                  y: 6,
                  x: 0,
                  rotate: 0.25,
                  boxShadow: "none",
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }} 
                whileTap={{ 
                  y: 10,
                  boxShadow: "none",
                  transition: {
                    duration: 0.1
                  }
                }}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center"
                }}
              >
                <Button 
                  variant="outline"
                  className="rounded-md border-2 border-accent text-accent font-medium text-base px-4 py-2 transition-all hover:bg-accent/10 hover:text-accent/80 hover:border-accent/30" 
                  size="default"
                  onClick={() => window.open('/bhuvankambley-dev.pdf', '_blank')}
                >
                  <FileText size={16} className="mr-2" />
                  Resume
                </Button>
              </motion.div>
            
              {/* <Button 
                variant="outline" 
                className="rounded-full gap-2 font-medium" 
                size="lg"
                onClick={() => {
                  const email = 'pbhuvankambley2003@gmail.com';
                  const subject = 'Contact from Portfolio Website';
                  const body = 'Hello Bhuvan,\n\nI visited your portfolio and would like to connect.';
                  
                  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
              >
                <Mail size={18} />
                Contact Me
              </Button> */}
            
          </motion.div>
          
          {/* Social Links - Mobile only (horizontal) */}
          <motion.div 
            className="flex lg:hidden items-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <motion.a 
              href="https://github.com/Bhuvankambley2003" 
              className="p-2.5 rounded-full bg-foreground/5 hover:bg-accent/10 hover:text-accent transition-colors border border-foreground/10 hover:border-accent/30"
              aria-label="GitHub Profile"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Github size={20} className="text-foreground/80" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/bhuvankambley/" 
              className="p-2.5 rounded-full bg-foreground/5 hover:bg-accent/10 hover:text-accent transition-colors border border-foreground/10 hover:border-accent/30"
              aria-label="LinkedIn Profile"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Linkedin size={20} className="text-foreground/80" />
            </motion.a>
            <motion.a 
              href="https://x.com/BKambley" 
              className="p-2.5 rounded-full bg-foreground/5 hover:bg-accent/10 hover:text-accent transition-colors border border-foreground/10 hover:border-accent/30"
              aria-label="Twitter Profile"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Twitter size={20} className="text-foreground/80" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center hidden md:flex"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <span className="text-sm text-foreground/60 mb-2">Scroll Down</span>
        <ArrowDown size={20} className="text-foreground/60" />
      </motion.div>
    </section>
  );
};

export default Header;