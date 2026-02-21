import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

const FORMSPREE_URL = 'https://formspree.io/f/mbdazlwn'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-3xl font-bold text-slate-100 mb-2">Let&apos;s Build Something</h2>
          <p className="text-slate-500">
            Open to freelance projects, consulting, and interesting full-time opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left — info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="flex flex-col gap-6"
          >
            <p className="text-slate-400 leading-relaxed text-sm">
              Got a project in mind or want to explore working together? Drop me a message.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              <a
                href="mailto:abhimishra1101engg@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors text-sm group"
              >
                <span className="w-9 h-9 rounded-lg bg-[#111111] border border-slate-800 flex items-center justify-center group-hover:border-orange-500/40 transition-colors">
                  <FiMail size={16} />
                </span>
                abhimishra1101engg@gmail.com
              </a>

              <a
                href="https://github.com/abhimishra01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors text-sm group"
              >
                <span className="w-9 h-9 rounded-lg bg-[#111111] border border-slate-800 flex items-center justify-center group-hover:border-orange-500/40 transition-colors">
                  <FiGithub size={16} />
                </span>
                github.com/abhimishra01
              </a>

              <a
                href="https://linkedin.com/in/abhimishra321"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors text-sm group"
              >
                <span className="w-9 h-9 rounded-lg bg-[#111111] border border-slate-800 flex items-center justify-center group-hover:border-orange-500/40 transition-colors">
                  <FiLinkedin size={16} />
                </span>
                linkedin.com/in/abhimishra321
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-slate-500">
                    Name <span className="text-orange-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="px-3 py-2.5 rounded-lg bg-[#111111] border border-slate-800 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-slate-500">
                    Email <span className="text-orange-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="px-3 py-2.5 rounded-lg bg-[#111111] border border-slate-800 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-medium text-slate-500">
                  Message <span className="text-orange-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="px-3 py-2.5 rounded-lg bg-[#111111] border border-slate-800 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                style={{
                  background: 'linear-gradient(to right, #f97316, #ea580c)',
                  boxShadow: status !== 'sending' ? '0 4px 20px rgba(249,115,22,0.3)' : undefined,
                }}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              {/* Feedback messages */}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3"
                >
                  Message sent! I&apos;ll get back to you within 24 hours.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3"
                >
                  Something went wrong. Email me directly at{' '}
                  <a
                    href="mailto:abhimishra1101engg@gmail.com"
                    className="underline hover:text-red-300"
                  >
                    abhimishra1101engg@gmail.com
                  </a>
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
