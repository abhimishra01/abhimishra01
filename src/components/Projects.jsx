import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
}

const accentMap = {
  indigo: {
    border: 'border-indigo-500/30 hover:border-indigo-500/70',
    glow: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]',
    badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    btn: 'bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border border-indigo-500/20',
  },
  violet: {
    border: 'border-violet-500/30 hover:border-violet-500/70',
    glow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]',
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    btn: 'bg-violet-500/10 text-violet-400 hover:bg-violet-500/20 border border-violet-500/20',
  },
  muted: {
    border: 'border-slate-800/50',
    glow: '',
    badge: 'bg-slate-800/50 text-slate-500 border-slate-700/30',
    btn: 'bg-slate-800/50 text-slate-500 border border-slate-700/30',
  },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="font-heading text-3xl font-bold text-slate-100 mb-2">What I&apos;ve Shipped</h2>
          <div className="w-10 h-0.5 bg-violet-500 mb-3" />
          <p className="text-slate-500">Real tools. Live links. Actual users.</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const ac = accentMap[project.accent] || accentMap.muted
            const isWip = project.status === 'wip'

            return (
              <motion.div
                key={project.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative rounded-xl border bg-[#111118] p-6 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 ${ac.border} ${ac.glow} ${
                  isWip ? 'opacity-60' : ''
                }`}
              >
                {/* WIP badge */}
                {isWip && project.badge && (
                  <span className="absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    {project.badge}
                  </span>
                )}

                {/* Name + tagline */}
                <div>
                  <h3 className="text-lg font-bold text-slate-100 mb-1">{project.name}</h3>
                  <p className={`text-sm font-medium ${isWip ? 'text-slate-600' : 'text-slate-400'}`}>
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                {project.description && (
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {project.description}
                  </p>
                )}

                {/* Stack tags */}
                {project.stack.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2.5 py-1 rounded-full border ${ac.badge}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex items-center gap-3 mt-auto pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${ac.btn}`}
                    >
                      <FiExternalLink size={13} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-700/50 text-slate-500 hover:text-slate-300 hover:border-slate-600 transition-colors"
                    >
                      <FiGithub size={13} />
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
