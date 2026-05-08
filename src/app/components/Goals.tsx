import { motion } from 'motion/react';
import { Target, CheckCircle2, Circle, TrendingUp, Zap, Trophy } from 'lucide-react';

export default function Goals() {
  const goals2026 = [
    {
      goal: 'Dominar Next.js e SSR',
      progress: 65,
      completed: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      goal: 'Contribuir para 5 grandes projetos Open Source',
      progress: 40,
      completed: false,
      color: 'from-purple-500 to-pink-500'
    },
    {
      goal: 'Publicar um App Full Stack completo',
      progress: 75,
      completed: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      goal: 'Beber pelo menos 2L de água por dia',
      progress: 30,
      completed: false,
      note: '(difícil!)',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <div className="relative min-h-screen py-32 px-6 overflow-hidden">
      {/* Complex animated background */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360],
            borderRadius: ['40% 60%', '60% 40%', '40% 60%'],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
          className="absolute w-72 h-72 bg-gradient-to-br from-[#72EDF2]/10 to-[#00b4d8]/5 blur-3xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Animated trophy icon */}
          <motion.div
            animate={{
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-8 relative"
          >
            <div className="relative w-32 h-32">
              {/* Rotating rings around trophy */}
              {[0, 60, 120].map((rotation, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10 + i * 5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5
                  }}
                  className="absolute inset-0"
                  style={{
                    transform: `rotate(${rotation}deg)`
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#72EDF2] rounded-full" />
                </motion.div>
              ))}

              <Trophy size={64} className="text-[#72EDF2] absolute inset-0 m-auto" />
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
              METAS 2026
            </motion.span>
          </h2>

          <p className="text-white/70 text-xl mt-6">
            O futuro é construído hoje 🚀
          </p>
        </motion.div>

        {/* Goals - Organic Blob Cards */}
        <div className="space-y-10 mb-20">
          {goals2026.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Outer glow */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                className={`absolute -inset-6 bg-gradient-to-br ${item.color} rounded-full blur-2xl`}
              />

              {/* Main container - blob shape */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                className={`relative overflow-hidden bg-gradient-to-br ${item.color} p-8`}
                style={{
                  borderRadius: index % 2 === 0
                    ? '30% 70% 70% 30% / 40% 60% 40% 60%'
                    : '70% 30% 30% 70% / 60% 40% 60% 40%',
                  minHeight: '180px',
                }}
              >
                {/* Morphing background */}
                <motion.div
                  animate={{
                    borderRadius: index % 2 === 0
                      ? ['30% 70% 70% 30% / 40% 60% 40% 60%', '70% 30% 30% 70% / 60% 40% 60% 40%', '30% 70% 70% 30% / 40% 60% 40% 60%']
                      : ['70% 30% 30% 70% / 60% 40% 60% 40%', '30% 70% 70% 30% / 40% 60% 40% 60%', '70% 30% 30% 70% / 60% 40% 60% 40%']
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-white/10"
                />

                {/* Progress overlay */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: item.progress / 100 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute inset-0 bg-white/10 origin-left"
                />

                {/* Animated wave pattern */}
                <motion.div
                  animate={{
                    x: [0, 100, 0],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, white 20px, white 40px)',
                  }}
                />

                <div className="relative z-10 flex items-center gap-6">
                  {/* Icon in circle */}
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 bg-white/20 backdrop-blur-sm p-5 rounded-full"
                  >
                    {item.completed ? (
                      <CheckCircle2 size={40} />
                    ) : (
                      <Circle size={40} />
                    )}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-black text-white pr-4">
                        {item.goal} {item.note && <span className="text-white/70 text-lg">{item.note}</span>}
                      </h3>

                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex-shrink-0 text-3xl font-black text-white bg-white/20 px-6 py-2 rounded-full backdrop-blur-sm"
                      >
                        {item.progress}%
                      </motion.div>
                    </div>

                    {/* Custom Progress Indicator - Wave Shape */}
                    <div className="relative h-4 overflow-hidden rounded-full bg-white/20">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-white/40 backdrop-blur-sm relative overflow-hidden"
                      >
                        {/* Shine effect */}
                        <motion.div
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                        />

                        {/* Wave pattern */}
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                          <motion.path
                            d="M0,2 Q5,0 10,2 T20,2 T30,2 T40,2 T50,2 T60,2 T70,2 T80,2 T90,2 T100,2 L100,4 L0,4 Z"
                            fill="white"
                            opacity="0.3"
                            animate={{
                              d: [
                                "M0,2 Q5,0 10,2 T20,2 T30,2 T40,2 T50,2 T60,2 T70,2 T80,2 T90,2 T100,2 L100,4 L0,4 Z",
                                "M0,2 Q5,4 10,2 T20,2 T30,2 T40,2 T50,2 T60,2 T70,2 T80,2 T90,2 T100,2 L100,4 L0,4 Z",
                                "M0,2 Q5,0 10,2 T20,2 T30,2 T40,2 T50,2 T60,2 T70,2 T80,2 T90,2 T100,2 L100,4 L0,4 Z",
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -25, 0],
                      x: [0, 10, 0],
                      opacity: [0.3, 0.7, 0.3],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.6,
                    }}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${30 + i * 10}%`,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats - Circular Layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Outer glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -inset-8 bg-gradient-to-br from-[#00b4d8]/30 to-[#72EDF2]/30 rounded-full blur-3xl"
          />

          {/* Main stats container - organic blob */}
          <div
            className="relative overflow-hidden bg-gradient-to-br from-[#00b4d8] to-[#72EDF2] p-12"
            style={{
              borderRadius: '40% 60% 50% 50% / 50% 50% 60% 40%',
            }}
          >
            <motion.div
              animate={{
                borderRadius: [
                  '40% 60% 50% 50% / 50% 50% 60% 40%',
                  '60% 40% 60% 40% / 40% 60% 40% 60%',
                  '40% 60% 50% 50% / 50% 50% 60% 40%',
                ]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-white/10"
            />

            {/* Pattern overlay */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative z-10 grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: TrendingUp,
                  label: 'Progresso Geral',
                  value: Math.round(goals2026.reduce((acc, goal) => acc + goal.progress, 0) / goals2026.length)
                },
                {
                  icon: Target,
                  label: 'Metas Ativas',
                  value: goals2026.length
                },
                {
                  icon: CheckCircle2,
                  label: 'Concluídas',
                  value: goals2026.filter(g => g.completed).length
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  {/* Circular stat display */}
                  <div className="relative inline-block mb-4">
                    {/* Rotating ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 -m-4"
                    >
                      <svg viewBox="0 0 100 100" className="w-28 h-28">
                        <circle
                          cx="50" cy="50" r="45"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeDasharray="5 5"
                          opacity="0.4"
                        />
                      </svg>
                    </motion.div>

                    {/* Icon container */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-white/20 backdrop-blur-sm p-6 rounded-full"
                    >
                      <stat.icon size={40} />
                    </motion.div>
                  </div>

                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="text-6xl font-black mb-2"
                  >
                    {typeof stat.value === 'number' ? `${stat.value}${index === 0 ? '%' : ''}` : stat.value}
                  </motion.div>
                  <div className="text-lg opacity-90 font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Motivational Quote - In organic bubble */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center relative"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="inline-block bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] px-12 py-8 relative overflow-hidden"
            style={{
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              border: '3px solid',
              borderImage: 'linear-gradient(135deg, #00b4d8, #72EDF2) 1',
            }}
          >
            <motion.div
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0 opacity-10"
              style={{
                background: 'linear-gradient(90deg, #00b4d8, transparent, #72EDF2)',
                backgroundSize: '200% 100%',
              }}
            />

            <p className="relative z-10 text-2xl font-black text-[#72EDF2] italic mb-3">
              "O único jeito de fazer um ótimo trabalho é amar o que você faz."
            </p>
            <p className="relative z-10 text-white/50">- Steve Jobs</p>

            <Zap className="absolute top-4 right-4 text-[#00b4d8] opacity-30" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
