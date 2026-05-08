import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Goals from './components/Goals';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'tech', label: 'Tech' },
    { id: 'projects', label: 'Projetos' },
    { id: 'goals', label: 'Metas' },
    { id: 'contact', label: 'Contato' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white overflow-x-hidden">
      {/* Navigation - Organic Shape */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="relative">
            {/* Nav background - blob shape */}
            <motion.div
              animate={{
                borderRadius: [
                  '40% 60% 50% 50% / 50% 50% 60% 40%',
                  '60% 40% 60% 40% / 40% 60% 40% 60%',
                  '40% 60% 50% 50% / 50% 50% 60% 40%',
                ]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 backdrop-blur-xl bg-[#0a0e27]/90 border-2 border-[#00b4d8]/30"
            />

            <div className="relative z-10 flex items-center justify-between px-6 py-2">
              {/* Logo - Circular */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="cursor-pointer"
                onClick={() => scrollToSection('hero')}
              >
                <div className="relative w-12 h-12">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle
                        cx="50" cy="50" r="48"
                        fill="none"
                        stroke="url(#navLogoGradient)"
                        strokeWidth="3"
                        strokeDasharray="5 5"
                      />
                      <defs>
                        <linearGradient id="navLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00b4d8" />
                          <stop offset="100%" stopColor="#72EDF2" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>

                  <div className="absolute inset-1 bg-gradient-to-br from-[#00b4d8] to-[#72EDF2] rounded-full flex items-center justify-center">
                    <span className="text-lg font-black">K</span>
                  </div>
                </div>
              </motion.div>

              {/* Desktop Menu - Organic Pills */}
              <div className="hidden md:flex gap-3 items-center">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-6 py-3 font-bold transition-all overflow-hidden ${
                      activeSection === item.id ? 'text-white' : 'text-white/70'
                    }`}
                    style={{
                      borderRadius: index % 2 === 0
                        ? '50% 50% 50% 50% / 60% 60% 40% 40%'
                        : '50% 50% 50% 50% / 40% 40% 60% 60%'
                    }}
                  >
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-[#00b4d8] to-[#72EDF2]"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>

                    {activeSection === item.id && (
                      <motion.div
                        animate={{
                          x: [-100, 100],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Button - Circular */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden bg-gradient-to-br from-[#00b4d8] to-[#72EDF2] p-3 rounded-full"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Organic dropdown */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 mx-6"
          >
            <div
              className="backdrop-blur-xl bg-[#0a0e27]/95 border-2 border-[#00b4d8]/30 p-6 overflow-hidden"
              style={{
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
              }}
            >
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className={`w-full text-left px-6 py-3 font-bold rounded-full transition-all ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-[#00b4d8] to-[#72EDF2] text-white'
                        : 'bg-white/5 text-white/70'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="hero">
        <Hero onScroll={() => scrollToSection('about')} />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Tech Stack Section */}
      <section id="tech">
        <TechStack />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Goals Section */}
      <section id="goals">
        <Goals />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Floating Elements - Organic shapes */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          borderRadius: ['30% 70%', '70% 30%', '30% 70%']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#00b4d8]/20 to-[#72EDF2]/20 blur-2xl pointer-events-none"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, -360],
          scale: [1, 1.3, 1],
          borderRadius: ['40% 60%', '60% 40%', '40% 60%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed bottom-40 left-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-2xl pointer-events-none"
      />

      {/* Particle system */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "easeInOut"
          }}
          className="fixed w-2 h-2 bg-[#72EDF2]/40 rounded-full blur-sm pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
