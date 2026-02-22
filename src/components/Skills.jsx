import { motion } from 'framer-motion'
import {
  SiReact, SiTypescript, SiTailwindcss, SiVite, SiRedux,
  SiNodedotjs, SiNestjs, SiFastapi, SiPython, SiMysql, SiNginx,
  SiOpenai, SiGoogle, SiDocker, SiRedis, SiLinux, SiGithubactions,
  SiAmazonwebservices, SiGooglecloud,
} from 'react-icons/si'
import { skillGroups } from '../data/skills'

const iconComponentMap = {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiRedux,
  SiNodedotjs,
  SiNestjs,
  SiFastapi,
  SiPython,
  SiMysql,
  SiNginx,
  SiOpenai,
  SiGoogle,
  SiDocker,
  SiRedis,
  SiLinux,
  SiGithubactions,
  SiAmazonwebservices,
  SiGooglecloud,
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="font-heading text-3xl font-bold text-slate-100 mb-2">My Stack</h2>
          <div className="w-10 h-0.5 bg-violet-500 mb-3" />
          <p className="text-slate-500">Tools I use in production.</p>
        </motion.div>

        {/* Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                  {group.label}
                </h3>
                <div className="h-px flex-1 bg-violet-500/20" />
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => {
                  const Icon = skill.icon ? iconComponentMap[skill.icon] : null
                  return (
                    <motion.span
                      key={skill.name}
                      variants={badgeVariants}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-violet-500/15 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20 transition-colors cursor-default"
                    >
                      {Icon && <Icon size={12} className="opacity-70" />}
                      {skill.name}
                    </motion.span>
                  )
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
