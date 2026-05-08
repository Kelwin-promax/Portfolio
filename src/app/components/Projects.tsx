import { motion } from 'motion/react';
import { ExternalLink, Github, Rocket, Zap, Star, Code2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Ecommerce Alta Performance',
      description: 'Plataforma de e-commerce com performance otimizada, carrinho inteligente e sistema de pagamento integrado.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'Em Desenvolvimento',
      featured: true,
      color: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/Kelwin-promax/Ecommerce_Alta_Performance.git'
    },
    {
      title: 'UI Component Library',
      description: 'Biblioteca de componentes reutilizáveis com design system completo e documentação interativa.',
      tech: ['React', 'Tailwind', 'Storybook'],
      status: 'Completo',
      featured: true,
      color: 'from-purple-500 to-pink-500',
      github: 'https://github.com/Kelwin-promax'
    },
    {
      title: 'Dashboard Logístico',
      description: 'Sistema de analytics logístico com rastreamento em tempo real e visualização de métricas operacionais.',
      tech: ['React', 'WebSocket', 'Chart.js'],
      status: 'Completo',
      featured: false,
      color: 'from-green-500 to-emerald-500',
      github: 'https://github.com/Kelwin-promax/Dashboard_Log-stico.git'
    },
    {
      title: 'Social Media App',
      description: 'Aplicação social com feed dinâmico, sistema de notificações e chat em tempo real.',
      tech: ['React', 'Firebase', 'Node.js'],
      status: 'Completo',
      featured: false,
      color: 'from-orange-500 to-red-500',
      github: 'https://github.com/Kelwin-promax'
    }
  ];

  return (
    <div className="relative min-h-screen py-32 px-6 overflow-hidden">
      {/* Animated organic background */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          borderRadius: ['30% 70% 70% 30%', '70% 30% 30% 70%', '30% 70% 70% 30%']
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="inline-block mb-8"
          >
            <div className="relative w-32 h-32">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Rocket size={60} className="text-[#72EDF2] absolute inset-0 m-auto" />
              </motion.div>

              {/* Orbiting stars */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                  className="absolute inset-0"
                >
                  <Star
                    className="absolute top-0 left-1/2 -translate-x-1/2 text-[#00b4d8]"
                    size={16}
                    style={{ transform: `rotate(${angle}deg) translateY(-50px)` }}
                  />
                </motion.div>
              ))}
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
              PROJETOS
            </motion.span>
          </h2>

          <motion.div
            animate={{
              scaleX: [0.5, 1, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-[#72EDF2] to-transparent rounded-full"
          />
        </motion.div>

        {/* Featured Projects - Organic Blobs */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <Star className="text-yellow-400" size={32} />
            <h3 className="text-3xl font-black text-[#72EDF2]">
              Projetos em Destaque
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                className="relative group cursor-pointer"
              >
                {/* Outer glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`absolute -inset-4 bg-gradient-to-br ${project.color} rounded-full blur-2xl`}
                />

                {/* Main container - organic blob */}
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${project.color} p-10`}
                  style={{
                    borderRadius: index % 2 === 0
                      ? '30% 70% 70% 30% / 30% 30% 70% 70%'
                      : '70% 30% 30% 70% / 70% 70% 30% 30%',
                    minHeight: '400px',
                  }}
                >
                  {/* Morphing background */}
                  <motion.div
                    animate={{
                      borderRadius: index % 2 === 0
                        ? ['30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%']
                        : ['70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%']
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                  {/* Pattern overlay */}
                  <motion.div
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'repeating-radial-gradient(circle at 0 0, transparent 0, white 10px, transparent 20px)',
                    }}
                  />

                  <div className="relative z-10">
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`px-6 py-2 font-bold rounded-full ${
                          project.status === 'Em Desenvolvimento'
                            ? 'bg-yellow-400/30 border-2 border-yellow-300'
                            : 'bg-green-400/30 border-2 border-green-300'
                        }`}
                        style={{
                          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
                        }}
                      >
                        {project.status}
                      </motion.div>

                      {project.status === 'Em Desenvolvimento' && (
                        <motion.div
                          animate={{ rotate: 360, scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Zap className="text-yellow-300" size={28} />
                        </motion.div>
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="text-3xl font-black mb-4 text-white">
                      {project.title}
                    </h4>

                    {/* Description */}
                    <p className="text-white/90 mb-6 text-lg">
                      {project.description}
                    </p>

                    {/* Tech Stack - Pill shapes */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.1, y: -5 }}
                          className="bg-white/20 backdrop-blur-sm px-4 py-2 border-2 border-white/40 font-bold"
                          style={{
                            borderRadius: '50% 50% 50% 50% / 70% 70% 30% 30%'
                          }}
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-6">
                      <motion.button
                        whileHover={{ scale: 1.1, x: 5 }}
                        className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-bold border-2 border-white/40"
                      >
                        <ExternalLink size={20} />
                        Ver Projeto
                      </motion.button>

                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, x: 5 }}
                        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full font-bold border-2 border-white/30"
                      >
                        <Github size={20} />
                        Código
                      </motion.a>
                    </div>
                  </div>

                  {/* Floating particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -40, 0],
                        x: [0, 20, 0],
                        opacity: [0.2, 0.6, 0.2],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        delay: i * 0.7,
                      }}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + i * 10}%`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects - Circular Grid */}
        <div>
          <h3 className="text-3xl font-black text-[#72EDF2] mb-10">
            Outros Projetos
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.a
                key={index}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -3 : 3 }}
                className="relative group cursor-pointer"
              >
                {/* Circular container */}
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${project.color} p-8`}
                  style={{
                    borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%',
                    minHeight: '280px',
                  }}
                >
                  <motion.div
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                      backgroundSize: '30px 30px',
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-2xl font-black text-white pr-4">{project.title}</h4>
                      <Code2 className="flex-shrink-0 text-white/60" size={28} />
                    </div>

                    <p className="text-white/80 mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-bold rounded-full border border-white/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* CTA Button - Organic Shape */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.a
            href="https://github.com/Kelwin-promax"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-gradient-to-r from-[#00b4d8] to-[#72EDF2] px-10 py-5 font-black text-xl relative overflow-hidden"
            style={{
              borderRadius: '40% 60% 50% 50% / 50% 60% 40% 50%'
            }}
          >
            <motion.div
              animate={{
                x: [-100, 200],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
            <Github size={28} />
            Ver Mais no GitHub
            <ExternalLink size={24} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
