import { motion } from 'framer-motion'
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi2'
import { experience } from '../data/experience'

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#111118]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="font-heading text-3xl font-bold text-slate-100 mb-2">My Journey</h2>
          <div className="w-10 h-0.5 bg-violet-500 mb-3" />
          <p className="text-slate-500">4+ years building across startups, studios, and global products.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-violet-500/20" />

          <div className="flex flex-col gap-10">
            {experience.map((item, i) => {
              const isWork = item.type === 'work'
              const Icon = isWork ? HiBriefcase : HiAcademicCap

              return (
                <motion.div
                  key={item.id}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative pl-12"
                >
                  {/* Dot + icon */}
                  <div
                    className={`absolute left-0 top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                      isWork
                        ? 'bg-violet-500 border-violet-500/40'
                        : 'bg-indigo-500 border-indigo-500/40'
                    }`}
                    style={
                      isWork
                        ? { boxShadow: '0 0 12px rgba(139,92,246,0.6)' }
                        : { boxShadow: '0 0 10px rgba(99,102,241,0.4)' }
                    }
                  >
                    <Icon size={14} className="text-white" />
                  </div>

                  {/* Card */}
                  <div className="rounded-xl border border-slate-800 bg-[#07040f] p-6 hover:border-violet-500/20 transition-colors">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                      <div>
                        <h3 className="text-base font-bold text-slate-100">{item.title}</h3>
                        <p className={`text-sm font-semibold ${isWork ? 'text-violet-400' : 'text-indigo-400'}`}>
                          {item.company}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">{item.companyNote}</p>
                      </div>
                      <span className={`shrink-0 text-xs font-medium mt-0.5 sm:text-right whitespace-nowrap px-2.5 py-1 rounded-full ${
                        isWork
                          ? 'bg-violet-500/10 text-violet-400'
                          : 'bg-indigo-500/10 text-indigo-400'
                      }`}>
                        {item.period}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="mt-4 flex flex-col gap-2">
                      {item.highlights.map((point, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                          <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${isWork ? 'bg-violet-500' : 'bg-indigo-500'}`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
