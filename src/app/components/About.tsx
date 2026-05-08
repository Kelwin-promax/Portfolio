import { motion } from 'motion/react';
import { Code2, Coffee, Rocket, Heart, Zap, Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import profilePic from '../assets/KelwinMogger.jpeg';

export default function About() {
  const skills = [
    {
      icon: <Code2 size={32} />,
      title: 'Resolução de Problemas',
      description: 'Transformo desafios complexos em soluções elegantes',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Rocket size={32} />,
      title: 'Adaptabilidade',
      description: 'Sempre evoluindo com as últimas tecnologias',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Heart size={32} />,
      title: 'Trabalho em Equipe',
      description: 'Colaboração é a chave para projetos incríveis',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <Coffee size={32} />,
      title: 'Autodidata',
      description: 'Aprendizado constante através de prática e café',
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  return (
    <div className="relative min-h-screen py-32 px-6 overflow-hidden">
      {/* Complex Organic Background Shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%']
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#00b4d8]/20 to-transparent blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
          borderRadius: ['40% 60% 60% 40% / 40% 40% 60% 60%', '60% 40% 40% 60% / 60% 60% 40% 40%', '40% 60% 60% 40% / 40% 40% 60% 60%']
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#72EDF2]/20 to-transparent blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title with Organic Shape */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-8 relative"
          >
            <svg viewBox="0 0 200 200" className="w-32 h-32">
              <motion.path
                d="M100,20 L130,60 L180,70 L140,110 L150,160 L100,130 L50,160 L60,110 L20,70 L70,60 Z"
                fill="url(#starGradient)"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <defs>
                <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00b4d8" />
                  <stop offset="100%" stopColor="#72EDF2" />
                </linearGradient>
              </defs>
            </svg>
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
              SOBRE MIM
            </motion.span>
          </h2>

          <motion.div
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-[#72EDF2] to-transparent"
            style={{ borderRadius: '50%' }}
          />
        </motion.div>

        {/* Main Content - Circular Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Profile Info in Organic Shape */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Orbiting Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-20"
            >
              {[0, 90, 180, 270].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#72EDF2] rounded-full"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-120px)`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] p-10"
              style={{
                borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%',
                border: '3px solid transparent',
                backgroundImage: 'linear-gradient(#0a0e27, #1a1f3a), linear-gradient(135deg, #00b4d8, #72EDF2)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
            >
              <motion.div
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute inset-0 opacity-10"
                style={{
                  background: 'linear-gradient(45deg, #00b4d8, transparent, #72EDF2)',
                  backgroundSize: '200% 200%',
                }}
              />

              <div className="relative z-10">
                {/* Foto de Perfil */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  viewport={{ once: true }}
                  className="flex justify-center mb-8"
                >
                  <Avatar className="w-32 h-32 border-4 border-[#00b4d8] shadow-lg">
                    <AvatarImage src={profilePic} alt="Kelwin Fernandes" />
                    <AvatarFallback>KF</AvatarFallback>
                  </Avatar>
                </motion.div>

                <motion.h3
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(114, 237, 242, 0.5)',
                      '0 0 20px rgba(114, 237, 242, 0.8)',
                      '0 0 10px rgba(114, 237, 242, 0.5)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl font-black mb-8 text-[#72EDF2]"
                >
                  Full Stack Explorer
                </motion.h3>

                <div className="space-y-6">
                  {[
                    { label: 'Atual foco', text: 'Aperfeiçoando projeto Ecommerce-Alta-performance 🛸' },
                    { label: 'Educação', text: 'Evoluindo constantemente através de prática e café ☕' },
                    { label: 'Disponível para', text: 'Projetos Freelance e colaborações Open Source' },
                    { label: 'Curiosidade', text: 'Acredito que código é como piano, só toca quem sabe (Eu 😎)' }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4 items-start"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                        className="flex-shrink-0 mt-1"
                      >
                        <svg viewBox="0 0 20 20" className="w-5 h-5">
                          <polygon
                            points="10,2 14,8 20,9 15,14 16,20 10,17 4,20 5,14 0,9 6,8"
                            fill="#00b4d8"
                          />
                        </svg>
                      </motion.div>
                      <p className="text-white/80">
                        <span className="text-[#72EDF2] font-bold">{item.label}:</span> {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Soft Skills in Organic Shapes */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                className="relative group cursor-pointer"
              >
                {/* Organic blob container */}
                <div
                  className={`bg-gradient-to-br ${skill.color} p-8 relative overflow-hidden`}
                  style={{
                    borderRadius: index % 2 === 0
                      ? '30% 70% 70% 30% / 30% 30% 70% 70%'
                      : '70% 30% 30% 70% / 70% 70% 30% 30%',
                    minHeight: '220px',
                  }}
                >
                  <motion.div
                    animate={{
                      borderRadius: index % 2 === 0
                        ? ['30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%']
                        : ['70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%']
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                  <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="mb-4 bg-white/20 p-4 rounded-full backdrop-blur-sm"
                    >
                      {skill.icon}
                    </motion.div>
                    <h4 className="font-black text-lg mb-3">{skill.title}</h4>
                    <p className="text-sm opacity-90">{skill.description}</p>
                  </div>

                  {/* Animated particles inside blob */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats - Circular Displays */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Projetos', value: '15+', icon: Star },
            { label: 'Tecnologias', value: '20+', icon: Code2 },
            { label: 'Xícaras de Café', value: '∞', icon: Coffee },
            { label: 'Linhas de Código', value: '50k+', icon: Zap }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 360 }}
              className="relative"
            >
              {/* Circular stat container */}
              <div className="relative w-40 h-40 mx-auto">
                {/* Rotating outer ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle
                      cx="50" cy="50" r="48"
                      fill="none"
                      stroke="url(#statGradient)"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                    />
                    <defs>
                      <linearGradient id="statGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00b4d8" />
                        <stop offset="100%" stopColor="#72EDF2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                {/* Inner circle with gradient */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute inset-2 rounded-full bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] border-2 border-[#00b4d8] flex flex-col items-center justify-center text-center p-4"
                  style={{
                    boxShadow: '0 0 30px rgba(0, 180, 216, 0.3)',
                  }}
                >
                  <stat.icon className="text-[#72EDF2] mb-2" size={24} />
                  <div className="text-3xl font-black bg-gradient-to-r from-[#00b4d8] to-[#72EDF2] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Botão para visualizar o CV */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://drive.google.com/file/d/14kWjMccsjRZ5v-L4atMDw7BYYZqWDloy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 font-black rounded-full bg-gradient-to-r from-[#00b4d8] to-[#72EDF2] text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all"
          >
            Ver CV
          </a>
        </div>
      </div>
    </div>
  );
}
