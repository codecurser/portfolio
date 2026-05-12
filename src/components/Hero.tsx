import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sparkles, OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import * as THREE from 'three';
import './Hero.css';

const AnimatedShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15 + state.pointer.y * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.25 + state.pointer.x * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#00f2fe"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge font-mono"
          >
            <span className="blink-dot"></span> [ STATUS: SYSTEM ONLINE & READY ]
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hero-title"
          >
            {"ARYAN".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={{ scale: 1.2, color: "#00f2fe", y: -10, textShadow: "0px 10px 20px rgba(0,242,254,0.5)" }}
                transition={{ type: "spring", bounce: 0.6, duration: 0.8, delay: i * 0.1 }}
                style={{ display: "inline-block", transformOrigin: "bottom", cursor: "crosshair" }}
              >
                {char}
              </motion.span>
            ))}
            <br />
            <motion.span 
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-gradient glitch-text" 
              data-text="SHARMA"
            >
              SHARMA
            </motion.span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="hero-role typing-cursor font-mono"
          >
            &gt; FULL_STACK_ENGINEER.exe
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="hero-subtitle"
          >
            Computer Science undergraduate engineering seamless, database-driven systems and real-world architectures for visionary startups. 
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.6 }}
            className="hero-actions"
          >
            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="btn-primary cyber-border"
            >
              INITIATE_PREVIEW <ArrowRight size={18} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="btn-outline font-mono hover-glitch"
            >
              <Terminal size={18} /> ./contact_me.sh
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="hero-stats font-mono cyber-box-container"
          >
            <div className="cyber-box">
              <span className="stat-number text-gradient">02+</span>
              <span className="stat-label">YRS_EXP</span>
            </div>
            <div className="cyber-box">
              <span className="stat-number text-gradient">05+</span>
              <span className="stat-label">PROJECTS</span>
            </div>
            <div className="cyber-box">
              <span className="stat-number text-gradient">02</span>
              <span className="stat-label">PUB.PAPERS</span>
            </div>
          </motion.div>
        </div>

        <div className="hero-3d">
          <Canvas className="canvas-wrapper" camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={1.2} />
            <pointLight position={[10, 10, 10]} intensity={2.5} color="#ec4899" />
            <pointLight position={[-10, -10, -10]} intensity={1.5} color="#00f2fe" />
            <Stars radius={100} depth={50} count={3500} factor={5} saturation={1} fade speed={2} />
            <Sparkles count={150} scale={12} size={2.5} color="#8b5cf6" speed={0.5} opacity={0.6} />
            <AnimatedShape />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          </Canvas>
          <div className="glass-panel 3d-card-overlay font-mono">
            <div className="pulse-dot"></div>
            <span>[3D_MESH_INTERACTIVE]</span>
          </div>
        </div>
      </div>

      <div className="scroll-cypher">
        <span className="font-mono">SCROLL_DOWN</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
