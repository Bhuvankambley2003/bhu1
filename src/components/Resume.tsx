import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

// Tab Data Structure
const sections = [
  {
    id: "experience",
    title: "Experience",
    type: "timeline",
    items: [
      {
        id: "akamai1",
        title: "Cloud Support Engineer",
        company: "Akamai Technologies",
        period: "Nov 2025 - Present",
        description: [
          "Resolved mission-critical technical escalations for Global 2000 clients using Wireshark and log inspection to diagnose latency and availability bottlenecks.",
          "Configured and fine-tuned Akamai Kona Site Defender and WAF rules, mitigating high-volume DDoS attacks and minimizing false positives.",
          "Optimized content delivery performance by analyzing DNS propagation and cache-hit ratios, reducing origin offload for media streaming clients.",
          "Acted as a technical advisor during major client events, providing proactive monitoring and real-time traffic management for 99.99% uptime.",
          "Automated root cause analysis workflows using Linux utilities (cURL, dig, grep) and scripting to significantly reduce MTTR."
        ]
      },
      {
        id: "akamai2",
        title: "Graduate Engineer Trainee",
        company: "Akamai Technologies",
        period: "Oct 2025 - Nov 2025",
        description: [
          "Designed and executed PoC solutions across Akamai's CDN, Cloud Security (WAF), and Cloud Compute offerings.",
          "Cultivated deep technical proficiency in CDN principles, WAF, DDoS mitigation, and Web Performance optimization.",
          "Engineered configurations to enhance the security posture and performance of client digital properties."
        ]
      },
      {
        id: "vegam",
        title: "SDE Intern",
        company: "Vegam Solutions Delaware",
        period: "Mar 2025 - Sep 2025",
        description: [
          "Led end-to-end development of StockForge, a cloud-based inventory management solution",
          "Utilized Django, AWS, and PostgreSQL to build a full-stack solution",
          "Achieved annual time savings of 250 man-hours through process automation"
        ]
      },
      {
        id: "dotch",
        title: "Machine Learning Intern",
        company: "Dotch Endeavours pvt ltd",
        period: "Oct 2023 - Nov 2023",
        description: [
          "Developed a Parkinson's disease prediction algorithm with 92% accuracy",
          "Implemented neural networks and TensorFlow for deep learning models",
          "Utilized version control (Git) for collaborative code management"
        ]
      }
    ]
  },
  {
    id: "skills",
    title: "Skills",
    type: "skills",
    items: [
      { category: "Programming Languages", skills: ["Python", "C++", "C", "Java"] },
      { category: "Backend & Databases", skills: ["MySQL", "Firebase", "MongoDB", "PostgreSQL", "Django", "RESTful APIs"] },
      { category: "Tools & Cloud", skills: ["VS Code", "SnowFlake", "Postman", "Git/GitHub", "Docker", "AWS"] },
      { category: "AI & Machine Learning", skills: ["Machine Learning", "PyTorch", "TensorFlow", "Data Analysis"] }
    ]
  },
  {
    id: "education",
    title: "Education",
    type: "timeline",
    items: [
      {
        id: "bachelor",
        title: "BE in Computer Science",
        company: "The National Institute of Engineering Mysuru",
        period: "2021 - 2025",
        description: [
          "Graduated with 8.14/10 GPA",
          "Specialized in Cloud Technologies, Machine Learning, and Full Stack Development"
        ]
      },
      {
        id: "highschool",
        title: "Class 5 - Class 12",
        company: "Sri Vidya Kendra",
        period: "2014 - 2021",
        description: [
          "CBSE board with focus on Mathematics, Science and Computer Science"
        ]
      }
    ]
  },
  {
    id: "achievements",
    title: "Achievements",
    type: "timeline",
    items: [
      {
        id: "hackathon",
        title: "Runner-up in National Level Hackathon",
        company: "",
        period: "2024",
        description: [
          "Secured 2nd place among 70 teams with 'Groupie', a cross-platform study group application.",
          "Enabled real-time doubt-solving, file sharing, and collaborative scheduling to streamline studying.",
          "Focused on peer-to-peer learning with seamless communication tools for students."
        ]
      }
    ]
  }
];

const Resume: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <AnimatedSection id="experience" className="py-24 px-4 sm:px-6 md:px-8 max-w-[1000px] mx-auto min-h-[80vh]">
      {/* Title - Brittany Chiang style numbered heading */}
      <motion.h2 
        className="numbered-heading text-foreground mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Experience & Achievements
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full mt-12">
        {/* Tab Navigation - Left Side */}
        <div className="w-full md:w-32 lg:w-40 flex flex-row md:flex-col overflow-x-auto md:overflow-visible no-scrollbar pb-2 md:pb-0 z-10 shrink-0">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveTabId(index)}
              className={`
                relative px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all duration-200
                hover:bg-accent/5 hover:text-accent focus:outline-none
                ${activeTabId === index 
                  ? 'text-accent' 
                  : 'text-muted-foreground border-transparent hover:bg-accent/5'}
                border-b-2 md:border-b-0 md:border-l-2
                ${activeTabId === index ? 'border-accent' : 'border-border md:hover:border-accent/50'}
              `}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Tab Content - Right Side */}
        <div className="flex-1 text-sm md:text-base min-h-[300px]">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={activeTabId === index ? 'block' : 'hidden'}
            >
              {activeTabId === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {section.type === 'timeline' && section.items.map((item: any, itemIdx: number) => (
                    <div key={item.id} className={itemIdx > 0 ? "mt-10" : ""}>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1">
                        {item.title} {item.company && <span className="text-accent">@ {item.company}</span>}
                      </h3>
                      {item.period && (
                        <p className="text-xs md:text-sm font-mono text-muted-foreground mb-6">
                          {item.period}
                        </p>
                      )}
                      
                      <ul className="fancy-list text-muted-foreground text-[15px] md:text-base leading-relaxed">
                        {item.description.map((point: string, i: number) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {section.type === 'skills' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {section.items.map((item: any, itemIdx: number) => (
                        <div key={itemIdx} className="bg-foreground/[0.02] border border-foreground/10 p-4 sm:p-5 rounded-xl backdrop-blur-sm">
                          <h3 className="text-base font-medium mb-4 text-foreground/90">{item.category}</h3>
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill: string, sIdx: number) => (
                              <div key={sIdx} className="bg-foreground/[0.05] border border-foreground/10 px-2.5 py-1 rounded-full text-xs font-mono text-muted-foreground">
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Resume;