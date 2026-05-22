import { motion } from 'motion/react';
import { ExternalLink, Github, Rocket, Zap, Star, Code2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Clean',
      description: 'Plataforma mobile que conecta profissionais da limpeza (diaristas) a clientes que buscam serviços rápidos, confiáveis e seguros. Dois fluxos integrados: cliente e profissional, desde orçamento até pagamento.',
      tech: ['React', 'React Native', 'Node.js', 'TypeScript', 'Tailwind'],
      status: 'Em Desenvolvimento',
      featured: true,
      color: 'from-emerald-500 to-teal-500',
      live: 'https://servi-o-diaristas.vercel.app/',
      github: 'https://github.com/Kelwin-promax/Servi-oDiaristas.git'
    },
    {
      title: 'Dashboard Logístico',
      description: 'Torre de controle logístico de alta performance para monitoramento de frota, otimização de ocupação de carga e gestão de custos operacionais. Identidade visual inspirada na Scania com foco em clareza e eficiência de dados.',
      tech: ['React', 'Vite', 'TypeScript', 'Chart.js', 'Tailwind'],
      status: 'Completo',
      featured: true,
      color: 'from-blue-600 to-indigo-600',
      live: 'https://dashboard-log-stico-seven.vercel.app/',
      github: 'https://github.com/Kelwin-promax/Dashboard_Log-stico.git'
    },
    {
      title: 'EscortInRoad',
      description: 'Plataforma de otimização logística (Backhaul Matching) que conecta caminhões vazios a cargas disponíveis. Reduz custos, aumenta lucro do motorista e diminui emissão de CO2 nas rodovias brasileiras.',
      tech: ['React', 'Vite', 'TypeScript', 'Node.js', 'Tailwind'],
      status: 'Em Desenvolvimento',
      featured: false,
      color: 'from-orange-500 to-amber-500',
      live: 'https://github.com/Kelwin-promax/EscortInRoad.git',
      github: 'https://github.com/Kelwin-promax/EscortInRoad.git'
    },
    {
      title: 'Ecommerce Alta Performance',
      description: 'Plataforma e-commerce Headless desenvolvida do zero para máxima performance. Frontend em React, backend em Node.js e MySQL como banco de dados. Otimizado para velocidade e escalabilidade.',
      tech: ['React', 'Node.js', 'MySQL', 'TypeScript', 'Tailwind'],
      status: 'Em Desenvolvimento',
      featured: false,
      color: 'from-violet-500 to-purple-600',
      live: 'https://github.com/Kelwin-promax/Ecommerce_Alta_Performance.git',
      github: 'https://github.com/Kelwin-promax/Ecommerce_Alta_Performance.git'
    },
    {
      title: 'Site for Manual Workers',
      description: 'Plataforma mobile que conecta profissionais da construção civil, marcenaria, elétrica e outros ofícios a clientes que buscam serviços rápidos, confiáveis e seguros.',
      tech: ['React', 'React Native', 'Node.js', 'TypeScript', 'Tailwind'],
      status: 'Em Desenvolvimento',
      featured: false,
      color: 'from-red-500 to-rose-600',
      live: 'https://site-for-manual-workers.vercel.app/',
      github: 'https://github.com/Kelwin-promax/Site-for-manual-workers.git'
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

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
                className="relative group cursor-pointer"
              >
                {/* Outer glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`pointer-events-none absolute -inset-4 bg-gradient-to-br ${project.color} rounded-full blur-2xl`}
                />

                {/* Main container */}
                <div
                  className={`relative h-full overflow-hidden bg-gradient-to-br ${project.color} p-6 sm:p-8 lg:p-10 shadow-2xl`}
                  style={{
                    borderRadius: index % 2 === 0
                      ? '32px 72px 40px 56px'
                      : '72px 32px 56px 40px',
                    minHeight: '430px',
                  }}
                >
                  {/* Morphing background */}
                  <motion.div
                    animate={{
                      borderRadius: index % 2 === 0
                        ? ['32px 72px 40px 56px', '72px 32px 56px 40px', '32px 72px 40px 56px']
                        : ['72px 32px 56px 40px', '32px 72px 40px 56px', '72px 32px 56px 40px']
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="pointer-events-none absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                  {/* Pattern overlay */}
                  <motion.div
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'repeating-radial-gradient(circle at 0 0, transparent 0, white 10px, transparent 20px)',
                    }}
                  />

                  <div className="relative z-10 flex min-h-[360px] flex-col">
                    {/* Status Badge */}
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`max-w-[75%] px-4 py-2 text-sm font-bold leading-tight sm:max-w-none sm:px-6 sm:text-base ${
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
                    <h4 className="mb-4 max-w-full break-words text-2xl font-black leading-tight text-white sm:text-3xl">
                      {project.title}
                    </h4>

                    {/* Description */}
                    <p className="mb-6 text-base leading-relaxed text-white/90 sm:text-lg">
                      {project.description}
                    </p>

                    {/* Tech Stack - Pill shapes */}
                    <div className="mb-8 flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.1, y: -5 }}
                          className="bg-white/20 backdrop-blur-sm px-3 py-2 text-sm font-bold leading-none border-2 border-white/40 sm:px-4 sm:text-base"
                          style={{
                            borderRadius: '50% 50% 50% 50% / 70% 70% 30% 30%'
                          }}
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-auto flex flex-wrap gap-3 sm:gap-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-20 flex items-center gap-2 rounded-full bg-white/20 px-4 py-3 font-bold leading-none backdrop-blur-sm border-2 border-white/40 transition-transform hover:translate-x-1 hover:scale-105 sm:px-6"
                      >
                        <ExternalLink size={20} />
                        Ver Projeto
                      </a>

                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, x: 5 }}
                        className="relative z-20 flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 font-bold leading-none backdrop-blur-sm border-2 border-white/30 sm:px-6"
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
                      className="pointer-events-none absolute w-2 h-2 bg-white rounded-full"
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -3 : 3 }}
                className="relative group"
              >
                {/* Project card */}
                <div
                  className={`relative h-full overflow-hidden bg-gradient-to-br ${project.color} p-6 shadow-xl sm:p-8`}
                  style={{
                    borderRadius: index % 2 === 0
                      ? '28px 56px 32px 48px'
                      : '56px 28px 48px 32px',
                    minHeight: '300px',
                  }}
                >
                  <motion.div
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="pointer-events-none absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                      backgroundSize: '30px 30px',
                    }}
                  />

                  <div className="relative z-10 flex min-h-[240px] flex-col">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <h4 className="min-w-0 flex-1 break-words text-2xl font-black leading-tight text-white">{project.title}</h4>
                      <Code2 className="flex-shrink-0 text-white/60" size={28} />
                    </div>

                    <p className="mb-6 leading-relaxed text-white/80">
                      {project.description}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-bold rounded-full border border-white/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-3 sm:gap-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-20 flex items-center gap-2 rounded-full bg-white/20 px-4 py-3 font-bold leading-none backdrop-blur-sm border-2 border-white/40 transition-transform hover:translate-x-1 hover:scale-105 sm:px-6"
                      >
                        <ExternalLink size={20} />
                        Ver Projeto
                      </a>

                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, x: 5 }}
                        className="relative z-20 flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 font-bold leading-none backdrop-blur-sm border-2 border-white/30 sm:px-6"
                      >
                        <Github size={20} />
                        Código
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
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
