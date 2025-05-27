import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, ArrowRight, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="py-20 px-6 relative code-effect">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-accent uppercase rounded-full bg-accent/10 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="mr-5">04.</span>Say Hello👋
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I'm currently available for full-time positions. If you have a project that needs coding or a team that needs a developer, feel free to reach out.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
          {/* Contact Form */}
          {/* <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          > */}
            {/* <motion.div 
              className="glass-card rounded-2xl p-8 shadow-lg overflow-hidden relative"
              whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 overflow-hidden z-[-1]">
                <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent opacity-60"></div>
              </div>
              
              <motion.h3 
                className="text-xl font-display font-bold mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Send Me a Message
              </motion.h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="Your name"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="Your email"
                    />
                  </motion.div>
                </div>
                
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Subject"
                  />
                </motion.div>
                
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
                    placeholder="Your message"
                  ></motion.textarea>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      type="submit"
                      className="w-full py-6 flex items-center justify-center gap-2 text-white dark:text-black font-medium rounded-lg group"
                    >
                      <span>Send Message</span>
                      <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </motion.div> */}
          {/* </motion.div> */}
          
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2 flex flex-col space-y-6 mx-auto px-2 sm:px-4 md:px-8 text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="rounded-2xl p-4 sm:p-6 md:p-8 flex-1 shadow-lg bg-transparent md:bg-foreground/5"
              whileHover={{ boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.h3 
                className="text-lg md:text-xl font-display font-bold mb-5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Contact Information
              </motion.h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                  viewport={{ once: true }}
                >
                  <p className="text-xs md:text-sm text-foreground/60 mb-1">Email</p>
                  <a 
                    href="mailto:pbhuvankambley2003@gmail.com" 
                    className="text-xs md:text-sm lg:text-lg text-foreground font-medium hover:text-accent transition-colors break-words"
                  >
                    pbhuvankambley2003@gmail.com
                  </a>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-xs md:text-sm text-foreground/60 mb-1">Phone</p>
                  <a 
                    href="tel:+919110260591" 
                    className="text-sm md:text-lg text-foreground font-medium hover:text-accent transition-colors"
                  >
                    +91 9110260591
                  </a>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.55 }}
                  viewport={{ once: true }}
                >
                  <p className="text-xs md:text-sm text-foreground/60 mb-1">Location</p>
                  <p className="text-sm md:text-lg text-foreground font-medium">Bengaluru, India</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;