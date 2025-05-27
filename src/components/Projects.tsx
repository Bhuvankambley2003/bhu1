import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Code, ExternalLink, Github, Globe, ImageIcon, X } from 'lucide-react';

import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

// Project type definition with clear structure
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  technicalDetails?: string[];
}

/**
 * Projects component to showcase portfolio work
 */
const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Project data - easily extendable
  const projects: Project[] = [
    {
      id: 1,
      title: "Blood Group Prediction from Fingerprints",
      description: "Developed a deep learning model using CNN in PyTorch to predict blood groups from fingerprint images with high accuracy. Designed and deployed a RESTful API backend for model inference and a Streamlit-based frontend for user interaction. Implemented Docker containerization for seamless deployment and scalability.",
      tags: ["PyTorch", "Streamlit", "FastAPI", "Docker"],
      image: "/blood.png",
      githubUrl: "https://github.com/Bhuvankambley2003/Leveraging-PyTorch-CNN-for-Blood-Group-Prediction-using-Fingerprint-Images",
      technicalDetails: [
        "Implemented CNN architecture with PyTorch for image classification",
        "Created REST API with FastAPI for model deployment",
        "Built interactive dashboard with Streamlit for user interaction",
        "Containerized application with Docker for easy deployment"
      ]
    },
    {
      id: 2,
      title: "StockForge",
      description: "A professional-grade inventory management system for manufacturing enterprises. StockForge provides real-time control over multi-component production workflows, from raw material procurement to finished goods deployment. Features include automated stock reconciliation, BOM management, and enterprise-grade reporting.",
      tags: ["Django", "PostgreSQL", "HTML", "CSS", "Docker"],
      image: "/dashboard.png",
      githubUrl: "https://github.com/Bhuvankambley2003/StockForge",
      featured: true,
      technicalDetails: [
        "Built with Django framework for robust backend processing",
        "PostgreSQL database with complex relations for inventory tracking",
        "Responsive dashboard with real-time updates and notifications",
        "Containerized with Docker for scalable deployment"
      ]
    },
    {
      id: 3,
      title: "Sahaya",
      description: "Solution for Google GDSC 2024 addressing UN sustainable goals with features for education, poverty, and hunger, received positive feedback from over 20 people and Google. Implemented features to support sustainable cities, no poverty, quality education, and zero hunger. Integrated cloud services and authentication to enhance app capabilities.",
      tags: ["Flutter", "Firebase", "OpenAI API"],
      image: "/sahaya.png",
      githubUrl: "https://github.com/Bhuvankambley2003/sahaya/tree/master",
      technicalDetails: [
        "Cross-platform mobile app built with Flutter for wide accessibility",
        "Firebase backend for authentication and real-time data sync",
        "Implemented AI-powered assistance with OpenAI API",
        "Location-based service recommendations for community resources"
      ]
    },
    {
      id: 5,
      title: "Invoice Management System",
      description: "Developed a full stack web application using Django and MySQL to handle CRUD operations efficiently. Implemented CRUD operations to streamline invoice processing and database management. Built a responsive front-end with HTML and CSS, ensuring an intuitive user experience.",
      tags: ["Django", "MySQL", "HTML", "CSS", "Docker"],
      image: "/invoice.png",
      githubUrl: "https://github.com/Bhuvankambley2003/invoice_management_system/tree/master",
      technicalDetails: [
        "Django framework for MVC architecture and form handling",
        "Optimized MySQL queries for fast invoice retrieval and filtering",
        "PDF generation for invoices with customizable templates",
        "User role management with granular permissions"
      ]
    },
    {
      id: 6,
      title: "Event Management Application",
      description: "Developed a full stack web application using Django and SQLite to manage events and registrations. Implemented CRUD operations to streamline event, attendee, and task management. Built RESTful API endpoints for integration and a responsive frontend, ensuring an intuitive user experience.",
      tags: ["Django", "SQLite", "REST API", "Postman", "Docker"],
      image: "/event.png",
      githubUrl: "https://github.com/Bhuvankambley2003/event_management_application",
      technicalDetails: [
        "Django backend with SQLite for rapid development and deployment",
        "Comprehensive REST API with authentication and rate limiting",
        "Automated email notifications for event reminders",
        "Calendar integration for scheduling and availability checking"
      ]
    }
  ];

  // Handle ESC key to close project modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [selectedProject]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  // Tag color mapping function with consistent styling
  const getTagColor = (tag: string) => {
    const tagColorMap: Record<string, string> = {
      // Frameworks & Libraries
      "React": "bg-blue-500/10 text-accent",
      "Vue": "bg-blue-500/10 text-accent",
      "Angular": "bg-blue-500/10 text-accent",
      "Django": "bg-blue-500/10 text-accent",
      "Flutter": "bg-blue-500/10 text-accent",
      "Langchain": "bg-blue-500/10 text-accent",
      "PyTorch": "bg-blue-500/10 text-accent",

      // Languages
      "TypeScript": "bg-blue-500/10 text-accent",
      "JavaScript": "bg-blue-500/10 text-accent",
      "Python": "bg-blue-500/10 text-accent",
      "HTML": "bg-blue-500/10 text-accent",
      "CSS": "bg-blue-500/10 text-accent",

      // AI & ML
      "OpenAI API": "bg-blue-500/10 text-accent",
      "Ollama": "bg-blue-500/10 text-accent",

      // Databases
      "PostgreSQL": "bg-blue-500/10 text-accent",
      "MySQL": "bg-blue-500/10 text-accent",
      "SQLite": "bg-blue-500/10 text-accent",
      "Firebase": "bg-blue-500/10 text-accent",

      // Tools & Infrastructure
      "Docker": "bg-blue-500/10 text-accent",
      "REST API": "bg-blue-500/10 text-accent",
      "Postman": "bg-blue-500/10 text-accent",
      "FastAPI": "bg-blue-500/10 text-accent",
      "Streamlit": "bg-blue-500/10 text-accent",
      "BeautifulSoup": "bg-blue-500/10 text-accent",
    };
    
    return tagColorMap[tag] || "bg-foreground/10 text-foreground/70";
  };

  // Get project accent color based on first tag
  const getProjectAccentColor = (project: Project) => {
    if (project.tags.length > 0) {
      const firstTag = project.tags[0];
      const colorClass = getTagColor(firstTag);
      const match = colorClass.match(/bg-([a-z]+-[0-9]+)/);
      if (match && match[1]) {
        return match[1];
      }
    }
    return "blue-500"; // Default accent color
  };

  return (
    <AnimatedSection id="projects" className="py-20 px-3 sm:px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-blue-500/10 text-accent uppercase rounded-full bg-accent/10 mb-4"
          >
            Projects
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mt-4"
          >
            <span className="mr-6">03.</span>My Recent Work
          </motion.h2>
          {/* <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full mb-6 origin-left"
          ></motion.div> */}
          {/* <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Showcasing my portfolio of technical projects and creative solutions.
          </motion.p> */}
        </motion.div>
        
        {/* Featured Projects Section */}
        {projects.some(p => p.featured) && (
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h3 
              className="text-xl font-semibold mb-6 border-b border-foreground/10 pb-2 flex items-center"
              variants={itemVariants}
            >
              <span className="w-1 h-6 bg-accent rounded-full mr-3"></span>
              Featured Projects
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="rounded-xl overflow-hidden border border-foreground/10 bg-foreground/[0.02] hover:shadow-lg transition-all duration-300 flex flex-col"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  {/* Project Image */}
                  {project.image ? (
                    <div className="h-56 overflow-hidden relative">
                      <motion.img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute top-3 left-3">
                        <motion.span 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="bg-accent text-white text-xs px-2 py-1 rounded-md"
                        >
                          Featured
                        </motion.span>
                      </div>
                    </div>
                  ) : (
                    <div className={`h-56 overflow-hidden relative bg-gradient-to-r from-${getProjectAccentColor(project)}/5 to-${getProjectAccentColor(project)}/10 flex items-center justify-center`}>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <ImageIcon className={`text-${getProjectAccentColor(project)}/20 w-16 h-16`} />
                      </motion.div>
                      <div className="absolute top-3 left-3">
                        <motion.span 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="bg-accent text-white text-xs px-2 py-1 rounded-md"
                        >
                          Featured
                        </motion.span>
                      </div>
                    </div>
                  )}
                  
                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <motion.h3 
                      className="text-xl font-bold mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      className="text-foreground/70 text-sm mb-4 flex-grow"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {project.description}
                    </motion.p>
                    
                    {/* Tech Stack */}
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span 
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + tagIndex * 0.05 }}
                          className={cn(
                            "inline-block px-3 py-1 text-xs font-medium rounded-full",
                            getTagColor(tag)
                          )}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                    
                    {/* Action Buttons */}
                    <div className="flex justify-between items-center">
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 text-accent hover:text-blue-600 font-medium text-sm transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>View details</span>
                        <ArrowUpRight size={16} />
                      </motion.button>
                      
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors flex items-center justify-center"
                            title="GitHub Repository"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github size={20} />
                          </motion.a>
                        )}
                        {project.demoUrl && (
                          <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
                            title="Live Demo"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Globe size={16} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* All Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-xl font-semibold mb-6 border-b border-foreground/10 pb-2 flex items-center"
            variants={itemVariants}
          >
            <span className="w-1 h-6 bg-accent rounded-full mr-3"></span>
            Projects Portfolio
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div 
                key={project.id}
                className="rounded-xl overflow-hidden border border-foreground/10 bg-foreground/[0.02] hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                {/* Project Image */}
                {project.image ? (
                  <div className="h-48 overflow-hidden relative">
                    <motion.img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                ) : (
                  <div className={`h-48 overflow-hidden relative bg-gradient-to-r from-${getProjectAccentColor(project)}/5 to-${getProjectAccentColor(project)}/10 flex items-center justify-center`}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <ImageIcon className={`text-${getProjectAccentColor(project)}/20 w-12 h-12`} />
                    </motion.div>
                  </div>
                )}
                
                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <motion.h3 
                    className="text-xl font-bold mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-foreground/70 text-sm mb-4 line-clamp-3 flex-grow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Tech Stack */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <motion.span 
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 + tagIndex * 0.05 }}
                        className={cn(
                          "inline-block px-3 py-1 text-xs font-medium rounded-full",
                          getTagColor(tag)
                        )}
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.tags.length > 3 && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 + 3 * 0.05 }}
                        className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-foreground/10 text-foreground/70"
                      >
                        +{project.tags.length - 3}
                      </motion.span>
                    )}
                  </motion.div>
                  
                  {/* Action Buttons */}
                  <div className="flex justify-between items-center mt-auto">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 text-accent hover:text-blue-600 font-medium text-sm transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View details</span>
                      <ArrowUpRight size={16} />
                    </motion.button>
                    
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors flex items-center justify-center"
                          title="GitHub Repository"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                      {project.demoUrl && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors flex items-center justify-center"
                          title="Live Demo"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Globe size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                className="bg-background rounded-xl max-w-3xl w-full max-h-[85vh] overflow-hidden border border-foreground/10"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Image */}
                {selectedProject.image ? (
                  <div className="relative h-60 overflow-hidden">
                    <motion.img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.button 
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                      aria-label="Close"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X size={20} />
                    </motion.button>
                  </div>
                ) : (
                  <div className={`relative h-60 overflow-hidden bg-gradient-to-r from-${getProjectAccentColor(selectedProject)}/5 to-${getProjectAccentColor(selectedProject)}/10 flex items-center justify-center`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <ImageIcon className={`text-${getProjectAccentColor(selectedProject)}/20 w-24 h-24`} />
                    </motion.div>
                    <motion.button 
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                      aria-label="Close"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X size={20} />
                    </motion.button>
                  </div>
                )}
                
                {/* Project Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(85vh-15rem)]">
                  <motion.h3 
                    className="text-2xl font-bold mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {selectedProject.title}
                  </motion.h3>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6 justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {selectedProject.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + tagIndex * 0.05 }}
                        className={cn(
                          "inline-block px-3 py-1 text-xs font-medium rounded-full",
                          getTagColor(tag)
                        )}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                  
                  <motion.p 
                    className="text-foreground/80 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {selectedProject.description}
                  </motion.p>
                  
                  <motion.div 
                    className="border-t border-foreground/10 pt-4 mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <motion.h4 
                      className="text-lg font-medium mb-2 flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <Code size={18} className="text-accent" />
                      Technical Highlights
                    </motion.h4>
                    <motion.ul 
                      className="list-disc list-inside text-sm text-foreground/70 text-left"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      {selectedProject.technicalDetails ? (
                        selectedProject.technicalDetails.map((detail, index) => (
                          <motion.li 
                            key={index}
                            className="mb-2"
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                          >
                            {detail}
                          </motion.li>
                        ))
                      ) : (
                        <motion.li
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.6 }}
                        >
                          Technologies used include {selectedProject.tags.join(', ')}.
                        </motion.li>
                      )}
                    </motion.ul>
                  </motion.div>
                  
                  {/* Project Links */}
                  <motion.div 
                    className="flex flex-wrap gap-4 mt-8 border-t border-foreground/10 pt-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    {selectedProject.githubUrl && (
                      <motion.a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        <span>View on GitHub</span>
                      </motion.a>
                    )}
                    {selectedProject.demoUrl && (
                      <motion.a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
};

export default Projects;