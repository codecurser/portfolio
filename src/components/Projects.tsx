import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ExternalLink, Github, BookOpen } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: 'Ataryo',
    subtitle: 'Health-Tech Startup Website (Client Project)',
    tech: ['TypeScript', 'Node.js', 'MySQL', 'React', 'REST APIs'],
    description: 'Delivered a production-ready website for a health-tech startup. Designed and implemented backend APIs with structured request-response handling and secure data persistence using MySQL. Built an admin-controlled content management workflow enabling non-technical stakeholders to update site content securely.',
    link: '#',
    github: '#'
  },
  {
    title: 'PumpMate',
    subtitle: 'Fuel Station Wait-Time & Recommendation System',
    tech: ['Python', 'XGBoost', 'HTML', 'JavaScript'],
    description: 'Developed a predictive system to estimate fuel station waiting time and recommend optimal stations based on historical data. Implemented a machine learning pipeline using XGBoost with feature engineering and evaluation using RMSE and MAE. Created a lightweight web interface.',
    link: '#',
    github: '#'
  }
];

const publications = [
  {
    title: 'A Convolutional Neural Network Based Mechanism for Human Body Posture Analysis',
    venue: 'IEEE Xplore, ICCT 2025'
  },
  {
    title: 'Leveraging Predictive Analytics for Stock Retail and Sales Optimization',
    venue: 'ICNCDA 2025, Jaipur'
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="project-card"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="card-glow"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 242, 254, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        
        <div className="tech-stack">
          {project.tech.map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>

        <p className="project-desc">{project.description}</p>
        
        <div className="project-links">
          <a href={project.github} className="icon-link">
            <Github size={20} />
            <span>Code</span>
          </a>
          <a href={project.link} className="icon-link">
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section projects-section">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        className="chapter-label text-accent font-mono mb-4 text-center block"
      >
        [ CHAPTER 03 // ARCHITECTURE_BUILDS ]
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        className="section-title"
      >
        Featured <span className="text-gradient">Work</span>
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="publications-section"
      >
        <h3 className="flex-center gap-2 mb-4">
          <BookOpen className="text-accent" /> Research Publications
        </h3>
        <div className="pub-grid">
          {publications.map((pub, index) => (
            <div key={index} className="pub-card glass-panel">
              <h4>{pub.title}</h4>
              <p className="text-accent">{pub.venue}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
