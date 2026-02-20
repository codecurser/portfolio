import { useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useScroll, useSpring, useVelocity, useTransform } from 'framer-motion';

interface StoryLayoutProps {
  children: ReactNode;
}

const StoryLayout = ({ children }: StoryLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  const opacityVelocity = useTransform(smoothVelocity, [-1000, 0, 1000], [0.8, 1, 0.8]);
  const scaleScroll = useTransform(smoothVelocity, [-1000, 0, 1000], [0.95, 1, 0.95]);
  const skewVelocity = useTransform(smoothVelocity, [-1000, 1000], [-3, 3]);

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-500%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
  const filterVelocity = useTransform(smoothVelocity, [-1000, 0, 1000], ["blur(4px)", "blur(0px)", "blur(4px)"]);

  return (
    <div ref={containerRef} className="story-layout">
      {/* Background Parallax Elements */}
      <motion.div className="parallax-bg-text font-mono" style={{ y: y1, left: '2%', top: '20%' }}>01001000</motion.div>
      <motion.div className="parallax-bg-text font-mono" style={{ y: y2, right: '5%', top: '60%' }}>INIT_SYS()</motion.div>
      <motion.div className="parallax-bg-text font-mono" style={{ y: y3, left: '10%', top: '80%' }}>DATA_STREAM</motion.div>

      {/* Global Story Timeline */}
      <div className="story-timeline-container">
        <div className="story-timeline-line"></div>
        <motion.div 
          className="story-timeline-progress"
          style={{ scaleY }}
        />
        <div className="timeline-glow"></div>
      </div>
      
      <motion.div 
        className="story-content" 
        style={{ 
          skewY: skewVelocity, 
          scale: scaleScroll,
          opacity: opacityVelocity,
          filter: filterVelocity 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default StoryLayout;
