import React from 'react';
import { motion } from 'framer-motion';

const EmailSidebar: React.FC = () => {
  return (
    <motion.div
      className="fixed right-[40px] bottom-0 z-10 hidden lg:flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
    >
      <motion.a
        href="mailto:pbhuvankambley2003@gmail.com"
        className="font-mono text-xs tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200"
        style={{ writingMode: 'vertical-rl' }}
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        pbhuvankambley2003@gmail.com
      </motion.a>
      <div className="w-[1px] h-[90px] bg-muted-foreground/40 mt-5" />
    </motion.div>
  );
};

export default EmailSidebar;
