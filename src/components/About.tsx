import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="chapter-label text-accent font-mono mb-4"
      >
        [ CHAPTER 01 // ORIGINS ]
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        className="section-title"
      >
        <span className="text-gradient">About</span> Me
      </motion.h2>

      <div className="about-grid">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-content glass-panel"
        >
          <div className="badge-wrap">
            <MapPin size={18} className="text-accent"/>
            <span>Noida, India</span>
          </div>
          
          <h3 className="about-subtitle">The Story So Far</h3>
          <p className="about-text">
            I'm a Computer Science and Engineering undergraduate with a strong foundation in Java full-stack and backend development. My curiosity for database-driven systems and software architecture has led me to build real-world applications tailored to the visionary needs of startup clients.
          </p>
          <p className="about-text">
            From crafting secure Java Servlets backends to integrating machine learning models with accessible React interfaces, I focus on scalable, maintainable technical solutions. When I'm not coding, I'm publishing research or optimizing data structures for my next big project.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="education-timeline"
        >
          <h3 className="timeline-title flex-center gap-2">
            <GraduationCap size={24} className="text-accent" /> Education
          </h3>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <div className="timeline-date">July 2023 - June 2027</div>
                <h4>B.Tech in Computer Science and Engineering</h4>
                <p>Sharda University, Greater Noida</p>
                <div className="cgpa">CGPA: 8.3/10</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <div className="timeline-date">April 2020 - March 2021</div>
                <h4>Intermediate (CBSE)</h4>
                <p>Golden Public School, Muzaffarnagar</p>
                <div className="cgpa">Score: 85.2%</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <div className="timeline-date">April 2018 - March 2019</div>
                <h4>Matriculation (CBSE)</h4>
                <p>Golden Public School, Muzaffarnagar</p>
                <div className="cgpa">Score: 77.2%</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
