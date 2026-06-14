import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1000px] mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row gap-12 items-center md:items-start"
      >
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="text-accent font-mono text-xl mr-2">01.</span>
              About Me
            </h2>
            <div className="h-[1px] bg-border flex-1 max-w-[300px]" />
          </div>
          
          <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Hello! I'm Bhuvan, and I love to dig deeper into tech. My journey in technology has always been driven by a curiosity to understand how things work under the hood.
            </p>
            <p>
              Currently, I'm researching <strong className="text-foreground font-semibold">mechanistic interpretability</strong> in Machine Learning. I am fascinated by the inner workings of neural networks and strive to make AI models more transparent and understandable.
            </p>
            <p>
              Whether it's building scalable cloud solutions, developing intuitive web interfaces, or diving into the complexities of ML algorithms, I am always eager to learn and take on new challenges.
            </p>
          </div>
        </div>

        <motion.div 
          className="relative group max-w-[250px] md:max-w-[300px] w-full md:w-2/5 mx-auto md:mx-0 mt-8 md:mt-0"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative z-10 rounded-lg overflow-hidden border-2 border-transparent group-hover:border-accent transition-colors duration-300">
            <img 
              src="/photo.png" 
              alt="Bhuvan Kambley" 
              className="w-full h-auto object-cover transition-all duration-300"
            />
          </div>
          <div className="absolute inset-0 border-2 border-accent rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
