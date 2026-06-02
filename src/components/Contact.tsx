import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="py-24 px-4 sm:px-6 md:px-8 max-w-[600px] mx-auto text-center mt-12 mb-24">
      <motion.p 
        className="font-mono text-accent mb-5 text-[15px]"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        04. What's Next?
      </motion.p>

      <motion.h2 
        className="text-[clamp(40px,5vw,60px)] font-bold text-foreground leading-[1.1] mb-6"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <motion.p 
        className="text-muted-foreground text-[17px] leading-relaxed mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I'm currently looking for new opportunities, and my inbox is always open. 
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Button 
          variant="outline"
          className="rounded border-accent text-accent font-mono text-sm px-7 py-6 transition-all hover:bg-accent/10 hover:text-accent" 
          size="lg"
          onClick={() => window.location.href = 'mailto:pbhuvankambley2003@gmail.com'}
        >
          Say Hello
        </Button>
      </motion.div>
    </AnimatedSection>
  );
};

export default Contact;