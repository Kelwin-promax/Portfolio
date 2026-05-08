import { motion } from 'motion/react';
import { Code2, Database, Palette, Terminal, Layers, Zap, Hexagon } from 'lucide-react';

export default function TechStack() {
  const techCategories = [
    {
      title: 'Front-End',
      icon: <Code2 size={40} />,
      color: 'from-[#00b4d8] to-[#0096c7]',
      techs: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'Tailwind', 'Bootstrap']
    },
    {
      title: 'Back-End',
      icon: <Database size={40} />,
      color: 'from-[#72EDF2] to-[#00b4d8]',
      techs: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Firebase', 'Java']
    },
    {
      title: 'UI/UX Design',
      icon: <Palette size={40} />,
      color: 'from-purple-500 to-pink-500',
      techs: ['Figma', 'Design Systems', 'Responsive Design', 'User Research']
    },
    {
      title: 'Tools & DevOps',
      icon: <Terminal size={40} />,
      color: 'from-green-500 to-emerald-500',
      techs: ['Git', 'VSCode', 'Docker', 'Linux', 'Vite', 'Postman']
    }
  ];

  return (
    <div className="relative min-h-screen py-32 px-6 overflow-hidden">
      {/* Complex Animated Background */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            borderRadius: ['30% 70%', '70% 30%', '30% 70%'],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
          className="absolute w-64 h-64 bg-gradient-to-br from-[#00b4d8]/10 to-[#72EDF2]/10 blur-3xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

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
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="inline-block mb-8"
          >
            <div className="relative w-32 h-32">
              {/* Multiple rotating hexagons */}
              {[0, 60, 120].map((rotation, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: rotation + 360 }}
                  transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon
                      points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                      fill="none"
                      stroke={i === 0 ? "#00b4d8" : i === 1 ? "#72EDF2" : "#0096c7"}
                      strokeWidth="2"
                      opacity={0.6}
                    />
                  </svg>
                </motion.div>
              ))}
              <Layers className="absolute inset-0 m-auto text-[#72EDF2]" size={48} />
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
              TECH STACK
            </motion.span>
          </h2>
        </motion.div>

        {/* Tech Categories - Organic Shapes */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, type: "spring" }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Outer glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute -inset-4 bg-gradient-to-br ${category.color} rounded-full blur-2xl opacity-30`}
              />

              {/* Main container with organic shape */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={`relative overflow-hidden bg-gradient-to-br ${category.color} p-10`}
                style={{
                  borderRadius: index % 2 === 0
                    ? '40% 60% 50% 50% / 60% 50% 50% 40%'
                    : '50% 50% 60% 40% / 50% 50% 40% 60%',
                  minHeight: '350px',
                }}
              >
                {/* Animated morphing background */}
                <motion.div
                  animate={{
                    borderRadius: index % 2 === 0
                      ? ['40% 60% 50% 50% / 60% 50% 50% 40%', '60% 40% 60% 40% / 40% 60% 40% 60%', '40% 60% 50% 50% / 60% 50% 50% 40%']
                      : ['50% 50% 60% 40% / 50% 50% 40% 60%', '50% 60% 40% 50% / 50% 40% 60% 50%', '50% 50% 60% 40% / 50% 50% 40% 60%']
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-white/10"
                />

                {/* Pattern overlay */}
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="bg-white/20 backdrop-blur-sm p-4 rounded-full"
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-3xl font-black">{category.title}</h3>
                  </div>

                  {/* Tech Tags - Pill shapes */}
                  <div className="flex flex-wrap gap-3">
                    {category.techs.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: index * 0.15 + techIndex * 0.05,
                          type: "spring"
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.15,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.3 }
                        }}
                        className="relative"
                      >
                        <div
                          className="bg-white/20 backdrop-blur-sm px-5 py-2 border-2 border-white/40 font-bold text-sm relative overflow-hidden"
                          style={{
                            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
                          }}
                        >
                          <motion.div
                            animate={{
                              x: [-100, 100],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: techIndex * 0.2
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                          <span className="relative z-10">{tech}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, 15, 0],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.8,
                    }}
                    className="absolute w-3 h-3 bg-white rounded-full"
                    style={{
                      left: `${10 + i * 20}%`,
                      top: `${20 + i * 15}%`,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Featured Tech - Circular Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-[#00b4d8] to-[#72EDF2] bg-clip-text text-transparent">
              Especialidades
            </span>
          </h3>

          <div className="flex justify-center items-center flex-wrap gap-8">
            {[
              { name: 'React', level: 95, color: '#61DAFB' },
              { name: 'JavaScript', level: 90, color: '#F7DF1E' },
              { name: 'Tailwind', level: 92, color: '#38B2AC' },
              { name: 'Node.js', level: 85, color: '#68A063' },
              { name: 'MongoDB', level: 80, color: '#47A248' },
              { name: 'Figma', level: 88, color: '#F24E1E' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="relative group cursor-pointer"
              >
                {/* Hexagonal container */}
                <div className="w-40 h-40 relative">
                  {/* Outer rotating hexagon */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <polygon
                        points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                        fill="none"
                        stroke={tech.color}
                        strokeWidth="2"
                        strokeDasharray="5 5"
                        opacity="0.6"
                      />
                    </svg>
                  </motion.div>

                  {/* Inner hexagon with content */}
                  <motion.div
                    className="absolute inset-3"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] border-2 flex flex-col items-center justify-center text-center p-4"
                      style={{ borderColor: tech.color }}
                    >
                      <Zap className="mb-2" size={28} style={{ color: tech.color }} />
                      <div className="text-sm font-black text-white mb-1">{tech.name}</div>
                      <div className="text-xs font-bold" style={{ color: tech.color }}>{tech.level}%</div>
                    </div>
                  </motion.div>

                  {/* Pulsing glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full blur-xl"
                    style={{ backgroundColor: tech.color }}
                  />

                  {/* Progress circle */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke={tech.color}
                      strokeWidth="2"
                      strokeDasharray={`${tech.level * 2.83} 283`}
                      opacity="0.3"
                      className="group-hover:opacity-100 transition-opacity"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
