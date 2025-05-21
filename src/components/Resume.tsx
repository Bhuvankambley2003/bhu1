import { motion } from "framer-motion";
import { Award, Building2, Calendar, ChevronRight, Download, LinkIcon, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Resume = () => {
  // Experience data
  const experiences = [
    {
      title: "SDE Intern",
      subtitle: "Vegam Solutions Delaware",
      period: "2025 - Present",
      description: "Led the end-to-end development of StockForge, an advanced cloud-based full-stack solution for inventory management, utilizing Django, AWS, and PostgreSQL. Achieved annual time savings of ≈250 man-hours."
    },
    {
      title: "Machine Learning Intern",
      subtitle: "Dotch Endeavours pvt ltd",
      period: "Oct - Nov 2023",
      description: "Spearheaded the development of a Parkinson's disease prediction algorithm, leveraging neural networks and TensorFlow, achieving 92% accuracy. Supported departmental needs while gaining foundational knowledge in Scikit-learn. Utilized version control (Git) for code management and collaborated effectively using GitHub."
    }
  ];

  // Education data
  const education = [
    {
      title: "BE in Computer Science",
      subtitle: "The National Institute of Engineering Mysuru",
      period: "2021 - 2025",
      description: "Specialized in Cloud Technologies, Machine Learning, and Full Stack Development beyond academic coursework."
    },
    {
      title: "Class 5 - Class 12",
      subtitle: "Sri Vidya Kendra",
      period: "2014 - 2021",
      description: "Studied CBSE board with a focus on Mathematics, Science and Computer Science."
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

  // Certifications data
  const certifications = [
    {
      title: "AWS Knowledge: Architecting",
      issuer: "Amazon Web Services",
      date: "2025",
      description: "Cloud architecture fundamentals and best practices on AWS platform."
    },
    {
      title: "IBM Data Analysis",
      issuer: "IBM",
      date: "2024",
      description: "Professional data analysis techniques and tools certified by IBM."
    },
    {
      title: "Google Data Data Everywhere",
      issuer: "Google",
      date: "2023",
      description: "Data analytics fundamentals and practices by Google."
    }
  ];

  // Achievements data
  const achievements = [
    {
      title: "Runner-up in National Level Hackathon 2024",
      description: "Competing among 70 teams in PES Mandya, we designed the Groupie app, which featured real-time chat for doubt solving, file sharing, and a scheduling calendar."
    }
  ];

  // AboutMeSection component
  const AboutMeSection = () => {
    const aboutMeData = {
      name: "Bhuvan Kambley",
      title: "Computer Science Engineer",
      bio: "I'm **Bhuvan Kambley**, a highly driven **Full-Stack Developer** with a deep curiosity for Machine Learning and Artificial Intelligence. Currently pursuing my Bachelor's degree in Computer Science and Engineering at the National Institute of Engineering, Mysuru. I bring together academic excellence with hands-on industry experience across software engineering and intelligent systems.\n\nAt Vegam Solutions, I'm developing **StockForge**—a cloud-based solution designed to streamline inventory and production management for manufacturing enterprises.\nI take pride in being an **enthusiastic and conscientious team player** with exceptional communication and soft skills. I am passionate about learning new skills, keeping up with emerging tech trends, and identifying the best technologies to enhance our solutions. Furthermore, I believe in giving back to society and actively participate in volunteering activities to create a positive impact.",
      image: "/bk.jpg",
      location: "Bengaluru, India",
      experience: "Intern",
      availability: "Full Time",
      website: "https://bhuvankambley-portfolio.vercel.app",
    };

    return (
      <section id="ResumeSection" className="mb-20">
      <div id="ResumeSection" className="glass p-4 sm:p-6 md:p-8 rounded-2xl mb-16 bg-foreground border border-foreground/10 backdrop-blur-sm w-full">
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center md:items-start ">
        {/* Left Side - Bio and Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col flex-1"
        >
          <h1 className="heading-md text-4xl font-medium tracking-tight ">
            <span className="mr-6">01.</span>About Me
          </h1> 

          <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-foreground/70 mt-3 justify-center">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{aboutMeData.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>{aboutMeData.experience}</span>
                  </div>
          </div>        
          {/* <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            viewport={{ once: true }}
            className="w-28 h-1 bg-gradient-to-r from-accent to-accent/50 md:mx-0 rounded-full mb-6 origin-left"
          /> */}
          <div className="subtitle mb-6"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div 
              className="text-foreground/80 leading-relaxed text-default text-center md:text-left"
              dangerouslySetInnerHTML={{ 
                __html: aboutMeData.bio
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
                  .replace(/\n\n/g, '<br /><br />') 
              }}
            />
          
            {/* Right Side - Profile Photo - Moved inside the content area */}
            <motion.div 
              className="flex-shrink-0 relative mb-8 md:mb-0 mt-4 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                className="w-60 h-85   relative z-10 overflow-hidden rounded-md shadow-xl bg-gradient-to-br from-accent/5 to-accent/30 p-1 transition-all duration-300 hover:shadow-accent/20 hover:shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full overflow-hidden rounded-md">
                  <img 
                    src={aboutMeData.image} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Animated dots */}
                <div className="absolute -bottom-2 -right-2 flex gap-1">
                  <div className="h-3 w-3 rounded-full bg-accent animate-pulse-soft"></div>
                  <div className="h-3 w-3 rounded-full bg-accent/80 animate-pulse-soft" style={{ animationDelay: '0.3s' }}></div>
                  <div className="h-3 w-3 rounded-full bg-accent/60 animate-pulse-soft" style={{ animationDelay: '0.6s' }}></div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              {/* <motion.div 
                className="absolute -top-5 -left-5 w-full h-full rounded-md border-2 border-dashed border-accent/20 z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-md z-0 animate-pulse-soft"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              /> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};


  // ResumeSection component
  const ResumeSection = ({ title, children, id }: { title: string, children: React.ReactNode, id?: string }) => {
    return (
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-20"
        id={id || title.toLowerCase().replace(/\s+/g, '-')}
      >
        <div className="mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold tracking-tight"
          >
            {title}
          </motion.h2>
          {/* <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary/50 rounded-full mt-3 origin-left"
          /> */}
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </motion.section>
    );
  };

  // TimelineItem component
  const TimelineItem = ({ title, subtitle, period, description, index, icon }: { 
    title: string, 
    subtitle: string, 
    period: string, 
    description: string, 
    index: number,
    icon?: React.ReactNode
  }) => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group bg-foreground/[0.02] hover:bg-foreground/[0.05] rounded-xl p-6 transition-all duration-300 border border-foreground/10"
      >
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-semibold text-xl tracking-tight text-primary group-hover:text-primary/90 transition-color text-left">{title}</h3>
              <div className="flex items-center mt-1 text-foreground/70">
                {/* {icon || <Building2 className="w-4 h-4 mr-2" />} */}
                <span>{subtitle}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 bg-primary/5 text-sm text-foreground/80 px-3 py-1.5 rounded-full self-start">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              <span>{period}</span>
            </div>
          </div>
          
          <p className="text-foreground/70 leading-relaxed text-left text-base">{description}</p>
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
        className="bg-foreground/[0.02] border border-foreground/10 p-6 rounded-xl backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-medium mb-5 text-primary/90">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-foreground/[0.05] hover:bg-foreground/[0.08] border border-foreground/10 px-3 py-1.5 rounded-full text-sm transition-colors"
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  // AchievementCard component
  const AchievementCard = ({ title, issuer, date, description, index }: { 
    title: string, 
    issuer?: string, 
    date?: string, 
    description?: string, 
    index: number 
  }) => {
    return (
      <motion.div 
        className="bg-foreground/[0.02] border border-foreground/10 p-6 rounded-xl flex gap-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="bg-primary/10 rounded-full p-3 h-fit">
          <Award className="text-primary w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-2">{title}</h3>
          {(issuer || date) && (
            <div className="flex flex-wrap gap-2 text-sm text-foreground/70 mb-2">
              {issuer && <span>{issuer}</span>}
              {issuer && date && <span>•</span>}
              {date && <span>{date}</span>}
            </div>
          )}
          {description && <p className="text-foreground/70 leading-relaxed">{description}</p>}
        </div>
      </motion.div>
    );
  };
  // Navigation component 
  const Navigation = () => {
    const sections = [
      { name: "About", href: "#about" },
      { name: "Experience", href: "#experience" },
      { name: "Education", href: "#education" },
      { name: "Skills", href: "#skills" },
      { name: "Certifications", href: "#certifications" },
      { name: "Achievements", href: "#achievements" },
    ];
    
    // Function to handle navigation to next section
    const navigateToNextSection = (currentIndex: number) => {
      const nextIndex = (currentIndex + 1) % sections.length;
      window.location.href = sections[nextIndex].href;
    };
    
    // Function to handle navigation to previous section
    const navigateToPrevSection = (currentIndex: number) => {
      const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
      window.location.href = sections[prevIndex].href;
    };

    return (
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="sticky top-4 z-50 flex justify-center mx-auto mb-10 px-4"
      >
        <nav className="bg-foreground/[0.03] backdrop-blur-lg border border-foreground/10 rounded-full py-2 px-3 shadow-lg flex items-center overflow-hidden">
          {/* Previous Button */}
          
          
          <div className="overflow-x-auto no-scrollbar flex-grow">
            <ul className="flex space-x-1 sm:space-x-2 px-1">
              {sections.map((section, index) => (
                <li key={index}>
                  <a 
                    href={section.href}
                    className="px-3 py-1.5 text-sm font-medium text-foreground/70 hover:text-foreground/100 transition-colors whitespace-nowrap"
                  >
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Next Button */}
          
        </nav>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-foreground/[0.02] pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 pt-10"
      >
        {/* Header with title */}
        {/* <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}  
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block px-3 py-1.5 text-xs font-medium tracking-wider bg-primary/10 text-primary uppercase rounded-full mb-4"
          >
            Professional Resume
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-semibold tracking-tight"
          >
            Bhuvan Kambley
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-xl text-foreground/70"
          >
            Computer Science Engineer & Full-Stack Developer
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-4 mt-6"
          >
            <Button className="rounded-full gap-2 bg-primary hover:bg-primary/90">
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
            <Button variant="outline" className="rounded-full gap-2 border-primary/30 text-primary hover:bg-primary/10">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </motion.div>
        </div> */}
        
        {/* Navigation */}
        <Navigation />
        
        <div className="max-w-4xl mx-auto">
          {/* About section with ID for navigation */}
          <div id="about">
            <AboutMeSection />
          </div>

          <ResumeSection title="Experience" id="experience">
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <TimelineItem 
                  key={index}
                  title={experience.title}
                  subtitle={experience.subtitle}
                  period={experience.period}
                  description={experience.description}
                  index={index}
                />
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title="Education" id="education">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <TimelineItem 
                  key={index}
                  title={edu.title}
                  subtitle={edu.subtitle}
                  period={edu.period}
                  description={edu.description}
                  index={index}
                />
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title="Skills" id="skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <SkillCategory 
                  key={index}
                  title={category.title}
                  skills={category.skills}
                  index={index}
                />
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title="Certifications" id="certifications">
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <TimelineItem
                  key={index}
                  title={cert.title}
                  subtitle={cert.issuer}
                  period={cert.date}
                  description={cert.description}
                  index={index}
                  icon={<Award className="w-4 h-4 mr-2" />}
                />
              ))}
              
              <div className="mt-8 flex justify-center">
                <Button
                  variant="outline"
                  className="rounded-full gap-2 font-medium hover:bg-primary/10 hover:text-primary border-primary/20 transition-colors"
                  onClick={() => window.open("https://www.credly.com/users/bhuvan-kambley", "_blank")}
                >
                  <Award className="w-4 h-4" />
                  View All Badges on Credly
                </Button>
              </div>
            </div>
          </ResumeSection>

          <ResumeSection title="Achievements" id="achievements">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={index}
                  title={achievement.title}
                  description={achievement.description}
                  index={index}
                />
              ))}
            </div>
          </ResumeSection>
          
          
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
 