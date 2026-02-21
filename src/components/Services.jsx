import { motion } from 'framer-motion'
import { HiBolt, HiCommandLine } from 'react-icons/hi2'
import { TbBrain } from 'react-icons/tb'
import { services } from '../data/services'

const iconMap = {
  brain: TbBrain,
  lightning: HiBolt,
  terminal: HiCommandLine,
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Services() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-3xl font-bold text-slate-100 mb-2">What I Can Build For You</h2>
          <p className="text-slate-500">End-to-end AI product development, from idea to deployed.</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || HiBolt
            return (
              <motion.div
                key={service.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative rounded-xl border border-slate-800 bg-[#0a0a0a] p-6 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.08)] group"
              >
                {/* Badge */}
                {service.badge && (
                  <span className="absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/20">
                    {service.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/20 transition-colors">
                  <Icon size={22} />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-base font-bold text-slate-100">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
                </div>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className="mt-auto text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors text-left border border-orange-500/30 px-3 py-1.5 rounded-lg hover:border-orange-500/60 w-fit"
                >
                  Let&apos;s Talk →
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
