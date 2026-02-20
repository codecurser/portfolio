import { motion } from 'framer-motion';
import { Code, Server, Database, Layers, CheckCircle2 } from 'lucide-react';
import './Experience.css';

const skills = [
  {
    category: 'Languages',
    icon: <Code />,
    items: ['Java', 'C', 'TypeScript', 'JavaScript']
  },
  {
    category: 'Backend & Frameworks',
    icon: <Server />,
    items: ['Java Servlets', 'JDBC', 'JPA (Hibernate)', 'REST APIs', 'Spring Boot (Basics)', 'React', 'Node.js']
  },
  {
    category: 'Databases & Tools',
    icon: <Database />,
    items: ['MySQL', 'SQL', 'Git', 'GitHub', 'Maven', 'Postman']
  },
  {
    category: 'Core CS & Systems',
    icon: <Layers />,
    items: ['Data Structures', 'Algorithms', 'OOP', 'Design Patterns', 'Unix/Linux', 'Shell Scripting']
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section experience-section">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="chapter-label text-accent font-mono mb-4"
      >
        [ CHAPTER 02 // TECHNICAL_ARSENAL ]
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        className="section-title"
      >
        Technical <span className="text-gradient">Arsenal</span>
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="skill-card glass-panel"
          >
            <div className="skill-icon-wrap">
              {skill.icon}
            </div>
            <h3 className="skill-category">{skill.category}</h3>
            <ul className="skill-list">
              {skill.items.map((item, i) => (
                <li key={i} className="skill-item">
                  <CheckCircle2 size={16} className="text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
