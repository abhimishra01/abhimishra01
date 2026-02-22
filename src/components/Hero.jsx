import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const headline = ['I Build AI That Replaces', 'Manual Work.']

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.55, ease: 'easeOut' },
  }),
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.55 + i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 hero-dots opacity-40 pointer-events-none" />

      {/* Radial mesh glow overlay */}
      <div className="absolute inset-0 hero-bg pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Availability badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={-1}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/10 text-xs text-violet-400 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-green" />
          Available for freelance &amp; full-time
        </motion.div>

        {/* Headline — line by line */}
        <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
          {headline.map((line, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className={`block ${
                i === 1
                  ? 'bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent'
                  : 'text-white'
              }`}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          AI Automation Engineer with 4+ years building intelligent products for
          global clients. Based in India. Working worldwide.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="flex items-center justify-center gap-4 flex-wrap mb-12"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(to right, #8b5cf6, #6366f1)',
              boxShadow: '0 4px 20px rgba(139,92,246,0.3)',
            }}
          >
            See My Work
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-3 rounded-lg border border-violet-500/30 bg-violet-500/5 text-violet-400 font-semibold text-sm hover:border-violet-500/60 hover:bg-violet-500/15 transition-all duration-200 hover:-translate-y-0.5"
          >
            Let&apos;s Talk
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="flex items-center justify-center gap-5"
        >
          <a
            href="https://github.com/abhimishra01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-violet-400 transition-colors text-sm"
          >
            <FiGithub size={18} />
            <span>GitHub</span>
          </a>
          <span className="w-px h-4 bg-slate-700" />
          <a
            href="https://linkedin.com/in/abhimishra321"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-violet-400 transition-colors text-sm"
          >
            <FiLinkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <span className="w-px h-4 bg-slate-700" />
          <a
            href="https://x.com/abhimishra__"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-violet-400 transition-colors text-sm"
          >
            <FiTwitter size={18} />
            <span>Twitter</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-violet-500/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
