import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Blood Group Prediction from Fingerprints",
      description: "Developed a deep learning model using CNN in PyTorch to predict blood groups from fingerprint images with high accuracy. Designed and deployed a RESTful API backend for model inference and a Streamlit-based frontend for user interaction. Implemented Docker containerization for seamless deployment and scalability.",
      tags: ["PyTorch", "Streamlit", "FastAPI", "Docker"],
      githubUrl: "https://github.com/Bhuvankambley2003/Leveraging-PyTorch-CNN-for-Blood-Group-Prediction-using-Fingerprint-Images",
    },
    {
      id: 2,
      title: "StockForge",
      description: "A professional-grade inventory management system for manufacturing enterprises. StockForge provides real-time control over multi-component production workflows, from raw material procurement to finished goods deployment. Features include automated stock reconciliation, BOM management, and enterprise-grade reporting.",
      tags: ["Django", "PostgreSQL", "HTML", "CSS", "Docker"],
      githubUrl: "https://github.com/Bhuvankambley2003/StockForge",
    },
    {
      id: 3,
      title: "Sahaya",
      description: "Solution for Google GDSC 2024 addressing UN sustainable goals with features for education, poverty, and hunger, received positive feedback from over 20 people and Google. Implemented features to support sustainable cities, no poverty, quality education, and zero hunger. Integrated cloud services and authentication to enhance app capabilities.",
      tags: ["Flutter", "Firebase", "OpenAI API"],
      githubUrl: "https://github.com/Bhuvankambley2003/sahaya/tree/master",
    },
    {
      id: 5,
      title: "Invoice Management System",
      description: "Developed a full stack web application using Django and MySQL to handle CRUD operations efficiently. Implemented CRUD operations to streamline invoice processing and database management. Built a responsive front-end with HTML and CSS, ensuring an intuitive user experience.",
      tags: ["Django", "MySQL", "HTML", "CSS", "Docker"],
      githubUrl: "https://github.com/Bhuvankambley2003/invoice_management_system/tree/master",
    },
    {
      id: 6,
      title: "Event Management Application",
      description: "Developed a full stack web application using Django and SQLite to manage events and registrations. Implemented CRUD operations to streamline event, attendee, and task management. Built RESTful API endpoints for integration and a responsive frontend, ensuring an intuitive user experience.",
      tags: ["Django", "SQLite", "REST API", "Postman", "Docker"],
      githubUrl: "https://github.com/Bhuvankambley2003/event_management_application",
    }
  ];

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
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <AnimatedSection id="projects" className="py-24 px-4 sm:px-6 md:px-8 max-w-[1000px] mx-auto">
      <motion.h2 
        className="numbered-heading text-foreground mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Some Things I've Built
      </motion.h2>
        
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            className="group relative bg-card hover:bg-card/80 transition-colors duration-300 rounded overflow-hidden flex flex-col justify-between p-8 h-full shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_30px_-15px_rgba(0,0,0,0.2)] dark:shadow-none dark:hover:shadow-none dark:bg-[#112240] dark:hover:bg-[#112240]/80"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            {/* Top Icons */}
            <div className="flex justify-between items-center mb-8">
              <div className="text-accent">
                <Folder size={40} strokeWidth={1} />
              </div>
              <div className="flex gap-4 items-center">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="GitHub Link"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                  </motion.a>
                )}
                {project.demoUrl && (
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="External Link"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-3 tracking-tight">
                <a href={project.githubUrl || project.demoUrl} target="_blank" rel="noopener noreferrer" className="static before:content-[''] before:block before:absolute before:z-0 before:w-full before:h-full before:top-0 before:left-0">
                  {project.title}
                </a>
              </h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed flex-grow">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-6 text-xs font-mono text-muted-foreground/80">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default Projects;