import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Award, Building2, Calendar, MapPin } from "lucide-react";

const Resume = () => {
  // ========================
  // Data Section
  // ========================
  
  const summary = "Detail-oriented Computer Science Engineer and Full-Stack Developer with expertise in cloud-based solutions, machine learning, and modern web development frameworks. Passionate about leveraging technology to create scalable and efficient solutions with demonstrable outcomes.";

  // Experience data
  const experiences = [
     {
      title: "Cloud Support Engineer",
      subtitle: "Akamai Technologies",
      period: "Nov 2025 - Present",
      bullets: [
        "Orchestrated the resolution of mission-critical technical escalations for Global 2000 clients, utilizing advanced packet analysis (Wireshark) and log inspection to diagnose complex latency and availability bottlenecks within the Intelligent Edge Platform.",
        "Fortified enterprise security architectures by configuring and fine-tuning Akamai Kona Site Defender and Web Application Firewall (WAF) rules, successfully mitigating high-volume DDoS attacks and minimizing false positive rates.",
        "Maximized content delivery performance through granular analysis of DNS propagation, TCP/IP behavior, and cache-hit ratios, resulting in optimized load times and reduced origin offload for high-traffic media streaming customers.",
        "Served as a trusted technical advisor during major client events (Cyber Week, live broadcasts), providing proactive monitoring and real-time traffic management to ensure 99.99% uptime and platform stability.",
        "Streamlined diagnostic workflows by leveraging Linux-based command-line utilities (cURL, dig, grep) and scripting to automate root cause analysis, significantly reducing the Mean Time to Resolve (MTTR) for complex incidents."
      ]
    },
    {
      title: "Graduate Engineer Trainee",
      subtitle: "Akamai Technologies",
      period: "Oct 2025 - Nov 2025",
      bullets: [
        "Spearheaded the design and execution of Proof-of-Concept (PoC) solutions spanning Akamai's comprehensive product suite, encompassing Content Delivery Network (CDN), advanced Cloud Security (WAF/Bot Management), and Cloud Compute (IaaS/PaaS) offerings.",
        "Cultivated deep technical proficiency in foundational principles of Content Delivery Networks, Web Application Firewalls, DDoS mitigation strategies, and overall Web Performance optimization.",
        "Developed a thorough understanding of the core architectural principles and technical differentiation of the Akamai Intelligent Edge Platform",
        "Engineered and deployed sophisticated configurations to significantly enhance the security posture and performance efficiency for client digital properties utilizing the Akamai platform.",
        "Engaged in effective collaboration with cross-functional engineering and sales teams to ensure the timely and successful delivery of high-quality technical solutions."
           ]
    },
    {
      title: "SDE Intern",
      subtitle: "Vegam Solutions Delaware",
      period: "Mar 2025 - Sep 2025", 
      bullets: [
        "Led end-to-end development of StockForge, a cloud-based inventory management solution",
        "Utilized Django, AWS, and PostgreSQL to build a full-stack solution",
        "Achieved annual time savings of ≈250 man-hours through process automation"
      ]
    },
    {
      title: "Machine Learning Intern",
      subtitle: "Dotch Endeavours pvt ltd",
      period: "Oct 2023 - Nov 2023",
      bullets: [
        "Developed a Parkinson's disease prediction algorithm with 92% accuracy",
        "Implemented neural networks and TensorFlow for deep learning models",
        "Utilized version control (Git) for collaborative code management"
      ]
    }
  ];

  // Education data
  const education = [
    {
      title: "BE in Computer Science",
      subtitle: "The National Institute of Engineering Mysuru",
      period: "2021 - 2025",
      gpa: "8.14/10",
      bullets: ["Specialized in Cloud Technologies, Machine Learning, and Full Stack Development"]
    },
    {
      title: "Class 5 - Class 12",
      subtitle: "Sri Vidya Kendra",
      period: "2014 - 2021",
      bullets:[ "CBSE board with focus on Mathematics, Science and Computer Science"]
    }
  ];

  // Skills data
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 9 },
        { name: "C++", level: 8 },
        { name: "C", level: 8 },
        { name: "Java", level: 7 }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "MySQL", level: 8 },
        { name: "Firebase", level: 7 },
        { name: "MongoDB", level: 7 },
        { name: "PostgreSQL", level: 8 },
        { name: "Django", level: 8 },
        { name: "RESTful APIs", level: 8 }
      ]
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "VS Code", level: 9 },
        { name: "SnowFlake", level: 7 },
        { name: "Postman", level: 8 },
        { name: "Git/GitHub", level: 8 },
        { name: "Docker", level: 7 },
        { name: "AWS", level: 7 }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Machine Learning", level: 8 },
        { name: "PyTorch", level: 7 },
        { name: "TensorFlow", level: 8 },
        { name: "Data Analysis", level: 8 }
      ]
    }
  ];

  // Achievements data
  const achievements = [
    {
      title: "Runner-up in National Level Hackathon",
      bullets: ["Competed among 70 teams in PES Mandya we secured the 2nd place with our project Groupie",
        "“Groupie” is a cross-platform study group application available as both a mobile and web app, designed to connect students with study communities.",
        "It enables real-time doubt-solving through chat, file sharing, and a built-in calendar for collaborative scheduling, streamlining the study experience.",
        "Focused on building an ecosystem for students who prioritize academics, supporting effective peer-to-peer learning and resource sharing.",
        "Features include creation and joining of study groups, seamless communication among members, and tools for managing group study sessions.",
        
      ],
      
    }
  ];

  // ========================
  // Component Definitions
  // ========================

  // AboutMeSection component - Refined for professional appeal
  const AboutMeSection = () => {
    const aboutMeData = {
      name: "Bhuvan Kambley",
      title: "Computer Science Engineer",
      bio: "Welcome to my Website! I'm **Bhuvan Kambley**,a dedicated Cloud Support Engineer at **Akamai Technologies** with a robust foundation in Full-Stack Development. I hold a Bachelor's degree in Computer Science and Engineering from the National Institute of Engineering, Mysuru, where I cultivated a deep curiosity for intelligent systems and network infrastructure.\n\nCurrently, I specialize in diagnosing and resolving complex technical challenges within the **Akamai Intelligent Edge Platform**, focusing on **Content Delivery Networks (CDN)** and **Cloud Security**. My background in software engineering allows me to approach troubleshooting with a developer’s mindset—bridging the gap between code and infrastructure to deliver rapid resolutions.\n\nI pride myself on being a conscientious team player with exceptional communication skills, capable of translating complex technical concepts for diverse stakeholders. I am passionate about staying ahead of emerging tech trends, particularly in API security and network protocols, and I remain actively involved in volunteering to create a positive social impact.",
      image: "/photo.png",
      location: "Bengaluru, India",
      experience: "SDE Intern",
      availability: "Available from May 2025",
      website: "https://bhuvankambley-portfolio.vercel.app",
      email: "bhuvankambley@gmail.com",
      github: "github.com/bhuvankambley",
      linkedin: "linkedin.com/in/bhuvankambley",
    };

    return (
      <div className="space-y-8">
        {/* Professional Header Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Profile Photo with Professional Styling */}
          <div 
              className="text-foreground/80 leading-relaxed text-base md:text-[15px] text-center md:text-left"
              dangerouslySetInnerHTML={{ 
                __html: aboutMeData.bio
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold text-[#06bfff]">$1</strong>')
                  .replace(/\n\n/g, '<br /><br />') 
              }}
            />
          <motion.div 
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Reduced size while maintaining aspect ratio */}
            <div className="w-48 h-60 md:w-64 md:h-80 lg:w-72 lg:h-96 relative z-10 overflow-hidden rounded-xl shadow-xl">
              {/* Professional border styling */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/5 rounded-xl p-[2px] z-0">
                <div className="w-full h-full bg-background/50 backdrop-blur-sm rounded-xl"></div>
              </div>
              
              {/* Actual image with professional framing */}
              <div className="absolute inset-[3px] overflow-hidden rounded-lg z-10">
                <img 
                  src={aboutMeData.image} 
                  alt={`${aboutMeData.name} - ${aboutMeData.title}`}
                  className="w-full h-full object-cover aspect-[3/4] transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Professional Bio Section */}
          <div className="flex-1">
            {/* Name and Title with clear hierarchy */}
            {/* <div className="mb-4 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{aboutMeData.name}</h2>
              <p className="text-lg md:text-xl text-primary/90 font-medium mt-1">{aboutMeData.title}</p>
            </div> */}
            
            {/* Professional Details - Organized for quick scanning */}
            {/* <div className="flex flex-wrap gap-y-3 gap-x-5 text-sm mb-5 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors">
                <MapPin className="w-4 h-4 text-primary/80" />
                <span>{aboutMeData.location}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors">
                <Building2 className="w-4 h-4 text-primary/80" />
                <span>{aboutMeData.experience}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors">
                <Calendar className="w-4 h-4 text-primary/80" />
                <span>{aboutMeData.availability}</span>
              </div>
            </div> */}
            
            {/* Professional Bio Text - Formatted for readability */}
            
            
            {/* Professional Contact Links */}
            {/* <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
              <a 
                href={`https://${aboutMeData.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-foreground/5 hover:bg-foreground/10 rounded-md text-sm transition-colors border border-foreground/10"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"></path>
                </svg>
                GitHub
              </a>
              <a 
                href={`https://${aboutMeData.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-foreground/5 hover:bg-foreground/10 rounded-md text-sm transition-colors border border-foreground/10"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452Z"></path>
                </svg>
                LinkedIn
              </a>
              <a 
                href={aboutMeData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-foreground/5 hover:bg-foreground/10 rounded-md text-sm transition-colors border border-foreground/10"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                Portfolio
              </a>
              <a 
                href={`mailto:${aboutMeData.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary/15 rounded-md text-sm transition-colors border border-primary/20 text-primary-foreground"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Contact Me
              </a>
            </div> */}
          </div>
        </div>

        {/* Professional Summary - Clear and concise for recruiters
        <div className="bg-foreground/[0.02] border border-foreground/10 rounded-xl p-5 mt-6">
          <h3 className="text-lg font-medium mb-2 text-primary/90">Professional Summary</h3>
          <p className="text-foreground/80 leading-relaxed">{summary}</p>
        </div>

        {/* Key Skills Highlight - Quick overview for recruiters */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <div className="bg-foreground/[0.02] border border-foreground/10 rounded-xl p-4 flex flex-col items-center text-center">
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
          </div>
          
          <div className="bg-foreground/[0.02] border border-foreground/10 rounded-xl p-4 flex flex-col items-center text-center">
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
          
          <div className="bg-foreground/[0.02] border border-foreground/10 rounded-xl p-4 flex flex-col items-center text-center">
            <div className="bg-primary/10 rounded-full p-3 mb-3">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="font-medium text-foreground">Problem Solving</h3>
            <p className="text-sm text-foreground/70 mt-1">Analytical approach to technical challenges</p>
          </div>
        </div> */} 
      </div>
    );
  };

  // TimelineItem component
  const TimelineItem = ({ title, subtitle, period, description, bullets, index }: { 
    title: string, 
    subtitle: string, 
    period: string, 
    description?: string, 
    bullets?: string[],
    index: number
  }) => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group bg-foreground/[0.02] hover:bg-foreground/[0.05] rounded-xl p-6 transition-all duration-300 border border-foreground/10 mb-6"
      >
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-semibold text-lg tracking-tight text-primary group-hover:text-primary/90 transition-color text-left">{title}</h3>
              <div className="flex items-center mt-1 text-foreground/70 text-lg text-[#06bfff]">
                <span>{subtitle}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 bg-primary/5 text-sm text-foreground/80 px-3 py-1.5 rounded-full self-start">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              <span>{period}</span>
            </div>
          </div>
          
          {description && (
            <p className="text-foreground/70 leading-relaxed text-left text-base">{description}</p>
          )}

        {bullets && bullets.length > 0 && (
        <ul className="space-y-2 text-foreground/80 ml-2">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="text-left text-sm pl-6 relative">
              <span className="absolute left-0 top-[0.4em] w-0 h-0 
                border-t-[5px] border-t-transparent
                border-b-[5px] border-b-transparent
                border-l-[6px] border-l-primary/80"></span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
        </div>
      </motion.div>
    );
  };

  // SkillCategory component with pill-style skills
  const SkillCategory = ({ title, skills, index }: { 
    title: string, 
    skills: { name: string, level: number }[], 
    index: number 
  }) => {
    return (
      <motion.div 
        className="bg-foreground/[0.02] border border-foreground/10 p-6 rounded-xl backdrop-blur-sm mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <h3 className="text-lg font-medium mb-5 text-primary/90">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
              className="bg-foreground/[0.05] hover:bg-foreground/[0.08] border border-foreground/10 px-3 py-1.5 rounded-full text-sm transition-colors "
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  // AchievementCard component
  const AchievementCard = ({ title, description, index }: { 
    title: string, 
    description?: string, 
    index: number 
  }) => {
    return (
      <motion.div 
        className="bg-foreground/[0.02] border border-foreground/10 p-6 rounded-xl flex gap-5 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="bg-primary/10 rounded-full p-3 h-fit">
          <Award className="text-primary w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-2">{title}</h3>
          {description && <p className="text-foreground/70 leading-relaxed text-base">{description}</p>}
        </div>
      </motion.div>
    );
  }; 

  // ========================
  // Main Component Logic
  // ========================
  
  // Section definitions
  const sections = [
    { id: "about", title: "About Me", component: <AboutMeSection /> },
    { 
      id: "experience", 
      title: "Experience", 
      component: (
        <div>
          {experiences.map((experience, index) => (
            <TimelineItem 
              key={index}
              title={experience.title}
              subtitle={experience.subtitle}
              period={experience.period}
              bullets={experience.bullets}
              index={index}
            />
          ))}
        </div>
      ) 
    },
    { 
      id: "education", 
      title: "Education", 
      component: (
        <div>
          {education.map((edu, index) => (
            <TimelineItem 
              key={index}
              title={edu.title}
              subtitle={edu.subtitle}
              period={edu.period}
              bullets={edu.bullets}
              index={index}
            />
          ))}
        </div>
      ) 
    },
    { 
      id: "skills", 
      title: "Skills", 
      component: (
        <div>
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
      ) 
    },
    { 
      id: "achievements", 
      title: "Achievements", 
      component: (
        <div>
          {achievements.map((achievement, index) => (
            <TimelineItem
              key={index}
              title={achievement.title}
              subtitle=""
              period="2024"
              bullets={achievement.bullets}
              index={index}
            />
          ))}
        </div>
      ) 
    }
  ];

  // State for active tab
  const [activeTabId, setActiveTabId] = useState(0);
  
  // Refs for tab elements and animations
  const tabsRef = useRef([]);
  
  // Function to handle tab click
  const handleTabClick = (index) => {
    setActiveTabId(index);
  };

  return (
  <div id="ResumeSection" className="min-h-screen py-16 px-4 mt-32">
    <div className="max-w-5xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-12 text-center text-primary">
        <span>02.</span>
        <span className="inline-block ml-5 font-bold">Resume</span>
      </h1>
      
      {/* Main Content with Tab Layout */}
      <div className="flex flex-col md:flex-row gap-2">
        {/* 
          Tab List - Left Side
          Adjust width by changing "md:w-64" to your preferred size
        */}
        <div className="md:w-53 relative">
          <div className="sticky top-24">
            {/* Tab buttons */}
            <div 
              className="flex md:flex-col overflow-x-auto md:overflow-visible no-scrollbar"
              role="tablist"
            >
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  ref={el => (tabsRef.current[index] = el)}
                  onClick={() => handleTabClick(index)}
                  className={`
                    relative flex items-center text-left py-3 px-4 border-l-2 transition-all duration-300
                    ${activeTabId === index 
                      ? "font-semibold border-l-primary text-foreground" 
                      : "border-l-foreground/10 text-foreground/60 hover:text-foreground/90 hover:border-l-foreground/30"
                    }
                  `}
                  role="tab"
                  tabIndex={activeTabId === index ? 0 : -1}
                  aria-selected={activeTabId === index}
                  aria-controls={`panel-${index}`}
                >
                  <span className="whitespace-nowrap">{section.title}</span>
                </button>
              ))}
              
              {/* Highlight indicator - Adjust height by changing "h-[50px]" */}
              <div 
                className="absolute left-0 w-0.5 h-[10px] bg-primary rounded-full transition-transform duration-300 hidden md:block"
                style={{ 
                  transform: `translateY(${activeTabId * 50}px)`, // Adjust the multiplier to match your tab height
                  top: '12px' // Adjust to vertically center the highlight in your tabs
                }}
              />
            </div>
          </div>
        </div>
        
        {/* 
          Tab Panels - Right Side 
          Adjust the padding and styling to your preference
        */}
        <div className="flex-1 bg-foreground/[0.01] rounded-xl border border-foreground/5 p-6 md:p-8 text-sm">
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={`panel-${index}`}
              role="tabpanel"
              tabIndex={activeTabId === index ? 0 : -1}
              aria-labelledby={`tab-${index}`}
              aria-hidden={activeTabId !== index}
              className={`
                transition-opacity duration-300 ease-in-out
                ${activeTabId === index ? 'opacity-100' : 'absolute opacity-0 invisible'}
              `}
            >
              {activeTabId === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Section title for mobile - hidden on desktop */}
                  <h2 className="text-2xl font-bold mb-6 text-primary md:hidden">
                    {section.title}
                  </h2>
                  
                  {/* Section content */}
                  {section.component}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Resume;