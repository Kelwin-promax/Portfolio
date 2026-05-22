import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Heart, Sparkles, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={32} />,
      url: 'https://github.com/Kelwin-promax',
      color: 'from-gray-700 to-gray-900',
      username: '@Kelwin-promax'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={32} />,
      url: 'https://www.linkedin.com/in/kelwin-tecnico-desenvolvimento-de-sistemas/',
      color: 'from-blue-600 to-blue-800',
      username: '@Kelwin-promax'
    },
    {
      name: 'Email',
      icon: <Mail size={32} />,
      url: 'mailto:kelwingilfernandes18@gmail.com',
      color: 'from-amber-500 to-yellow-500',
      username: 'kelwingilfernandes18@gmail.com'
    }
  ];

  return (
    <div className="relative min-h-screen py-32 px-6 overflow-hidden">
      {/* Complex animated background */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 360],
          borderRadius: ['30% 70%', '70% 30%', '30% 70%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-[#00b4d8]/20 via-[#72EDF2]/10 to-transparent blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          rotate: [360, 0],
          borderRadius: ['40% 60%', '60% 40%', '40% 60%'],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Animated Send Icon */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, -15, 15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-8 relative"
          >
            <div className="relative w-32 h-32">
              {/* Orbiting circles */}
              {[0, 90, 180, 270].map((angle, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.25
                  }}
                  className="absolute inset-0"
                >
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#72EDF2] rounded-full"
                    style={{ transform: `rotate(${angle}deg) translateY(-40px)` }}
                  />
                </motion.div>
              ))}

              <Send size={60} className="text-[#72EDF2] absolute inset-0 m-auto" />
            </div>
          </motion.div>

          <h2 className="text-6xl md:text-7xl font-black mb-6">
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-[#00b4d8] via-[#72EDF2] to-[#00b4d8] bg-clip-text text-transparent"
              style={{ backgroundSize: '200% auto' }}
            >
              VAMOS CONECTAR
            </motion.span>
          </h2>

          <p className="text-white/70 text-xl mt-6">
            Pronto para criar algo incrível juntos?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Main Email CTA - Organic Blob */}
            <div className="relative group">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-8 bg-gradient-to-br from-[#00b4d8] to-[#72EDF2] rounded-full blur-3xl"
              />

              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative overflow-hidden bg-gradient-to-br from-[#00b4d8] to-[#72EDF2] p-10 cursor-pointer"
                style={{
                  borderRadius: '40% 60% 55% 45% / 50% 55% 45% 50%',
                }}
              >
                <motion.div
                  animate={{
                    borderRadius: [
                      '40% 60% 55% 45% / 50% 55% 45% 50%',
                      '60% 40% 45% 55% / 55% 45% 55% 45%',
                      '40% 60% 55% 45% / 50% 55% 45% 50%',
                    ]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-white/10"
                />

                {/* Wave pattern */}
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 40px)',
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-6">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="bg-white/20 backdrop-blur-sm p-4 rounded-full"
                    >
                      <Mail size={40} />
                    </motion.div>
                    <div>
                      <div className="text-sm opacity-90 mb-1">Email Principal</div>
                      <div className="text-xl font-black">kelwingilfernandes18@gmail.com</div>
                    </div>
                  </div>

                  <motion.a
                    href="mailto:kelwingilfernandes18@gmail.com"
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-white/30 backdrop-blur-sm px-8 py-4 font-black border-2 border-white/50 rounded-full"
                  >
                    Enviar Email
                    <Send size={20} />
                  </motion.a>
                </div>

                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.6,
                    }}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + i * 10}%`,
                    }}
                  />
                ))}
              </motion.div>
            </div>

            {/* LinkedIn CTA - Curriculum */}
            <div className="relative group">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full blur-3xl"
              />

              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-400 p-10 cursor-pointer"
                style={{
                  borderRadius: '40% 60% 55% 45% / 50% 55% 45% 50%',
                }}
              >
                <motion.div
                  animate={{
                    borderRadius: [
                      '40% 60% 55% 45% / 50% 55% 45% 50%',
                      '60% 40% 45% 55% / 55% 45% 55% 45%',
                      '40% 60% 55% 45% / 50% 55% 45% 50%',
                    ]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-white/10"
                />

                {/* Wave pattern */}
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 40px)',
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-6">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="bg-white/20 backdrop-blur-sm p-4 rounded-full"
                    >
                      <Linkedin size={40} />
                    </motion.div>
                    <div>
                      <div className="text-sm opacity-90 mb-1">Currículo & Portfólio</div>
                      <div className="text-xl font-black">LinkedIn</div>
                    </div>
                  </div>

                  <motion.a
                    href="https://www.linkedin.com/in/kelwin-tecnico-desenvolvimento-de-sistemas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-white/30 backdrop-blur-sm px-8 py-4 font-black border-2 border-white/50 rounded-full"
                  >
                    Ver Currículo
                    <Send size={20} />
                  </motion.a>
                </div>

                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.6,
                    }}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + i * 10}%`,
                    }}
                  />
                ))}
              </motion.div>
            </div>

            {/* Availability Card - Circular */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="relative overflow-hidden bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] p-8"
              style={{
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                border: '3px solid #00b4d8',
              }}
            >
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'radial-gradient(circle, #72EDF2 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />

              <div className="relative z-10 flex items-start gap-5">
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="flex-shrink-0"
                >
                  <Sparkles className="text-green-400" size={36} />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-2xl font-black text-white mb-3">
                    Disponível para Projetos
                  </h3>
                  <p className="text-white/70 mb-4">
                    Atualmente aceitando trabalhos freelance e oportunidades de colaboração em projetos Open Source.
                  </p>

                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-4 h-4 bg-green-400 rounded-full"
                    />
                    <span className="text-green-400 font-black">Disponível agora</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location - Pill shape */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-gradient-to-r from-[#1a1f3a] to-[#0a0e27] px-8 py-5 border-2 border-[#72EDF2]/30 rounded-full"
            >
              <MapPin className="text-[#72EDF2]" size={28} />
              <span className="text-white/80 font-bold text-lg">Brasil 🇧🇷</span>
            </motion.div>
          </motion.div>

          {/* Right Side - Social Links in organic shapes */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-black text-[#72EDF2] mb-10 flex items-center gap-3">
              <Heart className="text-pink-500" />
              Redes Sociais
            </h3>

            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 3 : -3
                }}
                className="block relative group"
              >
                {/* Outer glow */}
                <motion.div
                  className={`absolute -inset-4 bg-gradient-to-br ${social.color} rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity`}
                />

                {/* Main container - blob shape */}
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${social.color} p-8`}
                  style={{
                    borderRadius: index % 2 === 0
                      ? '30% 70% 60% 40% / 50% 60% 40% 50%'
                      : '70% 30% 40% 60% / 60% 40% 60% 40%',
                  }}
                >
                  {/* Morphing background */}
                  <motion.div
                    animate={{
                      borderRadius: index % 2 === 0
                        ? ['30% 70% 60% 40% / 50% 60% 40% 50%', '70% 30% 40% 60% / 60% 40% 60% 40%', '30% 70% 60% 40% / 50% 60% 40% 50%']
                        : ['70% 30% 40% 60% / 60% 40% 60% 40%', '30% 70% 60% 40% / 50% 60% 40% 50%', '70% 30% 40% 60% / 60% 40% 60% 40%']
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                  {/* Wave overlay */}
                  <motion.div
                    animate={{
                      x: [0, 100, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 15px, white 15px, white 30px)',
                    }}
                  />

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/20 backdrop-blur-sm p-4 rounded-full"
                      >
                        {social.icon}
                      </motion.div>
                      <div>
                        <div className="font-black text-2xl mb-1">{social.name}</div>
                        <div className="text-sm opacity-90">{social.username}</div>
                      </div>
                    </div>

                    <motion.div
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Send size={28} />
                    </motion.div>
                  </div>

                  {/* Floating particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${30 + i * 20}%`,
                        top: `${40 + i * 10}%`,
                      }}
                    />
                  ))}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center pt-20"
        >
          {/* Logo in circle */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="inline-block mb-8"
          >
            <div className="relative w-24 h-24">
              {/* Orbiting ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50" cy="50" r="48"
                    fill="none"
                    stroke="url(#logoGradient)"
                    strokeWidth="3"
                    strokeDasharray="10 5"
                  />
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00b4d8" />
                      <stop offset="100%" stopColor="#72EDF2" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Center K */}
              <div className="absolute inset-2 bg-gradient-to-br from-[#00b4d8] to-[#72EDF2] rounded-full flex items-center justify-center"
                style={{
                  boxShadow: '0 0 40px rgba(0, 180, 216, 0.5)',
                }}
              >
                <span className="text-3xl font-black">K</span>
              </div>
            </div>
          </motion.div>

          <p className="text-white/50 mb-3 text-lg">
            Desenvolvido com <Heart className="inline text-pink-500" size={20} /> e muito café por <span className="text-[#72EDF2] font-bold">Kelwin Promax</span>
          </p>

          <p className="text-white/70 font-bold mb-8">
            © 2026 Kelwin Promax. Transformando ideias em realidade digital.
          </p>

          {/* Animated Wave */}
          <div className="relative h-24 overflow-hidden">
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <motion.path
                d="M0,50 C300,80 600,20 900,50 C1050,65 1200,50 1200,50 L1200,120 L0,120 Z"
                fill="url(#waveGradient)"
                animate={{
                  d: [
                    "M0,50 C300,80 600,20 900,50 C1050,65 1200,50 1200,50 L1200,120 L0,120 Z",
                    "M0,50 C300,20 600,80 900,50 C1050,35 1200,50 1200,50 L1200,120 L0,120 Z",
                    "M0,50 C300,80 600,20 900,50 C1050,65 1200,50 1200,50 L1200,120 L0,120 Z",
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#72EDF2" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#00b4d8" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating elements on wave */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -15, 0],
                  x: [0, 20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut"
                }}
                className="absolute bottom-16 w-3 h-3 bg-[#72EDF2] rounded-full"
                style={{
                  left: `${10 + i * 20}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
