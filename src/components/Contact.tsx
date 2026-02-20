import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending
    alert('Message features are currently in demo mode. Please reach via email!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="chapter-label text-accent font-mono mb-4 text-center block"
      >
        [ CHAPTER 04 // INITIATE_COMMS ]
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        className="section-title"
      >
        Get In <span className="text-gradient">Touch</span>
      </motion.h2>

      <div className="contact-container">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-info glass-panel"
        >
          <h3>Contact Details</h3>
          <p className="text-secondary mb-8">
            Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
          </p>

          <div className="info-list">
            <div className="info-item">
              <div className="info-icon"><Mail size={20} /></div>
              <div>
                <h5>Email</h5>
                <a href="mailto:aryansharma35x@gmail.com">aryansharma35x@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Phone size={20} /></div>
              <div>
                <h5>Phone</h5>
                <a href="tel:+919412678204">+91 9412678204</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><MapPin size={20} /></div>
              <div>
                <h5>Location</h5>
                <span>Noida, India</span>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/codecurser" target="_blank" rel="noreferrer" className="social-icon">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/aryan-sharma" target="_blank" rel="noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-form glass-panel"
        >
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="input-group">
              <textarea 
                placeholder="Your Message..." 
                rows={5} 
                required
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message <Send size={16} />
            </button>
          </form>
        </motion.div>
      </div>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Aryan Sharma. Crafted with 💻 and ❤️.</p>
      </footer>
    </section>
  );
};

export default Contact;
