import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, BookOpen, Maximize, X } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: 'Ataryo',
    subtitle: 'Health-Tech Startup Website (Client Project)',
    tech: ['TypeScript', 'Node.js', 'MySQL', 'React', 'REST APIs'],
    description: 'Delivered a production-ready website for a health-tech startup. Designed and implemented backend APIs with structured request-response handling and secure data persistence using MySQL. Built an admin-controlled content management workflow enabling non-technical stakeholders to update site content securely.',
    link: 'https://ataryo.com',
    github: '#'
  },
  {
    title: 'Dr. Mohit Mathur',
    subtitle: 'Professional Portfolio Website (Client Project)',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    description: 'Designed and developed a fully responsive professional portfolio website for a medical practitioner. Built with modern web technologies to ensure high performance and accessibility, featuring dynamic sections for services, patient testimonials, and contact information.',
    link: 'https://drmohitmathur.com',
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

const ProjectCard = ({ project, index, onOpenSite }: { project: typeof projects[0], index: number, onOpenSite: (url: string) => void }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const rect = currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseXPos = clientX - rect.left;
    const mouseYPos = clientY - rect.top;

    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);

    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.15, type: "spring", bounce: 0.4 }}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
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
          transform: "translateZ(-1px)"
        }}
      />
      <div className="project-content" style={{ transform: "translateZ(30px)" }}>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">
          {project.subtitle}
          {project.link !== '#' && (
            <span style={{ display: 'block', marginTop: '0.5rem', fontFamily: 'var(--font-mono)' }}>
              <a href={project.link} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline', opacity: 0.8 }}>
                {project.link.replace('https://', '')}
              </a>
            </span>
          )}
        </p>
        
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
          <a 
            href={project.link} 
            className="icon-link"
            onClick={(e) => {
              if (project.link !== '#') {
                e.preventDefault();
                onOpenSite(project.link);
              }
            }}
          >
            <Maximize size={20} />
            <span>In-Site Preview</span>
          </a>
          <a href={project.link} target="_blank" rel="noreferrer" className="icon-link">
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [activeSite, setActiveSite] = useState<string | null>(null);

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
          <ProjectCard key={index} project={project} index={index} onOpenSite={(url) => setActiveSite(url)} />
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

      <AnimatePresence>
        {activeSite && activeSite !== '#' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="site-modal-overlay"
            onClick={() => setActiveSite(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 50 }}
              className="site-modal-content glass-panel"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <span className="font-mono text-accent">{activeSite}</span>
                <button className="close-btn" onClick={() => setActiveSite(null)}><X size={24} /></button>
              </div>
              <iframe src={activeSite} className="site-iframe" title="Live Preview" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
