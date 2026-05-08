import { motion } from 'motion/react';
import { ChevronDown, Code2, Sparkles, Zap } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import profilePic from '../assets/KelwinMogger.jpeg';

interface HeroProps {
  onScroll: () => void;
}

export default function Hero({ onScroll }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Complex Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          borderRadius: ['30%', '50%', '30%']
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-[#00b4d8]/40 via-[#72EDF2]/20 to-transparent blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          rotate: [360, 180, 0],
          borderRadius: ['40%', '60%', '40%']
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-transparent blur-3xl"
      />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.5, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
          className="absolute w-3 h-3 bg-[#72EDF2]/30 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Complex SVG Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="complex-pattern" width="200" height="200" patternUnits="userSpaceOnUse">
              <motion.circle
                cx="50" cy="50" r="40"
                fill="none"
                stroke="#72EDF2"
                strokeWidth="1"
                animate={{ r: [35, 45, 35] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.path
                d="M100 50 L150 87 L150 13 Z"
                fill="none"
                stroke="#00b4d8"
                strokeWidth="1"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity }}
              />
              <motion.polygon
                points="150,100 180,120 180,80 150,60 120,80 120,120"
                fill="none"
                stroke="#72EDF2"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#complex-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-12">
          {/* Profile Image Section - Complex Shape */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeOut"
            }}
            className="relative"
          >
            {/* Outer Rotating Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -m-8"
            >
              <svg viewBox="0 0 300 300" className="w-full h-full">
                <motion.path
                  d="M150,20 L180,80 L240,80 L190,120 L210,180 L150,140 L90,180 L110,120 L60,80 L120,80 Z"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="3"
                  animate={{
                    strokeDasharray: ["0, 1000", "1000, 0"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00b4d8" />
                    <stop offset="100%" stopColor="#72EDF2" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Outer Rotating Ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -m-6"
            >
              <svg viewBox="0 0 250 250" className="w-full h-full">
                <motion.circle
                  cx="125" cy="125" r="110"
                  fill="none"
                  stroke="#72EDF2"
                  strokeWidth="2"
                  strokeDasharray="10 5"
                  animate={{
                    strokeDashoffset: [0, -100],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </motion.div>

            {/* Pulsing Glow */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-br from-[#00b4d8] to-[#72EDF2] rounded-full blur-2xl opacity-50"
            />

            {/* Main Profile Container - Blob Shape */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-72 h-72 overflow-hidden"
              style={{
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                background: 'linear-gradient(135deg, #00b4d8 0%, #72EDF2 100%)',
                padding: '6px'
              }}
            >
              <motion.div
                animate={{
                  borderRadius: [
                    '30% 70% 70% 30% / 30% 30% 70% 70%',
                    '70% 30% 30% 70% / 70% 70% 30% 30%',
                    '30% 70% 70% 30% / 30% 30% 70% 70%',
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full bg-[#0a0e27] flex items-center justify-center text-[#72EDF2]"
              >
                {/* Placeholder for image - user will add their photo */}
                <div className="text-center">
                  <Avatar className="w-48 h-48 border-4 border-[#00b4d8] shadow-lg">
                    <AvatarImage src={profilePic} alt="Kelwin Fernandes" />
                    <AvatarFallback>KW</AvatarFallback>
                  </Avatar>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Icons around Profile */}
            {[
              { Icon: Sparkles, delay: 0, angle: 0 },
              { Icon: Zap, delay: 0.5, angle: 120 },
              { Icon: Code2, delay: 1, angle: 240 },
            ].map(({ Icon, delay, angle }, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut"
                }}
                className="absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-160px)`,
                }}
              >
                <div className="bg-gradient-to-br from-[#00b4d8] to-[#72EDF2] p-4 rounded-full">
                  <Icon size={24} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <span className="text-[#72EDF2] text-xl font-bold">Olá, eu sou</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-7xl md:text-8xl font-black mb-4"
            >
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="bg-gradient-to-r from-[#00b4d8] via-[#72EDF2] to-[#00b4d8] bg-clip-text text-transparent"
                style={{ backgroundSize: '200% auto' }}
              >
                KELWIN
              </motion.span>
              <br />
              <span className="text-white">PROMAX</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {['Front-End Dev', 'UI/UX Lover', 'Full Stack'].map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative overflow-hidden"
                  style={{
                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
                    background: 'linear-gradient(135deg, #00b4d8 0%, #72EDF2 100%)',
                    padding: '12px 24px'
                  }}
                >
                  <span className="relative z-10 font-bold">{role}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12"
        >
          Transformando <span className="text-[#72EDF2] font-bold">ideias</span> em
          <span className="text-[#00b4d8] font-bold"> experiências digitais extraordinárias</span>.
          Construindo o futuro com React, design impactante e muito café ☕
        </motion.p>

        {/* CTA Buttons - Non-rectangular */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex gap-8 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden"
            onClick={onScroll}
            style={{
              clipPath: 'polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)',
              background: 'linear-gradient(135deg, #00b4d8 0%, #72EDF2 100%)',
              padding: '16px 40px'
            }}
          >
            <motion.div
              animate={{
                x: [-200, 200],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
            <span className="relative z-10 font-bold text-lg">Ver Projetos</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden border-3"
            style={{
              clipPath: 'polygon(0% 20%, 20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%)',
              border: '3px solid #72EDF2',
              padding: '16px 40px',
              background: 'transparent'
            }}
          >
            <span className="relative z-10 font-bold text-lg text-[#72EDF2]">Download CV</span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={onScroll}
            className="flex flex-col items-center gap-2 text-[#72EDF2]/60 hover:text-[#72EDF2] transition-colors"
          >
            <span className="text-sm font-bold">Descubra mais</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="rounded-full border-2 border-[#72EDF2] p-2"
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
